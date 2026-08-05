import "./globals.css";
import type { Metadata } from "next";
import { headers } from "next/headers";

/** 根据当前访问域名生成绝对分享图地址，兼容本地预览与正式域名。 */
export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const forwardedHost = requestHeaders.get("x-forwarded-host")?.split(",")[0]?.trim();
  const host = forwardedHost || requestHeaders.get("host");
  const protocol =
    requestHeaders.get("x-forwarded-proto")?.split(",")[0]?.trim() ||
    (host?.startsWith("localhost") ? "http" : "https");
  const socialImage = host ? `${protocol}://${host}/og.png` : "/og.png";

  return {
    title: "Mirage — 网络图片直接进入 macOS 文件选择器",
    description:
      "Mirage 是基于 File Provider 的 macOS 图片请求工具。网络图片无需提前下载，系统请求具体文件内容时再按需获取。",
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
      images: [{ url: socialImage, width: 1200, height: 630, alt: "Mirage 产品官网预览" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Mirage — 网络图片，直接在文件选择器里用",
      description: "系统请求哪一张，再按需获取哪一张。",
      images: [socialImage],
    },
  };
}

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
