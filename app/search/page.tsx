import Link from "next/link";
import { resolveLocale } from "@/application/locale";
import { application } from "@/application/use-cases";
import { getCurrentSessionSafe } from "@/application/session";
import { personalRepository } from "@/data/db/repositories";
import { AppShell } from "@/frontend/components/app-shell";
import { SearchForm } from "@/frontend/components/search-form";
import { copy } from "@/frontend/lib/i18n";

export const dynamic = "force-dynamic";

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const p = await searchParams;
  const locale = resolveLocale(typeof p?.lang === "string" ? p.lang : undefined);
  const q = typeof p?.q === "string" ? p.q : "";
  const session = await getCurrentSessionSafe();
  const results = q
    ? await application.searchAll(personalRepository, session?.userId ?? null, q)
    : [];
  const c = copy[locale];

  return (
    <AppShell locale={locale} active="search">
      <section className="hero-panel">
        <div className="overline">{c.search}</div>
        <h1 style={{ margin: "10px 0", fontSize: "2.3rem" }}>{c.search}</h1>
        <SearchForm locale={locale} initialQuery={q} />
      </section>

      {q ? (
        <div className="stack">
          {results.map((result) => {
            const href =
              result.entityType === "event"
                ? "/events/" + result.slug + "?lang=" + locale
                : result.entityType === "person"
                  ? "/people/" + result.slug + "?lang=" + locale
                  : result.entityType === "period"
                    ? "/timeline?lang=" + locale
                    : "/personal?lang=" + locale;

            const title =
              typeof result.title === "string"
                ? result.title
                : result.title[locale];
            const context =
              typeof result.context === "string"
                ? result.context
                : result.context[locale];

            return (
              <Link key={result.entityId} className="card event-card" href={href}>
                <div className="eyebrow">{result.entityType}</div>
                <h3>{title}</h3>
                <p>{context}</p>
              </Link>
            );
          })}
          {!results.length ? (
            <div className="card empty">{c.noResults}</div>
          ) : null}
        </div>
      ) : (
        <div className="card empty">
          {locale === "fa"
            ? "عبارت جستجو را وارد کن."
            : "Enter a search phrase."}
        </div>
      )}
    </AppShell>
  );
}
