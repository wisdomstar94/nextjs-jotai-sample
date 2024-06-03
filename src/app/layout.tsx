import type { Metadata } from "next";
import "./globals.css";
import { RootLayoutClient } from "./layout.client";

export const metadata: Metadata = {
  title: "nextjs-jotai-sample",
  description: "this is nextjs-jotai-sample app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <RootLayoutClient>
          { children }
        </RootLayoutClient>
      </body>
    </html>
  );
}
