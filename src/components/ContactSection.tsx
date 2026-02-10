"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const ContactSection = () => {
  const whatsappUrl =
    "https://wa.me/5547997430501?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";

  return (
    <section
      id="contact"
      className="relative py-32 px-6 bg-gradient-to-b from-background to-muted/30 overflow-hidden"
    >
      {/* Glow de fundo elegante */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_70%)] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative container mx-auto max-w-3xl text-center"
      >
        {/* Badge */}
        <motion.p
          variants={fadeUp}
          className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6"
        >
          Contato
        </motion.p>

        {/* Título */}
        <motion.h2
          variants={fadeUp}
          className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
        >
          Vamos tirar sua ideia do papel?
        </motion.h2>

        {/* Subtexto */}
        <motion.p
          variants={fadeUp}
          className="text-muted-foreground text-lg mb-14 max-w-xl mx-auto"
        >
          Clique no botão abaixo e fale comigo diretamente no WhatsApp.
          Atendimento rápido, direto e sem burocracia.
        </motion.p>

        {/* Botão Premium com brilho animado */}
        <motion.div variants={fadeUp}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative inline-flex items-center justify-center gap-3
              px-14 py-6
              text-sm font-semibold uppercase tracking-wide
              text-white
              rounded-2xl
              bg-gradient-to-r from-emerald-500 to-green-600
              shadow-xl shadow-emerald-500/30
              overflow-hidden
              transition-all duration-300
              hover:scale-[1.04]
              hover:shadow-2xl hover:shadow-emerald-500/40
              active:scale-[0.97]
            "
          >
            {/* Efeito brilho passando */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <MessageCircle size={22} />
            Falar no WhatsApp
          </a>
        </motion.div>

        {/* Texto confiança */}
        <motion.p
          variants={fadeUp}
          className="text-xs text-muted-foreground mt-6"
        >
          Normalmente respondemos em poucos minutos.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ContactSection;
