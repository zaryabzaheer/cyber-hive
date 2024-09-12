import { Inter } from "next/font/google";
import Image from "next/image";
import { Images } from "@/assets/assets";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import "bootstrap/dist/css/bootstrap.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/style.css'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cyber Solidity",
  description: "We guarantee protection from 99% of external threats.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="wrapper">
          <div className="layer-bg">
            <Image src={Images.layerImage} className="img-fluid" alt="layer bg" />
          </div>
          <Header/>
          <main className="main">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
