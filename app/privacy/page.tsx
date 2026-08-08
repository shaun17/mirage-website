import type { Metadata } from "next";

const githubUrl = "https://github.com/shaun17/Mirage";
const supportUrl = `${githubUrl}/issues`;

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mirage 隐私政策",
  description: "了解 Mirage 如何处理本地数据、网络请求与第三方图片服务。",
};

/** 说明 Mirage 在 macOS 与第三方图片服务之间的数据处理边界。 */
export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <header className="site-header">
        <a className="brand" href="/" aria-label="返回 Mirage 首页">
          <img src="/media/mirage-icon.png" alt="" width="38" height="38" />
          <span>Mirage</span>
        </a>

        <a className="header-action" href={supportUrl} target="_blank" rel="noreferrer">
          联系支持
        </a>
      </header>

      <article className="legal-shell">
        <header className="legal-hero">
          <p className="section-label">PRIVACY / 隐私</p>
          <h1>Mirage 隐私政策</h1>
          <p className="legal-summary">
            Mirage 不要求注册账户，也不使用广告、行为分析或跨应用追踪服务。应用仅为提供图片浏览、搜索、收藏与 Finder 文件访问功能而处理必要数据。
          </p>
          <p className="legal-updated">生效及最后更新日期：2026 年 8 月 8 日</p>
        </header>

        <div className="legal-content">
          <section>
            <h2>1. Mirage 处理的数据</h2>
            <p>
              你的数据源选择、收藏记录、缩略图与图片缓存，以及你主动填写的第三方 API Key，会保存在 Mac 本地或 Mirage 的 App Group 容器中，用于在主应用与 File Provider 扩展之间提供一致体验。
            </p>
            <p>
              Mirage 不会把这些本地数据上传到 Mirage 自有服务器。API Key 仅在访问你启用的对应服务时发送给该服务，不会发送给 Mirage 开发者。
            </p>
          </section>

          <section>
            <h2>2. 网络请求与第三方服务</h2>
            <p>
              当你浏览、搜索或下载图片时，Mirage 会直接访问你启用的第三方服务，包括 Openverse、The Metropolitan Museum of Art、NASA Images、Pexels、Pixabay、GIPHY、DiceBear、Gravatar、Picrew、Robohash 与 This Person Does Not Exist。
            </p>
            <p>
              请求可能包含搜索文字、内容或分页标识、你为该服务配置的 API Key，以及网络通信通常携带的 IP 地址和设备请求信息。第三方服务会依照各自的隐私政策与服务条款处理这些数据，Mirage 无法控制其数据保留方式。
            </p>
          </section>

          <section>
            <h2>3. Finder 与本地文件</h2>
            <p>
              Mirage 通过 macOS File Provider 在 Finder 和系统文件选择器中展示网络图片。只有在系统或你主动请求内容时，应用才会下载对应图片并写入 Mirage 管理的本地位置；Mirage 不会扫描或上传你 Mac 上的其他文件。
            </p>
          </section>

          <section>
            <h2>4. 更新检查</h2>
            <p>
              从 GitHub 直接下载的 Mirage 版本可能访问 GitHub Release 信息以检查更新。Mac App Store 版本通过 Apple 的更新机制获取更新，不使用 Mirage 自有更新服务器。
            </p>
          </section>

          <section>
            <h2>5. 数据共享、出售与追踪</h2>
            <p>
              Mirage 不出售个人数据，不向广告商提供数据，也不使用数据建立广告画像。除完成你发起的第三方图片请求外，Mirage 不会主动向其他主体披露你的本地数据。
            </p>
          </section>

          <section>
            <h2>6. 保留与删除</h2>
            <p>
              本地设置、收藏、凭据与缓存会保留在你的设备上，直到你在应用中删除相关内容、清理对应应用数据或卸载应用。第三方服务保留的数据受其自身政策约束。
            </p>
          </section>

          <section>
            <h2>7. 儿童隐私</h2>
            <p>
              Mirage 不以儿童为目标用户，也不会有意收集儿童的个人信息。如果你认为相关数据被不当处理，请通过下方支持渠道联系。
            </p>
          </section>

          <section>
            <h2>8. 政策变更与联系</h2>
            <p>
              本政策可能随功能或法律要求更新，最新版本会持续发布在此页面。如对隐私或数据处理有疑问，请在 GitHub 提交支持请求。
            </p>
            <a className="legal-contact" href={supportUrl} target="_blank" rel="noreferrer">
              前往 Mirage GitHub Issues
            </a>
          </section>
        </div>
      </article>

      <footer className="site-footer legal-footer">
        <a className="footer-brand" href="/" aria-label="返回 Mirage 首页">
          <img src="/media/mirage-icon.png" alt="" width="40" height="40" />
          <span>
            <strong>Mirage</strong>
            <small>在 Finder 中使用网络图片</small>
          </span>
        </a>
        <div className="footer-meta">
          <a href="/">首页</a>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span>© 2026 Mirage</span>
        </div>
      </footer>
    </main>
  );
}
