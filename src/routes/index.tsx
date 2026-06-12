import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Megaphone, Sparkles, LineChart, CalendarCheck, Users, Globe2, Compass, Handshake,
  ArrowRight, Check, Award, Star, Quote,
} from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem, fadeUp, stagger } from "@/components/site/motion";
import { services, industries, caseStudies, SITE } from "@/lib/site-data";

const iconMap = { Megaphone, Sparkles, LineChart, CalendarCheck, Users, Globe2, Compass, Handshake };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Exclamation Marketing Ltd | Integrated Marketing Communications Across Africa" },
      {
        name: "description",
        content:
          "Strategic consultancy and creative excellence across Kenya, Uganda, Tanzania, Rwanda, Burundi and South Sudan. 26+ years building brands across East Africa.",
      },
      { property: "og:title", content: "Exclamation Marketing Ltd" },
      {
        property: "og:description",
        content: "Integrated marketing communications across East Africa.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-radial relative overflow-hidden">
        <div className="container-prose relative grid min-h-[88vh] items-center py-24 lg:py-32">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="max-w-4xl"
          >
            <motion.p variants={fadeUp} className="eyebrow">
              Since 1998 · East Africa
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="mt-6 font-display text-5xl leading-[1.05] text-foreground sm:text-6xl lg:text-7xl"
            >
              Integrated Marketing
              <br />
              Communications
              <br />
              <span className="gold-text">Across Africa.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-lg text-muted-foreground sm:text-xl"
            >
              26+ years of strategic consultancy and creative excellence — building reputations,
              brands and businesses for clients across six East African markets.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-base btn-gold">
                Start Your Project <ArrowRight className="size-4" />
              </Link>
              <Link to="/case-studies" className="btn-base btn-ghost">
                View Case Studies
              </Link>
            </motion.div>
            <motion.ul
              variants={fadeUp}
              className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground"
            >
              {[
                "Award-Winning Agency",
                "26+ Years Experience",
                "6 East African Countries",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="size-4 text-gold" /> {t}
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
        <div className="gold-divider" />
      </section>

      {/* SERVICES */}
      <section className="container-prose py-24 lg:py-32">
        <Reveal className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Our Core Disciplines</p>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl">
              Six disciplines. <span className="gold-text">One integrated team.</span>
            </h2>
          </div>
          <Link to="/services" className="nav-link text-sm">
            All services <ArrowRight className="ml-1 inline size-4" />
          </Link>
        </Reveal>

        <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap] ?? Sparkles;
            return (
              <StaggerItem key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="card-luxe group flex h-full flex-col p-7"
                >
                  <Icon className="size-8 text-gold" />
                  <h3 className="mt-6 font-display text-2xl">{s.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.tagline}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium text-gold opacity-80 transition-opacity group-hover:opacity-100">
                    Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </section>

      {/* SECTORS */}
      <section className="bg-surface py-24 lg:py-32">
        <div className="container-prose">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Industries We Serve</p>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl">
              Built for the sectors shaping <span className="gold-text">Africa's growth.</span>
            </h2>
          </Reveal>
          <StaggerGroup className="mt-12 flex flex-wrap gap-3">
            {industries.map((s) => (
              <StaggerItem key={s.slug}>
                <Link to="/industries/$slug" params={{ slug: s.slug }} className="tag-sector">
                  {s.name}
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal className="mt-10">
            <Link to="/industries" className="nav-link text-sm">
              See our industry expertise <ArrowRight className="ml-1 inline size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="container-prose py-24 lg:py-32">
        <Reveal className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Featured Work</p>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl">
              Real challenges. <span className="gold-text">Measurable results.</span>
            </h2>
          </div>
          <Link to="/case-studies" className="nav-link text-sm">
            All case studies <ArrowRight className="ml-1 inline size-4" />
          </Link>
        </Reveal>
        <StaggerGroup className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((c) => (
            <StaggerItem key={c.slug}>
              <article className="card-luxe relative flex h-full flex-col overflow-hidden p-7">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
                <span className="tag-sector self-start text-xs">{c.industry}</span>
                <p className="mt-6 text-base text-foreground/90">{c.challenge}</p>
                <div className="mt-8">
                  <div className="font-display text-5xl text-gold">{c.metric}</div>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {c.metricLabel}
                  </p>
                </div>
                <Link to="/case-studies" className="mt-auto pt-8 text-sm font-medium text-gold">
                  Read full story →
                </Link>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* AWARDS */}
      <section className="border-y border-white/10 bg-surface/60 py-20">
        <div className="container-prose">
          <Reveal className="text-center">
            <p className="eyebrow justify-center">Award-Winning Excellence</p>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl sm:text-4xl">
              Recognised for integrated marketing communications excellence
              <span className="gold-text"> across East Africa.</span>
            </h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              "PRSK Recognition",
              "MSK Effectiveness",
              "Pan-African Reach",
              "Trusted Counsel",
            ].map((t) => (
              <StaggerItem key={t}>
                <div className="card-luxe flex flex-col items-center px-4 py-8 text-center">
                  <Award className="size-7 text-gold" />
                  <p className="mt-4 text-sm font-medium">{t}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* LEADERSHIP TEASER */}
      <section className="container-prose py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <p className="eyebrow">Leadership</p>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl">Susan Omanga, M.B.S.</h2>
            <p className="mt-2 text-gold">Founder · Owner & CEO</p>
            <p className="mt-6 max-w-xl text-muted-foreground">
              Founder of Exclamation Marketing in October 1998. Over two and a half decades of
              strategic counsel to corporates, governments and development partners across East
              Africa — combined with leadership roles in diplomacy, finance and philanthropy.
            </p>
            <div className="mt-6 flex items-start gap-3 rounded-md border border-gold/25 bg-surface/60 p-5">
              <Quote className="mt-1 size-5 shrink-0 text-gold" />
              <p className="text-sm italic text-foreground/90">
                "We deliver strategic consultancy, creative insights and operational expertise that
                drive measurable business results."
              </p>
            </div>
            <Link to="/leadership" className="btn-base btn-ghost mt-8">
              View full profile <ArrowRight className="size-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card-luxe relative overflow-hidden p-10">
              <div className="aspect-[4/5] w-full rounded-md bg-[radial-gradient(circle_at_30%_20%,_color-mix(in_oklab,_var(--gold)_25%,_transparent),_var(--surface-2))] flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto flex size-32 items-center justify-center rounded-full border border-gold/40 bg-background font-display text-5xl text-gold">
                    SO
                  </div>
                  <p className="mt-6 font-display text-xl">Susan Omanga</p>
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Founder & CEO
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_50%,_color-mix(in_oklab,_var(--gold)_22%,_transparent),_var(--background))]" />
        <div className="container-prose relative py-24 text-center lg:py-32">
          <Reveal>
            <Star className="mx-auto size-6 text-gold" />
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl sm:text-5xl">
              Ready to elevate your brand <span className="gold-text">across Africa?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Our strategic consultants and creative experts deliver measurable results — from
              Nairobi to Juba.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-base btn-gold">
                Start Your Project <ArrowRight className="size-4" />
              </Link>
              <a href={SITE.phoneHref} className="btn-base btn-ghost">
                Call {SITE.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
