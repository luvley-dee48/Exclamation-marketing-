import { createFileRoute } from "@tanstack/react-router";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/motion";
import { insightsPosts } from "@/lib/site-data";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights & Industry Reports | Exclamation Marketing Ltd" },
      {
        name: "description",
        content:
          "Marketing trends, communications strategy and African business insights from the Exclamation Marketing team.",
      },
      { property: "og:title", content: "Insights & Industry Reports" },
      { property: "og:description", content: "Perspectives from our integrated team." },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <>
      <section className="hero-radial">
        <div className="container-prose py-24 lg:py-28">
          <Reveal>
            <p className="eyebrow">Insights</p>
            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.08] sm:text-6xl">
              Marketing trends. Communications strategy.{" "}
              <span className="gold-text">African business.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Perspectives from our integrated team — written for boards, CMOs and communications
              leaders operating across East Africa.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-prose py-20">
        <StaggerGroup className="grid gap-6 md:grid-cols-2">
          {insightsPosts.map((p) => (
            <StaggerItem key={p.slug}>
              <article className="card-luxe flex h-full flex-col p-8">
                <span className="tag-sector self-start text-xs">{p.category}</span>
                <h2 className="mt-6 font-display text-2xl leading-snug">{p.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{p.preview}</p>
                <button className="mt-auto self-start pt-8 text-sm font-medium text-gold hover:underline">
                  Read more →
                </button>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
    </>
  );
}
