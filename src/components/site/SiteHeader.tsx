import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { services, industries } from "@/lib/site-data";

const mainLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/leadership", label: "Leadership" },
  { to: "/insights", label: "Insights" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <div className="container-prose flex h-[68px] items-center justify-between">
        <Link to="/" className="group flex items-baseline gap-2" aria-label="Exclamation Marketing — home">
          <span className="font-display text-xl text-gold">Exclamation</span>
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground group-hover:text-gold transition-colors">
            Marketing
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {mainLinks.map((l) => (
            <Link key={l.to} to={l.to} className="nav-link" activeOptions={{ exact: l.to === "/" }}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-base btn-gold !min-h-[42px] !px-5 text-sm">
            Get Started
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 text-gold lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-background">
          <nav className="container-prose flex flex-col gap-1 py-4" aria-label="Mobile">
            {mainLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base text-foreground hover:bg-surface hover:text-gold"
              >
                {l.label}
              </Link>
            ))}
            <div className="my-2 gold-divider" />
            <p className="px-3 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Services</p>
            {services.slice(0, 6).map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-gold"
              >
                {s.name}
              </Link>
            ))}
            <p className="mt-3 px-3 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Industries</p>
            {industries.slice(0, 6).map((s) => (
              <Link
                key={s.slug}
                to="/industries/$slug"
                params={{ slug: s.slug }}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-gold"
              >
                {s.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-base btn-gold mt-4">
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
