import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AIRBNB_URL, INSTAGRAM_URL, PROPERTY, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Manishree Residency | A Premium Luxury Home in Lucknow",
    template: "%s | Manishree Residency",
  },
  description: "A private, thoughtfully furnished residence in Patrakar Puram, Gomti Nagar, Lucknow. Settle in and feel at home.",
  applicationName: "Manishree Residency",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Manishree Residency",
    title: "Manishree Residency | A Premium Luxury Home in Lucknow",
    description: "A private, thoughtfully furnished residence in Patrakar Puram, Gomti Nagar, Lucknow.",
    images: [{ url: "/social-card.svg", width: 1200, height: 630, alt: "Manishree Residency — a private stay in Lucknow" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manishree Residency | A Premium Luxury Home in Lucknow",
    description: "A private residence in Patrakar Puram, Gomti Nagar, Lucknow.",
    images: ["/social-card.svg"],
  },
  icons: {
    icon: "/images/brand/manishree-logo.png",
    shortcut: "/images/brand/manishree-logo.png",
  },
};

const lodgingSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: PROPERTY.name,
  description: "A private ground-floor residence in Patrakar Puram, Gomti Nagar, Lucknow.",
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lucknow",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Kitchen", value: true },
    { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Dedicated workspace", value: true },
    { "@type": "LocationFeatureSpecification", name: "Parking on premises", value: true },
  ],
  sameAs: [AIRBNB_URL, INSTAGRAM_URL],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/fonts/cormorant-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/dm-sans-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <SiteHeader />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <div id="main-content" tabIndex={-1}>{children}</div>
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingSchema) }} />
      </body>
    </html>
  );
}
