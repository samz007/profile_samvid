import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://samvid.dev"),
  title: {
    default: "Samvid Zare | Enterprise AI Systems",
    template: "%s | Samvid Zare",
  },
  description:
    "Samvid Zare builds production AI systems, platform foundations, and enterprise workflows across support, pricing, and modernization domains.",
  openGraph: {
    title: "Samvid Zare | Enterprise AI Systems",
    description:
      "Production GenAI, platform engineering, support automation, and proof of judgment.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
