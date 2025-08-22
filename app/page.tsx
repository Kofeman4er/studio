// app/page.tsx
import Hero from "@/components/sections/Hero";
import WhyUs from "@/components/sections/WhyUs";
import ServicesShowcase from "@/components/sections/ServicesShowcase";
import LogoCloud from "@/components/sections/LogoCloud";
import CaseStudyTeaser from "@/components/sections/CaseStudyTeaser";


export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Shopify Development"
        heading={"YOUR ULTIMATE\nSHOPIFY PARTNER"}
        subheading="Custom themes, speed, CRO, and integrations—built to scale."
        primaryCta={{ label: "Get Started", href: "/contact?service=custom-dev#intake" }}
        secondaryCta={{ label: "How it works", href: "/process", variant: "secondary" }}
        slides={[
          { src: "/images/hero/slide-1.jpg", alt: "Design board" },
          { src: "/images/hero/slide-2.jpg", alt: "Storefront mock" },
          { src: "/images/hero/slide-3.jpg", alt: "Checkout concept" },
        ]}
      />
      <WhyUs />
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Shopify experts
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              If you're ready to design, develop or scale on Shopify we have the solution.
            </p>
          </div>
        </div>
      <ServicesShowcase />

    </>
  );
}
