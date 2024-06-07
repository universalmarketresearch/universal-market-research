import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer/Footer";
import GlobalState from "@/context/GlobalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Universal Market Research",
  description: "Discover comprehensive market insights and accurate data analysis with our tailored research services. Stay ahead with in-depth reports on electronics, automotive, healthcare, consumer goods, and more. Empower your business decisions with advanced analytics and personalized support.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalState>
          <Navbar />
          <Toaster />
          {children}
          <Footer />
        </GlobalState>
      </body>
    </html>
  );
}
