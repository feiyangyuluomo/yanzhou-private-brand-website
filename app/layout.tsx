import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "颜周 | 内容、商业与AI的连接者",
  description: "内容运营、品牌增长、B2B商业运营与AI实践者的个人主页。聚焦AI内容增长、品牌数字化运营与商业效率提升。",
  keywords: ["个人品牌", "内容运营", "品牌运营", "AI实践", "B2B运营", "珠宝行业数字化"],
  authors: [{ name: "颜周" }],
  openGraph: {
    title: "颜周 | 内容、商业与AI的连接者",
    description: "内容运营、品牌增长、B2B商业运营与AI实践者",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}