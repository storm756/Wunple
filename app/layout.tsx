import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wunple — Better Care. Happier Pets.",
  description:
    "Thoughtfully made pet-care essentials for dogs and cats. Coat Ease shampoo, Itch Relief formula, and targeted Selamide Spot On care.",
  keywords: [
    "Wunple",
    "pet care",
    "dog shampoo",
    "cat shampoo",
    "Coat Ease",
    "Itch Relief",
    "Selamide Spot On",
    "pet grooming India"
  ],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🐾</text></svg>"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
