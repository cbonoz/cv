import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://cbuonocore.com"),
  title: {
    default: "Chris Buonocore | Builder & Engineering Lead",
    template: "%s | Chris Buonocore",
  },
  description:
    "Engineering lead building automated workflows, AI systems, and real-world tools. Java, Python, Go, React/NextJS, NodeJS.",
  keywords: [
    "Chris Buonocore",
    "Software Engineer",
    "Engineering Lead",
    "Full Stack Developer",
    "Automation",
    "AI Systems",
    "Java",
    "Python",
    "Go",
    "React",
    "NextJS",
    "NodeJS",
    "TypeScript",
    "AWS",
  ],
  authors: [{ name: "Chris Buonocore", url: "https://cbuonocore.com" }],
  creator: "Chris Buonocore",
  publisher: "Chris Buonocore",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cbuonocore.com",
    siteName: "Chris Buonocore",
    title: "Chris Buonocore | Builder & Engineering Lead",
    description: "Engineering lead building automated workflows and AI systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Buonocore | Builder & Engineering Lead",
    description: "Engineering lead building automated workflows and AI systems.",
    creator: "@chrisbcore",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Chris Buonocore",
              url: "https://cbuonocore.com",
              sameAs: [
                "https://github.com/cbonoz",
                "https://www.linkedin.com/in/chrisbuonocore/",
                "https://x.com/chrisbcore",
              ],
              jobTitle: "Engineering Lead",
              knowsAbout: [
                "Software Engineering",
                "Automation",
                "AI Systems",
                "Full Stack Development",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
      <Analytics />
    </html>
  );
}
