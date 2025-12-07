import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orbis Nexus",
  description: "Agence Digitale de Nouvelle Génération",
  icons: {
    icon: "images/logo.ico",
  },
};

export default function RootLayout({
  children,
  session, // optional if you fetch server-side session
}: Readonly<{
  children: React.ReactNode;
  session?: any;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased
        `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
