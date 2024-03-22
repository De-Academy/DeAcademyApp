import Head from 'next/head'
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DeAcademy",
  description: "The Future of Descentralized Education",
  icons: {
    icon: [
      '/favicon.ico?v=4'
    ],
    apple: [
      '/apple-touch-icon.png?v=4'
    ],
    shortcut: [
      '/apple-touch-icon.png'     
    ]
  },
  manifest: '/site.webmanifest'
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}