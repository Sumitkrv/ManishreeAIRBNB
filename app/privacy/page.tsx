import { pageMetadata } from "@/lib/page-metadata";
import { PROPERTY } from "@/lib/site-data";

export const metadata = pageMetadata("Privacy", "How the Manishree Residency website handles information submitted through its enquiry form.", "/privacy");

export default function PrivacyPage() {
  return (
    <main className="inner-page policy-page">
      <section className="policy-heading section-pad">
        <p className="eyebrow">The details, handled with care</p>
        <h1>Privacy<br /><em>information.</em></h1>
        <p>Last updated 26 October 2026 · Website enquiries only</p>
      </section>
      <article className="policy-copy section-pad">
        <p>This website is for Manishree Residency in {PROPERTY.location}. It does not take payments, confirm reservations or show live booking availability. Airbnb handles booking, payment and the platform’s own data processing.</p>
        <h2>Information you choose to submit</h2>
        <p>The enquiry form asks for your name, email, phone number, optional stay dates, guest count and a message. It also asks for consent to use those details to respond. Do not include payment details or sensitive personal information.</p>
        <h2>How an enquiry is handled</h2>
        <p>The form validates information on the server and applies a basic rate limit. This website does not save enquiries to a database. If email delivery is configured, your enquiry is sent to the owner’s configured email address through the configured email provider. The provider may process and retain the message under its own terms. If delivery is not configured, the website tells you and directs you to Airbnb instead.</p>
        <h2>Cookies and analytics</h2>
        <p>This version does not intentionally set marketing cookies or include analytics scripts. Your browser, hosting provider and external services may process technical connection information as part of delivering their services.</p>
        <h2>External links</h2>
        <p>Links to Airbnb, Instagram and map services open third-party websites. Their own privacy notices apply when you visit them.</p>
        <h2>Questions</h2>
        <p>For booking enquiries, contact the host through the official Airbnb listing. Please avoid sending private information through public social channels.</p>
      </article>
    </main>
  );
}
