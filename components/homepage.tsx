import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, KeyRound, MapPin, ShieldCheck, Wifi } from "lucide-react";
import { BookingBar } from "@/components/booking-bar";
import { FAQAccordion } from "@/components/faq-accordion";
import { IllustrativeFigure } from "@/components/illustrative-figure";
import { AMENITIES, AIRBNB_URL, GOOGLE_MAPS_SEARCH, PROPERTY, SPACES } from "@/lib/site-data";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function HomePage() {
  return (
    <main>
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy">
          <Eyebrow>Manishree Residency <span>·</span> Lucknow</Eyebrow>
          <h1 id="hero-title">A little luxury.<br /><em>A lot like home.</em></h1>
          <p className="hero-description">
            An intimate, thoughtfully furnished private residence for slow mornings, unhurried evenings and time well spent together.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/the-stay">Explore the residence <ArrowUpRight size={16} strokeWidth={1.5} /></Link>
            <a className="text-link" href={AIRBNB_URL} target="_blank" rel="noreferrer">Book on Airbnb <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-signature">
            <span className="signature-rule" />
            <span>Private ground-floor stay <i>·</i> Gomti Nagar</span>
          </div>
        </div>
        <figure className="hero-visual">
          <div className="hero-visual-image">
            <Image
              src="/images/hero/morning-chai.webp"
              alt="Illustrative still life of chai, jasmine flowers and soft ivory linen in morning light."
              fetchPriority="high"
              width={1122}
              height={1402}
              sizes="(max-width: 680px) 100vw, 48vw"
              loading="eager"
              unoptimized
            />
            <span className="image-veil" aria-hidden="true" />
            <span className="hero-visual-seal" aria-hidden="true">
              <span>MR</span>
              <small>Lucknow</small>
            </span>
            <figcaption className="hero-image-caption">
              <span>A slower kind of morning</span>
              <span>AI-generated still life · not a property photograph</span>
            </figcaption>
          </div>
          <div className="hero-visual-index" aria-hidden="true">01 <span /> 05</div>
        </figure>
        <a className="hero-scroll" href="#welcome">
          <span>Scroll to settle in</span>
          <ArrowDown size={16} strokeWidth={1.4} />
        </a>
      </section>

      <div className="fact-ribbon" aria-label="Residence details">
        <div><strong>{PROPERTY.bedrooms}</strong><span>Bedrooms</span></div>
        <div><strong>{PROPERTY.maximumGuests}</strong><span>Guests</span></div>
        <div><strong>{PROPERTY.bathrooms}</strong><span>Bathrooms</span></div>
        <div><strong>01</strong><span>Private residence</span></div>
        <a href={AIRBNB_URL} target="_blank" rel="noreferrer">View the official listing <span aria-hidden="true">↗</span></a>
      </div>

      <BookingBar />

      <section className="welcome-section section-pad" id="welcome">
        <div className="welcome-side welcome-side-photo">
          <IllustrativeFigure
            className="welcome-editorial-photo"
            src="/images/lifestyle/linen-mood.jpg"
            alt="Illustrative close-up of champagne and blush linen in warm afternoon light."
            title="Soft light, natural texture"
            width={1536}
            height={1024}
          />
          <div className="welcome-seal" aria-hidden="true">
            <span className="welcome-seal-top">A HOME IN LUCKNOW</span>
            <span className="welcome-seal-script">M</span>
            <span className="welcome-seal-bottom">MADE FOR SETTLING IN</span>
          </div>
          <span className="side-note">01 / THE WELCOME</span>
        </div>
        <div className="welcome-content">
          <Eyebrow>Welcome to Manishree</Eyebrow>
          <h2>Where every stay<br /><em>feels like coming home.</em></h2>
          <p>
            A private, independent ground-floor home with two bedrooms, a generous lounge and the comforts to make a few days away feel easy. Thoughtful interiors meet the warmth of Lucknow hospitality.
          </p>
          <div className="welcome-detail-row">
            <span><KeyRound size={17} strokeWidth={1.4} /> A separate entrance</span>
            <span><ShieldCheck size={17} strokeWidth={1.4} /> A private setting</span>
            <span><MapPin size={17} strokeWidth={1.4} /> Gomti Nagar, Lucknow</span>
          </div>
          <Link className="text-link" href="/our-story">A little more about us <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="home-ritual-section section-pad">
        <div className="section-head">
          <div>
            <Eyebrow>Small rituals, thoughtfully imagined</Eyebrow>
            <h2>A sense of place,<br /><em>in every little thing.</em></h2>
          </div>
          <p>These editorial mood images celebrate quiet mornings and Lucknow-inspired craft. They are illustrative still lifes, not scenes photographed at the residence.</p>
        </div>
        <div className="home-ritual-grid">
          <IllustrativeFigure
            className="home-ritual-photo home-ritual-photo-craft"
            src="/images/lifestyle/chikankari-texture.webp"
            alt="Illustrative close-up of ivory embroidery-inspired fabric and a brass dish with a flower."
            title="A Lucknow-inspired texture study"
            note="AI-generated craft mood · not a property photograph"
            width={1122}
            height={1402}
          />
          <IllustrativeFigure
            className="home-ritual-photo home-ritual-photo-journal"
            src="/images/lifestyle/travel-journal.webp"
            alt="Illustrative flat lay of an open blank journal, tea, jasmine and ivory linen."
            title="Room for your own story"
            note="AI-generated still life · not a property photograph"
            width={1122}
            height={1402}
          />
        </div>
      </section>

      <section className="spaces-section section-pad" id="spaces">
        <div className="section-head section-head-spaces">
          <div>
            <Eyebrow>One home, considered in every corner</Eyebrow>
            <h2>Room to breathe.<br /><em>Space to be together.</em></h2>
          </div>
          <p>Five named spaces, arranged within one complete private residence. The Sun Room and The Sky Room are bedrooms in the home, never separate bookings.</p>
        </div>
        <div className="spaces-list">
          {SPACES.map((space) => (
            <article className={"space-row space-" + space.tone} id={space.id} key={space.id}>
              <span className="space-number">{space.number}</span>
              <div className="space-name-block">
                <span className="space-type">{space.type}</span>
                <h3>{space.name}</h3>
              </div>
              <p className="space-description">{space.description}</p>
              <span className="space-note">{space.note}</span>
              <Link className="space-arrow" href={"/the-stay#" + space.id} aria-label={"Explore " + space.name}>
                <ArrowUpRight size={21} strokeWidth={1.4} />
              </Link>
            </article>
          ))}
        </div>
        <div className="spaces-footnote">
          <span className="spaces-footnote-mark" aria-hidden="true">✳</span>
          <p>Owner-approved photographs of the home are not in the project files yet. For an accurate visual tour today, visit the property’s current Airbnb gallery.</p>
          <a href={AIRBNB_URL} target="_blank" rel="noreferrer">View Airbnb photos ↗</a>
        </div>
      </section>

      <section className="living-section">
        <div className="living-copy">
          <Eyebrow>The art of living</Eyebrow>
          <h2>Some places are<br /><em>meant to be felt.</em></h2>
          <p>
            Natural daylight. A cup of tea after the city winds down. The comfort of having room for everyone. Manishree is made for the gentle, everyday moments that turn a stay into a memory.
          </p>
          <Link className="text-link link-light" href="/gallery">Explore the visual story <span aria-hidden="true">↗</span></Link>
        </div>
        <figure className="living-aside living-photo">
          <Image
            src="/images/lifestyle/warm-light.webp"
            alt="Illustrative still life of a glowing brass lamp, a book, jasmine and peach flowers."
            width={1122}
            height={1402}
            sizes="(max-width: 680px) 100vw, 42vw"
            loading="lazy"
            unoptimized
          />
          <span className="living-photo-veil" aria-hidden="true" />
          <span className="living-ornament" aria-hidden="true">“</span>
          <p>Stay beautifully.<br /><em>Feel completely at home.</em></p>
          <figcaption className="living-aside-caption">AI-generated still life · not a property photograph</figcaption>
        </figure>
      </section>

      <section className="comfort-section section-pad" id="comfort">
        <div className="section-head comfort-head">
          <div>
            <Eyebrow>Every comfort, thoughtfully considered</Eyebrow>
            <h2>A little more room<br /><em>for the way you live.</em></h2>
          </div>
          <p>The current Airbnb listing is the source of truth for amenities and house rules. If a detail matters to your stay, please confirm it with the host.</p>
        </div>
        <div className="amenities-grid">
          {AMENITIES.map((item, index) => (
            <article className="amenity-item" key={item.title}>
              <span className="amenity-index">0{index + 1}</span>
              {index === 4 ? <Wifi size={19} strokeWidth={1.3} /> : <span className="amenity-spark" aria-hidden="true">✳</span>}
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <Link className="text-link" href="/the-stay#amenities">See residence details <span aria-hidden="true">↗</span></Link>
      </section>

      <section className="review-section">
        <div className="review-inner">
          <div className="review-mark" aria-hidden="true">“</div>
          <div className="review-copy">
            <Eyebrow>A little reassurance from Airbnb</Eyebrow>
            <p className="review-statement">A guest favourite in Lucknow, with a <em>4.96 out of 5</em> rating.</p>
            <span className="review-note">79 reviews on the official listing · checked 26 October 2026</span>
          </div>
          <a className="button button-light-outline" href={AIRBNB_URL} target="_blank" rel="noreferrer">Read guest reviews <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="host-section section-pad">
        <div className="host-label">
          <Eyebrow>Hospitality, from the heart</Eyebrow>
          <span className="host-line" />
          <span className="side-note">02 / YOUR HOST</span>
        </div>
        <div className="host-story">
          <h2>Welcomed by<br /><em>Anushree.</em></h2>
          <p>
            A lifetime of welcoming house guests has shaped the care behind Manishree Residency. Anushree brings the spirit of mehmaan-nawaazi to a home designed to help you settle in and feel at ease.
          </p>
          <a className="text-link" href={AIRBNB_URL} target="_blank" rel="noreferrer">Meet your host on Airbnb <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="location-section section-pad" id="location">
        <div className="location-copy">
          <Eyebrow>In the heart of Gomti Nagar</Eyebrow>
          <h2>Lucknow, at<br /><em>your own pace.</em></h2>
          <p>In Patrakar Puram, close to the neighbourhood’s everyday rhythm. The exact address is shared by the host after a booking is confirmed.</p>
          <a className="text-link" href={GOOGLE_MAPS_SEARCH} target="_blank" rel="noreferrer">Explore the neighbourhood map <span aria-hidden="true">↗</span></a>
        </div>
        <div className="location-card">
          <span className="map-topline"><MapPin size={14} strokeWidth={1.4} /> GOMTI NAGAR · LUCKNOW</span>
          <div className="map-art" aria-hidden="true">
            <span className="map-road map-road-one" />
            <span className="map-road map-road-two" />
            <span className="map-road map-road-three" />
            <span className="map-green map-green-one" />
            <span className="map-green map-green-two" />
            <span className="map-pin"><i /></span>
            <span className="map-label">Patrakar Puram</span>
            <span className="map-label map-label-two">Gomti Nagar</span>
          </div>
          <span className="map-disclaimer">Decorative area sketch · not to scale</span>
          <a href={GOOGLE_MAPS_SEARCH} target="_blank" rel="noreferrer">Open neighbourhood map <ArrowUpRight size={16} strokeWidth={1.4} /></a>
        </div>
      </section>

      <section className="faq-section section-pad">
        <div className="faq-heading">
          <Eyebrow>Before you arrive</Eyebrow>
          <h2>A few things<br /><em>worth knowing.</em></h2>
          <p>For date-specific details and the latest house rules, Airbnb remains the authoritative source.</p>
          <Link className="text-link" href="/contact">More questions? Get in touch <span aria-hidden="true">↗</span></Link>
        </div>
        <FAQAccordion compact />
      </section>

      <section className="closing-section">
        <div className="closing-inner">
          <Eyebrow>A quieter way to stay</Eyebrow>
          <h2>Your next beautiful<br /><em>memory begins here.</em></h2>
          <p>A warm, private home waiting for you in the heart of Lucknow.</p>
          <div className="closing-actions">
            <a className="button button-light" href={AIRBNB_URL} target="_blank" rel="noreferrer">Reserve your stay <ArrowUpRight size={16} strokeWidth={1.5} /></a>
            <Link className="text-link link-light" href="/gallery">Explore the gallery <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <span className="closing-emblem" aria-hidden="true">MR</span>
      </section>
    </main>
  );
}
