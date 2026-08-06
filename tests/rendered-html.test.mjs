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
  assert.match(
    html,
    /<h1 id="hero-title">[\s\S]*?在 Finder 中[\s\S]*?直接打开 Mirage。[\s\S]*?<\/h1>/i,
  );
  assert.match(html, /Finder「位置」→ Mirage/);
  assert.match(html, /省掉下载和整理/);
  assert.match(html, /在 Finder 里直接选/);
  assert.match(html, /按需生成 PNG/);
  assert.match(html, /GIF、Sticker 和 Emoji/);
  assert.match(html, /不进入 Finder/);
  assert.match(html, /下载文件夹，不再是图片的必经之路/);
  assert.match(html, />Mac Download</);
  assert.match(html, /https:\/\/github\.com\/shaun17\/Mirage\/releases\/latest/);
  assert.match(html, /https:\/\/github\.com\/shaun17\/Mirage/);
  assert.match(html, /mirage-in-finder\.jpg/);
  assert.match(html, /class="workflow-comparison"/);
  assert.doesNotMatch(html, /class="nav-links"/);
  assert.doesNotMatch(
    html,
    /class="(?:spec-strip|path-comparison|request-ledger|provider-steps|facts-grid)"/,
  );
  assert.doesNotMatch(html, /mirage-app-loop\.mp4/);
  assert.doesNotMatch(html, /aria-hidden="true">(?:↗|↓)</);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|SkeletonPreview/i);
});

test("keeps one clear Hero product stage without the retired loop", async () => {
  const [pageSource, demoSource] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/ProductDemo.tsx", import.meta.url), "utf8"),
  ]);

  assert.equal((pageSource.match(/<ProductDemo\s*\/>/g) ?? []).length, 1);
  assert.equal((demoSource.match(/mirage-in-finder\.jpg/g) ?? []).length, 1);
  const heroActions = pageSource.match(
    /<div className="hero-actions">([\s\S]*?)<\/div>/,
  )?.[1] ?? "";
  assert.equal((heroActions.match(/<a\b/g) ?? []).length, 1);
  assert.match(heroActions, />\s*Mac Download\s*</);
  assert.doesNotMatch(demoSource, /<video\b|mirage-app-loop\.mp4/);
});

test("ships the required local product assets", async () => {
  const requiredAssets = [
    "../public/media/mirage-icon.png",
    "../public/media/mirage-discover-full.jpg",
    "../public/media/mirage-avatars.jpg",
    "../public/media/mirage-gif.jpg",
    "../public/media/mirage-in-finder.jpg",
    "../public/og.png",
  ];

  await Promise.all(requiredAssets.map((asset) => access(new URL(asset, import.meta.url))));
});
