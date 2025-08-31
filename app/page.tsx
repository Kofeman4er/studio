// app/page.tsx
import Hero from "@/components/sections/Hero";
import WhyUs from "@/components/sections/WhyUs";
import LogoCloud from "@/components/sections/LogoCloud";
import CaseStudyTeaser from "@/components/sections/CaseStudyTeaser";
import About from "@/components/sections/About";
import ConceptHighlights from "@/components/sections/ConceptHighlights";
import HeroDivider from "@/components/sections/HeroDivider";
import ServicesShowcaseHome from "@/components/sections/ServicesShowcaseHome";



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
      <HeroDivider />
      <About />
      <ConceptHighlights />
      <WhyUs />
      <ServicesShowcaseHome />

    </>
  );
}
