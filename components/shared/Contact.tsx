"use client";

import React, { Fragment, useState } from "react";
import { SocialList } from "../../constants";
import { motion } from "framer-motion";
import { containerVariants, animateContact } from "../../animations";
import { IconType } from "react-icons";

const Contact: React.FunctionComponent = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  return (
    <Fragment>
      <motion.div
        className="my-m3 2xl:fixed bottom-16 left-16 2xl:my-0"
        variants={containerVariants}
        initial="initial"
        animate="animate"
        transition={animateContact}
      >
        <ul className="flex flex-row gap-2">
          {SocialList.map((contact, id) => {
            const IconComponent = contact.icon as IconType; // Cast icon to IconType

            const handleMouseEnter = () => {
              setHoveredIcon(contact.network);
            };

            const handleMouseLeave = () => {
              setHoveredIcon(null);
            };

            return (
              <li key={id}>
                <a
                  href={contact.link}
                  target="__blank"
                  className="highlights"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <IconComponent className="text-3xl" />
                  {hoveredIcon === contact.network && (
                    <span className="absolute mt-m1 px-[10px] py-[5px] bg-neon/5 rounded-md">
                      {contact.network}
                    </span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </Fragment>
  );
};

export default Contact;
