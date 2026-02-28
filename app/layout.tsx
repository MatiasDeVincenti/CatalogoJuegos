import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Catalogo",
  description: "Catalogo de juegos"
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}