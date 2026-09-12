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
  metadataBase: new URL("https://husseinkaraki.netlify.app"),

  title: {
    default: "Hussein Karaki | Web Developer",
    template: "%s | Hussein Karaki",
  },

  description:
    "Hussein Karaki is a web developer and founder of AhlaWeb, building modern websites, e-commerce platforms, custom applications and interactive digital experiences.",

  keywords: [
    "Hussein Karaki",
    "web developer",
    "Lebanon web developer",
    "Lebanese web developer",
    "AhlaWeb",
    "AhlaWeb founder",
    "React developer",
    "Next.js developer",
    "Laravel developer",
    "e-commerce development",
    "website development Lebanon",
  ],

  authors: [
    {
      name: "Hussein Karaki",
      url: "https://husseinkaraki.netlify.app",
    },
  ],

  creator: "Hussein Karaki",
  publisher: "Hussein Karaki",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://husseinkaraki.netlify.app",
    title: "Hussein Karaki | Web Developer",
    description:
      "Web developer and founder of AhlaWeb, creating modern websites, e-commerce platforms, custom applications and interactive digital experiences.",
    siteName: "Hussein Karaki Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hussein Karaki | Web Developer",
    description:
      "Web developer and founder of AhlaWeb, creating modern websites, e-commerce platforms, custom applications and interactive digital experiences.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}