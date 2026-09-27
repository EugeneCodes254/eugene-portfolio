import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://eugene-portfolio-rho.vercel.app"),
  title: "Eugene Kinyangi | Software Developer & Product Builder",
  description:
    "Eugene Kinyangi is a Kenyan software developer and product builder creating full-stack web applications, business systems, mobile products and practical AI/data solutions.",
  keywords: [
    "Eugene Kinyangi",
    "Software Developer Kenya",
    "Mombasa Software Developer",
    "Kenya Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Product Builder Kenya",
    "Business Systems Developer",
    "AI Data",
  ],
  authors: [{ name: "Eugene Kinyangi" }],
  creator: "Eugene Kinyangi",
  publisher: "Eugene Kinyangi",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Eugene Kinyangi | Software Developer & Product Builder",
    description:
      "Software developer building practical web applications, business systems, mobile products and AI/data solutions.",
    url: "https://eugene-portfolio-rho.vercel.app",
    siteName: "Eugene Kinyangi Portfolio",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eugene Kinyangi | Software Developer & Product Builder",
    description:
      "Software developer building practical web applications, business systems, mobile products and AI/data solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
