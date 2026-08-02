import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the Mirage product homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Mirage — 让网络图片直接出现在 Mac 上传框<\/title>/i);
  assert.match(html, /网络图片/);
  assert.match(html, /直接出现在上传框里/);
  assert.match(html, /https:\/\/github\.com\/shaun17\/Mirage/);
  assert.match(html, /mirage-in-finder\.jpg/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|SkeletonPreview/i);
});

test("ships the required local product assets", async () => {
  const requiredAssets = [
    "../public/media/mirage-icon.png",
    "../public/media/mirage-discover-full.jpg",
    "../public/media/mirage-avatars.jpg",
    "../public/media/mirage-image-detail.jpg",
    "../public/media/mirage-in-finder.jpg",
    "../public/media/mirage-app-loop.mp4",
  ];

  await Promise.all(requiredAssets.map((asset) => access(new URL(asset, import.meta.url))));
});
