import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Criado por rafaelvasconcelos",
};

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className} font-mono antialiased bg-zinc-950 text-gray-200`}
        >
          <Header />
          <main>{children}</main>
          <ToastContainer />
        </body>
      </html>
    </ClerkProvider>
  );
}
