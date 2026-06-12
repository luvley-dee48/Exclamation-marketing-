import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  Megaphone, Sparkles, LineChart, CalendarCheck, Users, Globe2, Compass, Handshake,
  Check, ArrowRight,
} from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/motion";
import { services } from "@/lib/site-data";

const iconMap = { Megaphone, Sparkles, LineChart, CalendarCheck, Users, Globe2, Compass, Handshake };

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    const s = loaderData?.service;
    return {
      meta: [
        { title: `${s?.name ?? "Service"} | Exclamation Marketing Ltd` },
        { name: "description", content: s?.tagline ?? "" },
        { property: "og:title", content: `${s?.name ?? "Service"} — Exclamation Marketing` },
        { property: "og:description", content: s?.intro ?? "" },
        { property: "og:url", content: `/services/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
    };
  },
  component: ServicePage,
  notFoundComponent: () => (
    <div className="container-prose py-32 text-center">
      <h1 className="font-display text-4xl">Service not found</h1>
      <Link to="/services" className="btn-base btn-gold mt-6">All services</Link>
    </div>
  ),
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Sparkles;

  return (
    <>
      <section className="hero-radial">
        <div className="container-prose py-24 lg:py-28">
          <Reveal>
            <Link to="/services" className="nav-link text-xs">
              ← All services
            </Link>
            <div className="mt-8 flex items-center gap-4">
              <span className="inline-flex size-14 items-center justify-center rounded-md border border-gold/40 bg-surface text-gold">
                <Icon className="size-7" />
              </span>
              <p className="eyebrow !mt-0">Service</p>
            </div>
            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.08] sm:text-6xl">
              {service.name}
            </h1>
            <p className="mt-5 max-w-2xl font-display text-2xl gold-text">{service.tagline}</p>
            <p className="mt-6 max-w-3xl text-lg text-muted-foreground">{service.intro}</p>
            <div className="mt-10">
              <Link to="/contact" className="btn-base btn-gold">
                Request a strategy session <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-prose py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <p className="eyebrow">What We Deliver</p>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl">Capabilities, end to end.</h2>
            <ul className="mt-8 space-y-4">
              {service.deliverables.map((d: string) => (
                <li key={d} className="flex gap-3">
                  <Check className="mt-1 size-5 shrink-0 text-gold" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card-luxe p-8">
              <p className="eyebrow">Results</p>
              <p className="mt-5 font-display text-3xl">{service.metric}</p>
              <div className="gold-divider my-8" />
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Industries We Serve
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.industries.map((i: string) => (
                  <span key={i} className="tag-sector text-xs">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-prose pb-24">
        <p className="eyebrow">Other Disciplines</p>
        <h2 className="mt-5 font-display text-3xl">Explore the rest of our offer.</h2>
        <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.filter((s) => s.slug !== service.slug).slice(0, 3).map((s) => (
            <StaggerItem key={s.slug}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="card-luxe block p-6"
              >
                <h3 className="font-display text-xl">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.tagline}</p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
    </>
  );
}
