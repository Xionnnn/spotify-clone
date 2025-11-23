import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Sidebar } from "@/components/sidebar/sidebar";
import "./globals.css";
import { Navbar } from "@/components/navbar/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "-",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grid grid-cols-[auto_1fr_auto] grid-rows-[auto_1fr_auto] min-h-dvh">
          <div className="col-span-3">
            <Navbar />
          </div>
          <div>
            <Sidebar />
          </div>
          <div>
            {children}
          </div>
          <div>S</div>
          <div className="col-span-3">music player</div>
        </div>
      </body>
    </html>
  );
}
