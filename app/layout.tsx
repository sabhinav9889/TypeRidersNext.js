import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Context from "./components/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TypeRiders",
  description: "Typeing test and game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( 
    <html lang="en">
      <Context>
        <body className={inter.className}>{children}</body>
      </Context>
    </html>
  );
}
