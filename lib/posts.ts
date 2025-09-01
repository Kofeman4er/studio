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
    image: "/images/blog/theme-customization.png",
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
    image: "/images/blog/cro.png",
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
    image: "/images/blog/migration.png",
    content: [
      "Migrations are risk management: preserve SEO, analytics, and operations while improving performance.",
      "Inventory URLs and create a redirect map—test thoroughly on staging.",
      "Ensure analytics parity (GA4/pixels) and validate events post-cutover.",
      "Pick a low-traffic cutover window, monitor, and keep a rollback plan ready.",
    ],
  },
  {
  "slug": "costs",
  "title": "When ‘free’ isn’t free: managing surprise costs from Shopify apps and themes",
  "excerpt": "Why it matters: Many merchants find themselves paying for multiple apps and premium themes just to add basic features—sometimes costing more than the Shopify plan itself.",
  "date": "2025-08-05",
  "author": "Jane Doe",
  "image": "/images/blog/when-free-isnt-free.png",
  "content": [
    "Many Shopify merchants start their journey with the promise of free themes and affordable apps. But before long, they find themselves paying more in hidden costs than their actual Shopify subscription.",
    "👉 A “free” theme that requires multiple premium apps to be functional.",
    "👉 An app that begins free but charges per transaction or after a usage threshold.",
    "👉 Upgrades that lock essential features behind costly plans.",
    "These surprise expenses can quietly balloon your monthly costs and eat into your margins.",
    "💡 Here are a few ways to manage them:",
    "1. Audit your apps regularly – remove what you don’t use.",
    "2. Prioritize multifunction apps – one tool that solves multiple needs.",
    "3. Customize your theme smartly – avoid relying too much on paid add-ons.",
    "4. Watch free trials – set reminders before they convert into charges.",
    "5. Plan for scaling – check how pricing changes as your store grows.",
    "At the end of the day, “free” isn’t always free—but with careful planning, you can keep your store lean, efficient, and cost-effective.",
    "✨ How do you manage Shopify’s app & theme costs in your store?"
  ]
}
];
