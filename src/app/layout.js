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
      <body className="relative gradient-box bg-gradient-to-br from-[#E1AEFD] via-[#7e05ff] to-[#030005] min-h-screen">
        <div className=" sticky top-8 ">
          <Navbar></Navbar>
        </div>
        {children}
      </body>
    </html>
  );
}
