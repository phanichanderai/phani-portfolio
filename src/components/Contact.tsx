import React, { useState } from "react";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically integrate EmailJS or another email service
    setSubmitted(true);
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-blue-50 py-20">
      <h2 className="text-4xl font-bold text-blue-600 mb-8">Contact</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded-lg p-8 w-full max-w-md flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded px-4 py-2"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded px-4 py-2 h-32"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold rounded px-6 py-2 hover:bg-blue-700 transition"
        >
          Send Message
        </button>
        {submitted && (
          <p className="text-green-600 mt-2">Thank you for reaching out!</p>
        )}
      </form>
    </section>
  );
};

export default Contact;
