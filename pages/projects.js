import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useState } from "react";

import { AiFillGithub } from "react-icons/ai";

import Rodal from "rodal";
import "rodal/lib/rodal.css";

// add delay
// nicer layout
// add content

export function Technology({ name }) {
  return (
    <div className="bg-brand-dark/75 text-brand-light py-0.5 px-3.5 rounded-md w-fit">
      {name}
    </div>
  );
}

export function Project({ project }) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showPopup]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, delay: project.delay }}
      className="cursor-pointer hover:scale-105 transition duration-300 rounded-lg shadow-lg"
    >
      <motion.div
        onClick={() => {
          setShowPopup(true);
        }}
      >
        <div className="relative flex items-center justify-center h-64 overflow-hidden rounded-2xl">
          <div className="bg-black w-full h-full absolute opacity-50"></div>

          <h2 className="absolute text-brand-light font-outfit text-4xl uppercase font-semibold">
            {project.name}
          </h2>
          <img
            src={project.img}
            alt="Project image"
            className="shadow-lg rounded-2xl "
          />
        </div>
      </motion.div>
      <Rodal
        visible={showPopup}
        closeMaskOnClick={true}
        closeOnEsc={true}
        animation={"zoom"}
        duration={200}
        onClose={() => {
          setShowPopup(false);
        }}
        customStyles={{
          height: "75vh",
          width: "85vw",
          borderRadius: "1rem",
          zIndex: 9999, // set a high z-index value
        }}
      >
        <div className="cursor-auto flex flex-col lg:flex-row justify-center lg:justify-start items-center text-left h-full w-full overflow-y-scroll scrollbar-hide text-brand-dark">
          <div className="py-5 w-10/12 lg:w-8/12 mx-4">
            <img
              src={project.img}
              className="shadow-lg mx-auto lg:mx-0 rounded-lg"
            />
          </div>
          <div className="mx-4 h-full w-full flex flex-col justify-center gap-5 lg:px-0">
            <div>
              <h3 className="text-5xl font-outfit font-semibold py-7 lg:py-2">
                {project.name}
              </h3>
              <div className="flex flex-row gap-3 flex-wrap py-3">
                {project.tech.map((current, index) => (
                  <Technology key={index} name={current} />
                ))}
              </div>
              <p>{project.desc}</p>
            </div>
            <hr className="mb-2" />
            <div className="flex flex-col">
              <p className="font-semibold">Some cool features</p>
              <ul className="list-disc ml-4">
                {project.features.map((feature, index) => (
                  <li>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="flex gap-4">
              <motion.a
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "#121212",
                  color: "#FFFFFF",
                }}
                className="border-2 cursor-pointer border-black rounded-lg py-2 px-4 flex gap-2 items-center  "
                href={project.github}
                target="_blank"
              >
                <AiFillGithub className="text-xl" />
                <h1 className="font-semibold">See on Github</h1>
              </motion.a>
              <motion.a
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "#05A",
                  color: "#FFFFFF",
                }}
                className="border-2 cursor-pointer border-black rounded-lg py-2 px-4 flex gap-2 items-center  "
                href={project.site}
                target="_blank"
              >
                <img src="favicon.ico" alt="My logo" className="h-5" />
                <h1 className="font-semibold">See live</h1>
              </motion.a>
            </div>
          </div>
        </div>
      </Rodal>
    </motion.div>
  );
}

export default function Projects() {
  const projects = [
    {
      delay: 0.0,
      name: "Tic Tac Toe",
      desc: "A simple browser-based tic-tac-toe app I developed. I originally built it as a console Java app and refactored it. It's now running as a Spring Boot app and uses axios to connect to a front-end made in React",
      features: [
        "Remembers game state between refreshes",
        "Animations using motion-framer library",
        "Some other cool feature",
      ],
      tech: [
        "Java",
        "Spring Boot",
        "React",
        "Axios",
        "TailwindCSS",
        "Framer-Motion",
      ],
      github: "https://github.com/munteanadrian/tictactoe",
      site: "https://adrianmuntean.tech/tictactoe",
      img: "/images/projects/CarSharing.png",
    },
    {
      delay: 0.1,
      name: "bcuBot",
      desc: "This is a bot",
      features: ["one", "two", "three"],
      tech: ["first", "second", "third"],
      github: "git",
      site: "site",
      img: "/images/projects/CarSharing.png",
    },
    {
      delay: 0.2,
      name: "bcuBot",
      desc: "This is a bot",
      features: ["one", "two", "three"],
      tech: ["first", "second", "third"],
      github: "git",
      site: "site",
      img: "/images/projects/CarSharing.png",
    },
    {
      delay: 0.3,
      name: "bcuBot",
      desc: "This is a bot",
      features: ["one", "two", "three"],
      tech: ["first", "second", "third"],
      github: "git",
      site: "site",
      img: "/images/projects/CarSharing.png",
    },
    {
      delay: 0.4,
      name: "bcuBot",
      desc: "This is a bot",
      features: ["one", "two", "three"],
      tech: ["first", "second", "third"],
      github: "git",
      site: "site",
      img: "/images/projects/CarSharing.png",
    },
  ];

  return (
    <div className="bg-brand-dark w-screen pt-14 pb-28">
      <div className="flex flex-col justify-center items-center">
        <div className="text-center">
          <motion.h4
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            duration={{ duration: 0.3 }}
            className="font-martian text-brand-light/50 text-sm leading-8"
          >
            Some of my
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-brand-light text-center text-5xl mb-10 md:mb-14 font-semibold font-outfit"
          >
            Projects
          </motion.h2>
        </div>
        {/* <div className="flex flex-col lg:flex-row mx-10 gap-7 justify-center flex-wrap flex-1"> */}
        <div className="flex flex-col gap-4 pt-5">
          <div className="mx-5 lg:mx-44 gap-4 flex flex-col lg:flex-row">
            <div className="lg:basis-1/3">
              <Project project={projects[0]} />
            </div>
            <div className="lg:basis-2/3">
              <Project project={projects[1]} />
            </div>
          </div>
          <div className="mx-5 lg:mx-44 gap-4 flex flex-col lg:flex-row">
            <div className="basis-2/3">
              <Project project={projects[1]} />
            </div>
            <div className="basis-1/3">
              <Project project={projects[1]} />
            </div>
          </div>
          <div className="mx-5 lg:mx-44 gap-4 flex flex-col lg:flex-row">
            <div className="basis-full">
              <Project project={projects[1]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
