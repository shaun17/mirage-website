/** 展示从当前安装版 Mirage 获取的 Finder 实机画面。 */
export function ProductDemo() {
  return (
    <figure className="demo-shell">
      <img
        className="demo-media"
        src="/media/mirage-in-finder.jpg"
        alt="Finder 侧边栏中的 Mirage 位置，以及尚未物化交付文件的图片与头像条目"
        width="920"
        height="504"
        fetchPriority="high"
      />
      <figcaption className="demo-caption">
        <span>Finder / Mirage</span>
        <span>通过 File Provider 作为系统位置出现</span>
      </figcaption>
    </figure>
  );
}
