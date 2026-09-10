import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://eugene-portfolio-rho.vercel.app"),
  title: "Eugene Kinyangi | Software Developer",
  description:
    "Eugene Kinyangi is a Mombasa-based software developer building full-stack web applications, business systems, e-commerce experiences and AI/data workflows.",
  keywords: [
    "Eugene Kinyangi",
    "Software Developer Kenya",
    "Mombasa Software Developer",
    "Next.js Developer",
    "React Developer",
    "Full-Stack Developer",
    "AI Data",
  ],
  authors: [{ name: "Eugene Kinyangi" }],
  openGraph: {
    title: "Eugene Kinyangi | Software Developer",
    description:
      "Full-stack software developer building practical web applications, business systems and AI/data solutions.",
    url: "https://eugene-portfolio-rho.vercel.app",
    siteName: "Eugene Kinyangi Portfolio",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eugene Kinyangi | Software Developer",
    description:
      "Full-stack software developer building practical web applications, business systems and AI/data solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
