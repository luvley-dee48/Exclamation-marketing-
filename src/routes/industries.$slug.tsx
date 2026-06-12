import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  Landmark, Smartphone, Building2, Heart, Globe2, Cpu, Sprout, Stethoscope,
  GraduationCap, HardHat, ArrowRight, Check,
} from "lucide-react";
import { Reveal } from "@/components/site/motion";
import { industries } from "@/lib/site-data";

const iconMap = {
  Landmark, Smartphone, Building2, Heart, Globe2, Cpu, Sprout, Stethoscope, GraduationCap, HardHat,
};

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const industry = industries.find((s) => s.slug === params.slug);
    if (!industry) throw notFound();
    return { industry };
  },
  head: ({ loaderData, params }) => {
    const i = loaderData?.industry;
    return {
      meta: [
        { title: `${i?.name ?? "Industry"} | Exclamation Marketing Ltd` },
        { name: "description", content: i?.intro ?? "" },
        { property: "og:title", content: `${i?.name ?? "Industry"} — Exclamation Marketing` },
        { property: "og:description", content: i?.intro ?? "" },
        { property: "og:url", content: `/industries/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/industries/${params.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="container-prose py-32 text-center">
      <h1 className="font-display text-4xl">Industry not found</h1>
      <Link to="/industries" className="btn-base btn-gold mt-6">All industries</Link>
    </div>
  ),
  component: IndustryPage,
});

function IndustryPage() {
  const { industry } = Route.useLoaderData();
  const Icon = iconMap[industry.icon as keyof typeof iconMap] ?? Globe2;

  return (
    <>
      <section className="hero-radial">
        <div className="container-prose py-24 lg:py-28">
          <Reveal>
            <Link to="/industries" className="nav-link text-xs">← All industries</Link>
            <div className="mt-8 flex items-center gap-4">
              <span className="inline-flex size-14 items-center justify-center rounded-md border border-gold/40 bg-surface text-gold">
                <Icon className="size-7" />
              </span>
              <p className="eyebrow !mt-0">Industry</p>
            </div>
            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.08] sm:text-6xl">
              {industry.name}
            </h1>
            <p className="mt-5 max-w-3xl font-display text-2xl gold-text">
              Expert marketing communications for {industry.name.toLowerCase()}.
            </p>
            <p className="mt-6 max-w-3xl text-lg text-muted-foreground">{industry.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="container-prose py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Our Approach</p>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl">How we work in this sector.</h2>
            <ul className="mt-8 space-y-4">
              {industry.approach.map((a) => (
                <li key={a} className="flex gap-3">
                  <Check className="mt-1 size-5 shrink-0 text-gold" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card-luxe p-8">
              <p className="eyebrow">Services We Deliver</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {industry.services.map((s) => (
                  <span key={s} className="tag-sector text-xs">{s}</span>
                ))}
              </div>
              <div className="gold-divider my-8" />
              <Link to="/case-studies" className="btn-base btn-ghost">
                See our {industry.name} work <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-prose pb-24">
        <Reveal className="card-luxe flex flex-col items-start gap-6 p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-display text-2xl">Building in {industry.name}?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Let's talk about your communications strategy.
            </p>
          </div>
          <Link to="/contact" className="btn-base btn-gold">
            Start a conversation <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
