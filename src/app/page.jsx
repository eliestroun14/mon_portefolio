"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative rounded">
          <Image src="/photo_elie.jpg" alt="alt" fill className="object-contain"/>
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center p-8">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">Elie Stroun</h1>
          {/* DESCRIPTION */}
          <p className="md:text-xl">
            Bienvenue sur mon portfolio. Où je présente mon travail et mes compétences.
            Certains projets sont des projets Epitech et d'autres sont des projets personnels comme ce site.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
              <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                View My Work
              </button>
              </Link>
              <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black">
                Contact Me
              </button>
              </Link>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
