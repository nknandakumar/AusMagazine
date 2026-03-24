import type { Metadata } from "next";
import { DM_Serif_Text } from "next/font/google";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import "./globals.css";

const dmSerifText = DM_Serif_Text({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  variable: "--font-dm-serif-text",
});

export const metadata: Metadata = {
  title: "AUS Magazine - Australia's Viral Promotion Platform",
  description: "Helping Aussie brands, creators and local businesses get seen by thousands of engaged followers every single day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerifText.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-background text-foreground font-satoshi">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
