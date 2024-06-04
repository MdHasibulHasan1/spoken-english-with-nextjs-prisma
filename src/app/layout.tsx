import type { Metadata } from "next";
import { Inter, Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Toaster from "@/components/Toaster";
const inter = Inter({ subsets: ["latin"] });
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Pass an array of weight values
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        {/* <Navbar /> */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
