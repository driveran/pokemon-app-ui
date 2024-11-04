import type { Metadata } from "next";
import { Lato, Play } from "next/font/google";

import "./globals.css";

const lato = Lato({
  display: "swap",
  subsets: ["latin"],
  weight: "300",
});

const play = Play({
  weight: "700",
});

export const metadata: Metadata = {
  title: "Pokemon teams",
  description: "Created by David Rivera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} ${play.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
