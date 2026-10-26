import { ArrowUpRight, Camera, MapPin } from "lucide-react";
import { IllustrativeFigure } from "@/components/illustrative-figure";
import { EnquiryForm } from "@/components/enquiry-form";
import { FAQAccordion } from "@/components/faq-accordion";
import { pageMetadata } from "@/lib/page-metadata";
import { AIRBNB_URL, INSTAGRAM_URL, PROPERTY } from "@/lib/site-data";

export const metadata = pageMetadata("Contact & Enquiries", "Ask about a stay at Manishree Residency, a private home in Patrakar Puram, Gomti Nagar, Lucknow. Bookings and live availability are handled on Airbnb.", "/contact");

export default function ContactPage() {
  return (
    <main className="inner-page contact-page">
      <section className="contact-heading section-pad">
        <p className="eyebrow">A warm welcome begins here</p>
        <h1>We’d love<br /><em>to welcome you.</em></h1>
        <p>Ask a question, plan a visit or check live dates for the complete private residence.</p>
      </section>
      <section className="contact-options section-pad">
        <div className="contact-option">
          <span className="contact-option-mark"><MapPin size={20} strokeWidth={1.3} /></span>
          <p className="eyebrow">The neighbourhood</p>
          <h2>{PROPERTY.location}</h2>
          <p>The exact address is shared after a booking is confirmed.</p>
        </div>
        <div className="contact-option">
          <span className="contact-option-mark"><span>↗</span></span>
          <p className="eyebrow">For a confirmed stay</p>
          <h2>Book through Airbnb.</h2>
          <p>Check current availability, prices and house rules on the official listing.</p>
          <a className="text-link" href={AIRBNB_URL} target="_blank" rel="noreferrer">Open the Airbnb listing <span aria-hidden="true">↗</span></a>
        </div>
        <div className="contact-option">
          <span className="contact-option-mark"><Camera size={19} strokeWidth={1.3} /></span>
          <p className="eyebrow">Follow the house</p>
          <h2>Manishree, in moments.</h2>
          <p>Find room stories and small glimpses of the residence on Instagram.</p>
          <a className="text-link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Visit Instagram <span aria-hidden="true">↗</span></a>
        </div>
      </section>
      <section className="contact-form-section section-pad">
        <div className="contact-form-aside">
          <p className="eyebrow">Your stay, your questions</p>
          <h2>Tell us what<br /><em>you have in mind.</em></h2>
          <p>The form checks your details securely on the server. An enquiry is not a reservation; for confirmed dates, use Airbnb.</p>
          <span className="contact-aside-rule" />
          <span className="contact-aside-note">Up to {PROPERTY.maximumGuests} guests · one private residence</span>
          <IllustrativeFigure
            className="contact-editorial-photo"
            src="/images/hero/morning-chai.webp"
            alt="Illustrative still life of chai, jasmine flowers and soft ivory linen in morning light."
            title="A warm welcome, in spirit"
            note="AI-generated still life · not a property photograph"
            width={1122}
            height={1402}
          />
        </div>
        <EnquiryForm />
      </section>
      <section className="contact-faq section-pad">
        <div>
          <p className="eyebrow">A few quick answers</p>
          <h2>Good to know<br /><em>before you write.</em></h2>
          <a className="text-link" href={AIRBNB_URL} target="_blank" rel="noreferrer">See current listing details <span aria-hidden="true">↗</span></a>
        </div>
        <FAQAccordion />
      </section>
      <section className="contact-book">
        <p className="eyebrow">Ready when you are</p>
        <h2>Make a little room<br /><em>for Lucknow.</em></h2>
        <a className="button button-dark" href={AIRBNB_URL} target="_blank" rel="noreferrer">Check availability <ArrowUpRight size={16} strokeWidth={1.5} /></a>
      </section>
    </main>
  );
}
