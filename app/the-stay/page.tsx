import Link from "next/link";
import { ArrowUpRight, Check, CircleHelp, KeyRound, MapPin, Users, Wifi } from "lucide-react";
import { FAQAccordion } from "@/components/faq-accordion";
import { IllustrativeFigure } from "@/components/illustrative-figure";
import { pageMetadata } from "@/lib/page-metadata";
import { AMENITIES, AIRBNB_URL, PROPERTY, SPACES } from "@/lib/site-data";

export const metadata = pageMetadata("The Stay", "Discover the full private ground-floor residence: two bedrooms, lounge, kitchen and thoughtful comforts in Gomti Nagar, Lucknow.", "/the-stay");

export default function StayPage() {
  return (
    <main className="inner-page">
      <section className="inner-hero stay-hero">
        <div className="inner-hero-copy">
          <p className="eyebrow">The stay · Manishree Residency</p>
          <h1>The whole home,<br /><em>thoughtfully yours.</em></h1>
          <p>A private ground-floor residence in Patrakar Puram, shaped for easy living and unhurried time together.</p>
          <div className="inner-hero-actions">
            <a className="button button-dark" href={AIRBNB_URL} target="_blank" rel="noreferrer">Check live dates on Airbnb <ArrowUpRight size={16} strokeWidth={1.5} /></a>
            <span>Prices and availability are confirmed on Airbnb.</span>
          </div>
        </div>
        <div className="inner-hero-aside">
          <span className="inner-hero-number">01 <i>/</i> THE RESIDENCE</span>
          <div className="inner-hero-aside-ornament" aria-hidden="true">M</div>
          <p>Ground floor of a bungalow<br />Independent guest entrance</p>
        </div>
      </section>

      <section className="stay-facts" aria-label="Residence overview">
        <div><span>Bedrooms</span><strong>{PROPERTY.bedrooms}</strong></div>
        <div><span>Guests</span><strong>Up to {PROPERTY.maximumGuests}</strong></div>
        <div><span>Bathrooms</span><strong>{PROPERTY.bathrooms}</strong></div>
        <div><span>Guest access</span><strong>Private ground floor</strong></div>
      </section>

      <section className="stay-overview section-pad">
        <div className="stay-overview-heading">
          <p className="eyebrow">A home away from home</p>
          <h2>Private by design.<br /><em>Comfortable by nature.</em></h2>
        </div>
        <div className="stay-overview-copy">
          <p>
            The Airbnb listing describes the entire ground-floor portion of the bungalow as a separate, private guest accommodation. It includes two bedrooms, a living room, a modular kitchen, a private entrance, front-porch parking and a backyard utility area.
          </p>
          <p>
            You are booking the complete guest residence. The Sun Room and The Sky Room are names for its bedrooms, not separate hotel-style rooms or separate booking calendars.
          </p>
          <div className="overview-icons">
            <span><KeyRound size={17} strokeWidth={1.4} /> Independent entrance</span>
            <span><Users size={17} strokeWidth={1.4} /> Up to six guests</span>
            <span><MapPin size={17} strokeWidth={1.4} /> Gomti Nagar</span>
          </div>
        </div>
      </section>

      <section className="stay-spaces section-pad" id="spaces">
        <div className="section-head">
          <div>
            <p className="eyebrow">A tour through the home</p>
            <h2>Five spaces.<br /><em>One private stay.</em></h2>
          </div>
          <p>Names and details follow the host’s current listing and Instagram profile. The photos here will be updated when approved original property images are supplied.</p>
        </div>
        <div className="stay-space-list">
          {SPACES.map((space) => (
            <article className={"stay-space-item space-" + space.tone} id={space.id} key={space.id}>
              <div className="stay-space-identity">
                <span>{space.number} <i>/ 05</i></span>
                <h3>{space.name}</h3>
                <small>{space.type}</small>
              </div>
              <p>{space.description}</p>
              <span className="stay-space-note">{space.note}</span>
            </article>
          ))}
        </div>
        <div className="property-photo-note">
          <IllustrativeFigure
            className="property-photo-mood"
            src="/images/lifestyle/travel-journal.webp"
            alt="Illustrative flat lay of an open blank journal, tea, jasmine and ivory linen."
            title="A mood for unhurried days"
            note="AI-generated still life · not a room photograph"
            width={1122}
            height={1402}
          />
          <div>
            <p className="eyebrow">An honest note on photographs</p>
            <p>Owner-approved originals of the bedrooms, lounge, kitchen and courtyard are not in the project files. Generated images are not used to represent any room. The host’s Airbnb gallery is the current source for actual property photographs.</p>
          </div>
          <a className="text-link" href={AIRBNB_URL} target="_blank" rel="noreferrer">See listing photos <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="stay-amenities-section section-pad" id="amenities">
        <div className="section-head">
          <div>
            <p className="eyebrow">The considered essentials</p>
            <h2>Comfort, in<br /><em>all the right places.</em></h2>
          </div>
          <p>These details are based on the current Airbnb listing. Please check its latest information before travelling.</p>
        </div>
        <div className="amenities-grid stay-amenities-grid">
          {AMENITIES.map((item, index) => (
            <article className="amenity-item" key={item.title}>
              <span className="amenity-index">0{index + 1}</span>
              {index === 4 ? <Wifi size={19} strokeWidth={1.3} /> : <Check size={18} strokeWidth={1.4} />}
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="accessibility-note">
          <CircleHelp size={19} strokeWidth={1.4} />
          <p><strong>Accessibility:</strong> Airbnb lists step-free access for the entrance, bedrooms, living room and kitchen, among other features. Please message the host to confirm the details for your specific needs.</p>
        </div>
      </section>

      <section className="house-notes section-pad">
        <div>
          <p className="eyebrow">Before you settle in</p>
          <h2>A few useful<br /><em>house notes.</em></h2>
        </div>
        <div className="house-notes-copy">
          <p>Meals are not included. The listing describes a functioning kitchen for guest use. It also notes restrictions on cooking non-vegetarian food in the kitchen; please read the current house rules on Airbnb before planning meals.</p>
          <p>Check-in and check-out times, final occupancy details and any paid extra services should be confirmed directly with the host. This page does not set or guarantee those terms.</p>
          <a className="text-link" href={AIRBNB_URL} target="_blank" rel="noreferrer">Read the current house rules <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="page-faq section-pad">
        <div>
          <p className="eyebrow">Questions about the home?</p>
          <h2>Good to know<br /><em>before you go.</em></h2>
          <Link className="text-link" href="/contact">Ask the host <span aria-hidden="true">↗</span></Link>
        </div>
        <FAQAccordion />
      </section>

      <section className="page-cta">
        <p className="eyebrow">Make room for a good stay</p>
        <h2>Lucknow is waiting.<br /><em>Come settle in.</em></h2>
        <a className="button button-dark" href={AIRBNB_URL} target="_blank" rel="noreferrer">Check availability on Airbnb <ArrowUpRight size={16} strokeWidth={1.5} /></a>
      </section>
    </main>
  );
}
