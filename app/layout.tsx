import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eugene Kinyangi | Software Developer",
  description:
    "Portfolio of Eugene Kinyangi — software developer building web applications, business systems, and data-driven solutions.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
