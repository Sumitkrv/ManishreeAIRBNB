import Link from "next/link";
import { ArrowUpRight, Heart, Home, MapPin } from "lucide-react";
import { IllustrativeFigure } from "@/components/illustrative-figure";
import { pageMetadata } from "@/lib/page-metadata";
import { AIRBNB_URL, INSTAGRAM_URL, PROPERTY } from "@/lib/site-data";

export const metadata = pageMetadata("Our Story", "Meet Anushree and discover the warm, private home and Lucknow hospitality behind Manishree Residency.", "/our-story");

export default function OurStoryPage() {
  return (
    <main className="inner-page story-page">
      <section className="inner-hero story-hero">
        <div className="inner-hero-copy">
          <p className="eyebrow">Our story · Manishree Residency</p>
          <h1>A home made<br /><em>to make you feel at home.</em></h1>
          <p>In the heart of Gomti Nagar, a private residence shaped by thoughtful details and the generous spirit of Lucknow.</p>
        </div>
        <div className="story-seal-large" aria-hidden="true">
          <span className="story-seal-orbit" />
          <span className="story-seal-script">M</span>
          <span className="story-seal-word">RESIDENCY</span>
          <span className="story-seal-place">LUCKNOW · INDIA</span>
        </div>
      </section>
      <section className="story-philosophy section-pad">
        <div className="story-philosophy-number">01 <span>/ OUR PHILOSOPHY</span></div>
        <div className="story-philosophy-content">
          <p className="eyebrow">A softer kind of luxury</p>
          <h2>Private, peaceful<br /><em>and beautifully lived in.</em></h2>
          <p>Manishree Residency is a real home, opened as a private stay for guests visiting Lucknow. Its ground-floor accommodation brings together two bedrooms, a lounge, kitchen and an independent entrance in one easy, considered space.</p>
          <p>It is designed around the simple comforts that matter: room to unwind, room to gather, and the freedom to make the home your own for a little while.</p>
        </div>
      </section>
      <section className="story-image-feature section-pad">
        <IllustrativeFigure
          className="story-texture-photo"
          src="/images/lifestyle/chikankari-texture.webp"
          alt="Illustrative close-up of ivory embroidery-inspired fabric and a brass dish with a flower."
          title="A Lucknow-inspired texture study"
          note="AI-generated craft mood · not a property photograph"
          width={1122}
          height={1402}
        />
        <div className="story-image-copy">
          <p className="eyebrow">The feeling behind the stay</p>
          <h2>Care lives in<br /><em>the smallest gestures.</em></h2>
          <p>This editorial image is an illustration inspired by warm materials and the craft traditions associated with Lucknow. It is not a photograph of the residence or a claim about its furnishings.</p>
        </div>
      </section>
      <section className="host-profile-section">
        <div className="host-profile-monogram" aria-hidden="true"><span>A</span></div>
        <div className="host-profile-copy">
          <p className="eyebrow">A warm welcome from</p>
          <h2>{PROPERTY.host}<em>.</em></h2>
          <p>The Airbnb host profile describes Anushree as someone shaped by a lifetime of welcoming house guests and the culture of mehmaan-nawaazi. That feeling of hospitality is at the heart of this stay.</p>
          <a className="text-link" href={AIRBNB_URL} target="_blank" rel="noreferrer">Meet Anushree on Airbnb <span aria-hidden="true">↗</span></a>
        </div>
      </section>
      <section className="story-values section-pad">
        <p className="eyebrow">What we hope you feel</p>
        <div className="story-values-grid">
          <article><Home size={22} strokeWidth={1.3} /><h3>At ease</h3><p>A private home with room to settle, unpack and find your rhythm.</p></article>
          <article><Heart size={22} strokeWidth={1.3} /><h3>Welcomed</h3><p>Warm Lucknow hosting, offered with thought and care.</p></article>
          <article><MapPin size={22} strokeWidth={1.3} /><h3>Connected</h3><p>A calm base in Patrakar Puram, Gomti Nagar.</p></article>
        </div>
      </section>
      <section className="story-social">
        <p className="eyebrow">Follow the house</p>
        <h2>More moments<br /><em>from Manishree.</em></h2>
        <div className="closing-actions">
          <a className="button button-dark" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Follow on Instagram <ArrowUpRight size={16} strokeWidth={1.5} /></a>
          <Link className="text-link" href="/the-stay">Explore the residence <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </main>
  );
}
