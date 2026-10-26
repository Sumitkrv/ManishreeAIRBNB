import Link from "next/link";
import { pageMetadata } from "@/lib/page-metadata";
import { AIRBNB_URL } from "@/lib/site-data";

export const metadata = pageMetadata("Website Terms", "Information about using the Manishree Residency website. Airbnb’s confirmed listing and booking terms govern stays.", "/terms");

export default function TermsPage() {
  return (
    <main className="inner-page policy-page">
      <section className="policy-heading section-pad">
        <p className="eyebrow">A simple guide to this website</p>
        <h1>Website<br /><em>terms.</em></h1>
        <p>Last updated 26 October 2026 · Stay terms require owner review</p>
      </section>
      <article className="policy-copy section-pad">
        <div className="policy-alert"><strong>For the owner:</strong> Review and approve guest-facing legal and stay terms before opening this site to the public.</div>
        <h2>Information, not a booking</h2>
        <p>This website introduces Manishree Residency and helps guests make enquiries. Submitting an enquiry does not confirm a reservation. The website does not collect payments, guarantee dates or set nightly prices.</p>
        <h2>Bookings and house rules</h2>
        <p>Bookings, final availability, prices, cancellation terms, check-in details, occupancy requirements and the latest house rules are handled through the official Airbnb listing. The terms shown there apply to a reservation.</p>
        <h2>Accuracy</h2>
        <p>Property details on this site are based on the listing available when this copy was prepared and may change. Guests should confirm details that matter to their stay with the host before booking.</p>
        <h2>Using this website</h2>
        <p>Please use the site lawfully and do not submit false, harmful or automated enquiries. External links lead to services operated by other parties.</p>
        <h2>Questions about a stay?</h2>
        <p>Use Airbnb to contact the host and confirm the terms for your dates.</p>
        <a className="text-link" href={AIRBNB_URL} target="_blank" rel="noreferrer">Open Airbnb listing <span aria-hidden="true">↗</span></a>
        <span className="policy-back"><Link href="/">Return to the residence <span aria-hidden="true">↗</span></Link></span>
      </article>
    </main>
  );
}
