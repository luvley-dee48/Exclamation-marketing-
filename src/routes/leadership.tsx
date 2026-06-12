import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Flag, Leaf, Landmark, Shield, Award, Compass, HeartHandshake, GraduationCap, Mail,
} from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/motion";
import { boardAffiliations, SITE } from "@/lib/site-data";

const iconMap = { Flag, Leaf, Landmark, Shield, Award, Compass, HeartHandshake };

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership | Exclamation Marketing Ltd" },
      {
        name: "description",
        content:
          "Susan Omanga M.B.S. — Founder, Owner & CEO. Two and a half decades of strategic counsel, with board and trustee roles across diplomacy, finance and philanthropy.",
      },
      { property: "og:title", content: "Leadership — Susan Omanga, M.B.S." },
      { property: "og:description", content: "Founder of Exclamation Marketing Ltd." },
      { property: "og:url", content: "/leadership" },
    ],
    links: [{ rel: "canonical", href: "/leadership" }],
  }),
  component: LeadershipPage,
});

function LeadershipPage() {
  return (
    <>
      <section className="hero-radial">
        <div className="container-prose grid items-center gap-12 py-24 lg:grid-cols-[1fr_1.1fr] lg:py-28">
          <Reveal>
            <div className="card-luxe overflow-hidden p-10">
              <div className="aspect-[4/5] w-full rounded-md bg-[radial-gradient(circle_at_30%_20%,_color-mix(in_oklab,_var(--gold)_25%,_transparent),_var(--surface-2))] flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto flex size-36 items-center justify-center rounded-full border border-gold/40 bg-background font-display text-6xl text-gold">
                    SO
                  </div>
                  <p className="mt-6 font-display text-2xl">Susan Omanga</p>
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Founder · CEO
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow">Leadership</p>
            <h1 className="mt-6 font-display text-5xl leading-[1.08] sm:text-6xl">
              Susan Omanga, <span className="gold-text">M.B.S.</span>
            </h1>
            <p className="mt-3 text-gold">Owner &amp; CEO · Founder</p>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Susan founded Exclamation Marketing in October 1998 with a conviction that East
                African organisations deserved communications partners of international calibre,
                rooted in local insight.
              </p>
              <p>
                Over more than two and a half decades, she has built a senior-led integrated agency
                trusted by leading corporates, government institutions and development partners
                across six markets.
              </p>
              <p>
                Beyond Exclamation, Susan holds senior board and trustee positions across
                diplomacy, finance, youth development and philanthropy — bringing a uniquely
                multidisciplinary perspective to client counsel.
              </p>
            </div>
            <div className="mt-8 inline-flex items-center gap-3 rounded-md border border-gold/30 bg-surface px-4 py-3 text-sm">
              <GraduationCap className="size-4 text-gold" />
              Rocky Mountain College · Billings, Montana, USA
            </div>
            <div className="mt-8">
              <Link to="/contact" className="btn-base btn-gold">
                <Mail className="size-4" /> Connect with Susan
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-prose py-20">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Board &amp; Trustee Affiliations</p>
          <h2 className="mt-5 font-display text-4xl">Service beyond the agency.</h2>
        </Reveal>
        <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {boardAffiliations.map((b) => {
            const Icon = iconMap[b.icon as keyof typeof iconMap] ?? Award;
            return (
              <StaggerItem key={b.title}>
                <div className="card-luxe flex h-full items-start gap-4 p-6">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-gold/40 text-gold">
                    <Icon className="size-5" />
                  </span>
                  <p className="font-medium text-foreground">{b.title}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </section>

      <section className="bg-surface py-20">
        <div className="container-prose">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Executive Team</p>
            <h2 className="mt-5 font-display text-4xl">A senior-led integrated team.</h2>
            <p className="mt-5 text-muted-foreground">
              Discipline leads across strategy, creative, public relations, digital, events and
              development communications — operating across Nairobi and the wider region.
            </p>
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Head of Strategy",
              "Creative Director",
              "PR & Media Lead",
              "Digital Lead",
              "Events & Experiential Lead",
              "Development Communications Lead",
              "Client Services Director",
              "Regional Partnerships",
            ].map((role) => (
              <StaggerItem key={role}>
                <div className="card-luxe p-6 text-center">
                  <div className="mx-auto flex size-14 items-center justify-center rounded-full border border-gold/30 text-gold font-display">
                    EM
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">Team Member</p>
                  <p className="font-medium">{role}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal className="mt-12 text-sm text-muted-foreground">
            Want to know more about a specific discipline lead?{" "}
            <Link to="/contact" className="text-gold hover:underline">
              Get in touch
            </Link>
            .
          </Reveal>
        </div>
      </section>
    </>
  );
}
