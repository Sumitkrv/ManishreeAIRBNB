"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AIRBNB_URL } from "@/lib/site-data";

const links = [
  { href: "/the-stay", label: "The Stay" },
  { href: "/the-stay#spaces", label: "Our Spaces" },
  { href: "/gallery", label: "Gallery" },
  { href: "/our-story", label: "Our Story" },
  { href: "/explore-lucknow", label: "Explore Lucknow" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className={"site-header" + (scrolled ? " is-scrolled" : "")}>
      <div className="header-inner">
        <Link href="/" className="brand-lockup" aria-label="Manishree Residency home">
          <Image
            className="brand-logo"
            src="/images/brand/manishree-logo.png"
            alt="Manishree Residency"
            width={100}
            height={100}
            priority
          />
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              className={pathname === link.href ? "nav-link active" : "nav-link"}
              href={link.href}
              key={link.label}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a className="button button-small header-book" href={AIRBNB_URL} target="_blank" rel="noreferrer">
          Book your stay <span aria-hidden="true">↗</span>
        </a>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      <div className={open ? "mobile-nav is-open" : "mobile-nav"} id="mobile-navigation" aria-hidden={!open}>
        <div className="mobile-nav-inner">
          <p className="eyebrow">A private home in Lucknow</p>
          {links.map((link, index) => (
            <Link
              className="mobile-nav-link"
              href={link.href}
              key={link.label}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            >
              <span className="mobile-nav-number">0{index + 1}</span>
              {link.label}
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
          <a
            className="button button-dark mobile-nav-book"
            href={AIRBNB_URL}
            target="_blank"
            rel="noreferrer"
            tabIndex={open ? 0 : -1}
          >
            Check availability on Airbnb <span aria-hidden="true">↗</span>
          </a>
          <p className="mobile-nav-note">The complete private residence · Up to six guests</p>
        </div>
      </div>
    </header>
  );
}
