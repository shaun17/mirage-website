import "./globals.css";

export const metadata = {
  title: "Mirage — 网络图片直接进入 macOS 文件选择器",
  description:
    "Mirage 是基于 File Provider 的 macOS 图片请求工具。网络图片无需提前下载，真正选中时才获取原图。",
  icons: {
    icon: "/media/mirage-icon.png",
    shortcut: "/media/mirage-icon.png",
    apple: "/media/mirage-icon.png",
  },
  openGraph: {
    title: "Mirage — 网络图片，直接在文件选择器里用",
    description:
      "通过 File Provider 按需请求图片，减少下载文件夹中的临时原图。",
    type: "website",
    locale: "zh_CN",
  },
};

/** 渲染站点根文档，并为所有页面统一设置中文语言环境。 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
