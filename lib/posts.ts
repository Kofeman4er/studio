// lib/posts.ts
export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;   // ISO or readable
  author: string;
  image: string;  // /public path
  content: string[]; // simple paragraphs
};

export const POSTS: Post[] = [
  {
    slug: "shopify-theme-customization",
    title: "5 Tips for Better Shopify Theme Customization",
    excerpt:
      "Learn how to tweak your Shopify theme for better performance, faster load times, and higher conversions.",
    date: "2025-08-05",
    author: "Jane Doe",
    image: "/images/blog/theme-customization.jpeg",
    content: [
      "Customizing a Shopify theme should balance brand, speed, and maintainability. These are five practices we use on every project.",
      "1) Go section-first: build reusable sections/blocks so your team can ship pages without dev time.",
      "2) Keep performance budgets: watch Core Web Vitals, compress media, audit apps regularly.",
      "3) Tokenize design: define colors, type, spacing as tokens for consistency.",
      "4) Accessibility by default: semantic HTML, focus states, color contrast, proper labels.",
      "5) Version control & CI: preview on a staging theme and run checks before going live.",
    ],
  },
  {
    slug: "cro-for-shopify-stores",
    title: "Boost Conversions with Shopify CRO Best Practices",
    excerpt:
      "Conversion Rate Optimization (CRO) can make a huge difference to your revenue. Here’s how to apply it to Shopify.",
    date: "2025-07-28",
    author: "John Smith",
    image: "/images/blog/cro.jpeg",
    content: [
      "CRO works best as a continuous system: research, hypothesis, experiment, analyze, iterate.",
      "Start with research: analytics, session replays, surveys, and support tickets.",
      "Build strong hypotheses with clear metrics and expected impact.",
      "Ship small, learn fast: focus on PDP clarity, cart friction, and checkout confidence.",
    ],
  },
  {
    slug: "shopify-migration-guide",
    title: "The Ultimate Guide to Shopify Migration",
    excerpt:
      "Thinking of moving to Shopify from WooCommerce, Magento, or BigCommerce? This guide covers everything you need.",
    date: "2025-07-10",
    author: "Jane Doe",
    image: "/images/blog/migration.jpeg",
    content: [
      "Migrations are risk management: preserve SEO, analytics, and operations while improving performance.",
      "Inventory URLs and create a redirect map—test thoroughly on staging.",
      "Ensure analytics parity (GA4/pixels) and validate events post-cutover.",
      "Pick a low-traffic cutover window, monitor, and keep a rollback plan ready.",
    ],
  },
  {
    slug: "balooning",
    title: "Ballooning App & Theme Costs",
    excerpt:
      "Why it matters: Many merchants find themselves paying for multiple apps and premium themes just to add basic features—sometimes costing more than the Shopify plan itself.",
    date: "2025-08-05",
    author: "Jane Doe",
    image: "/images/blog/theme-customization.jpeg",
    content: [
      "Topic idea: “When ‘free’ isn’t free: managing surprise costs from Shopify apps and themes”",
    ],
  },
];
