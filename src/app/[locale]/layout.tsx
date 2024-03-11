import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import favicon from "./favicon.ico";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `JJB's Portfolio`,
  description: "Awesome Portfolio",
  icons: [{ rel: "icon", url: favicon.src }],
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    console.log("error", error);
  }
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${inter.className} bg-[url('../../../public/night-road.jpg')] bg-no-repeat bg-cover min-h-screen h-auto bg-fixed`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
