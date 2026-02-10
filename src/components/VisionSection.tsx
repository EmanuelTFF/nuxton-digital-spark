"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeZoom = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const VisionSection = () => (
  <section className="relative py-32 px-6 bg-primary text-primary-foreground overflow-hidden">
    
    {/* Glow sutil no fundo */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)] pointer-events-none" />

    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative container mx-auto max-w-3xl text-center space-y-6"
    >
      <motion.p
        variants={fadeZoom}
        className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60 mb-4"
      >
        Visão de Futuro
      </motion.p>

      <motion.h2
        variants={fadeZoom}
        className="font-display text-3xl md:text-5xl font-bold leading-tight"
      >
        Construindo o futuro digital, uma marca por vez.
      </motion.h2>

      <motion.p
        variants={fadeZoom}
        className="text-lg text-primary-foreground/70 max-w-xl mx-auto leading-relaxed"
      >
        Acreditamos que cada marca tem o potencial de se tornar referência em seu mercado.
        Nossa missão é liderar essa transformação com inovação, criatividade e excelência.
      </motion.p>
    </motion.div>
  </section>
);

export default VisionSection;
