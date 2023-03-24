import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import avatar from "../public/images/me.jpg";
import Image from "next/image";

export default function About() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.85, 1],
    [0, 1, 1, 0]
  );

  const xTitle = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [100, 0, 0, 200]
  );
  const xSubtitle = useTransform(
    scrollYProgress,
    [0, 0.05, 0.85, 1],
    [100, 0, 0, 200]
  );
  const xText = useTransform(
    scrollYProgress,
    [0, 0.25, 0.85, 1],
    [100, 0, 0, 200]
  );
  const xImage = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [-100, 0, 0, -100]
  );

  return (
    <div className="bg-dot-pattern w-screen px-7 pt-7 overflow-hidden">
      <div className="flex md:flex-col items-center md:justify-center md:h-screen">
        <div className="text-center md:text-left flex flex-col md:flex-row md:gap-20 items-center">
          <motion.div
            ref={targetRef}
            style={{ opacity, x: xImage }}
            className="w-60 md:w-80 mx-auto md:mx-px"
          >
            <Image
              src={avatar}
              className="rounded-3xl shadow-lg shadow-gray-400 my-14 md:my-0 md:mb-10"
            />
          </motion.div>
          <div>
            <motion.h4
              ref={targetRef}
              style={{ opacity, x: xSubtitle }}
              className="font-martian lowercase text-sm text-brand-dark/75 py-2"
            >
              Some things
            </motion.h4>
            <motion.h2
              ref={targetRef}
              style={{ opacity, x: xTitle }}
              className="text-brand-dark text-5xl font-outfit font-semibold mb-5"
            >
              About Me
            </motion.h2>
            <motion.p
              ref={targetRef}
              style={{ opacity, x: xText }}
              transition={{ delay: 1 }}
              className="text-brand-dark text-lg font-outfit leading-8 font-normal mb-14 md:max-w-prose"
            >
              Hi there! Welcome to my portfolio. I'm Adrian, a 22-year-old
              computer science student from Romania, and I'm excited to tell you
              a little bit more about myself. Ever since I was a kid, I've been
              fascinated by tech. I'd spend hours tinkering with them, trying to
              figure out how they worked and how I could make them do cool
              things. Fast forward a few years, and now I'm here. When I'm not
              coding, you can usually find me exploring stuff. I like history
              and I love traveling.
              <br />
              <br />I made this website to showcase my work and skills in a more
              interesting format than a boring old resume. You'll find my
              projects, my achievements, and some fun tidbits about myself. So
              take a look around, and feel free to reach out if you have any
              questions or just want to say hi!
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
