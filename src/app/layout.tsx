import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Shippori_Mincho_B1 } from "next/font/google";
import clsx from "clsx";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const shippori = Shippori_Mincho_B1({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-shippori-mincho-b1",
});

export const metadata: Metadata = {
  title: "Inga Wei",
  description: "All about me, Inga Wei!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className={clsx(inter.className, shippori.className, inter.variable, shippori.variable)}>
          {children}
        </body>
      </html>
    </>
  );
}
