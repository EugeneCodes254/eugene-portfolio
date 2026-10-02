import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://eugenekinyangi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Eugene Kinyangi | Software Developer & Product Builder",
    template: "%s | Eugene Kinyangi",
  },
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
    "Cybersecurity Kenya",
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
    url: siteUrl,
    siteName: "Eugene Kinyangi Portfolio",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Eugene Kinyangi — Software Developer & Product Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eugene Kinyangi | Software Developer & Product Builder",
    description:
      "Software developer building practical web applications, business systems, mobile products and AI/data solutions.",
    images: ["/opengraph-image"],
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

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Eugene Kinyangi",
  url: siteUrl,
  jobTitle: "Software Developer",
  description:
    "Kenyan software developer and product builder focused on full-stack development, business systems, cybersecurity and AI/data workflows.",
  email: "mailto:kinyangie@gmail.com",
  sameAs: ["https://github.com/EugeneCodes254"],
  knowsAbout: [
    "Software development",
    "Full-stack development",
    "Next.js",
    "React",
    "Node.js",
    "PostgreSQL",
    "Cybersecurity",
    "AI and data workflows",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\u003c"),
          }}
        />
      </body>
    </html>
  );
}
