// components/sections/About.tsx
import { Lightbulb, Code, Rocket, Headphones } from "lucide-react";

const SERVICES = [
  {
    title: "Custom Development",
    description:
      "Tailored Shopify solutions built for your business growth. No cookie-cutter templates.",
    icon: Code,
  },
  {
    title: "Strategy & Consultation",
    description:
      "We align technology with your business goals to unlock new opportunities.",
    icon: Lightbulb,
  },
  {
    title: "Fast Delivery",
    description:
      "We move at the speed of your business, delivering updates and features quickly.",
    icon: Rocket,
  },
  {
    title: "Ongoing Support",
    description:
      "Reliable, friendly support when you need it mostensuring your store runs smoothly.",
    icon: Headphones,
  },
];

export default function About() {
  return (
    <section className="relative border-t border-slate-200 bg-white">
      <div className="container mx-auto px-4 py-20">
        {/* Intro */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
            About Us
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What We Do
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            At <span className="font-semibold text-sky-600">Devsolutify</span>,
            we help businesses scale with Shopify. From strategy to development
            and ongoing support, we’re your reliable partner for growth-focused
            e-commerce.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="flex flex-col items-center text-center rounded-2xl border border-slate-200 p-6 shadow-sm transition hover:shadow-md"
            >
              <service.icon className="h-10 w-10 text-sky-500" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
