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
  title: "SimplexWork — Full-Spectrum Software Engineering",
  description:
    "We engineer digital excellence. Web, mobile, AI, e-commerce, Web3 — built with bleeding-edge technology and obsessive attention to detail.",
  keywords: [
    "software agency",
    "web development",
    "mobile app development",
    "AI development",
    "e-commerce",
    "web3",
    "blockchain",
    "React",
    "Next.js",
    "Python",
    ".NET",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
