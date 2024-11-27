import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
const dm_sans = DM_Sans({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Wheat Yeild Prediction System",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative ${dm_sans.className}`}>
        <Navbar />
        <div id="page-body">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
