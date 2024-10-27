import type { Metadata } from "next";
import {Roboto} from "next/font/google";
import "./globals.css";
import ResponNav from "@/components/Home/Navbar/ResponNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const font = Roboto({
 weight:['100','300','400','500','700','900'],
 subsets:['latin']
})


export const metadata: Metadata = {
  title: "Real Estate Website",
  description: "Real Estate Website ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        <ResponNav/>
        {children}
        <Footer/>
        <ScrollToTop/>
      </body>
    </html>
  );
}
