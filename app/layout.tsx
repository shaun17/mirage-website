import "./globals.css";

const siteUrl = "https://mirage.wenmsg.fun";
const socialImage = `${siteUrl}/og.png`;

// 站点使用 vinext 构建，因此 metadata 保持为静态对象，不依赖 Next.js 运行时模块。
export const metadata = {
  title: "Mirage — 网络图片直接进入 macOS 文件选择器",
  description: "在 Finder 中选择网络图片和头像，在 App 内浏览 GIF。",
  icons: {
    icon: "/media/mirage-icon.png",
    shortcut: "/media/mirage-icon.png",
    apple: "/media/mirage-icon.png",
  },
  openGraph: {
    title: "Mirage — 网络图片，直接在文件选择器里用",
    description: "图片和头像按需进入 Finder；GIF 在 App 内浏览。",
    type: "website",
    locale: "zh_CN",
    url: siteUrl,
    images: [{ url: socialImage, width: 1200, height: 630, alt: "Mirage 产品官网预览" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirage — 网络图片，直接在文件选择器里用",
    description: "图片和头像进 Finder，GIF 留在 App。",
    images: [socialImage],
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
