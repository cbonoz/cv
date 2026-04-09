import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://cbuonocore.com"),
  title: {
    default: "Chris Buonocore | Engineering Lead | Full Stack Developer",
    template: "%s | Chris Buonocore",
  },
  description:
    "Experienced engineering leader specializing in Java, Python, Go, React/NextJS, and NodeJS. Track record of scaling web applications and leading high-performing teams at HubSpot, Stavvy, Drift, and Toast.",
  keywords: [
    "Chris Buonocore",
    "Software Engineer",
    "Engineering Lead",
    "Full Stack Developer",
    "Java",
    "Python",
    "Go",
    "React",
    "NextJS",
    "NodeJS",
    "TypeScript",
    "AWS",
    "Cloud SaaS",
    "Engineering Leadership",
    "Boston Engineer",
    "Staff Engineer",
    "Technical Lead",
  ],
  authors: [{ name: "Chris Buonocore", url: "https://cbuonocore.com" }],
  creator: "Chris Buonocore",
  publisher: "Chris Buonocore",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cbuonocore.com",
    siteName: "Chris Buonocore",
    title: "Chris Buonocore | Engineering Lead | Full Stack Developer",
    description:
      "Experienced engineering leader with a track record of scaling web applications and leading high-performing teams.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chris Buonocore - Engineering Lead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Buonocore | Engineering Lead | Full Stack Developer",
    description:
      "Experienced engineering leader with a track record of scaling web applications and leading high-performing teams.",
    images: ["/og-image.png"],
    creator: "@chrisbcore",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
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
              description:
                "Experienced engineering leader specializing in Java, Python, Go, React/NextJS, and NodeJS",
              worksFor: {
                "@type": "Organization",
                name: "HubSpot",
              },
              knowsAbout: [
                "Software Engineering",
                "Full Stack Development",
                "Java",
                "Python",
                "Go",
                "React",
                "NextJS",
                "NodeJS",
                "AWS",
                "Cloud SaaS",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Boston",
                addressRegion: "MA",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
