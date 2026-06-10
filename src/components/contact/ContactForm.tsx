"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Connect to actual form handler (email API, form backend, etc.)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-[var(--radius-lg)] border border-success/20 bg-success/5 p-10 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success/15 text-success">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-display text-xl font-semibold text-navy">
          ¡Mensaje enviado!
        </h3>
        <p className="text-muted">
          Te responderemos lo antes posible. Si necesitas atención inmediata,
          escríbenos por WhatsApp.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm font-medium text-teal-dark hover:underline"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-[var(--radius-lg)] border border-border bg-white p-6 shadow-card lg:p-8"
    >
      <h2 className="font-display text-lg font-semibold text-navy">
        Envíanos un mensaje
      </h2>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-name"
          className="font-label text-xs font-medium uppercase tracking-wider text-muted"
        >
          Nombre completo
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          placeholder="Tu nombre"
          className="h-11 rounded-[var(--radius-md)] border border-border bg-white px-4 text-sm text-navy transition-colors placeholder:text-muted/50 focus:border-teal focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-email"
          className="font-label text-xs font-medium uppercase tracking-wider text-muted"
        >
          Correo electrónico
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          placeholder="tu@correo.com"
          className="h-11 rounded-[var(--radius-md)] border border-border bg-white px-4 text-sm text-navy transition-colors placeholder:text-muted/50 focus:border-teal focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-whatsapp"
          className="font-label text-xs font-medium uppercase tracking-wider text-muted"
        >
          WhatsApp
        </label>
        <input
          id="contact-whatsapp"
          name="whatsapp"
          type="tel"
          placeholder="300 123 4567"
          className="h-11 rounded-[var(--radius-md)] border border-border bg-white px-4 text-sm text-navy transition-colors placeholder:text-muted/50 focus:border-teal focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-message"
          className="font-label text-xs font-medium uppercase tracking-wider text-muted"
        >
          Mensaje
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          placeholder="¿En qué podemos ayudarte?"
          className="rounded-[var(--radius-md)] border border-border bg-white px-4 py-3 text-sm text-navy transition-colors placeholder:text-muted/50 focus:border-teal focus:outline-none resize-none"
        />
      </div>

      <button
        type="submit"
        className="flex h-12 items-center justify-center rounded-[var(--radius-md)] bg-teal font-semibold text-white transition-colors hover:bg-teal-dark"
      >
        Enviar mensaje
      </button>
    </form>
  );
}
