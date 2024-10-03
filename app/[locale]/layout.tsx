import Navbar from "@/components/Navbar";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Plus_Jakarta_Sans } from 'next/font/google';
// import MainBanner from "@/components/MainBanner";
import Footer from "@/components/Footer";
import Mainnav from "@/components/Mainnav";

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
        <NextIntlClientProvider messages={messages}>
            <Mainnav locale={locale}/>
            {/* <Navbar locale={locale} /> */}
            {/* <MainBanner/> */}
            {children}
            <Footer  locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
