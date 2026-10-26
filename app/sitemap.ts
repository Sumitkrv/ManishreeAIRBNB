import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-data";

const routes = [
  "",
  "/the-stay",
  "/gallery",
  "/our-story",
  "/explore-lucknow",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: SITE_URL + route,
    lastModified: new Date("2026-10-26"),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : 0.6,
  }));
}
