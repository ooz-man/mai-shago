import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import { hotelConfig } from "@/config/hotel.config";
import { SmoothScrollProvider } from "@/providers/smooth-scroll-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: hotelConfig.seo.title,
  description: hotelConfig.seo.description,
  openGraph: {
    title: hotelConfig.seo.title,
    description: hotelConfig.seo.description,
    images: [hotelConfig.seo.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: hotelConfig.seo.title,
    description: hotelConfig.seo.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable}`}>
      <body className="font-body antialiased">
        <SmoothScrollProvider>
          <Navbar />
          <main className="pb-16 md:pb-0">{children}</main>
          <Footer />
          <FloatingActions />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
