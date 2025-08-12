// app/page.tsx
import Hero from "@/components/sections/Hero";
import LogoCloud from "@/components/sections/LogoCloud";
import CaseStudyTeaser from "@/components/sections/CaseStudyTeaser";


export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Shopify Plus • Design • Dev"
        title="We build high-converting Shopify stores for ambitious brands"
        subtitle="From theme design to custom apps and complex migrations — shipped fast, optimized for growth."
        primaryCta={{ label: "Start a Project", href: "/contact" }}
        secondaryCta={{ label: "See Our Work", href: "/portfolio" }}
        metrics={[
          { value: "+37%", label: "Avg. CVR lift" },
          { value: "200+", label: "Projects shipped" },
          { value: "4.9★", label: "Client rating" },
        ]}
        logos={[
          { src: "/badges/shopify-partner.svg", alt: "Shopify Partner" },
          { src: "/badges/plus.svg", alt: "Shopify Plus" },
          { src: "/badges/klaviyo.svg", alt: "Klaviyo" },
        ]}
        image={{ src: "/images/hero/storefront.png", alt: "Storefront mockup", priority: true }}
      />
      <LogoCloud
        heading="Brands that trust our Shopify work"
        subheading="From fast-moving startups to enterprise Shopify Plus merchants."
        logos={[
          { src: "/badges/shopify-partner.svg", alt: "Shopify Partner", width: 120, height: 40 },
          { src: "/badges/plus.svg", alt: "Shopify Plus", width: 120, height: 40 },
          { src: "/badges/klaviyo.svg", alt: "Klaviyo", width: 120, height: 40, href: "https://www.klaviyo.com" },
          { src: "/badges/meta.svg", alt: "Meta", width: 120, height: 40 },
          { src: "/badges/google.svg", alt: "Google", width: 120, height: 40 },
          { src: "/badges/algolia.svg", alt: "Algolia", width: 120, height: 40 },
        ]}
        grayscale
        cta={{ label: "See case studies", href: "/portfolio" }}
      />
      <CaseStudyTeaser
        href="/portfolio/acme-cvr-lift"
        title="ACME saw +37% conversion with a fast, modular Shopify theme"
        summary="We rebuilt ACME’s storefront with a modular section-first theme, improving speed and unlocking rapid iteration."
        image={{ src: "/images/portfolio/acme-hero.jpg", alt: "ACME storefront mockup", priority: true }}
        client="ACME"
        tags={[{ label: "Shopify Plus" }, { label: "Fashion" }]}
        metrics={[
          { value: "+37%", label: "Conversion rate" },
          { value: "2.1s", label: "LCP on 4G" },
          { value: "-32%", label: "Bounce rate" },
        ]}
        quote={{
          text: "They moved fast, communicated clearly, and the numbers speak for themselves.",
          author: "Sam Rivera",
          role: "Ecommerce Director, ACME",
        }}
      />
      {/* …rest of page sections */}
    </>
  );
}
