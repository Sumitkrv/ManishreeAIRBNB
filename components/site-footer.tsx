import Link from "next/link";
import Image from "next/image";
import { AIRBNB_URL, INSTAGRAM_URL, PROPERTY } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand-block">
          <Link href="/" className="footer-logo-link" aria-label="Manishree Residency home">
            <Image
              className="footer-logo"
              src="/images/brand/manishree-logo.png"
              alt=""
              width={100}
              height={100}
            />
          </Link>
          <p>A quieter kind of luxury, shaped around the feeling of home.</p>
        </div>
        <div className="footer-column">
          <p className="footer-label">Discover</p>
          <Link href="/the-stay">The stay</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/our-story">Our story</Link>
          <Link href="/explore-lucknow">Explore Lucknow</Link>
        </div>
        <div className="footer-column">
          <p className="footer-label">Plan your stay</p>
          <Link href="/contact">Contact & FAQs</Link>
          <a href={AIRBNB_URL} target="_blank" rel="noreferrer">Book on Airbnb ↗</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram ↗</a>
        </div>
        <div className="footer-column footer-location">
          <p className="footer-label">Find us</p>
          <span>{PROPERTY.location}</span>
          <span>Exact address shared after booking.</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Manishree Residency</span>
        <span className="footer-endline">Made for the moments that matter.</span>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Website terms</Link>
        </div>
      </div>
    </footer>
  );
}
