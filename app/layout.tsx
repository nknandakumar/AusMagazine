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
  title: "Aussie Life - Australia's Viral Promotion Platform",
  description: "Australia's Viral Promotion Platform. Helping Aussie brands, creators, and small businesses get seen by 173K+ real, engaged followers every single day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerifText.variable} h-full antialiased scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background text-foreground font-satoshi" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
