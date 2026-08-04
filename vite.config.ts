import vinext from "vinext";
import { defineConfig } from "vite";
import hostingConfig from "./.openai/hosting.json" with { type: "json" };
import { sites } from "./build/sites-vite-plugin.ts";

const SITE_CREATOR_PLACEHOLDER_DATABASE_ID =
  "00000000-0000-4000-8000-000000000000";
const WORKER_NAME = "mirage-website";
const COMPATIBILITY_DATE = "2026-08-02";

const { d1, r2 } = hostingConfig;

// macOS Seatbelt 会阻止 FSEvents，因此 Codex 预览使用轮询实现热更新。
const isCodexSeatbeltSandbox = process.env.CODEX_SANDBOX === "seatbelt";

// 统一生产部署与本地开发的 Worker 入口及资源绑定配置。
const workerConfig = {
  name: WORKER_NAME,
  main: "./worker/index.ts",
  compatibility_date: COMPATIBILITY_DATE,
  compatibility_flags: ["nodejs_compat"],
  workers_dev: false,
  preview_urls: false,
  d1_databases: d1
    ? [
        {
          binding: d1,
          database_name: "site-creator-d1",
          database_id: SITE_CREATOR_PLACEHOLDER_DATABASE_ID,
        },
      ]
    : [],
  r2_buckets: r2
    ? [
        {
          binding: r2,
          bucket_name: "site-creator-r2",
        },
      ]
    : [],
};

export default defineConfig(async () => {
  // Wrangler 与 Miniflare 状态保存在项目内；应用环境变量仍放在已忽略的 `.env*` 文件中。
  process.env.WRANGLER_WRITE_LOGS ??= "false";
  process.env.WRANGLER_LOG_PATH ??= ".wrangler/logs";
  process.env.MINIFLARE_REGISTRY_PATH ??= ".wrangler/registry";

  // Cloudflare 插件导入时会读取日志路径，因此必须在动态导入前完成设置。
  const { cloudflare } = await import("@cloudflare/vite-plugin");

  return {
    server: isCodexSeatbeltSandbox
      ? { watch: { useFsEvents: false, usePolling: true } }
      : undefined,
    plugins: [
      vinext(),
      sites(),
      cloudflare({
        viteEnvironment: { name: "rsc", childEnvironments: ["ssr"] },
        config: workerConfig,
      }),
    ],
  };
});
