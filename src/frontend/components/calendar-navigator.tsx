"use client";
import { useRef } from "react";
export function CalendarNavigator({ previousHref, nextHref, children, previousLabel, nextLabel }: {
  previousHref: string; nextHref: string; children: React.ReactNode; previousLabel: string; nextLabel: string;
}) {
  const startX = useRef<number | null>(null);
  function onTouchStart(e: React.TouchEvent) { startX.current = e.touches[0]?.clientX ?? null; }
  function onTouchEnd(e: React.TouchEvent) {
    const start = startX.current; startX.current = null;
    if (start == null) return;
    const delta = (e.changedTouches[0]?.clientX ?? start) - start;
    if (Math.abs(delta) < 55) return;
    window.location.href = delta < 0 ? nextHref : previousHref;
  }
  return (
    <section className="calendar-surface" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div className="calendar-nav-row">
        <a className="icon-button" href={previousHref} aria-label={previousLabel}>‹</a>
        <div className="calendar-hint">Swipe</div>
        <a className="icon-button" href={nextHref} aria-label={nextLabel}>›</a>
      </div>
      {children}
    </section>
  );
}
