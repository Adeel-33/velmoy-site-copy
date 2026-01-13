import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import localFont from "next/font/local"

export const Inter=localFont({
    src:"../fonts/inter/static/inter_18pt-Regular.ttf",
    variable:"--font-inter"

})
export const Satoshi=localFont({
  src:"../fonts/satoshi/fonts/Satoshi-Regular.woff2",
  variable: "--font-satoshi",
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Velmoy Development - Webseiten die verkaufen",
  description: "Design. Development. Growth. – Strategisch gestaltet, technisch perfekt umgesetzt und auf Wachstum optimiert.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
