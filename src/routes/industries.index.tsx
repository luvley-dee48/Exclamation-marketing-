import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Landmark, Smartphone, Building2, Heart, Globe2, Cpu, Sprout, Stethoscope,
  GraduationCap, HardHat, ArrowRight,
} from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/motion";
import { industries } from "@/lib/site-data";

const iconMap = {
  Landmark, Smartphone, Building2, Heart, Globe2, Cpu, Sprout, Stethoscope, GraduationCap, HardHat,
};

export const Route = createFileRoute("/industries/")({
  head: () => ({
    meta: [
      { title: "Industries | Exclamation Marketing Ltd" },
      {
        name: "description",
        content:
          "Sector expertise across financial services, fintech, government, NGOs, development partners, technology, agriculture, healthcare, education and infrastructure.",
      },
      { property: "og:title", content: "Industries we serve" },
      { property: "og:description", content: "Ten sectors. Specialist communications. Multi-country execution." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesIndex,
});

function IndustriesIndex() {
  return (
    <>
      <section className="hero-radial">
        <div className="container-prose py-24 lg:py-28">
          <Reveal>
            <p className="eyebrow">Industries</p>
            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.08] sm:text-6xl">
              Sectors shaping <span className="gold-text">Africa's growth.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Deep specialism across ten sectors — from financial services and fintech to
              government, NGOs and infrastructure. Multi-market execution from a single team.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-prose py-20">
        <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap] ?? Globe2;
            return (
              <StaggerItem key={s.slug}>
                <Link
                  to="/industries/$slug"
                  params={{ slug: s.slug }}
                  className="card-luxe group flex h-full flex-col p-7"
                >
                  <Icon className="size-8 text-gold" />
                  <h2 className="mt-6 font-display text-2xl">{s.name}</h2>
                  <p className="mt-3 text-sm text-muted-foreground">{s.intro}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-gold">
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
