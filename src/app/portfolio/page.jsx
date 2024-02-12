"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "My Navy",
    desc: "Projet consistant à recréer le jeu de la bataille navale, jouable à 2 dans des terminaux différents à l'aide des signaux en C. Utilisation des signaux, de bitshift et masques binaires.",
    img: "/battleship.svg",
    link: "https://github.com/eliestroun14/B-PSU-100-REN-1-1-navy-elie.stroun",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Organized",
    desc: "Projet en C consistant à créer différentes fonction (add, delete, sort et display) afin de trier un grand nombre de données. Utilisation de listes chaînées et d'algroithmes de tri.",
    img: "/organized.png",
    link: "https://github.com/eliestroun14/B-CPE-110-REN-1-1-organized-elie.stroun",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "My Radar",
    desc: "Projet en C graphique (libraire CSFML). Créer un programme de simulation de vol d'avion prenant en paramètre un fichier de données (position de départ, arrivée, vitesse, position de tours de controle, etc). Utilisation de libraire externe (CSFML), gestion de collisions, Parsing.",
    img: "/myradar.png",
    link: "https://github.com/eliestroun14/B-MUL-100-REN-1-1-myradar-elie.stroun",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "My Sokoban",
    desc: "Projet ayant pour but de recréer le jeu du Sokoban en C. Utilisation de la libraire Ncurses pour la gestion de l'affichage et des inputs.",
    img: "/sokoban.jpg",
    link: "https://github.com/eliestroun14/B-PSU-100-REN-1-1-sokoban-elie.stroun",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
              Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Us
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
