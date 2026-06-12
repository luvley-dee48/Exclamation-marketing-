import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/motion";
import { caseStudies } from "@/lib/site-data";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies | Exclamation Marketing Ltd" },
      {
        name: "description",
        content:
          "Featured work for clients across East Africa — real challenges, strategic solutions, measurable results.",
      },
      { property: "og:title", content: "Featured Work" },
      {
        property: "og:description",
        content: "Selected case studies from our integrated marketing communications work.",
      },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <>
      <section className="hero-radial">
        <div className="container-prose py-24 lg:py-28">
          <Reveal>
            <p className="eyebrow">Featured Work</p>
            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.08] sm:text-6xl">
              Real challenges. Strategic solutions.
              <br />
              <span className="gold-text">Measurable results.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              A selection of recent work across financial services, government, agriculture and
              youth development — delivered for clients across East Africa.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-prose py-20">
        <StaggerGroup className="space-y-8">
          {caseStudies.map((c, i) => (
            <StaggerItem key={c.slug}>
              <article className="card-luxe grid gap-8 p-8 md:grid-cols-[1fr_1.5fr] md:p-10">
                <div className="flex flex-col">
                  <span className="tag-sector self-start text-xs">{c.industry}</span>
                  <h2 className="mt-6 font-display text-3xl">{c.client}</h2>
                  <div className="mt-auto pt-8">
                    <div className="font-display text-6xl gold-text">{c.metric}</div>
                    <p className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                      {c.metricLabel}
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="eyebrow">Challenge</p>
                    <p className="mt-3 text-foreground/90">{c.challenge}</p>
                  </div>
                  <div>
                    <p className="eyebrow">Strategy</p>
                    <p className="mt-3 text-foreground/90">{c.strategy}</p>
                  </div>
                  <div>
                    <p className="eyebrow">Outcome</p>
                    <p className="mt-3 text-foreground/90">{c.secondary}</p>
                  </div>
                  <Link to="/contact" className="btn-base btn-ghost mt-2">
                    Discuss a similar brief <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
    </>
  );
}
