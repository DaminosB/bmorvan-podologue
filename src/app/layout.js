import "./globals.css";
import { Inter } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Benjamin Morvan podologue à Quimper, spécialiste en podologie du sport",
  description:
    "Benjamin Morvan podologue à Quimper, spécialiste en podologie du sport",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  );
}
