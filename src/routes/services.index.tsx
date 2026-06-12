import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Megaphone, Sparkles, LineChart, CalendarCheck, Users, Globe2, Compass, Handshake, ArrowRight,
} from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/motion";
import { services } from "@/lib/site-data";

const iconMap = { Megaphone, Sparkles, LineChart, CalendarCheck, Users, Globe2, Compass, Handshake };

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services | Exclamation Marketing Ltd" },
      {
        name: "description",
        content:
          "Eight integrated disciplines — Strategic Communications, PR, Advertising, Digital Marketing, Event Management, Experiential Marketing, Stakeholder Engagement and Development Communications.",
      },
      { property: "og:title", content: "Our Services" },
      { property: "og:description", content: "Integrated marketing communications services across East Africa." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <section className="hero-radial">
        <div className="container-prose py-24 lg:py-28">
          <Reveal>
            <p className="eyebrow">Services</p>
            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.08] sm:text-6xl">
              Integrated disciplines, <span className="gold-text">one accountable team.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              From board-level communications strategy to multi-market activations — eight
              services, one integrated team, measurable outcomes.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-prose py-20">
        <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap] ?? Sparkles;
            return (
              <StaggerItem key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="card-luxe group flex h-full flex-col p-7"
                >
                  <Icon className="size-8 text-gold" />
                  <h2 className="mt-6 font-display text-2xl">{s.name}</h2>
                  <p className="mt-3 text-sm text-muted-foreground">{s.tagline}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium text-gold">
                    Explore <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </section>
    </>
  );
}
