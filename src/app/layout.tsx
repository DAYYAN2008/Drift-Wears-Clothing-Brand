import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import CartDrawer from "@/components/layout/CartDrawer";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Drift Wears — Premium Streetwear",
    template: "%s | Drift Wears",
  },
  description:
    "Elevated streetwear essentials crafted for those who move different. Shop men's new arrivals, limited drops, and exclusive collections.",
  keywords: ["streetwear", "fashion", "clothing", "men", "new arrivals", "limited edition"],
  openGraph: {
    title: "Drift Wears — Premium Streetwear",
    description: "Elevated streetwear essentials crafted for those who move different.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drift Wears — Premium Streetwear",
    description: "Elevated streetwear essentials crafted for those who move different.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden">
        <AnnouncementBar />
        <Navbar />
        <CartDrawer />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
