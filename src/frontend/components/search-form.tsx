import type { Locale } from "../../application/types";
export function SearchForm({ locale, initialQuery = "" }: { locale: Locale; initialQuery?: string }) {
  return (
    <form className="search-form" action="/search" method="get">
      <input type="hidden" name="lang" value={locale} />
      <label className="sr-only" htmlFor="q">{locale === "fa" ? "جستجو" : "Search"}</label>
      <input id="q" name="q" defaultValue={initialQuery} placeholder={locale === "fa" ? "رویداد، شخص یا دوره را جستجو کنید…" : "Search events, people or periods…"} autoComplete="off" />
      <button className="primary-button" type="submit">{locale === "fa" ? "جستجو" : "Search"}</button>
    </form>
  );
}
