/** 展示从当前安装版 Mirage 获取的 Finder 画面。 */
export function ProductDemo() {
  return (
    <figure className="demo-shell">
      <img
        className="demo-media"
        src="/media/mirage-in-finder.jpg"
        alt="Finder 中打开的 Mirage，每行显示六个文件夹或图片项目"
        width="920"
        height="504"
        fetchPriority="high"
      />
      <figcaption className="demo-caption">
        <span>Finder「位置」→ Mirage</span>
        <span>直接选择图片与头像</span>
      </figcaption>
    </figure>
  );
}
