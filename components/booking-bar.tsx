"use client";

import { useState } from "react";
import { AIRBNB_URL, PROPERTY } from "@/lib/site-data";

function todayLocal() {
  const now = new Date();
  return new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}

export function BookingBar() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [message, setMessage] = useState("");

  function handleCheck() {
    const today = todayLocal();
    if ((checkIn && checkIn < today) || (checkOut && checkOut < today)) {
      setMessage("Choose dates from today onward.");
      return;
    }
    if (checkIn && checkOut && checkOut <= checkIn) {
      setMessage("Choose a check-out date after check-in.");
      return;
    }
    setMessage("");
    window.open(AIRBNB_URL, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="booking-bar-wrap" aria-label="Plan your stay">
      <div className="booking-bar">
        <div className="booking-intro">
          <span className="booking-mark" aria-hidden="true">M</span>
          <div>
            <p className="booking-kicker">Make yourself at home</p>
            <p className="booking-title">Plan your stay</p>
          </div>
        </div>
        <label className="booking-field">
          <span>Check in</span>
          <input
            type="date"
            value={checkIn}
            min={todayLocal()}
            onChange={(event) => {
              setCheckIn(event.target.value);
              setMessage("");
            }}
          />
        </label>
        <label className="booking-field">
          <span>Check out</span>
          <input
            type="date"
            value={checkOut}
            min={checkIn || todayLocal()}
            onChange={(event) => {
              setCheckOut(event.target.value);
              setMessage("");
            }}
          />
        </label>
        <label className="booking-field guests-field">
          <span>Guests</span>
          <select value={guests} onChange={(event) => setGuests(event.target.value)} aria-label="Number of guests">
            {Array.from({ length: PROPERTY.maximumGuests }, (_, index) => index + 1).map((value) => (
              <option key={value} value={value}>{value} {value === 1 ? "guest" : "guests"}</option>
            ))}
          </select>
        </label>
        <button className="button booking-submit" type="button" onClick={handleCheck}>
          Check availability <span aria-hidden="true">↗</span>
        </button>
      </div>
      <div className="booking-bar-note" aria-live="polite">
        <span>{message || "Your dates and guest count aren’t sent to Airbnb; confirm live availability and pricing there."}</span>
        <span>Up to {PROPERTY.maximumGuests} guests · complete residence</span>
      </div>
    </section>
  );
}
