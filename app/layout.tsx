import type { Metadata } from "next";
import type { ReactNode } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./globals.css";


export const metadata: Metadata = {
  title: "Aliyu Mohammed | Frontend Developer",
  description:
    "Personal portfolio showcasing frontend development skills and projects.",
};


interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}