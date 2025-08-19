// app/pricing/page.tsx
import Link from "next/link";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "From $1,500",
      description: "Perfect for small businesses or startups getting started on Shopify.",
      features: [
        "Basic theme setup & customization",
        "Up to 10 products configured",
        "Mobile responsive design",
        "1 month support included",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Growth",
      price: "From $5,000",
      description: "Ideal for scaling businesses looking for advanced functionality.",
      features: [
        "Custom Shopify theme development",
        "Up to 50 products configured",
        "Conversion optimization (CRO)",
        "Integration with apps (Klaviyo, Recharge, etc.)",
        "3 months support included",
      ],
      cta: "Book a Call",
      highlighted: true, // middle tier is usually highlighted
    },
    {
      name: "Enterprise",
      price: "Custom Quote",
      description: "Tailored solutions for high-volume merchants and B2B brands.",
      features: [
        "Headless Shopify development",
        "Unlimited products & custom workflows",
        "Performance optimization",
        "Migration from other platforms",
        "Ongoing dedicated support",
      ],
      cta: "Contact Us",
      highlighted: false,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Pricing Plans</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Flexible plans to fit your stage of growth. Whether you’re just getting
          started or scaling to enterprise level, we have a package designed for you.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`border rounded-lg p-8 shadow-sm flex flex-col ${
              plan.highlighted
                ? "border-yellow-400 shadow-lg scale-105"
                : "border-gray-200"
            }`}
          >
            <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
            <p className="text-3xl font-bold text-gray-900 mb-4">
              {plan.price}
            </p>
            <p className="text-gray-600 mb-6">{plan.description}</p>
            <ul className="space-y-3 flex-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <svg
                    className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className={`mt-8 inline-block text-center px-6 py-3 rounded-md font-semibold ${
                plan.highlighted
                  ? "bg-yellow-400 text-black hover:bg-yellow-500"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
