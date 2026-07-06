import type { Metadata } from "next";
import "./globals.css";
import I18Provider from "./I18Provider";
import LanguageDirection from "./LanguageDirection";
import SmoothScroll from "./Components/SmoothScroll/SmoothScroll";
export const metadata: Metadata = {
  title: "Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body>
        <I18Provider>
          <LanguageDirection />
          <SmoothScroll>{children}</SmoothScroll>
        </I18Provider>
      </body>
    </html>
  );
}
