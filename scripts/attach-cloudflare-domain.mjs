const ACCOUNT_ID = "14bc5b693b33c32721b04310dc7c72a7";
const ZONE_ID = "92178f56b61a9734c4d7f5b6b6ef2be7";
const ZONE_NAME = "wenmsg.fun";
const HOSTNAME = "mirage.wenmsg.fun";
const WORKER_NAME = "mirage-website";

/**
 * 使用 Cloudflare Custom Domain API 幂等绑定生产域名。
 * 该接口只要求 Workers Scripts Write，适配项目现有的部署令牌权限。
 */
async function attachCustomDomain() {
  const apiToken = process.env.CLOUDFLARE_API_TOKEN;
  if (!apiToken) {
    throw new Error("缺少 CLOUDFLARE_API_TOKEN，无法绑定 Cloudflare 自定义域名。");
  }

  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/workers/domains`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${apiToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        hostname: HOSTNAME,
        service: WORKER_NAME,
        zone_id: ZONE_ID,
        zone_name: ZONE_NAME,
      }),
    },
  );
  const payload = await response.json();

  if (!response.ok || !payload.success) {
    const details = JSON.stringify(payload.errors ?? []);
    throw new Error(`Cloudflare 自定义域名绑定失败：${details}`);
  }

  console.log(`自定义域名已绑定：https://${payload.result.hostname}`);
}

await attachCustomDomain();
