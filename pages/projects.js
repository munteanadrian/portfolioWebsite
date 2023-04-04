import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useState } from "react";

import { AiFillGithub } from "react-icons/ai";

import Rodal from "rodal";
import "rodal/lib/rodal.css";

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
      transition={{ duration: 0.2 }}
      className="cursor-pointer hover:scale-105 transition duration-300 rounded-lg shadow-lg"
    >
      <motion.div
        onClick={() => {
          setShowPopup(true);
        }}
      >
        <div className="shadow-lg relative flex items-center justify-center h-64 overflow-hidden rounded-2xl">
          <img
            src={project.coverImg}
            alt="Project image"
            className="object-cover block h-full w-full"
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
          maxHeight: "95vh",
          height: "75vh",
          width: "85vw",
          borderRadius: "1rem",
          zIndex: 9999, // set a high z-index value
        }}
      >
        <div className="max-w-7xl mx-auto cursor-auto flex flex-col gap-2 lg:flex-row justify-center lg:justify-start items-center text-left h-full w-full overflow-y-scroll overflow-x-hidden scrollbar-hide text-brand-dark ">
          <div className="hidden lg:block py-5 w-10/12 lg:w-3/6 mx-4">
            <img
              src={project.img}
              className="shadow-md rounded-lg mx-auto lg:mx-0"
            />
          </div>
          <div className="mx-4 px-10 mt-40 lg:mt-0 h-full w-full flex flex-col justify-center gap-4 lg:px-0">
            <div>
              <h3 className="text-5xl font-outfit font-semibold py-7 lg:py-2 flex flex-col lg:flex-row items-center">
                {project.name}
                {project.inProgress ? (
                  <span className="bg-blue-400/80 shadow-lg text-brand-light -order-1 mb-8 lg:order-1 lg:mb-0 mx-5 py-1 px-2 text-lg rounded-lg">
                    Working on it!
                  </span>
                ) : (
                  <></>
                )}
              </h3>
              <div className="flex flex-row gap-3 flex-wrap pb-10 lg:pb-0 py-3 justify-center lg:justify-start">
                {project.tech.map((current, index) => (
                  <Technology key={index} name={current} />
                ))}
              </div>
              <p className="text-center lg:text-left">{project.desc}</p>
            </div>
            <hr />
            <div className="flex flex-col">
              <p className="font-semibold text-center pb-2 lg:py-0 lg:text-left">
                Features
              </p>
              <div className="flex flex-row gap-4 w-full justify-start ">
                <ul className="list-disc ml-4">
                  {project.frontFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <ul className="list-disc ml-4">
                  {project.backFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex gap-4">
              <motion.a
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "#121212",
                  color: "#FFFFFF",
                }}
                className="border-2 cursor-pointer border-black rounded-lg mx-auto lg:mx-0 py-2 px-4 flex gap-2 items-center mt-2 mb-4 lg:mb-0 lg:mt-0"
                href={project.github}
                target="_blank"
              >
                <AiFillGithub className="text-xl" />
                <h1 className="font-semibold">See on Github</h1>
              </motion.a>
              {/* <motion.div
                whileHover={{
                  backgroundColor: "#05A",
                  color: "#FFFFFF",
                }}
                className="border-2 border-black rounded-lg py-2 px-4 flex gap-2 items-center"
              >
                <img src="favicon.ico" alt="My logo" className="h-5" />
                <h1 className="font-semibold">See live</h1>
              </motion.div> */}
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
      name: "Tic Tac Toe",
      desc: "A browser-based classic tic-tac-toe game made for two players. It's my first project. The original version was not as nice, but I refactored it, made it look better, gave it a cool UI and some other neat features.",
      frontFeatures: [
        "Made in React with TailwindCSS Framer-Motion",
        "Responsive UI for small/medium/large screens",
        "Cookies used to save game on refresh/browser closure",
      ],
      backFeatures: [
        "Spring Web on the backend with a simple MVC architecture",
        "Simple and clear responses to the consumed requests",
        "Recognizes game states (illegal moves, win, draw)",
      ],
      tech: ["Spring Web", "Axios", "React", "Framer-Motion", "TailwindCSS"],
      github: "https://github.com/munteanadrian/tictactoe",
      site: "https://adrianmuntean.tech/",
      coverImg: "/images/projects/tictactoeCover.png",
      img: "/images/projects/tictactoe.png",
    },
    {
      name: "BCUBOT",
      desc: "A bot that I made and used for automating booking at a seat at my university's main library during exam session. Bookings had to be made on an old website with long wait times and errors and I was spending up to an hour and a half per day getting a seat for the next day, so I automated it.",
      frontFeatures: [
        "NextJS with TailwindCSS and Framer-Motion",
        "Responsive UI for small/medium/large screens",
        "Cookies used to save user ID on request",
        "Spring Web on the backend with a simple MVC architecture",
      ],
      backFeatures: [
        "Selenium running headless Chrome for automation",
        "Handling for runtime and site-specific errors, edge cases",
        "Functionality for booking a seat (+ which seat) and deleting it",
      ],
      tech: [
        "Selenium",
        "Spring Web",
        "Axios",
        "NextJS",
        "Framer-Motion",
        "TailwindCSS",
      ],
      github: "https://github.com/munteanadrian/bcubot",
      site: "https://adrianmuntean.tech/",
      coverImg: "/images/projects/bcubotCoverWhite.png",
      img: "/images/projects/bcubot2.png",
    },
    {
      name: "JobHive",
      inProgress: true,
      desc: "A lightweight no-frills online platform to keep track of jobs you have applied to and their status, allowing filtering, tags and other useful functionalities. Most other options I found were either too complex or alternate uses of other apps for this purpose so I am making my own app.",
      frontFeatures: [
        "NextJS with TailwindCSS and Framer-Motion",
        "Responsive UI for small/medium/large screens",
        "Modern, minimalistic UI",
      ],
      backFeatures: [
        "User accounts and jobs stored in MYSQL database",
        "Spring Data JPA for CRUD operations",
        "Project uses MVC architecture",
      ],
      tech: [
        "MySQL",
        "Spring Data JPA",
        "Spring Web",
        "Axios",
        "NextJS",
        "Framer-Motion",
        "TailwindCSS",
      ],
      github: "https://github.com/munteanadrian/jobhive",
      site: "https://adrianmuntean.tech/",
      coverImg: "/images/projects/jobhiveCover.png",
      img: "/images/projects/jobhive.png",
    },
    {
      name: "adrianmuntean.tech",
      desc: "This portfolio website that I made to showcase my work. It's a static website made in NextJS (I'm planning to connect a database to it and create a control panel to manage the data in the future). It took me a long time to land on this final design.",
      frontFeatures: [
        "NextJS with TailwindCSS and Framer-Motion",
        "Responsive UI for small/medium/large screens",
      ],
      backFeatures: [
        "Project split into multiple components for ease of work",
        "Deployed using Netlify",
      ],
      tech: [
        "React",
        "NextJS",
        "Framer-Motion",
        "TailwindCSS",
        "HTML / CSS / JS",
      ],
      github: "https://github.com/munteanadrian/portfolioWebsite",
      site: "https://adrianmuntean.tech/",
      coverImg: "/images/projects/portfolioCover.png",
      img: "/images/projects/portfolio.png",
    },
    {
      name: "HUSTL",
      inProgress: true,
      desc: "A cross-platform social media application, providing young adults with a modern alternative to networking. This is the largest and most complex project and I am currently working on it. I will be regularly updating the GitHub repo with my progress, however.",
      frontFeatures: [
        "React Native with Native Wind and Legend-Motion",
        "Cross-platform (Android/iOS/Web)",
        "Uses Axios to send RESTful requests to the backend",
      ],
      backFeatures: [
        "Spring Web with an MVC architecture",
        "Spring Data JPA for handling CRUD operations on MYSQL database",
        "User authentication, location-based matchmaking, chat, settings",
      ],
      tech: [
        "React Native",
        "Native Wind",
        "Legend Motion",
        "Axios",
        "Spring Web + Data JPA",
        "MySQL",
      ],
      github: "https://github.com/munteanadrian/hustl",
      site: "https://adrianmuntean.tech/",
      coverImg: "/images/projects/hustlCover2.png",
      img: "/images/projects/hustlLarge.png",
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
              <Project project={projects[2]} />
            </div>
            <div className="basis-1/3">
              <Project project={projects[3]} />
            </div>
          </div>
          <div className="mx-5 lg:mx-44 gap-4 flex flex-col lg:flex-row">
            <div className="basis-full">
              <Project project={projects[4]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
