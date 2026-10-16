"use client";

import SplitTitle from "./SplitTitle";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const budget = form.get("budget");
    const message = form.get("message");

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n${budget ? "Budget: " + budget : ""}\n\n${message}`,
    );

    window.location.href = `mailto:ammarradwan03@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-section">
      <SplitTitle top="LET'S WORK" bottom="TOGETHER" />
      <form className="contact-form reveal" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" placeholder="Your Name" required />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Your@email.com"
            required
          />
        </label>
        <label>
          <span>
            Budget <span style={{ color: "var(--muted)" }}>(Optional)</span>
          </span>
          <select name="budget" defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            <option>&lt;$3k</option>
            <option>$3k - $5k</option>
            <option>$5k - $10k</option>
            <option>&gt;$10k</option>
          </select>
        </label>
        <label>
          Message
          <textarea name="message" rows={3} required />
        </label>
        <button type="submit">
          Submit <ArrowRight size={18} />
        </button>
      </form>
      <footer>&copy; Copyright 2026 Ammar Radwan</footer>
    </section>
  );
};

export default Contact;
