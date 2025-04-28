"use client";
import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

const NavLink = ({ linkLocation, children }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <Link href={linkLocation} className="text-white">
        {children}
      </Link>
      <div
        className={`border-t-1 border-white rounded-xl transition-all duration-300 ease-in-out ${
          hovered ? "w-full" : "w-0"
        }`}
      ></div>
    </motion.div>
  );
};

export default NavLink;
