import { motion, useScroll, useTransform, animate } from "framer-motion";
import { useRef } from "react";
import avatar from "../public/images/me.jpg";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-dot-pattern w-screen px-7 overflow-hidden">
      <div className="flex lg:flex-col items-center lg:justify-center md:py-10 md:mx-10 lg:h-full lg:py-24">
        <div className="text-center lg:text-left flex flex-col lg:flex-row lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="w-60 md:w-80 mx-auto md:mx-px"
          >
            <Image
              src={avatar}
              className="rounded-3xl shadow-lg my-14 md:my-0 md:mb-10"
            />
          </motion.div>
          <div>
            <motion.h4
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="font-martian lowercase text-sm text-brand-dark/75 py-2"
            >
              Some things
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-brand-dark text-5xl font-outfit font-semibold mb-8 md:mb-5"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="text-brand-dark text-lg font-outfit leading-8 font-normal mb-14 md:max-w-prose"
            >
              Hi there! I'm Adrian, a 22-year-old computer science student from
              Romania, and this is my portfolio. Ever since I was a kid I've
              been fascinated by technology. I'd spend hours playing with
              computers, trying to figure out how they worked and how I could
              make them do cool things. Fast forward a few years, and now I'm
              here, learning more and building some pretty interesting projects.
              I also enjoy travelling and exploring, hearing intersting facts
              and history.
              <br />
              <br />I made this website to my work and skills in a more
              interesting format than a resume. You can find my projects and see
              some of my achievements if you scroll down a bit. Please reach out
              if you have any questions or just want to say hi!
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
