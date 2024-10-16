// import Navbar from "@/components/Navbar";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Plus_Jakarta_Sans } from 'next/font/google';
// import MainBanner from "@/components/MainBanner";
import Footer from "@/components/Footer";
import Mainnav from "@/components/Mainnav";
import Script from "next/script";
import { Toaster } from "react-hot-toast";


const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ['400', '700'], // Choose the weights you need
  subsets: ['latin'],     // Choose the subset
});

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={plusJakartaSans.className}>

    <Script 
    strategy="beforeInteractive"
    src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_CAPTACHA_SITE_KEY}`}/>

        <NextIntlClientProvider messages={messages}>
            <Mainnav locale={locale}/>
            {/* <Navbar locale={locale} /> */}
            {/* <MainBanner/> */}
            {children}
            <Toaster position="top-right" reverseOrder={false}/>
            <Footer  locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
