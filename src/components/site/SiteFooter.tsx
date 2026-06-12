import { Link } from "@tanstack/react-router";
import { Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { SITE, services } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-white/10 bg-surface">
      <div className="container-prose grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="font-display text-2xl text-gold">
            Exclamation Marketing
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Integrated marketing communications across East Africa. Strategic consultancy meets
            creative excellence — since 1998.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              aria-label="Facebook"
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
            >
              <Facebook className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.25em] text-gold">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {[
              { to: "/about", label: "About Us" },
              { to: "/case-studies", label: "Case Studies" },
              { to: "/leadership", label: "Leadership" },
              { to: "/insights", label: "Insights" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.25em] text-gold">Services</h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="hover:text-gold transition-colors"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.25em] text-gold">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold" />
              <a className="hover:text-gold" href={SITE.phoneHref}>
                {SITE.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold" />
              <a className="hover:text-gold break-all" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-prose flex flex-col items-start justify-between gap-3 py-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>Nairobi · Kampala · Dar es Salaam · Kigali · Bujumbura · Juba</p>
        </div>
      </div>
    </footer>
  );
}
