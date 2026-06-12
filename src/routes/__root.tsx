import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="hero-radial flex min-h-dvh items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow justify-center">Error</p>
        <h1 className="mt-6 font-display text-7xl text-foreground">
          4<span className="gold-text">0</span>4
        </h1>
        <h2 className="mt-3 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-base btn-gold mt-7">
          Return home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="hero-radial flex min-h-dvh items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-base btn-gold"
          >
            Try again
          </button>
          <a href="/" className="btn-base btn-ghost">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Exclamation Marketing Ltd",
  url: "/",
  description:
    "Award-winning integrated marketing communications house across East Africa.",
  foundingDate: "1998",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mayfair Business Centre, Off Parklands Road, Westlands",
    addressLocality: "Nairobi",
    postalCode: "00621",
    addressCountry: "KE",
  },
  telephone: "+254719619055",
  email: "somanga@exclamationmarketing.co.ke",
  founder: { "@type": "Person", name: "Susan Omanga M.B.S." },
  areaServed: ["Kenya", "Uganda", "Tanzania", "Rwanda", "Burundi", "South Sudan"],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Exclamation Marketing Ltd | Integrated Marketing Communications Across Africa" },
      {
        name: "description",
        content:
          "Award-winning integrated marketing communications house across Kenya, Uganda, Tanzania, Rwanda, Burundi and South Sudan. 26+ years of strategic consultancy and creative excellence.",
      },
      { name: "author", content: "Exclamation Marketing Ltd" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Exclamation Marketing Ltd" },
      { property: "og:title", content: "Exclamation Marketing Ltd" },
      {
        property: "og:description",
        content:
          "Integrated marketing communications across East Africa. 26+ years of strategic and creative excellence.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0A0A0A" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(orgJsonLd),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="dark min-h-dvh bg-background text-foreground antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main id="main" className="pt-[68px]">
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
