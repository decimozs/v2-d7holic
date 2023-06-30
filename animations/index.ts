import { Transition, Variants } from "framer-motion";

export const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const changingHeaderVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const animateHeader: Transition = {
  ease: "linear",
  duration: 1,
  delay: 1,
};

export const animateResume: Transition = {
  ease: "linear",
  duration: 1,
  delay: 2,
};

export const animateAbout1: Transition = {
  ease: "linear",
  duration: 0.5,
  delay: 3,
};

export const animateAbout2: Transition = {
  ease: "linear",
  duration: 0.5,
  delay: 4,
};

export const animateAbout3: Transition = {
  ease: "linear",
  duration: 0.5,
  delay: 5,
};

export const animateAbout4: Transition = {
  ease: "linear",
  duration: 0.5,
  delay: 6,
};

export const animateContact: Transition = {
  ease: "linear",
  duration: 1,
  delay: 7,
};

export const animateFooter: Transition = {
  ease: "linear",
  duration: 1,
  delay: 8,
};

export const animateResponsiveResume: Transition = {
  ease: "linear",
  duration: 1,
  delay: 9,
};

export const animateResponsiveHeader: Transition = {
  ease: "linear",
  duration: 1,
  delay: 2,
};
