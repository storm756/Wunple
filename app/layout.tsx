import type { Metadata } from "next";
import "./globals.css";
import "./overrides.css";

export const metadata: Metadata = {
  title: "Wunple — Make connections count",
  description: "A friendly, intentional way to meet your people."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
