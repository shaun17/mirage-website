import { ProductDemo } from "./components/ProductDemo";

export const dynamic = "force-static";

const githubUrl = "https://github.com/shaun17/Mirage";

const heroMeta = [
  ["系统要求", "macOS 14+"],
  ["系统入口", "Finder / 文件面板"],
  ["账户", "Mirage 无需账号"],
  ["内容交付", "系统请求时"],
];

const specifications = [
  ["默认来源", "Openverse 图片 · DiceBear 头像"],
  ["可选来源", "The Met · NASA · Pexels · Pixabay · GIPHY"],
  ["系统能力", "只读 File Provider"],
  ["交付格式", "512 × 512 sRGB PNG"],
];

// 两条路径直接说明 Mirage 省掉了哪一段本地文件中转。
const traditionalPath = [
  { number: "01", title: "网页找图", detail: "反复打开预览" },
  { number: "02", title: "下载原图", detail: "候选图先落到本地" },
  { number: "03", title: "整理文件", detail: "重命名、移动或删除" },
  { number: "04", title: "重新选择", detail: "回到目标 App 上传" },
];

const miragePath = [
  { number: "01", title: "浏览与收藏", detail: "先保留预览和条目" },
  { number: "02", title: "打开 Mirage", detail: "就在系统文件面板里" },
  { number: "03", title: "使用图片", detail: "系统请求内容时按需交付" },
];

// 三种状态解释原图请求何时真正发生，避免把缩略图浏览误解为本地预存。
const requestStates = [
  { action: "浏览搜索结果", localState: "预览与条目信息", requestState: "不物化交付文件" },
  { action: "加入收藏", localState: "远端条目", requestState: "不物化交付文件" },
  { action: "系统请求文件内容", localState: "标准 PNG", requestState: "此时按需获取", active: true },
];

const providerSteps = [
  {
    number: "01",
    title: "Mirage 成为系统位置",
    body: "安装并启用后，Mirage 会通过 File Provider 出现在 Finder 的“位置”中。",
  },
  {
    number: "02",
    title: "从当前 App 打开",
    body: "在采用 macOS 标准文件面板的 App 中，直接进入 Mirage，不必切回下载文件夹。",
  },
  {
    number: "03",
    title: "选中后完成交付",
    body: "macOS 或目标 App 请求具体文件内容时，Mirage 才按需获取并处理素材，目标 App 无需单独适配。",
  },
];

const useCases = [
  {
    number: "01",
    eyebrow: "公开图片",
    title: "写作与内容发布",
    body: "在 Mirage 中统一浏览已启用的内容来源，再从博客、CMS 或笔记工具的系统文件面板完成选择。",
    image: "/media/mirage-discover-full.jpg",
    alt: "Mirage 主应用中的公开图片浏览结果",
    caption: "浏览公开图片，只把真正采用的那一张交给目标 App。",
  },
  {
    number: "02",
    eyebrow: "头像目录",
    title: "头像与资料更新",
    body: "需要头像时，在 Mirage 中浏览 DiceBear 风格，再回到当前文件面板完成选择，不必切换到另一套下载流程。",
    image: "/media/mirage-avatars.jpg",
    alt: "Mirage 中的 DiceBear 头像风格浏览界面",
    caption: "头像与图片使用同一条 File Provider 路径。",
  },
  {
    number: "03",
    eyebrow: "来源信息",
    title: "需要来源的公开素材",
    body: "作者、来源页和许可证可在 Mirage 详情中核对；交付 PNG 不会嵌入来源与许可元数据。",
    image: "/media/mirage-image-detail.jpg",
    alt: "Mirage 图片详情中展示作者、来源页和许可证",
    caption: "来源信息是选择的一部分，而不是下载后的补救。",
  },
];

const facts = [
  ["系统位置", "Finder 与采用 macOS 标准文件面板的 App"],
  ["内容交付", "macOS 或目标 App 请求具体文件内容时按需发生"],
  ["默认来源", "Openverse 图片与 DiceBear 头像，可在设置中接入更多来源"],
  ["交付格式", "512 × 512、sRGB、修正方向并移除源元数据的 PNG"],
  ["账户", "Mirage 无需账号；部分可选来源需自备 API Key"],
  ["读写边界", "File Provider 为只读位置；收藏与设置保存在本机"],
  ["系统要求", "macOS 14 或更高版本"],
];

/** 渲染以 File Provider 与按需图片请求为核心的 Mirage 产品首页。 */
export default function Home() {
  return (
    <main id="top">
      <header className="site-header" aria-label="主导航">
        <a className="brand" href="#top" aria-label="返回 Mirage 首页">
          <img src="/media/mirage-icon.png" alt="" width="38" height="38" />
          <span>Mirage</span>
        </a>

        <nav className="nav-links" aria-label="页面导航">
          <a href="#workflow">工作方式</a>
          <a href="#file-provider">File Provider</a>
          <a href="#scenarios">使用场景</a>
        </nav>

        <a className="header-action" href={githubUrl} target="_blank" rel="noreferrer">
          GitHub <span aria-hidden="true">↗</span>
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
          <p className="hero-eyebrow">Mirage for macOS · File Provider</p>
          <h1 id="hero-title">
            网络图片，<span className="hero-title-accent">直接在文件选择器里用。</span>
          </h1>
          <p className="hero-lede">
            Mirage 让公开图片与头像出现在 Finder 和系统文件面板中。浏览时准备预览；当 macOS 或目标 App 请求具体文件内容时，才按需交付标准 PNG。
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={githubUrl} target="_blank" rel="noreferrer">
              查看 GitHub <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-secondary" href="#workflow">
              了解工作方式 <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <dl className="hero-meta" aria-label="Mirage 核心信息">
          {heroMeta.map(([title, value]) => (
            <div className="hero-meta-item" key={title}>
              <dt>{title}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>

        <div className="hero-stage" aria-label="Mirage 在 macOS 中的产品演示">
          <ProductDemo />
        </div>
      </section>

      <section className="spec-strip" aria-label="Mirage 产品规格">
        <dl className="spec-strip-inner">
          {specifications.map(([title, value]) => (
            <div className="spec-item" key={title}>
              <dt>{title}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="workflow-section" id="workflow" aria-labelledby="workflow-title">
        <div className="section-shell">
          <header className="section-intro">
            <p className="section-label">01 / 少掉本地中转</p>
            <h2 id="workflow-title">同一张图片，少走一段下载文件夹。</h2>
            <p>
              Mirage 不是另一个图片仓库。它保留可浏览的网络条目，并在 macOS 真正需要文件时交付所选图片。
            </p>
          </header>

          <div className="path-comparison">
            <article className="path-block path-block-old">
              <div className="path-heading">
                <span>常规方式</span>
                <strong>先下载，再使用</strong>
              </div>
              <ol className="path-list">
                {traditionalPath.map((step) => (
                  <li key={step.number}>
                    <span className="path-number">{step.number}</span>
                    <strong>{step.title}</strong>
                    <small>{step.detail}</small>
                  </li>
                ))}
              </ol>
              <p className="path-result path-result-old">候选原图与临时文件留在本地</p>
            </article>

            <article className="path-block path-block-new">
              <div className="path-heading">
                <span>Mirage</span>
                <strong>需要时，再请求</strong>
              </div>
              <ol className="path-list path-list-short">
                {miragePath.map((step) => (
                  <li key={step.number}>
                    <span className="path-number">{step.number}</span>
                    <strong>{step.title}</strong>
                    <small>{step.detail}</small>
                  </li>
                ))}
              </ol>
              <p className="path-result path-result-new">系统请求内容时才按需获取原图</p>
            </article>
          </div>
        </div>
      </section>

      <section className="request-section" id="storage" aria-labelledby="request-title">
        <div className="request-shell">
          <div className="request-copy">
            <p className="section-label">02 / 按需，而不是预存</p>
            <h2 id="request-title">浏览一百张，不必提前物化一百个交付文件。</h2>
            <p>
              浏览会加载预览与条目信息，收藏会保留远端条目；只有 macOS 请求具体文件内容时，Mirage 才准备可交付的标准 PNG。
            </p>
            <p className="request-note">
              Quick Look、打开、复制或目标 App 读取都可能触发内容请求。触发时机由 macOS 决定，而不是由网页式下载按钮决定。
            </p>
          </div>

          <div className="request-ledger" aria-label="Mirage 在不同操作阶段的原图请求状态">
            <div className="ledger-header">
              <span>用户操作</span>
              <span>本地状态</span>
              <span>原图请求</span>
            </div>
            {requestStates.map((state) => (
              <div className={`ledger-row${state.active ? " is-active" : ""}`} key={state.action}>
                <strong>{state.action}</strong>
                <span>{state.localState}</span>
                <span className="request-state">
                  <i aria-hidden="true" />
                  {state.requestState}
                </span>
              </div>
            ))}
            <div className="ledger-summary">
              <span>可交付文件</span>
              <strong>只在系统实际请求内容时物化</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="provider-section" id="file-provider" aria-labelledby="provider-title">
        <div className="section-shell">
          <header className="section-intro section-intro-wide">
            <p className="section-label">03 / File Provider 是核心</p>
            <h2 id="provider-title">Mirage 出现在你原本就会打开的地方。</h2>
            <p>
              目标 App 不需要认识 Mirage。只要它使用 macOS 标准文件面板，Mirage 就能作为一个系统位置出现。
            </p>
          </header>

          <ol className="provider-steps" aria-label="Mirage File Provider 的三步工作方式">
            {providerSteps.map((step) => (
              <li className="provider-step" key={step.number}>
                <span className="provider-step-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="scenario-section" id="scenarios" aria-labelledby="scenario-title">
        <div className="section-shell">
          <header className="section-intro">
            <p className="section-label">04 / 三种真实用途</p>
            <h2 id="scenario-title">从浏览、选择到交付，都沿用同一条系统路径。</h2>
            <p>三张真实界面分别展示公开图片、头像目录与来源信息，没有额外的演示流程。</p>
          </header>

          <div className="scenario-list">
            {useCases.map((useCase) => (
              <article className="scenario-row" key={useCase.number}>
                <div className="scenario-copy">
                  <span className="scenario-number">{useCase.number}</span>
                  <p className="scenario-eyebrow">{useCase.eyebrow}</p>
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

      <section className="facts-section" id="details" aria-labelledby="facts-title">
        <div className="section-shell facts-layout">
          <header className="facts-intro">
            <p className="section-label">05 / 产品事实</p>
            <h2 id="facts-title">范围明确，行为也明确。</h2>
            <p>Mirage 目前专注于网络图片进入 macOS 文件系统的这一段。</p>
          </header>

          <dl className="facts-grid">
            {facts.map(([title, value]) => (
              <div className="fact-card" key={title}>
                <dt>{title}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="cta-title">
        <div className="final-cta-inner">
          <img src="/media/mirage-icon.png" alt="" width="104" height="104" />
          <div className="final-cta-copy">
            <p>Mirage for macOS</p>
            <h2 id="cta-title">下载文件夹，不再是图片的必经之路。</h2>
            <span>项目持续开发中，源码与发布进度已公开。</span>
          </div>
          <a className="button button-light" href={githubUrl} target="_blank" rel="noreferrer">
            查看 GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <a className="footer-brand" href="#top" aria-label="返回 Mirage 首页">
          <img src="/media/mirage-icon.png" alt="" width="40" height="40" />
          <span>
            <strong>Mirage</strong>
            <small>基于 File Provider 的 macOS 图片请求工具</small>
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
