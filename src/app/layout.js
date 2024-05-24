import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Shared/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rafin Hossain",
  description: "Created By Rafin Hossain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative gradient-box bg-gradient-to-br from-[#030005] via-[#6300CD] to-[#E1AEFD] min-h-screen">
        <div className="absolute bottom-20 left-3 ">
          <Navbar></Navbar>
        </div>
        {children}
      </body>
    </html>
  );
}
