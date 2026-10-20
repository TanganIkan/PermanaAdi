// Path: src/components/ContactForm.tsx
"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// ID dari dashboard EmailJS. Public key memang dirancang untuk dipakai di browser, jadi aman berada di sini.
const serviceID = "service_yt8kno9";
const templateID = "template_pftvmhh";
const publicKey = "R-KMqSQCo1buyR5oB";

const inputClassName = "w-full rounded-lg border border-input bg-transparent px-3 py-2 text-foreground focus:border-muted-foreground focus:ring-muted-foreground";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    setStatus("loading");

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      () => {
        setStatus("success");
        form.current?.reset(); // Mengosongkan form setelah berhasil
      },
      () => setStatus("error"),
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="mt-4 space-y-4">
      {/* Baris untuk Nama dan Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
            Name
          </label>
          <input id="name" type="text" name="name" placeholder="Your name" required className={inputClassName} />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
            Email
          </label>
          <input id="email" type="email" name="email" placeholder="Your email address" required className={inputClassName} />
        </div>
      </div>
      {/* Baris untuk Pesan */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
          Message
        </label>
        <textarea id="message" name="message" placeholder="Your message..." required className={`${inputClassName} min-h-30`} />
      </div>
      {/* Tombol Kirim */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-lg bg-input py-3 font-semibold text-foreground transition-opacity hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer mb-8 md:mb-0"
      >
        {status === "loading" ? "Sending..." : "Send Email"}
      </button>
      {/* Pesan Status (role="status" agar dibacakan screen reader) */}
      <div role="status">
        {status === "success" && <p className="text-sm text-green-600 dark:text-green-400">Message sent successfully!</p>}
        {status === "error" && <p className="text-sm text-red-600 dark:text-red-400">Something went wrong. Please try again.</p>}
      </div>
    </form>
  );
};

export default ContactForm;
