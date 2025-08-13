"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const service = searchParams.get("service") ?? "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    service: service,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
        ...formData,
      }),
    });

    setLoading(false);

    if (res.ok) {
      router.push("/thank-you");
    } else {
      alert("Failed to send message");
    }
  };

  return (
    <section className="container mx-auto px-4 py-12 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit} className="max-w-lg space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full rounded border p-2"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full rounded border p-2"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full rounded border p-2"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="rounded bg-sky-500 px-4 py-2 text-white hover:brightness-95"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
