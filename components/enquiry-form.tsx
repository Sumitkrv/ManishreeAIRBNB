"use client";

import { FormEvent, useState } from "react";
import { AIRBNB_URL, PROPERTY } from "@/lib/site-data";

type FormState = "idle" | "sending" | "sent" | "configuration" | "error" | "limited";

function todayLocal() {
  const now = new Date();
  const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  return localDate.toISOString().slice(0, 10);
}

export function EnquiryForm() {
  const [state, setState] = useState<FormState>("idle");
  const [feedback, setFeedback] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const checkInValue = String(data.get("checkIn") ?? "");
    const checkOutValue = String(data.get("checkOut") ?? "");

    if (checkInValue && checkOutValue && checkOutValue <= checkInValue) {
      setState("error");
      setFeedback("Please choose a check-out date after check-in.");
      return;
    }

    setState("sending");
    setFeedback("");
    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          checkIn: checkInValue,
          checkOut: checkOutValue,
          guests: Number(data.get("guests")),
          message: data.get("message"),
          consent: data.get("consent") === "on",
          website: data.get("website"),
        }),
      });
      const result: { message?: string } = await response.json();
      if (response.status === 503) {
        setState("configuration");
        setFeedback(result.message || "Email delivery has not been configured yet.");
      } else if (response.status === 429) {
        setState("limited");
        setFeedback("Please wait a few minutes before sending another enquiry.");
      } else if (!response.ok) {
        setState("error");
        setFeedback(result.message || "Please review your details and try again.");
      } else {
        setState("sent");
        setFeedback("Your enquiry has been sent. It is not a confirmed reservation.");
        form.reset();
        setCheckIn("");
        setCheckOut("");
      }
    } catch {
      setState("error");
      setFeedback("We couldn’t send that just now. Please try Airbnb for a confirmed booking.");
    }
  }

  return (
    <div className="enquiry-form-shell">
      {state === "sent" ? (
        <div className="form-success" role="status">
          <span className="success-mark" aria-hidden="true">✓</span>
          <p className="eyebrow">Thank you</p>
          <h3>Your note is with the host.</h3>
          <p>{feedback}</p>
          <a className="text-link" href={AIRBNB_URL} target="_blank" rel="noreferrer">Continue to Airbnb ↗</a>
        </div>
      ) : (
        <form className="enquiry-form" onSubmit={submit}>
          <div className="form-intro">
            <p className="eyebrow">A note to your host</p>
            <h3>Tell us a little about your stay.</h3>
            <p>For live pricing, availability and a confirmed reservation, use Airbnb.</p>
          </div>
          <div className="form-grid">
            <label className="form-field">
              <span>Full name <i aria-hidden="true">*</i></span>
              <input name="name" type="text" autoComplete="name" maxLength={100} required />
            </label>
            <label className="form-field">
              <span>Email address <i aria-hidden="true">*</i></span>
              <input name="email" type="email" autoComplete="email" maxLength={254} required />
            </label>
            <label className="form-field">
              <span>Contact number <i aria-hidden="true">*</i></span>
              <input name="phone" type="tel" autoComplete="tel" placeholder="+91" maxLength={24} required />
            </label>
            <label className="form-field">
              <span>Guests</span>
              <select name="guests" defaultValue="2" required>
                {Array.from({ length: PROPERTY.maximumGuests }, (_, index) => index + 1).map((value) => (
                  <option key={value} value={value}>{value} {value === 1 ? "guest" : "guests"}</option>
                ))}
              </select>
            </label>
            <label className="form-field">
              <span>Check in</span>
              <input
                name="checkIn"
                type="date"
                min={todayLocal()}
                value={checkIn}
                onChange={(event) => setCheckIn(event.target.value)}
              />
            </label>
            <label className="form-field">
              <span>Check out</span>
              <input
                name="checkOut"
                type="date"
                min={checkIn || todayLocal()}
                value={checkOut}
                onChange={(event) => setCheckOut(event.target.value)}
              />
            </label>
            <label className="form-field form-field-wide">
              <span>Your message</span>
              <textarea name="message" rows={4} maxLength={1200} placeholder="Share any questions or details that would help us welcome you." />
            </label>
          </div>
          <label className="honeypot" aria-hidden="true">
            Website
            <input name="website" type="text" tabIndex={-1} autoComplete="off" />
          </label>
          <label className="consent-field">
            <input name="consent" type="checkbox" required />
            <span>I agree that my details may be used to reply to this enquiry. They will not be stored on this website.</span>
          </label>
          <div className="form-submit-row">
            <button className="button button-dark" type="submit" disabled={state === "sending"}>
              {state === "sending" ? "Sending your note…" : "Send an enquiry"}
              {state !== "sending" && <span aria-hidden="true">↗</span>}
            </button>
            <p className="form-privacy-note">No payment details are collected. An enquiry is not a reservation.</p>
          </div>
          {feedback && (
            <div className={state === "configuration" ? "form-feedback is-configuration" : "form-feedback"} role="status" aria-live="polite">
              <p>{feedback}</p>
              {state === "configuration" && (
                <a href={AIRBNB_URL} target="_blank" rel="noreferrer">Book or message the host on Airbnb ↗</a>
              )}
            </div>
          )}
        </form>
      )}
    </div>
  );
}
