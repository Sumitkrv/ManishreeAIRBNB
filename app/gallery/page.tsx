import { GalleryGrid } from "@/components/gallery-grid";
import { pageMetadata } from "@/lib/page-metadata";
import { AIRBNB_URL } from "@/lib/site-data";

export const metadata = pageMetadata("Gallery", "Browse clearly labeled editorial mood imagery and a licensed Lucknow landmark photograph. The official host gallery shows the residence.", "/gallery");

export default function GalleryPage() {
  return (
    <main className="inner-page">
      <section className="gallery-page-heading section-pad">
        <p className="eyebrow">A visual journal · Lucknow</p>
        <h1>The beauty is<br /><em>in the little things.</em></h1>
        <p>Browse illustrative still lifes and a licensed Lucknow landmark photograph. None of the editorial images depicts Manishree Residency; use the host’s Airbnb gallery for actual property photographs.</p>
      </section>
      <section className="gallery-page-body section-pad">
        <GalleryGrid />
      </section>
      <section className="gallery-invite">
        <span className="eyebrow">The home, as it is</span>
        <h2>See the current rooms<br /><em>on the official listing.</em></h2>
        <a className="button button-dark" href={AIRBNB_URL} target="_blank" rel="noreferrer">Open Airbnb photos <span aria-hidden="true">↗</span></a>
      </section>
    </main>
  );
}
