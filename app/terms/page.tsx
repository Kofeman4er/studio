import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions — Your Agency",
  description:
    "The rules and guidelines for using our website, services, newsletter, and apps.",
};

export default function Page() {
  return (
    <article className="bg-white">
      <section className="container mx-auto px-4 py-12">
        {/* Hero */}
        <header className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Terms & Conditions
          </h1>
          <p className="mt-3 text-slate-600">
            By accessing or using this website, you agree to the following terms
            and conditions. Please read them carefully before using our
            services.
          </p>
        </header>

        {/* Use of Website */}
        <section className="mt-10 max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Use of Website
          </h2>
          <p className="mt-3 text-slate-700">
            You agree to use our website and services only for lawful purposes
            and in a way that does not infringe on the rights of, restrict or
            inhibit anyone else’s use of the website. Prohibited behavior
            includes harassing or causing distress or inconvenience to any other
            user, transmitting obscene or offensive content, or disrupting the
            normal flow of dialogue within our website.
          </p>
        </section>

        {/* Intellectual Property */}
        <section className="mt-10 max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Intellectual Property
          </h2>
          <p className="mt-3 text-slate-700">
            All content on this site, including but not limited to text,
            graphics, logos, icons, images, and software, is the property of our
            agency or its content suppliers and is protected by international
            copyright laws. Unauthorized use, reproduction, or distribution of
            this content is strictly prohibited.
          </p>
        </section>

        {/* Newsletter & Subscriptions */}
        <section className="mt-10 max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Newsletter & Subscriptions
          </h2>
          <p className="mt-3 text-slate-700">
            By subscribing to our newsletter, you consent to receive periodic
            emails from us. You may unsubscribe at any time by following the
            unsubscribe link included in our emails. We are not responsible if
            emails are blocked by your spam filters or other security measures.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section className="mt-10 max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Limitation of Liability
          </h2>
          <p className="mt-3 text-slate-700">
            We do not guarantee that our website will be secure or free from
            bugs, viruses, or errors. To the fullest extent permitted by law, we
            exclude all liability for any loss or damage, direct or indirect,
            arising from your use of, or inability to use, our website or
            services.
          </p>
        </section>

        {/* External Links */}
        <section className="mt-10 max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            External Links
          </h2>
          <p className="mt-3 text-slate-700">
            Our website may contain links to third-party websites. We are not
            responsible for the content, privacy policies, or practices of any
            third-party sites. Accessing third-party websites is at your own
            risk.
          </p>
        </section>

        {/* Changes to Terms */}
        <section className="mt-10 max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Changes to Terms
          </h2>
          <p className="mt-3 text-slate-700">
            We may update these Terms & Conditions from time to time. Any
            changes will be posted on this page, and your continued use of the
            website constitutes your acceptance of the updated terms.
          </p>
        </section>

        {/* Governing Law */}
        <section className="mt-10 max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Governing Law
          </h2>
          <p className="mt-3 text-slate-700">
            These Terms & Conditions shall be governed by and construed in
            accordance with the laws of your jurisdiction. Any disputes arising
            shall be subject to the exclusive jurisdiction of the courts in that
            jurisdiction.
          </p>
        </section>

        {/* Contact */}
        <section className="mt-10 max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Contact Us
          </h2>
          <p className="mt-3 text-slate-700">
            If you have any questions about these Terms & Conditions, please
            contact us at [your email/contact details].
          </p>
        </section>

        {/* Optional last-updated note */}
        <p className="mt-12 text-xs text-slate-500">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </section>
    </article>
  );
}
