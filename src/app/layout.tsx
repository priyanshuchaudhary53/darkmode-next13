import NavBar from "@/app/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DarkMode",
  description: "Darkm mode in Next.js 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className + " min-h-[100dvh] flex flex-col dark:bg-[#121212]"
        }
      >
        <NavBar />
        <main className=" flex-grow flex items-center">{children}</main>
      </body>
    </html>
  );
}
