"use client";

import React, { Fragment } from "react";

import { motion } from "framer-motion";
import {
  containerVariants,
  animateResume,
  animateResponsiveResume,
} from "../../animations";

const Resume: React.FunctionComponent = () => {
  return (
    <Fragment>
      <motion.div
        className="highlights absolute top-6 right-8 py-p1 px-p2 cursor-pointer text-default font-medium bg-neon/5 rounded-md lg:hidden"
        variants={containerVariants}
        initial="initial"
        animate="animate"
        transition={animateResume}
      >
        <a href="/docs/résumé.pdf" target="_blank" rel="noopener noreferrer">
          Résumé
        </a>
      </motion.div>

      <motion.div
        className="hidden highlights absolute top-6 right-10 py-p1 px-p2 cursor-pointer text-default font-medium bg-neon/5 rounded-md lg:block"
        variants={containerVariants}
        initial="initial"
        animate="animate"
        transition={animateResponsiveResume}
      >
        <a href="/docs/résumé.pdf" target="_blank" rel="noopener noreferrer">
          Résumé
        </a>
      </motion.div>
    </Fragment>
  );
};

export default Resume;
