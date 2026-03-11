import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SportX - Raw Form Collection",
  description: "Performance gear engineered for those who refuse to settle. Raw power meets refined design.",
  keywords: ["sportswear", "athletic gear", "performance", "brutalist design", "fashion"],
  authors: [{ name: "SportX Team" }],
  openGraph: {
    title: "SportX - Raw Form Collection",
    description: "Performance gear engineered for those who refuse to settle.",
    type: "website",
    url: "https://sportx.io",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SportX - Raw Form Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SportX - Raw Form Collection",
    description: "Performance gear engineered for those who refuse to settle.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          href="https://api.fontshare.com/v2/css?f[]=clash-display@700&f[]=satoshi@400,500&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
