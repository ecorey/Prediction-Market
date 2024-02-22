import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";

import { WalletProvider } from '@suiet/wallet-kit';
import '@suiet/wallet-kit/style.css';

const inter = Inter({ subsets: ["latin"] });
const pixelify_sans = Pixelify_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-pixelify_sans", });

export const metadata: Metadata = {
  title: "PREDICTRIX",
  description: "Generated by create next app"
};

// Wrap the children with WalletProvider in your root layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <html lang="en">
        {/* <body className={inter.className}>{children}</body> */}
        <body className={pixelify_sans.variable}>
          {children}
        </body>
      </html>
    
  );
}
