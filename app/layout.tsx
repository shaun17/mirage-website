import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mirage — 让网络图片直接出现在 Mac 上传框",
  description:
    "Mirage 把 Openverse 图片与 DiceBear 头像带进 macOS 文件选择器，让发现、收藏和上传少一次往返。",
  icons: {
    icon: "/media/mirage-icon.png",
    shortcut: "/media/mirage-icon.png",
    apple: "/media/mirage-icon.png",
  },
  openGraph: {
    title: "Mirage — 网络图片，直接出现在上传框里",
    description:
      "把 Openverse 图片与 DiceBear 头像带进 macOS 文件选择器。",
    type: "website",
    locale: "zh_CN",
  },
};

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
