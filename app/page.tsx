import { ProductDemo } from "./components/ProductDemo";

export const dynamic = "force-static";

const githubUrl = "https://github.com/shaun17/Mirage";

const workflow = [
  {
    number: "01",
    title: "发现素材",
    body: "搜索 Openverse 图片或生成 DiceBear 头像，先看缩略图，不制造临时文件。",
  },
  {
    number: "02",
    title: "收藏备用",
    body: "在 Mirage 里收藏，内容会同步到 Finder 与系统文件面板中的同名目录。",
  },
  {
    number: "03",
    title: "直接选择",
    body: "上传时从“位置”进入 Mirage，选中后才获取原图并交给目标 App。",
  },
  {
    number: "04",
    title: "得到标准 PNG",
    body: "校验、纠正方向并转成 512 × 512 sRGB PNG，同时移除源文件元数据。",
  },
];

const facts = [
  ["无需账号", "搜索、收藏与文件面板协作都不要求注册。"],
  ["来源可查", "作者、来源页与许可证信息都留在详情里。"],
  ["按需获取", "只在你真正选择图片时下载和转码原图。"],
  ["macOS 14+", "原生 App 与 File Provider 扩展共同工作。"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="主导航">
        <a className="brand" href="#top" aria-label="返回 Mirage 首页">
          <img
            className="brand-icon"
            src="/media/mirage-icon.png"
            alt=""
            width="42"
            height="42"
          />
          <span>Mirage</span>
        </a>

        <nav className="nav-links" aria-label="页面导航">
          <a href="#how">如何工作</a>
          <a href="#features">功能</a>
          <a href="#details">细节</a>
        </nav>

        <a
          className="header-cta"
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          查看源码 <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-intro">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> Mirage for macOS 14+
            </p>
            <h1>
              网络图片，
              <span>直接出现在</span>
              <span>上传框里。</span>
            </h1>
          </div>

          <div className="hero-support">
            <p className="hero-lede">
              Mirage 把 Openverse 图片与 DiceBear 头像带进 macOS 文件选择器。
              少一次下载，少一次整理。
            </p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                下载
              </a>
              <a className="button button-secondary" href="#how">
                看看怎么工作 <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Mirage 在 macOS 中的真实界面演示">
          <div className="product-window">
            <ProductDemo />
          </div>
          <p className="media-caption">
            发现图片 → 核对来源 → 在 Finder 中选择
            <span>v0.3</span>
          </p>
        </div>
      </section>

      <section className="manifesto" id="how">
        <p className="section-index">01</p>
        <h2>
          不再“搜索、下载、整理、返回”。
          <span>从发现到上传，中间少一个文件夹。</span>
        </h2>
        <p>
          Mirage 不替目标 App 上传文件。它做的是更基础的一步：让网络素材像本地文件一样，
          出现在你本来就会打开的文件面板里。
        </p>
      </section>

      <section className="workflow-section" aria-labelledby="workflow-title">
        <div className="section-heading-row">
          <div>
            <p className="section-index">02</p>
            <h2 id="workflow-title">一条更短的图片路径</h2>
          </div>
          <p>网络素材只在必要时变成本地文件。</p>
        </div>

        <div className="workflow-grid">
          {workflow.map((step) => (
            <article className="workflow-step" key={step.number}>
              <span className="workflow-number">{step.number}</span>
              <div className="workflow-line" aria-hidden="true">
                <span />
              </div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="features-section" id="features" aria-labelledby="features-title">
        <div className="section-heading-row section-heading-light">
          <div>
            <p className="section-index">03</p>
            <h2 id="features-title">Mirage 在主应用与 Finder 中的实际界面</h2>
          </div>
          <p>均为本机实拍窗口。</p>
        </div>

        <div className="feature-grid">
          <article className="feature-card feature-card-finder">
            <div className="feature-copy feature-copy-light">
              <span className="feature-kicker">Finder</span>
              <h3>在 Finder 里，Mirage 就是一个位置。</h3>
              <p>
                图片、头像、收藏与最近使用，直接进入系统文件层。打开上传框时，不必离开当前任务。
              </p>
            </div>
            <div className="feature-media feature-media-finder">
              <img
                src="/media/mirage-in-finder.jpg"
                alt="Finder 侧边栏中选中 Mirage，右侧显示图片与头像素材"
                width="1186"
                height="764"
                loading="lazy"
              />
            </div>
          </article>

          <article className="feature-card feature-card-discover">
            <div className="feature-copy">
              <span className="feature-kicker">发现</span>
              <h3>图片与头像，一处发现。</h3>
              <p>在全部、图片和头像之间切换；连续浏览，随手收藏。</p>
            </div>
            <div className="feature-media">
              <img
                src="/media/mirage-discover-full.jpg"
                alt="Mirage 主应用中的 Openverse 图片发现网格"
                width="1163"
                height="720"
                loading="lazy"
              />
            </div>
          </article>

          <article className="feature-card feature-card-avatars">
            <div className="feature-copy">
              <span className="feature-kicker">头像</span>
              <h3>需要头像时，不必换工具。</h3>
              <p>DiceBear 的多种风格与照片素材并列出现，许可证随结果保留。</p>
            </div>
            <div className="feature-media">
              <img
                src="/media/mirage-avatars.jpg"
                alt="Mirage 主应用中的 DiceBear 头像风格网格"
                width="1163"
                height="720"
                loading="lazy"
              />
            </div>
          </article>

          <article className="feature-card feature-card-detail" id="details">
            <div className="feature-copy feature-copy-dark">
              <span className="feature-kicker">来源</span>
              <h3>看见图片，也看见它从哪里来。</h3>
              <p>
                Mirage 在详情中展示作者、来源页与许可证。公版素材不是一张无来历的缩略图。
              </p>
              <ul className="detail-list">
                <li>Openverse：仅接纳 CC0 / PDM 条目</li>
                <li>选中后再获取原图</li>
                <li>转码时移除源 EXIF 等元数据</li>
              </ul>
            </div>
            <div className="feature-media feature-media-detail">
              <img
                src="/media/mirage-image-detail.jpg"
                alt="Mirage 图片详情侧栏，展示作者、来源页和 CC0 许可信息"
                width="1163"
                height="720"
                loading="lazy"
              />
            </div>
          </article>
        </div>
      </section>

      <section className="facts-section" aria-labelledby="facts-title">
        <div className="facts-intro">
          <p className="section-index">04</p>
          <h2 id="facts-title">选中图片时，才下载原图。</h2>
          <p>
            搜索与收藏状态保留在 Mac 上；远端素材保持只读，直到你在文件面板中真正选中它。
          </p>
        </div>

        <dl className="facts-list">
          {facts.map(([title, body]) => (
            <div className="fact-row" key={title}>
              <dt>{title}</dt>
              <dd>{body}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="final-cta">
        <div className="final-cta-mark" aria-hidden="true">
          <img src="/media/mirage-icon.png" alt="" width="180" height="180" />
        </div>
        <div className="final-cta-copy">
          <p className="section-index">Mirage 0.3</p>
          <h2>让下一次上传，少一步。</h2>
          <p>源码已公开；正式安装包尚未发布。</p>
        </div>
        <a
          className="button button-dark"
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          关注 GitHub 发布 <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer className="site-footer">
        <a className="footer-brand" href="#top">
          <img src="/media/mirage-icon.png" alt="" width="48" height="48" />
          <span>
            <strong>Mirage</strong>
            <small>网络图片，直接进入 macOS 文件选择器。</small>
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
