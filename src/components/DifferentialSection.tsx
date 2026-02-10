"use client";

import { motion } from "framer-motion";
import { Target, TrendingUp, Users } from "lucide-react";

const points = [
  {
    icon: Target,
    title: "Foco em Resultado",
    desc: "Cada ação é pensada para gerar impacto real e retorno sobre investimento.",
  },
  {
    icon: TrendingUp,
    title: "Estratégia Personalizada",
    desc: "Planos sob medida que respeitam a identidade e os objetivos da sua marca.",
  },
  {
    icon: Users,
    title: "Atendimento Próximo",
    desc: "Parceria genuína com comunicação direta e transparente.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
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

const DifferentialSection = () => (
  <section id="differential" className="py-32 px-6">
    <div className="container mx-auto max-w-5xl">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
          Nosso Diferencial
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
          Por que escolher a Nuxton?
        </h2>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        {points.map((p) => (
          <motion.div
            key={p.title}
            variants={itemVariants}
            className="text-center space-y-5 group"
          >
            {/* Ícone */}
            <div
              className="
                inline-flex items-center justify-center
                w-16 h-16
                border border-foreground/20
                rounded-full
                mx-auto
                transition-all duration-300
                group-hover:scale-110
                group-hover:border-foreground
                group-hover:shadow-lg
              "
            >
              <p.icon
                className="w-7 h-7 text-foreground transition-transform duration-300 group-hover:scale-110"
                strokeWidth={1.5}
              />
            </div>

            {/* Título */}
            <h3 className="font-display text-lg font-semibold text-foreground">
              {p.title}
            </h3>

            {/* Texto */}
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
              {p.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

    </div>
  </section>
);

export default DifferentialSection;
