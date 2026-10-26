import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { pageMetadata } from "@/lib/page-metadata";
import { GOOGLE_MAPS_SEARCH, NEARBY, PROPERTY } from "@/lib/site-data";
import { LUCKNOW_IMAGE } from "@/lib/image-content";

export const metadata = pageMetadata("Explore Lucknow", "A neighbourhood guide to Patrakar Puram and Gomti Nagar, with map searches for nearby places around Manishree Residency.", "/explore-lucknow");

export default function ExploreLucknowPage() {
  return (
    <main className="inner-page explore-page">
      <section className="inner-hero explore-hero">
        <div className="inner-hero-copy">
          <p className="eyebrow">A neighbourhood, at your pace</p>
          <h1>Stay a little closer<br /><em>to Lucknow.</em></h1>
          <p>Set in Patrakar Puram, Gomti Nagar: a lively, well-connected part of the city with everyday places close by.</p>
          <a className="button button-dark" href={GOOGLE_MAPS_SEARCH} target="_blank" rel="noreferrer">Explore the neighbourhood <ArrowUpRight size={16} strokeWidth={1.5} /></a>
        </div>
        <div className="explore-location-stamp">
          <MapPin size={22} strokeWidth={1.2} />
          <span>City of</span>
          <strong>Lucknow</strong>
          <small>UTTAR PRADESH · INDIA</small>
        </div>
      </section>
      <section className="neighbourhood-intro section-pad">
        <div>
          <p className="eyebrow">The neighbourhood</p>
          <h2>Gomti Nagar,<br /><em>with room to wander.</em></h2>
        </div>
        <div>
          <p>{PROPERTY.location} is the public area for the stay. The listing points guests toward Patrakar Puram market, Gomti Nagar railway station, nearby parks and cafés.</p>
          <p>Search each place on the map before setting out. Travel times, routes and opening hours can change, and the home’s exact private address is shared by the host after booking.</p>
        </div>
      </section>
      <section className="lucknow-landmark-section section-pad">
        <div className="lucknow-landmark-copy">
          <p className="eyebrow">A wider Lucknow story</p>
          <h2>Stories held<br /><em>in the city’s stone.</em></h2>
          <p>Bara Imambara is a landmark in Lucknow, beyond the immediate Patrakar Puram neighbourhood. Check current routes and visitor information before planning a visit.</p>
        </div>
        <figure className="lucknow-landmark-photo">
          <Image
            src={LUCKNOW_IMAGE.src}
            alt={LUCKNOW_IMAGE.alt}
            width={LUCKNOW_IMAGE.width}
            height={LUCKNOW_IMAGE.height}
            sizes="(max-width: 680px) 100vw, 62vw"
            loading="lazy"
            unoptimized
          />
          <figcaption>
            <span>{LUCKNOW_IMAGE.title}</span>
            <small>Photo by Mukerjee · <a href={LUCKNOW_IMAGE.sourceUrl} target="_blank" rel="noreferrer">Wikimedia Commons</a> · <a href="https://creativecommons.org/licenses/by/2.5/" target="_blank" rel="noreferrer">CC BY 2.5</a> · used unchanged</small>
          </figcaption>
        </figure>
      </section>
      <section className="nearby-section section-pad">
        <div className="section-head">
          <div><p className="eyebrow">A few places to begin</p><h2>Local life,<br /><em>just around you.</em></h2></div>
          <p>These neighbourhood references come from the current host listing. Map links open an area search; they are not turn-by-turn directions to the private residence.</p>
        </div>
        <div className="nearby-list">
          {NEARBY.map((place, index) => (
            <article className="nearby-item" key={place.name}>
              <span className="nearby-index">0{index + 1}</span>
              <div><h3>{place.name}</h3><p>{place.description}</p></div>
              <a href={"https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(place.query)} target="_blank" rel="noreferrer" aria-label={"Search " + place.name + " on Google Maps"}><ArrowUpRight size={20} strokeWidth={1.4} /></a>
            </article>
          ))}
        </div>
      </section>
      <section className="area-note section-pad">
        <div className="area-note-mark" aria-hidden="true">L</div>
        <div>
          <p className="eyebrow">A thoughtful note</p>
          <h2>The exact address is<br /><em>shared after booking.</em></h2>
          <p>For your privacy and the host’s, this site shows only the neighbourhood. Use Airbnb for the confirmed address and arrival guidance.</p>
          <Link className="text-link" href="/contact">Plan your visit <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </main>
  );
}
