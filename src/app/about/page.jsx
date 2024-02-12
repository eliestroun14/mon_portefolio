"use client";

import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex overflow-x-hidden" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/photo_elie.jpg"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHIE :</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
                Je suis Elie Stroun, trinational français, suisse et malien.<br />
                Etudiant en première année à Epitech. J'ai découvert le développement assez tard, après une année à la fac m'ayant déplu.  <br />
                Depuis je suis passionné par le développement. Ma première année à Epitech et ma discipline personnelle m'ont permis malgré tout de tenir le rythme et de progresser énormément durant ma première année.
                Ne m'étant pas encore décidé sur une spécialisation, je suis ouvert à toutes les opportunités et suis prêt à apprendre de nouvelles technologies. <br /> <br />
                Je possède des compétences solides en C. Etant touche à tout, je possède également des compétences dans de nombreux autres domaines listés ci-dessous. <br />
            </p>
            {/* {/* BIOGRAPHY QUOTE */}
            {/* <span className="italic">
              Après... qui t'as demandé ?
            </span> */}
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
      <Link href="https://fr.wikipedia.org/wiki/C_(langage)">
        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
          C
        </div>
      </Link>
      <Link href="https://www.python.org/">
        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
          Python
        </div>
      </Link>
              <Link href="https://fr.wikipedia.org/wiki/JavaScript">
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  JavaScript
                </div>
              </Link>
              <Link href="https://www.typescriptlang.org/">
        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
          TypeScript
        </div>
      </Link>
      <Link href="https://fr.legacy.reactjs.org/">
        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
          React.js
        </div>
      </Link>
      <Link href="https://nextjs.org/">
        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
          Next.js
        </div>
      </Link>
      <Link href="https://docs.fileformat.com/fr/web/scss/">
        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
          SCSS
        </div>
      </Link>
      <Link href="https://tailwindcss.com/">
        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
          Tailwind CSS
        </div>
      </Link>
      <Link href="https://nodejs.org/en">
        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
          Node.js
        </div>
      </Link>
      <Link href="https://flutter.dev/">
        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
          Flutter
        </div>
      </Link>
      <Link href="https://www.docker.com/">
        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
          Docker
        </div>
      </Link>
      <Link href="https://git-scm.com/">
        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
          Git
        </div>
      </Link>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Première année à Epitech
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Première année passionnante où j'ai la sensation d'être à ma place. J'ai pu réaliser de très nombreux projets, principalement en C (détaillés dans la page Potfolio){" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2023 - 2024
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Au Pair en Allemagne
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                  Responsabilité de l'accompagnement des enfants à l'école, de l'encadrement des devoirs et des repas.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2022 - 2023{" "}
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Faculté de médecine de Genève{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Même si je me suis rendu compte que l'enseignement théorique n'était pas ce que je cherchais, J'ai pu acquérir une discipline de travail solide{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2021 - 2022{" "}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
