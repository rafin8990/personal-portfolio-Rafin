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
      <body className="">
        <div className=" ">
          <Navbar></Navbar>
        </div>
        {children}
      </body>
    </html>
  );
}
