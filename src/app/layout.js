import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/pages/Header";
import Footer from "@/pages/Footer";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="md:px-16">
          <Header />
        {children}
        <Footer/>
        </div>
      </body>
    </html>
  );
}
