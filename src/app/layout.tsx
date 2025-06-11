import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap", // Optional, good for performance
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BloodAfya",
  description: "Platform to connect blood donors and hospitals.",
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
