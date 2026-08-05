import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
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
  assert.match(html, /<title>Mirage — 网络图片直接进入 macOS 文件选择器<\/title>/i);
  assert.match(html, /网络图片/);
  assert.match(html, /直接在文件选择器里用/);
  assert.match(html, /File Provider/);
  assert.match(html, /系统请求文件内容/);
  assert.match(html, /Mirage 无需账号/);
  assert.match(html, /只读 File Provider/);
  assert.match(html, /下载文件夹，不再是图片的必经之路/);
  assert.match(html, /https:\/\/github\.com\/shaun17\/Mirage/);
  assert.match(html, /mirage-in-finder\.jpg/);
  assert.match(html, /class="spec-strip"/);
  assert.match(html, /class="request-ledger"/);
  assert.match(html, /class="provider-steps"/);
  assert.doesNotMatch(html, /mirage-app-loop\.mp4/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|SkeletonPreview/i);
});

test("keeps one clear Hero product stage without the retired loop", async () => {
  const [pageSource, demoSource] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/ProductDemo.tsx", import.meta.url), "utf8"),
  ]);

  assert.equal((pageSource.match(/<ProductDemo\s*\/>/g) ?? []).length, 1);
  assert.equal((demoSource.match(/mirage-in-finder\.jpg/g) ?? []).length, 1);
  assert.doesNotMatch(demoSource, /<video\b|mirage-app-loop\.mp4/);
});

test("ships the required local product assets", async () => {
  const requiredAssets = [
    "../public/media/mirage-icon.png",
    "../public/media/mirage-discover-full.jpg",
    "../public/media/mirage-avatars.jpg",
    "../public/media/mirage-image-detail.jpg",
    "../public/media/mirage-in-finder.jpg",
    "../public/og.png",
  ];

  await Promise.all(requiredAssets.map((asset) => access(new URL(asset, import.meta.url))));
});
