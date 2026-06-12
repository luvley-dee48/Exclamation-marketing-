import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, Linkedin, Facebook, Check } from "lucide-react";
import { Reveal } from "@/components/site/motion";
import { SITE, services } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Exclamation Marketing Ltd" },
      {
        name: "description",
        content:
          "Start your project today. Speak to our team in Nairobi about integrated marketing communications across East Africa.",
      },
      { property: "og:title", content: "Contact Exclamation Marketing" },
      { property: "og:description", content: "Start your project today." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  company: z.string().trim().min(1, "Required").max(120),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(40).optional(),
  service: z.string().min(1, "Select a service"),
  message: z.string().trim().min(10, "Tell us a little more").max(2000),
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) errs[issue.path[0] as string] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <>
      <section className="hero-radial">
        <div className="container-prose py-24 lg:py-28">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.08] sm:text-6xl">
              Start your project <span className="gold-text">today.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Ready to elevate your brand across Africa? Our team delivers integrated marketing
              communications that drive measurable results.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-prose pb-24">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="card-luxe p-8 md:p-10"
              aria-label="Contact form"
            >
              <h2 className="font-display text-3xl">Tell us about your project</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                We respond to enquiries within one business day.
              </p>

              {submitted ? (
                <div className="mt-8 flex items-start gap-3 rounded-md border border-gold/40 bg-surface p-6">
                  <Check className="mt-1 size-5 shrink-0 text-gold" />
                  <div>
                    <p className="font-medium">Thank you — your message is on its way.</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      We'll respond within 24 hours. For urgent matters please call{" "}
                      <a href={SITE.phoneHref} className="text-gold">{SITE.phone}</a>.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" error={errors.name} required />
                  <Field label="Company" name="company" error={errors.company} required />
                  <Field label="Email" name="email" type="email" error={errors.email} required />
                  <Field label="Phone" name="phone" type="tel" error={errors.phone} />
                  <div className="sm:col-span-2">
                    <Label htmlFor="service" required>Service interested in</Label>
                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                      className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:border-gold"
                    >
                      <option value="" disabled>Select an option…</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.name}>{s.name}</option>
                      ))}
                      <option value="Multiple Services">Multiple Services</option>
                      <option value="Not Sure">Not Sure</option>
                    </select>
                    {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="message" required>Project details</Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your goals, audience and timeline…"
                      className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:border-gold"
                    />
                    {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                  </div>
                  <button type="submit" className="btn-base btn-gold sm:col-span-2">
                    Get Started
                  </button>
                </div>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card-luxe p-8">
              <h2 className="font-display text-2xl">Contact information</h2>
              <ul className="mt-6 space-y-5 text-sm">
                <InfoItem icon={<MapPin className="size-4 text-gold" />} label="Office">
                  {SITE.address}
                </InfoItem>
                <InfoItem icon={<Phone className="size-4 text-gold" />} label="Phone">
                  <a className="hover:text-gold" href={SITE.phoneHref}>{SITE.phone}</a>
                </InfoItem>
                <InfoItem icon={<Mail className="size-4 text-gold" />} label="Email">
                  <a className="break-all hover:text-gold" href={`mailto:${SITE.email}`}>
                    {SITE.email}
                  </a>
                </InfoItem>
                <InfoItem icon={<Clock className="size-4 text-gold" />} label="Hours">
                  {SITE.hours}
                </InfoItem>
              </ul>

              <div className="gold-divider my-8" />

              <div className="aspect-[16/10] w-full overflow-hidden rounded-md border border-white/10">
                <iframe
                  title="Office map — Westlands, Nairobi"
                  src="https://www.google.com/maps?q=Mayfair%20Business%20Centre%20Parklands%20Road%20Westlands%20Nairobi&output=embed"
                  className="size-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-6 flex items-center gap-3">
                <a aria-label="LinkedIn" href="https://www.linkedin.com" target="_blank" rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-primary-foreground transition">
                  <Linkedin className="size-4" />
                </a>
                <a aria-label="Facebook" href="https://www.facebook.com" target="_blank" rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-primary-foreground transition">
                  <Facebook className="size-4" />
                </a>
              </div>

              <p className="mt-6 text-sm text-muted-foreground">
                Or call us directly:{" "}
                <a className="text-gold" href={SITE.phoneHref}>{SITE.phone}</a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Label({
  htmlFor, required, children,
}: { htmlFor: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
      {children}
      {required && <span className="ml-1 text-gold">*</span>}
    </label>
  );
}

function Field({
  label, name, type = "text", error, required,
}: { label: string; name: string; type?: string; error?: string; required?: boolean }) {
  return (
    <div>
      <Label htmlFor={name} required={required}>{label}</Label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={
          name === "email" ? "email" : name === "phone" ? "tel" : name === "name" ? "name" : "organization"
        }
        className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:border-gold"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function InfoItem({
  icon, label, children,
}: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-1 inline-flex size-7 shrink-0 items-center justify-center rounded-md border border-gold/30 bg-background">
        {icon}
      </span>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
        <div className="mt-1 text-foreground/90">{children}</div>
      </div>
    </li>
  );
}
