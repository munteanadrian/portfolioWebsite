import React from "react";
import { animate, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Technology({ name }) {
  return (
    <div className="bg-brand-dark/75 text-brand-light py-0.5 px-3.5 rounded-md w-fit">
      {name}
    </div>
  );
}

export function Project({
  name,
  desc,
  implem,
  technologies,
  img = "../images/projects/CarSharing.png",
}) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <motion.div
      initial={{ scale: 1 }}
      ref={targetRef}
      style={{ opacity, scale }}
      animate={{ animate }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 1 }}
      className="w-10/12 md:w-8/12 mx-auto bg-brand-light shadow-sm shadow-black text-brand-dark rounded-2xl text-center md:text-left flex flex-col md:flex-row items-center py-7"
    >
      <div className="w-9/12 md:w-3/12 md:mx-8 md:my-auto mb-7">
        <img src={img} className="rounded-2xl" />
      </div>
      <div className="flex flex-col my-auto px-4">
        <h3 className="text-3xl font-outfit font-semibold pb-2 md:py-2">
          {name}
        </h3>
        <p className="text-md leading-8 md:max-w-prose">{desc}</p>
        <hr className="my-3" />
        <p className="text-md leading-8 md:max-w-prose">{implem}</p>
        <div className="px-3 md:px-0 pt-5 md:py-5 justify-center md:justify-start flex flex-wrap gap-2">
          {technologies.map((name, i) => (
            <Technology name={name} key={i} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const xTitle = useTransform(scrollYProgress, [0, 0.3], [-100, 0]);
  const xSubtitle = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  return (
    <div className="bg-brand-dark w-screen py-14">
      <div className="flex flex-col justify-center items-center">
        <div className="text-center">
          <motion.h4
            ref={targetRef}
            style={{ opacity, x: xSubtitle }}
            className="font-martian text-brand-light/50 text-sm leading-8"
          >
            Some of my
          </motion.h4>
          <motion.h2
            ref={targetRef}
            style={{ opacity, x: xTitle }}
            className="text-brand-light text-center text-5xl mb-10 md:mb-14 font-semibold font-outfit"
          >
            Projects
          </motion.h2>
        </div>
        <div className="flex flex-col items-stretch gap-10">
          <Project
            name={"Code Sharing Website"}
            desc={
              "A short description of the project and its purpose. Add some more information about what it does here."
            }
            implem={"A short description of how I implemented the project"}
            technologies={["Java", "React", "HTML", "Jira", "Other", "Another"]}
          />
          <Project
            name={"Portfolio Website"}
            desc={
              "The website you're browsing right now. I made it so that I can showcase my projects and have a nicer presentation than a resume would offer."
            }
            implem={
              "The website is made in React using Next.js. I used tailwind for the styling and framer motion to add interactive animations."
            }
            technologies={["React", "Next.js", "Tailwind", "Framer Motion"]}
            img={"./images/projects/website.png"}
          />

          <Project
            name={"Tic Tac Toe"}
            desc={
              "A short description of the project and its purpose. Add some more information about what it does here."
            }
            implem={"A short description of how I implemented the project"}
            technologies={["Java", "React", "HTML", "Jira", "Other", "Another"]}
          />

          <Project
            name={"Vehicle Management System"}
            desc={
              "A short description of the project and its purpose. Add some more information about what it does here."
            }
            implem={"A short description of how I implemented the project"}
            technologies={["Java", "React", "HTML", "Jira", "Other", "Another"]}
          />
        </div>
      </div>
    </div>
  );
}
