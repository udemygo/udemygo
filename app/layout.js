import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Global/Header";
import Social from "@/components/Global/Social";
import PopUpContact from "@/components/Global/PopUpContact";
import ScrollToTop from "@/components/Global/ScrollToTop";
import Question from "@/components/Home/Question";
import Footer from "@/components/Global/Footer";
import Script from "next/script";
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
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-4Q5MSVBX3B"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-4Q5MSVBX3B');
      `,
          }}
        />

        {/* Google Ads */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17000517664"
        />
        <Script
          id="google-ads"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-17000517664');
      `,
          }}
        />

{/* Event snippet for Page view conversion page */}

<script>
  gtag('event', 'conversion', {
      'send_to': 'AW-17000517664/gBvaCKjkzrkaEKCgvao_',
      'value': 1.0,
      'currency': 'INR'
  });
</script>
  
{/* Google Tag Manager */}
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NDKXCVBK'); </script>
{/* End Google Tag Manager */}
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NDKXCVBK"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
{/*  End Google Tag Manager (noscript) */}
  
        <div className=" relative w-screen max-w-[1450px] overflow-x-hidden mx-auto lg:p-10 pt-1   ">
          <Header />
          <Social />
          <PopUpContact />
          <ScrollToTop />
          {children}
          {/* <Outlet /> */}
          {/* <Question /> */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
