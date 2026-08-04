import { ProductDemo } from "./components/ProductDemo";

export const dynamic = "force-static";

const githubUrl = "https://github.com/shaun17/Mirage";

// 两条路径用于直接说明 Mirage 省掉了哪一段本地文件中转。
const traditionalPath = [
  { number: "01", title: "网页找图", detail: "反复打开预览" },
  { number: "02", title: "下载原图", detail: "候选图先落到本地" },
  { number: "03", title: "整理文件", detail: "重命名、移动或删除" },
  { number: "04", title: "重新选择", detail: "回到目标 App 上传" },
];

const miragePath = [
  { number: "01", title: "浏览与收藏", detail: "先保留预览和条目" },
  { number: "02", title: "打开 Mirage", detail: "就在系统文件面板里" },
  { number: "03", title: "选中图片", detail: "此时才请求所需原图" },
];

// 这三种状态解释原图请求何时真正发生，避免把缩略图浏览误解为本地预存。
const requestStates = [
  { action: "浏览搜索结果", localState: "轻量预览", requestState: "不请求原图" },
  { action: "加入收藏", localState: "File Provider 条目", requestState: "不请求原图" },
  { action: "在文件面板中选中", localState: "标准 PNG", requestState: "此时请求", active: true },
];

const useCases = [
  {
    number: "01",
    title: "写作与内容发布",
    body: "在博客、CMS 或笔记工具的上传面板中，从 Mirage 位置直接选择配图。候选图片无需全部进入下载文件夹。",
    image: "/media/mirage-discover-full.jpg",
    alt: "Mirage 主应用中的公开图片浏览结果",
    caption: "浏览公开图片，只把真正采用的那一张交给目标 App。",
  },
  {
    number: "02",
    title: "头像与资料更新",
    body: "需要头像时，在 Mirage 中浏览 DiceBear 风格，再回到当前文件面板完成选择，不必切换到另一套下载流程。",
    image: "/media/mirage-avatars.jpg",
    alt: "Mirage 中的 DiceBear 头像风格浏览界面",
    caption: "头像与图片使用同一条 File Provider 路径。",
  },
  {
    number: "03",
    title: "需要来源的公开素材",
    body: "作者、来源页和许可证跟随图片条目保留。决定使用之前，先看清图片从哪里来。",
    image: "/media/mirage-image-detail.jpg",
    alt: "Mirage 图片详情中展示作者、来源页和许可证",
    caption: "来源信息是选择的一部分，而不是下载后的补救。",
  },
];

const facts = [
  ["系统位置", "Finder 与采用 macOS 标准文件面板的 App"],
  ["原图请求", "在用户真正选中图片时发生"],
  ["图片来源", "Openverse 公版图片与 DiceBear 头像"],
  ["交付格式", "512 × 512、sRGB、移除源元数据的 PNG"],
  ["账户", "搜索、收藏和文件面板使用均无需登录"],
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
        <img
          className="hero-backdrop"
          src="/media/mirage-in-finder.jpg"
          alt="Finder 侧边栏中的 Mirage 位置，以及尚未下载原图的图片与头像条目"
          width="1186"
          height="764"
        />

        <p className="hero-context">
          <span className="context-dot" aria-hidden="true" />
          已挂载到 Finder
        </p>

        <div className="hero-panel">
          <p className="hero-kind">macOS File Provider 图片工具</p>
          <h1 id="hero-title">Mirage</h1>
          <p className="hero-claim">网络图片，直接在文件选择器里用。</p>
          <p className="hero-lede">
            不再先把候选图片塞进下载文件夹。Mirage 让网络素材出现在 Finder
            与系统文件面板中，选中哪一张，才请求哪一张。
          </p>
          <div className="hero-actions">
            <a className="button button-light" href={githubUrl} target="_blank" rel="noreferrer">
              查看 GitHub <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-ghost" href="#file-provider">
              看实际流程 <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      <div className="hero-proof" aria-label="Mirage 核心特点">
        <span>系统原生位置</span>
        <span>选中后请求原图</span>
        <span>目标 App 无需适配</span>
      </div>

      <section className="workflow-section" id="workflow" aria-labelledby="workflow-title">
        <div className="section-shell">
          <header className="section-intro">
            <p className="section-label">01 / 少掉本地中转</p>
            <h2 id="workflow-title">图片不必先住进下载文件夹，才能被另一个 App 使用。</h2>
            <p>
              Mirage 不是图片仓库，而是图片请求工具。它保留可浏览的网络条目，
              并在 macOS 真正需要文件时交付所选图片。
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
              <p className="path-result path-result-new">只有真正使用的图片才获取原图</p>
            </article>
          </div>
        </div>
      </section>

      <section className="provider-section" id="file-provider" aria-labelledby="provider-title">
        <div className="section-shell">
          <header className="section-intro section-intro-wide">
            <p className="section-label">02 / File Provider 是核心</p>
            <h2 id="provider-title">Mirage 出现在你原本就会打开的地方。</h2>
            <p>
              目标 App 不需要认识 Mirage。只要它使用 macOS 标准文件面板，
              Mirage 就能作为一个系统位置出现，让网络图片按本地文件的方式被选择。
            </p>
          </header>

          <div className="provider-demo" aria-label="Mirage 从主应用进入 Finder 的真实录屏">
            <ProductDemo />
          </div>

          <div className="provider-evidence">
            <article>
              <span>01</span>
              <h3>浏览时保持在线</h3>
              <p>先查看缩略图、来源与收藏状态，不必为每个候选项保存完整原图。</p>
            </article>
            <article>
              <span>02</span>
              <h3>在文件面板中选择</h3>
              <p>从“位置”进入 Mirage，继续使用熟悉的 Finder 与打开、上传流程。</p>
            </article>
            <article>
              <span>03</span>
              <h3>选中时完成交付</h3>
              <p>macOS 请求具体文件后，Mirage 才获取并处理那一张图片。</p>
            </article>
          </div>
        </div>
      </section>

      <section className="request-section" id="storage" aria-labelledby="request-title">
        <div className="request-shell">
          <div className="request-copy">
            <p className="section-label">03 / 按需，而不是预存</p>
            <h2 id="request-title">浏览一百张，不必预存一百张原图。</h2>
            <p>
              候选素材保持为远端条目。收藏不会制造一份新的原图副本；
              只有在文件面板中真正选中时，原图请求才发生。
            </p>
            <p className="request-note">
              这减少了下载文件夹中的临时图片，也降低了有限本地空间被候选素材长期占用的情况。
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
              <span>本地原图</span>
              <strong>只留下真正使用的图片</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="scenario-section" id="scenarios" aria-labelledby="scenario-title">
        <div className="section-shell">
          <header className="section-intro">
            <p className="section-label">04 / 使用场景</p>
            <h2 id="scenario-title">少做文件管理，把注意力留给正在完成的事。</h2>
            <p>
              Mirage 的价值不在于增加更多操作，而是让不同的图片需求都沿用同一条系统文件路径。
            </p>
          </header>

          <div className="scenario-list">
            {useCases.map((useCase) => (
              <article className="scenario-row" key={useCase.number}>
                <div className="scenario-copy">
                  <span>{useCase.number}</span>
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
            <p className="section-label">05 / 小而明确</p>
            <h2 id="facts-title">围绕一次图片请求，做好必要的事。</h2>
            <p>没有庞大的功能目录。Mirage 目前专注于网络图片进入 macOS 文件系统的这一段。</p>
          </header>

          <dl className="facts-list">
            {facts.map(([title, value]) => (
              <div className="fact-row" key={title}>
                <dt>{title}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="cta-title">
        <div className="final-cta-inner">
          <img src="/media/mirage-icon.png" alt="" width="112" height="112" />
          <div>
            <p>Mirage for macOS</p>
            <h2 id="cta-title">下载文件夹，不再是图片的必经之路。</h2>
            <span>项目正在开发中，源码与发布进度已公开。</span>
          </div>
          <a className="button button-light" href={githubUrl} target="_blank" rel="noreferrer">
            关注 GitHub 发布 <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <a className="footer-brand" href="#top">
          <img src="/media/mirage-icon.png" alt="" width="40" height="40" />
          <span>
            <strong>Mirage</strong>
            <small>基于 File Provider 的 macOS 图片请求工具</small>
          </span>
        </a>
        <div className="footer-meta">
          <span>macOS 14+</span>
          <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
          <span>© 2026 Mirage</span>
        </div>
      </footer>
    </main>
  );
}
