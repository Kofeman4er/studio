import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Your Agency",
  description:
    "How we collect, use, and protect your information across our website, forms, newsletter, and apps.",
};

export default function Page() {
  return (
    <article className="bg-white">
      <section className="container mx-auto px-4 py-12">
        {/* Hero */}
        <header className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Privacy
          </h1>
          <p className="mt-3 text-slate-600">
            Each time you visit our website it collects information about your visit which can be used in the following ways
          </p>
        </header>

        {/* Intro bullets */}
        <div className="mt-6 max-w-3xl">
          <ul className="list-disc pl-5 text-slate-700 space-y-2">
            <li>
              in the form of cookies that are generated automatically and stored locally on your device
            </li>
            <li>
              through data provided in an email you send via a contact form or an online form you complete including live chat.
            </li>
            <li>through subscribing to our newsletter</li>
          </ul>
          <p className="mt-4 text-slate-700">
            We know that people have legitimate concerns over sharing personal data so we want to explain how we use the data we collect about you when you use this website.
          </p>
        </div>

        {/* What data do we capture */}
        <section className="mt-10 max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            What data do we capture
          </h2>
          <p className="mt-3 text-slate-700">
            When you submit a contact form or quote request or chat we will capture the data from the form/chat widget and also capture your IP address and certain information about the browser/device you’re using. This is to enable us to cater our pricing to your currency (e.g. quoting USD for US and EUR for Europe). We also use your ip address for spam/bot blacklisting – to stop people abusing our website.
          </p>
          <p className="mt-3 text-slate-700">
            Tracking data from Google Analytics, Facebook and or other ad networks.
          </p>
          <p className="mt-3 text-slate-700">
            On subscribing to our newsletter we capture the data you enter e.g. name, email and store address.
          </p>
        </section>

        {/* How we use your data */}
        <section className="mt-10 max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            How we use your data
          </h2>
          <p className="mt-3 text-slate-700">
            The data collected by our website may be used in the following ways:
          </p>
          <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2">
            <li>
              To ensure that when you return to the website the display is more relevant to you – the information a first time visitor and a regular visitor needs to see can vary.
            </li>
            <li>
              To contact you about our services if, and only if, you have expressed an interest in receiving more details e.g. via using a contact form or live chat.
            </li>
            <li>To send you newsletter articles which you have agreed to receive.</li>
            <li>To analyse user behaviour on the website so we can take further steps to improve our website visitor experience.</li>
            <li>
              To create marketing segments and audiences which allow us to deliver display and search advertising in a highly targeted way
            </li>
            <li>To monitor the success of marketing campaigns</li>
            <li>
              For sharing with approved 3rd parties – if you have expressed an interest in receiving more information about their products or services through us. E.g. if you submit an enquiry asking about Shopify Pricing for Shopify Plus we will send your data to the Shopify Plus team. We reserve the right to share data you submit with relevant 3rd parties.
            </li>
            <li>For remarketing – via Facebook, Google and other ad networks.</li>
          </ul>
        </section>

        {/* Data Protection */}
        <section className="mt-10 max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Data Protection</h2>
          <p className="mt-3 text-slate-700">
            We are fully compliant with the provisions of the Data Protection Act 1998. We always do our best to ensure that your personal data is secure and up to date. You can contact us at any time to request a copy of all data we hold on you gathered through your use of this website. You have a right to view/update your details at any time, and we may charge any reasonable administration charges for access to this information.
          </p>
        </section>

        {/* Cookies */}
        <section className="mt-10 max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Cookies</h2>
          <p className="mt-3 text-slate-700">
            A cookie is a small text file that is often downloaded onto your computer (or mobile device) when you visit a website. They are completely harmless but are useful to both the site visitor and the website owner. Analysis of cookies generated helps us decide if any changes are needed to give a better viewing experience, for example, to distinguish between the interests of new visitors and our regulars. They also help with tracking affiliate payments and advertising.  You may view our cookie policy here.
          </p>
        </section>

        {/* Website Security */}
        <section className="mt-10 max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Website Security</h2>
          <p className="mt-3 text-slate-700">
            Our website is hosted on a secure VPS server with the most advanced technology for ensuring that you have a positive visitor experience. At the same time this arrangement also offers us a superior level of website security. We believe that we have the highest level of data protection in place, but that doesn’t mean we are blasé about all the threats lurking out there in internet land. When even government websites can fall victim to attack no business site can guarantee 100% invulnerability. Since we often have to depend on third party software and servers we cannot accept any responsibility for breaches of security resulting from this situation.
          </p>
        </section>

        {/* Apps & Data */}
        <section className="mt-10 max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Apps & Data</h2>
          <p className="mt-3 text-slate-700">
            We develop apps for ecommerce. Some of these apps are for single store usage and some are commercial usage (used on many stores). In order for our apps to function we may need to access the data on your store. In addition we may need to retrieve that data and store it (temporarily or permanently) on a secondary server to perform the functions the app is required to do.
          </p>
          <p className="mt-4 text-slate-700">In short that means we will:</p>
          <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2">
            <li>Inform you when you install the app which data we need to access and why</li>
            <li>Keep a record of all data we store</li>
            <li>Only collect the data we need (or may need)</li>
            <li>Only keep data for as long as needed</li>
            <li>Keep data accurate and up to date</li>
            <li>Take reasonable measures to ensure the data is secure</li>
            <li>Take steps to erase data at the merchants request – although we may charge a fee for this</li>
          </ul>
        </section>

        {/* Contact */}
        <section className="mt-10 max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Contact Details</h2>
          <p className="mt-3 text-slate-700">
            You may contact us at any time and one of our team will get back to you as soon as possible (unless it’s SPAM).
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
