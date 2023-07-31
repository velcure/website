"use client";
import { motion, useReducedMotion } from "framer-motion";
import React from "react";

export interface FadeInWhenVisibleProps {
  children: React.ReactNode;
}

export const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = (props) => {
  const { children } = props;

  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};
