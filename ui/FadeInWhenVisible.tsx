import { motion } from "framer-motion";
import React from "react";

export interface FadeInWhenVisibleProps {
  children: React.ReactNode;
}

export const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = (props) => {
  const { children } = props;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};
