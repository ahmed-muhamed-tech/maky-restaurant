import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ChatClient from "@/components/ChatClient";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const CairoFont = Cairo({
  variable: "--font-Cairo",
  subsets: ["arabic", "latin"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Maky Restaurant | مطعم ماكي",
  description:
    "الموقع الرسمي لمطعم ماكي - اكتشف المنيو المميز واطلب وجبتك المفضل الآن!",

  metadataBase: new URL("https://maky-restaurant.vercel.app/"),

  openGraph: {
    title: "Maky Restaurant | مطعم ماكي",
    description:
      "الموقع الرسمي لمطعم ماكي - اكتشف المنيو المميز واطلب وجبتك المفضل الآن!",
    url: "https://maky-restaurant.vercel.app/",
    siteName: "Maky Restaurant",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/cover.webp",
        width: 1200,
        height: 630,
        alt: "Maky Restaurant Banner",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Maky Restaurant | مطعم ماكي",
    description:
      "الموقع الرسمي لمطعم ماكي - اكتشف المنيو المميز واطلب وجبتك المفضل الآن!",
    images: ["/cover.webp"], // مسار الصورة داخل مجلد public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${CairoFont.variable}  scrollbar-none h-full`}
    >
      <body className="font-sans antialiased overflow-x-hidden">
        {/* خلفيات ضوئية ناعمة */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 left-10 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />
        <Navbar />
        <ChatClient />
        {/* <SmoothScroll> */}
          <div className="py-24 lg:py-0">{children}</div>
        {/* </SmoothScroll> */}
        <Footer />
      </body>
    </html>
  );
}
