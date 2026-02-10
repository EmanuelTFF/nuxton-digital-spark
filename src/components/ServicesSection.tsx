"use client";

import { motion } from "framer-motion";
import { Image, Globe, Palette, Share2, Layers } from "lucide-react";

const services = [
  { icon: Image, title: "Criação de Banners Digitais", desc: "Banners impactantes para campanhas online que convertem." },
  { icon: Globe, title: "Desenvolvimento de Sites", desc: "Sites modernos, rápidos e otimizados para resultados." },
  { icon: Palette, title: "Criação de Logotipos", desc: "Identidade visual única que representa sua marca." },
  { icon: Share2, title: "Design para Redes Sociais", desc: "Conteúdo visual estratégico que engaja seu público." },
  { icon: Layers, title: "Branding Completo", desc: "Posicionamento de marca consistente e profissional." },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const ServicesSection = () => (
  <section id="services" className="py-32 px-6 bg-secondary/50">
    <div className="container mx-auto max-w-6xl">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
          Serviços
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
          O que fazemos de melhor
        </h2>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((s) => (
          <motion.div
            key={s.title}
            variants={cardVariants}
            className="
              group bg-background p-8
              rounded-2xl
              border border-foreground/5
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-xl
              hover:border-foreground/20
            "
          >
            <s.icon
              className="w-9 h-9 mb-6 text-foreground/60 group-hover:text-foreground transition-colors duration-300"
              strokeWidth={1.5}
            />

            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              {s.title}
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

    </div>
  </section>
);

export default ServicesSection;
