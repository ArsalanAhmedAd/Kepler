import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Mainnav from "@/components/Mainnav";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import Loading from "./loading";




const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
  display: "swap",
  })

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
          <Mainnav locale={locale} />
          <Suspense fallback={<Loading />}> {children}</Suspense>
          <Toaster position="top-right" reverseOrder={false} />
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
