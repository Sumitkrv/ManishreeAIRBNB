import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site-data";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = title + " | Manishree Residency";
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      title: fullTitle,
      description,
      url: SITE_URL + path,
      images: [{ url: "/social-card.svg", width: 1200, height: 630, alt: "Manishree Residency — a private stay in Lucknow" }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/social-card.svg"],
    },
  };
}
