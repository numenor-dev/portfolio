import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "optional",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "optional",
});

export const metadata: Metadata = {
  title: "Nick Ahlers",
  description: "Portfolio showcasing experience and skills.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} relative`}
    >
      <body className="antialiased min-h-dvh text-zinc-300 font-sans bg-almost-black">
        <main>
          {children}
          <GoogleTagManager gtmId="G-K6KF9S9KKX" />
        </main>
        <SpeedInsights />
      </body>
    </html>
  );
}
