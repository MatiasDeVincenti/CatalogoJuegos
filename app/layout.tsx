import "./globals.css";
import { fontSans, fontMono } from "./fonts";

export const metadata = {
  title: "Catalogo",
  description: "Catalogo de juegos"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${fontSans.variable} ${fontMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
