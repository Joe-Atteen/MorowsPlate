import type { Metadata } from "next";
import localFont from "next/font/local";
import { Bungee_Inline } from "next/font/google";
import "./globals.css";

// const generalSans = localFont({
//   src: "./fonts/GeneralSans-Variable.ttf",
//   variable: "--font-generalSans",
//   weight: "100 200 300 400 500 600 700 800 900",
// });

const bungee = Bungee_Inline({
  weight: "400",
  display: "swap",
  variable: "--font-bungee",
  subsets: ["latin"],
});

const gellixThin = localFont({
  src: "./fonts/Gellix-Thin.ttf",
  variable: "--font-gellix-thin",
});

const gellixLight = localFont({
  src: "./fonts/Gellix-Light.ttf",
  variable: "--font-gellix-light",
});

const gellixRegular = localFont({
  src: "./fonts/Gellix-Regular.ttf",
  variable: "--font-gellix-regular",
});

const gellixMedium = localFont({
  src: "./fonts/Gellix-Medium.ttf",
  variable: "--font-gellix-medium",
});

const gellixSemiBold = localFont({
  src: "./fonts/Gellix-SemiBold.ttf",
  variable: "--font-gellix-semiBold",
});

const gellixBold = localFont({
  src: "./fonts/Gellix-Bold.ttf",
  variable: "--font-gellix-bold",
});

const gellixExtraBold = localFont({
  src: "./fonts/Gellix-ExtraBold.ttf",
  variable: "--font-gellix-extraBold",
});

const gellixItalic = localFont({
  src: "./fonts/Gellix-Italic.ttf",
  variable: "--font-gellix-italic",
});

export const metadata: Metadata = {
  title: "MorowsPlate",
  description: "Ecommerce food app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bungee} ${gellixThin.variable} ${gellixLight.variable} ${gellixRegular.variable} ${gellixMedium.variable} ${gellixSemiBold.variable} ${gellixBold.variable} ${gellixExtraBold.variable} ${gellixItalic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
