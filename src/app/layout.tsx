import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Decor from "../components/decor";
import localFont from "next/font/local";
import { useUser } from "./userContext";
import { UserProvider } from "./userContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spark My Sport",
  description: "SMS",
};
const DinBold = localFont({
  src: [
    {
      path: "../../public/D-DIN-Bold.ttf",
    },
  ],
  variable: "--font-dinBold",
});
const DinAlternate = localFont({
  src: [
    {
      path: "../../public/DINAlternate-Bold.ttf",
    },
  ],
  variable: "--font-dinAlternate",
});
const DinCondensed = localFont({
  src: [
    {
      path: "../../public/D-DINCondensed.ttf",
    },
  ],
  variable: "--font-dinCondensed",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserProvider>
      <html lang="en" className="relative">
        <body
          className={`${DinAlternate.variable} ${DinCondensed.variable} ${DinBold.variable} w-full h-full`}
        >
          <Header />
          {children}

          <Decor />
        </body>
      </html>
    </UserProvider>
  );
}
