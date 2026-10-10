"use client";

import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "La calidad de los equipos de fototerapia y la pureza de los sueros han elevado notablemente los resultados en mi cabina. El servicio de pago contra entrega y el despacho inmediato brindan una tranquilidad insuperable.",
    author: "Dra. Valentina Restrepo",
    role: "Especialista en Medicina Estética",
    city: "Medellín, Colombia",
    rating: 5,
  },
  {
    quote:
      "Llevo 6 meses adquiriendo la línea facial y corporal con MesoLab Pro para mis pacientes. La asesoría por WhatsApp es súper puntual y los dispositivos cuentan con excelente respaldo.",
    author: "Dra. Carolina Méndez",
    role: "Cosmiatra & Directora de Spa",
    city: "Bogotá, Colombia",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-surface py-16 lg:py-24 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-label text-xs font-bold uppercase tracking-widest text-teal-accessible">
            Testimonios Verificados
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-navy sm:text-4xl">
            Profesionales que confían en MesoLab Pro
          </h2>
          <p className="mt-3 text-sm sm:text-base text-secondary-text">
            Resultados clínicos comprobados por médicos, cosmiatras y usuarios en Colombia.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex flex-col justify-between rounded-3xl border border-border bg-white p-8 shadow-subtle"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="mt-5 text-sm sm:text-base leading-relaxed text-navy">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-border/60 pt-4">
                <div>
                  <h3 className="font-display text-sm font-bold text-navy">
                    {item.author}
                  </h3>
                  <p className="text-xs text-muted">
                    {item.role} · {item.city}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-700 border border-emerald-200">
                  <svg className="h-3 w-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Verificado
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
