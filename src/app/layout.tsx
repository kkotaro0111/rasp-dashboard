import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rasp Dashboard",
  description: "ファイルサーバーにしているRaspberry Piの、余っているリソースの有効活用の一つとして、繋いだモニタ現在時刻と週間天気予報を表示するだけのページ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
