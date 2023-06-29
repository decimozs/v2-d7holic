"use client";

import React, { Fragment } from "react";
import { motion } from "framer-motion";
import {
  containerVariants,
  animateHeader,
  animateResponsiveHeader,
} from "../../animations";

const Header: React.FunctionComponent = () => {
  return (
    <Fragment>
      <motion.header
        className="text-white text-fs2 font-semibold lg:hidden"
        variants={containerVariants}
        initial="initial"
        animate="animate"
        transition={animateHeader}
      >
        Hello,
      </motion.header>
      <motion.header
        className="hidden text-white text-fs2 font-semibold lg:block xl:text-fs3"
        variants={containerVariants}
        initial="initial"
        animate="animate"
        transition={animateResponsiveHeader}
      >
        Hello,
      </motion.header>
    </Fragment>
  );
};

export default Header;
