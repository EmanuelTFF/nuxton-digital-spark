"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const AboutSection = () => (
  <section id="about" className="py-32 px-6">
    <div className="container mx-auto max-w-4xl">

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4"
      >
        Quem Somos
      </motion.p>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight mb-8"
      >
        Criatividade e estratégia para sua marca crescer.
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
      >
        A Nuxton nasceu com o propósito de conectar marcas ao seu público de forma autêntica e impactante.
        Combinamos design de alta qualidade com estratégias de marketing digital orientadas a resultados,
        entregando soluções sob medida para cada cliente. Do conceito à execução, nosso compromisso é
        transformar ideias em experiências digitais memoráveis.
      </motion.p>

    </div>
  </section>
);

export default AboutSection;
