import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SatsCalc.com",
  description:
    "Calculate Satoshi to BTC, Satoshi to USD, or how many Satoshis your Bitcoin is worth.",
  keywords: [
    "Satoshi",
    "Sats",
    "Bitcoin",
    "BTC",
    "Calculator",
    "Conversion",
    "USD",
    "Price",
  ],
  openGraph: {
    title: "SatsCalc.com",
    description:
      "Calculate Sats to BTC, Sats to USD, or see how many Sats your Bitcoin is worth.",
    images: "/calc.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
