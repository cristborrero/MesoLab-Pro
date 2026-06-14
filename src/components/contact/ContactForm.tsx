"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const ease = [0.25, 0.1, 0.25, 1] as const;

const fields = [
  {
    id: "contact-name",
    name: "name",
    type: "text",
    label: "Nombre completo",
    placeholder: "Dra. María García",
    required: true,
  },
  {
    id: "contact-email",
    name: "email",
    type: "email",
    label: "Correo electrónico",
    placeholder: "maria@clinica.com",
    required: true,
  },
  {
    id: "contact-whatsapp",
    name: "whatsapp",
    type: "tel",
    label: "WhatsApp (opcional)",
    placeholder: "+57 300 123 4567",
    required: false,
  },
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Ocurrió un error al enviar el mensaje.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", whatsapp: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Error inesperado. Intenta de nuevo."
      );
    }
  };

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -12 }}
          transition={{ duration: 0.45, ease }}
          className="flex flex-col items-center gap-5 rounded-2xl border border-success/20 bg-gradient-to-b from-success/5 to-white p-12 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 300, damping: 20 }}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </motion.div>
          <div>
            <h3 className="font-display text-xl font-bold text-navy">¡Mensaje enviado!</h3>
            <p className="mt-2 text-sm text-muted max-w-xs">
              Te responderemos lo antes posible. Si necesitas atención inmediata,
              escríbenos por WhatsApp.
            </p>
          </div>
          <button
            onClick={() => setStatus("idle")}
            className="mt-1 rounded-lg border border-border px-5 py-2 text-xs font-semibold font-label uppercase tracking-wider text-navy transition-colors hover:bg-surface"
          >
            Enviar otro mensaje
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.45, ease }}
          className="flex flex-col gap-5 rounded-2xl border border-border bg-white p-7 shadow-[0_2px_16px_rgba(0,0,0,0.06)] lg:p-8"
        >
          <div>
            <h2 className="font-display text-xl font-bold text-navy">Envíanos un mensaje</h2>
            <p className="mt-1 text-xs text-muted">Responderemos en menos de 24 horas hábiles</p>
          </div>

          <div className="space-y-4">
            {fields.map((field, i) => (
              <motion.div
                key={field.id}
                className="flex flex-col gap-1.5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.35, ease }}
              >
                <label
                  htmlFor={field.id}
                  className="font-label text-[10px] font-bold uppercase tracking-widest text-muted"
                >
                  {field.label}
                </label>
                <div className="relative">
                  <input
                    id={field.id}
                    name={field.name}
                    type={field.type}
                    required={field.required}
                    placeholder={field.placeholder}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    onFocus={() => setFocused(field.id)}
                    onBlur={() => setFocused(null)}
                    className="h-11 w-full rounded-xl border border-border bg-white px-4 text-sm text-navy transition-all placeholder:text-muted/40 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/10 disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                  <motion.span
                    className="pointer-events-none absolute bottom-0 left-3 right-3 h-px origin-center bg-teal"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: focused === field.id ? 1 : 0 }}
                    transition={{ duration: 0.25, ease }}
                  />
                </div>
              </motion.div>
            ))}

            <motion.div
              className="flex flex-col gap-1.5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: fields.length * 0.07, duration: 0.35, ease }}
            >
              <label
                htmlFor="contact-message"
                className="font-label text-[10px] font-bold uppercase tracking-widest text-muted"
              >
                Mensaje
              </label>
              <div className="relative">
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="¿En qué podemos ayudarte? (pedido, cotización, protocolo…)"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className="w-full resize-none rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy transition-all placeholder:text-muted/40 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/10 disabled:opacity-60 disabled:cursor-not-allowed"
                />
                <motion.span
                  className="pointer-events-none absolute bottom-0 left-3 right-3 h-px origin-center bg-teal"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: focused === "message" ? 1 : 0 }}
                  transition={{ duration: 0.25, ease }}
                />
              </div>
            </motion.div>
          </div>

          <div className="space-y-4 border-t border-border pt-4 text-left">
            <p className="text-[10px] leading-relaxed text-muted">
              <strong>Aviso de Privacidad:</strong> MesolabPro (Cra. 56 #161-94, Suba, Bogotá, Colombia) es el responsable del tratamiento de los datos personales que suministres. Tus datos serán utilizados para gestionar tu solicitud, brindar soporte y, cuando lo autorices, enviarte información comercial. Podés ejercer tus derechos de conocer, actualizar, rectificar y suprimir tus datos escribiendo a <a href="mailto:info@mesolabpro.com.co" className="text-teal-dark underline hover:text-teal font-medium">info@mesolabpro.com.co</a>. El tratamiento se realiza conforme a nuestra <Link href="/privacidad" target="_blank" className="text-teal-dark underline hover:text-teal font-medium">Política de Privacidad</Link>.
            </p>

            <div className="flex items-start gap-3">
              <input
                id="accept-privacy"
                name="accept_privacy"
                type="checkbox"
                required
                disabled={status === "loading"}
                className="mt-0.5 h-4.5 w-4.5 shrink-0 rounded border-border bg-white text-teal accent-teal focus:ring-teal/20 cursor-pointer disabled:cursor-not-allowed"
              />
              <label htmlFor="accept-privacy" className="text-[11px] text-navy/70 leading-normal select-none cursor-pointer">
                Declaro que he leído la <Link href="/privacidad" target="_blank" className="text-teal-dark underline hover:text-teal font-medium">Política de Tratamiento de Datos Personales</Link> de MesolabPro y autorizo de manera previa, expresa e informada el tratamiento de mis datos. <span className="text-error font-bold">*</span>
              </label>
            </div>

            <div className="flex items-start gap-3">
              <input
                id="accept-marketing"
                name="accept_marketing"
                type="checkbox"
                disabled={status === "loading"}
                className="mt-0.5 h-4.5 w-4.5 shrink-0 rounded border-border bg-white text-teal accent-teal focus:ring-teal/20 cursor-pointer disabled:cursor-not-allowed"
              />
              <label htmlFor="accept-marketing" className="text-[11px] text-navy/70 leading-normal select-none cursor-pointer">
                Autorizo a MesolabPro para enviarme información comercial, promociones y contenidos educativos sobre productos para profesionales de la salud/estética a través de correo electrónico y WhatsApp.
              </label>
            </div>
          </div>

          {status === "error" && (
            <div className="rounded-xl border border-error/20 bg-error/5 p-4 text-xs text-error text-left">
              {errorMessage}
            </div>
          )}

          <motion.button
            type="submit"
            whileHover={{ scale: status === "loading" ? 1 : 1.01 }}
            whileTap={{ scale: status === "loading" ? 1 : 0.97 }}
            disabled={status === "loading"}
            className="flex h-12 items-center justify-center rounded-xl bg-teal-accessible font-semibold text-white transition-colors hover:bg-teal-dark shadow-sm hover:shadow-[0_4px_20px_rgba(0,206,206,0.25)] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Enviando mensaje..." : "Enviar mensaje"}
          </motion.button>

          <p className="text-center text-[10px] font-label uppercase tracking-wider text-muted/60">
            Tu información es confidencial y no será compartida
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}


