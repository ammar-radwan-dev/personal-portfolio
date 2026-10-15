"use client";

import { FormEvent } from "react";
import SplitTitle from "./SplitTitle";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  const submit = (event: FormEvent) => event.preventDefault();
  return (
    <section className="contact-section">
      <SplitTitle top="LET'S WORK" bottom="TOGETHER" />
      <form className="contact-form reveal" onSubmit={submit}>
        <label>
          Name
          <input placeholder="Your Name" />
        </label>
        <label>
          Email
          <input type="email" placeholder="Your@email.com" />
        </label>
        <label>
          Budget
          <select defaultValue="">
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
          <textarea rows={3} />
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
