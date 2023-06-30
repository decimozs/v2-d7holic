"use client";

// footer component
import React from "react";

import { Highlights } from "../ui";
import { motion } from "framer-motion";
import { containerVariants, animateFooter } from "../../animations";

const Footer: React.FunctionComponent = () => {
  const ts = (
    <Highlights
      label="Typescript"
      naviTo="useNavigate"
      link="https://www.typescriptlang.org"
    />
  );
  const react = (
    <Highlights label="React" naviTo="useNavigate" link="https://react.dev" />
  );
  const nextjs = (
    <Highlights
      label="Next.js"
      naviTo="useNavigate"
      link="https://nextjs.org"
    />
  );
  const tailwind = (
    <Highlights
      label="TailwindCSS"
      naviTo="useNavigate"
      link="https://tailwindcss.com"
    />
  );
  const framer = (
    <Highlights
      label="FramerMotion"
      naviTo="useNavigate"
      link="https://framer.com"
    />
  );
  const vercel = (
    <Highlights label="Vercel" naviTo="useNavigate" link="https://vercel.com" />
  );

  return (
    <motion.footer
      className="w-full max-w-[400px] mb-m2 lg:mb-0"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      transition={animateFooter}
    >
      Built with {ts}, {react}, {nextjs}, {tailwind}, {framer} and {vercel}.
    </motion.footer>
  );
};

export default Footer;
