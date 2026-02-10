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

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center px-6 pt-20">
    <motion.div
      className="max-w-3xl text-center space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        variants={fadeUp}
        className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight text-foreground"
      >
        Impulsionando sua Presença Digital
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto"
      >
        A Nuxton é uma agência de marketing digital focada em criar soluções
        criativas, estratégicas e personalizadas para elevar sua marca ao
        próximo nível.
      </motion.p>

      <motion.div variants={fadeUp}>
        <a
          href="#contact"
          className="inline-block bg-primary text-primary-foreground px-10 py-5 text-sm font-semibold tracking-wide uppercase rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Solicitar Orçamento
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default HeroSection;
