import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Store',
    default: 'Store'
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children, navbar,
  footer
}: Readonly<{
  children: React.ReactNode;
  footer: React.ReactNode;
  navbar: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        {!!!navbar ? navbar : <Navbar/>}
        {children}
        {!!!footer ? footer : <Footer/>}
      </body>
    </html>
  );
}
