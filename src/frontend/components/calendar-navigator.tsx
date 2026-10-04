"use client";

import { useRef } from "react";

function Chevron({ direction }: { direction: "previous" | "next" }) {
  return direction === "previous" ? (
    <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true">
      <path d="m14.5 5-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true">
      <path d="m9.5 5 7 7-7 7" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CalendarNavigator({
  previousHref,
  nextHref,
  children,
  previousLabel,
  nextLabel,
  swipeLabel,
}: {
  previousHref: string;
  nextHref: string;
  children: React.ReactNode;
  previousLabel: string;
  nextLabel: string;
  swipeLabel: string;
}) {
  const start = useRef<number | null>(null);

  return (
    <section
      className="calendar-surface"
      onTouchStart={(e) => {
        start.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        const s = start.current;
        start.current = null;
        if (s === null) return;
        const delta = (e.changedTouches[0]?.clientX ?? s) - s;
        if (Math.abs(delta) < 55) return;
        window.location.href = delta < 0 ? nextHref : previousHref;
      }}
    >
      <div className="calendar-nav-row">
        <a className="icon-button" href={previousHref} aria-label={previousLabel}>
          <Chevron direction="previous" />
        </a>
        <div className="calendar-hint" aria-live="polite">
          {swipeLabel}
        </div>
        <a className="icon-button" href={nextHref} aria-label={nextLabel}>
          <Chevron direction="next" />
        </a>
      </div>
      {children}
    </section>
  );
}
