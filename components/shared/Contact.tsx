"use client";

import React, { Fragment } from "react";
import { SocialList } from "../../constants";
import { motion } from "framer-motion";
import { containerVariants, animateContact } from "../../animations";

const Contact: React.FunctionComponent = () => {
  return (
    <Fragment>
      <motion.div
        className="my-m3 2xl:fixed bottom-16 left-16 2xl:my-0"
        variants={containerVariants}
        initial="initial"
        animate="animate"
        transition={animateContact}
      >
        <ul>
          {SocialList.map((contact, id) => (
            <li key={id}>
              <a
                href={`${contact.link}`}
                target="__blank"
                className="highlights"
              >
                {contact.network}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </Fragment>
  );
};

export default Contact;
