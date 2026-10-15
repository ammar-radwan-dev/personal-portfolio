import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ammar Radwan — Software Engineer",
  description:
    "A sleek and modern portfolio for a software engineer, featuring projects, experience, tools and design thoughts.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
