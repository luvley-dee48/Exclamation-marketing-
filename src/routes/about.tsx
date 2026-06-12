import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight, Compass, Sparkles, Globe2, Target } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Exclamation Marketing Ltd — 26+ Years of Excellence" },
      {
        name: "description",
        content:
          "Founded in 1998 by Susan Omanga, Exclamation Marketing Ltd is an award-winning boutique integrated marketing communications agency serving clients across East Africa.",
      },
      { property: "og:title", content: "About Exclamation Marketing Ltd" },
      { property: "og:description", content: "26+ years of integrated marketing communications across East Africa." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "1998", title: "Founded in Nairobi", body: "Susan Omanga opens Exclamation Marketing as a boutique communications house focused on integrated strategy." },
  { year: "2010", title: "Regional Expansion", body: "Cross-border programmes for financial, government and development clients across East Africa." },
  { year: "Today", title: "Six-Country Footprint", body: "Award-winning teams serving Kenya, Uganda, Tanzania, Rwanda, Burundi and South Sudan." },
];

const values = [
  { icon: Compass, title: "Strategic Excellence", body: "Board-level counsel grounded in evidence, insight and market reality." },
  { icon: Sparkles, title: "Creative Innovation", body: "Original, distinctive ideas that earn attention and shift perception." },
  { icon: Globe2, title: "Pan-African Perspective", body: "Six markets, one team — culturally fluent execution at regional scale." },
  { icon: Target, title: "Measurable Results", body: "Every programme is built around the outcomes that move our clients' businesses." },
];

const whyUs = [
  "26+ years of unbroken client work across East Africa",
  "Integrated team — strategy, creative, PR, digital, events under one roof",
  "Senior-led: every account has C-suite attention",
  "Trusted by leading financial, government, NGO and development clients",
  "Multi-country execution from a single point of accountability",
  "Founder-led ownership culture — partnership, not vendor",
];

function AboutPage() {
  return (
    <>
      <section className="hero-radial">
        <div className="container-prose py-24 lg:py-32">
          <Reveal>
            <p className="eyebrow">Our Story</p>
            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.08] sm:text-6xl lg:text-7xl">
              26+ years of integrated <span className="gold-text">marketing excellence.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg text-muted-foreground">
              Founded in October 1998 by Susan Omanga, Exclamation Marketing has grown from a
              Nairobi boutique into an award-winning regional agency serving clients across six
              East African markets.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-prose py-20">
        <Reveal>
          <p className="eyebrow">Timeline</p>
          <h2 className="mt-5 font-display text-4xl">From 1998 to today.</h2>
        </Reveal>
        <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-3">
          {timeline.map((t) => (
            <StaggerItem key={t.year}>
              <div className="card-luxe h-full p-7">
                <div className="font-display text-4xl gold-text">{t.year}</div>
                <h3 className="mt-4 font-display text-xl">{t.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{t.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="bg-surface py-20">
        <div className="container-prose grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Why Choose Us</p>
            <h2 className="mt-5 font-display text-4xl">A senior-led agency, built for outcomes.</h2>
            <p className="mt-5 text-muted-foreground">
              Clients choose Exclamation Marketing for a rare combination: the strategic discipline
              of a consultancy, the creative range of an integrated agency, and the cultural
              fluency of a team that has worked in these markets for over two decades.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="space-y-4">
              {whyUs.map((w) => (
                <li key={w} className="flex gap-3">
                  <Check className="mt-1 size-5 shrink-0 text-gold" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="container-prose py-24">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Our Core Values</p>
          <h2 className="mt-5 font-display text-4xl">What we stand for.</h2>
        </Reveal>
        <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <StaggerItem key={v.title}>
              <div className="card-luxe h-full p-6">
                <v.icon className="size-7 text-gold" />
                <h3 className="mt-5 font-display text-xl">{v.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{v.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="container-prose pb-24">
        <Reveal className="card-luxe flex flex-col items-start justify-between gap-6 p-10 md:flex-row md:items-center">
          <div>
            <h3 className="font-display text-2xl">Meet the founder.</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Susan Omanga's full profile, board roles and philosophy.
            </p>
          </div>
          <Link to="/leadership" className="btn-base btn-gold">
            View Leadership <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
