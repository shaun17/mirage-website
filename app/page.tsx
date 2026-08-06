import { ProductDemo } from "./components/ProductDemo";

export const dynamic = "force-static";

const githubUrl = "https://github.com/shaun17/Mirage";
const downloadUrl = `${githubUrl}/releases/latest`;

const workflowPaths = [
  {
    label: "常规方式",
    title: "先下载，再使用",
    result: "候选文件留在下载目录",
    steps: [
      { number: "01", title: "查找", body: "素材网站" },
      { number: "02", title: "下载", body: "文件落盘" },
      { number: "03", title: "整理", body: "移动或删除" },
      { number: "04", title: "选择", body: "目标 App" },
    ],
  },
  {
    label: "Mirage",
    title: "在 Finder 里直接选",
    result: "按需生成 PNG",
    featured: true,
    steps: [
      { number: "01", title: "打开", body: "Finder「位置」" },
      { number: "02", title: "浏览", body: "图片或头像" },
      { number: "03", title: "选择", body: "文件面板" },
      { number: "04", title: "使用", body: "当前 App" },
    ],
  },
];

const useCases = [
  {
    number: "01",
    title: "按来源找图",
    body: "筛选图片来源，查看作者和许可证。",
    image: "/media/mirage-discover-full.jpg",
    alt: "Mirage 图片页面，顶部可按来源筛选",
    caption: "图片 · Pexels",
  },
  {
    number: "02",
    title: "按类型找头像",
    body: "卡通、动漫、真人、机器人、怪兽、动物。",
    image: "/media/mirage-avatars.jpg",
    alt: "Mirage 头像页面，顶部可按头像类型筛选",
    caption: "头像 · Picrew Discovery",
  },
  {
    number: "03",
    title: "GIF、Sticker 和 Emoji",
    body: "仅在 App 内浏览和收藏，不进入 Finder。",
    image: "/media/mirage-gif.jpg",
    alt: "Mirage GIF 页面，可筛选 Emoji、GIF 和 Sticker",
    caption: "GIF · Powered by GIPHY",
  },
];

/** 渲染以 File Provider 与按需图片请求为核心的 Mirage 产品首页。 */
export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="返回 Mirage 首页">
          <img src="/media/mirage-icon.png" alt="" width="38" height="38" />
          <span>Mirage</span>
        </a>

        <a className="header-action" href={githubUrl} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <img
            className="hero-mark"
            src="/media/mirage-icon.png"
            alt=""
            width="88"
            height="88"
          />
          <p className="hero-eyebrow">Mirage for macOS · Finder「位置」</p>
          <h1 id="hero-title">
            在 Finder 中，<span className="hero-title-accent">直接打开 Mirage。</span>
          </h1>
          <p className="hero-lede">
            从 Finder「位置」进入，直接选择网络图片和头像。
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={downloadUrl} target="_blank" rel="noreferrer">
              Mac Download
            </a>
          </div>
        </div>

        <div className="hero-stage" aria-label="在 Finder 中打开 Mirage">
          <ProductDemo />
        </div>
      </section>

      <section className="workflow-section" id="workflow" aria-labelledby="workflow-title">
        <div className="section-shell">
          <header className="section-intro">
            <p className="section-label">01 / 怎么用</p>
            <h2 id="workflow-title">省掉下载和整理。</h2>
          </header>

          <div className="workflow-comparison" aria-label="常规选图方式与 Mirage 对比">
            {workflowPaths.map((path) => (
              <article
                className={`workflow-path${path.featured ? " workflow-path-featured" : ""}`}
                key={path.label}
              >
                <header className="workflow-path-heading">
                  <span>{path.label}</span>
                  <h3>{path.title}</h3>
                </header>
                <ol className="workflow-path-steps" aria-label={`${path.label}的选图步骤`}>
                  {path.steps.map((step) => (
                    <li key={step.number}>
                      <span>{step.number}</span>
                      <strong>{step.title}</strong>
                      <small>{step.body}</small>
                    </li>
                  ))}
                </ol>
                <p className="workflow-path-result">{path.result}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="scenario-section" id="scenarios" aria-labelledby="scenario-title">
        <div className="section-shell">
          <header className="section-intro">
            <p className="section-label">02 / 实际界面</p>
            <h2 id="scenario-title">图片、头像和 GIF。</h2>
          </header>

          <div className="scenario-list">
            {useCases.map((useCase) => (
              <article className="scenario-row" key={useCase.number}>
                <div className="scenario-copy">
                  <span className="scenario-number">{useCase.number}</span>
                  <h3>{useCase.title}</h3>
                  <p>{useCase.body}</p>
                </div>
                <figure>
                  <img
                    src={useCase.image}
                    alt={useCase.alt}
                    width="1163"
                    height="720"
                    loading="lazy"
                  />
                  <figcaption>{useCase.caption}</figcaption>
                </figure>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="cta-title">
        <div className="final-cta-inner">
          <img src="/media/mirage-icon.png" alt="" width="104" height="104" />
          <div className="final-cta-copy">
            <p>Mirage for macOS</p>
            <h2 id="cta-title">下载文件夹，不再是图片的必经之路。</h2>
          </div>
          <a className="button button-light" href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <a className="footer-brand" href="#top" aria-label="返回 Mirage 首页">
          <img src="/media/mirage-icon.png" alt="" width="40" height="40" />
          <span>
            <strong>Mirage</strong>
            <small>在 Finder 中使用网络图片</small>
          </span>
        </a>
        <div className="footer-meta">
          <span>macOS 14+</span>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span>© 2026 Mirage</span>
        </div>
      </footer>
    </main>
  );
}
