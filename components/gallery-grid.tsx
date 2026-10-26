"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AIRBNB_URL } from "@/lib/site-data";
import { GALLERY_IMAGES, PROPERTY_PHOTO_CATEGORIES } from "@/lib/image-content";

const FILTERS = ["All", ...PROPERTY_PHOTO_CATEGORIES, "Details", "Lucknow"] as const;
type Filter = (typeof FILTERS)[number];

export function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const isOpen = lightboxIndex !== null;

  const visibleImages = useMemo(
    () => GALLERY_IMAGES.filter((image) => filter === "All" || image.category === filter),
    [filter],
  );
  const activeImage = lightboxIndex === null ? null : visibleImages[lightboxIndex] ?? null;
  const isUnavailablePropertyCategory = PROPERTY_PHOTO_CATEGORIES.some((category) => category === filter);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    const closeButton = document.querySelector<HTMLButtonElement>(".lightbox-close");
    const focusFrame = window.requestAnimationFrame(() => closeButton?.focus());
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxIndex(null);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        setLightboxIndex((current) => current === null ? null : (current + 1) % visibleImages.length);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        setLightboxIndex((current) => current === null ? null : (current - 1 + visibleImages.length) % visibleImages.length);
      } else if (event.key === "Tab") {
        const controls = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-lightbox-control]"));
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      previousFocus.current?.focus();
      previousFocus.current = null;
    };
  }, [isOpen, visibleImages.length]);

  const openLightbox = (index: number) => {
    previousFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setLightboxIndex(index);
  };

  const moveLightbox = (direction: -1 | 1) => {
    setLightboxIndex((current) => current === null ? null : (current + direction + visibleImages.length) % visibleImages.length);
  };

  const finishSwipe = (x: number) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    if (start === null || Math.abs(x - start) < 48) return;
    moveLightbox(x < start ? 1 : -1);
  };

  return (
    <>
      <div className="gallery-toolbar">
        <div className="gallery-filters" role="group" aria-label="Filter the visual journal">
          {FILTERS.map((item) => (
            <button
              className={filter === item ? "gallery-filter is-active" : "gallery-filter"}
              key={item}
              type="button"
              aria-pressed={filter === item}
              onClick={() => {
                setLightboxIndex(null);
                setFilter(item);
              }}
            >
              {item}
            </button>
          ))}
        </div>
        <span className="gallery-count" aria-live="polite">
          {visibleImages.length ? `${visibleImages.length} ${visibleImages.length === 1 ? "image" : "images"}` : "Original photos requested"}
        </span>
      </div>
      <div className="gallery-grid">
        {visibleImages.map((image, index) => (
          <button
            className={`gallery-image-card ${image.category === "Lucknow" ? "gallery-card-landmark" : ""}`.trim()}
            type="button"
            key={image.id}
            onClick={() => openLightbox(index)}
            aria-label={`Open ${image.title}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(max-width: 680px) 100vw, (max-width: 940px) 50vw, 40vw"
              loading="lazy"
              unoptimized
            />
            <span className="gallery-image-label">
              <span>{image.label}</span>
              <strong>{image.title}</strong>
              {image.credit && <small>{image.credit}</small>}
            </span>
            <span className="gallery-open-mark" aria-hidden="true">+</span>
          </button>
        ))}
        {isUnavailablePropertyCategory && (
          <div className="gallery-pending" aria-live="polite">
            <span className="eyebrow">{filter} photography</span>
            <h2>Approved originals are still needed.</h2>
            <p>No owner-approved image for this part of the residence is available in the project files. The atmospheric images in this journal are not photographs of the home.</p>
            <a className="text-link" href={AIRBNB_URL} target="_blank" rel="noreferrer">View the host’s current Airbnb photo gallery ↗</a>
          </div>
        )}
      </div>
      <p className="gallery-disclosure">
        The residence categories are kept photo-free until authorized originals are supplied. Editorial still lifes are AI-generated and clearly labeled; the Lucknow landmark image is credited to its photographer and source.
      </p>
      {activeImage && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={activeImage.title} onClick={() => setLightboxIndex(null)}>
          <button className="lightbox-close" data-lightbox-control type="button" aria-label="Close image" onClick={() => setLightboxIndex(null)}>
            <X size={24} strokeWidth={1.5} />
          </button>
          <button className="lightbox-nav lightbox-prev" data-lightbox-control type="button" aria-label="Previous image" onClick={(event) => { event.stopPropagation(); moveLightbox(-1); }}>
            <ChevronLeft size={27} strokeWidth={1.4} />
          </button>
          <figure
            className="lightbox-figure"
            onClick={(event) => event.stopPropagation()}
            onTouchStart={(event) => { touchStartX.current = event.touches[0]?.clientX ?? null; }}
            onTouchEnd={(event) => { finishSwipe(event.changedTouches[0]?.clientX ?? 0); }}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              width={activeImage.width}
              height={activeImage.height}
              sizes="90vw"
              loading="eager"
              unoptimized
            />
            <figcaption aria-live="polite">
              <strong>{activeImage.title}</strong>
              <span>{activeImage.label}</span>
              {activeImage.credit && (
                <>
                  <span>{activeImage.credit}</span>
                  <a href={activeImage.sourceUrl} target="_blank" rel="noreferrer">Source</a>
                  <a href={activeImage.licenseUrl} target="_blank" rel="noreferrer">CC BY 2.5 License</a>
                </>
              )}
            </figcaption>
          </figure>
          <button className="lightbox-nav lightbox-next" data-lightbox-control type="button" aria-label="Next image" onClick={(event) => { event.stopPropagation(); moveLightbox(1); }}>
            <ChevronRight size={27} strokeWidth={1.4} />
          </button>
        </div>
      )}
    </>
  );
}
