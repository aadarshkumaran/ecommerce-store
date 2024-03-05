import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ModalProvider from "@/providers/modal-provider";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Store',
    default: 'Greenja Merch'
  },
  description: "Greenja Merch",
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
        <ModalProvider/>
        {!!!navbar ? navbar : <Navbar/>}
        {children}
        {!!!footer ? footer : <Footer/>}
      </body>
    </html>
  );
}
