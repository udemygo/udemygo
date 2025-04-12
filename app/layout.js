import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Global/Header";
import Social from "@/components/Global/Social";
import PopUpContact from "@/components/Global/PopUpContact";
import ScrollToTop from "@/components/Global/ScrollToTop";
import Question from "@/components/Home/Question";
import Footer from "@/components/Global/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "UdemyGO - Your Ultimate Learning Companion",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className=" relative w-screen max-w-[1450px] mx-auto lg:p-10 pt-1   ">
          {/* <div className=' absolute text-3xl '>
      <LuMessagesSquare  className=''/>
      </div> */}
          <Header />
          <Social />
          <PopUpContact />
          <ScrollToTop />
          {children}
          {/* <Outlet /> */}
          <Question />
          <Footer />
        </div>
      </body>
    </html>
  );
}
