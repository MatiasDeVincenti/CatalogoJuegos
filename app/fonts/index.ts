import localFont from "next/font/local";

export const fontSans = localFont({
  src: "./GeistVF.woff2",
  variable: "--font-sans",
  weight: "100 900",
});

export const fontMono = localFont({
  src: "./GeistMonoVF.woff2",
  variable: "--font-mono",
  weight: "100 900",
});
