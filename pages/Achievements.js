import { BsFillAwardFill } from "react-icons/bs";
import React from "react";
import { animate, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Ach({ title, org, location, desc }) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      ref={targetRef}
      style={{ opacity, scale }}
      className="bg-brand-dark text-brand-light shadow-lg shadow-gray-400 py-5 md:pt-5 md:spb-2 px-7 rounded-lg flex flex-col items-center justify-center gap-2 text-center"
    >
      <span className="text-2xl pb-2">
        <BsFillAwardFill />
      </span>
      <h3 className="text-2xl pb-2 font-outfit font-semibold lowercase">
        {title}
      </h3>
      <span className="text-sm font-martian font-normal">
        {org}
        <br />
        &lt;
        <location className="text-xs font-martian">{location}</location>
        &gt;
      </span>
      <span className="text-md font-outfit max-w-xs py-2 trailing-8 lowercase">
        {desc}
      </span>
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <div className="w-screen flex flex-col items-center justify-center py-20">
      <div className="mb-16 text-center">
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="font-martian lowercase font-normal text-brand-dark/75 text-sm py-2"
        >
          a few of the
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="font-outfit font-semibold text-5xl"
        >
          Things I'm Proud of
        </motion.h2>
      </div>

      <div className="w-11/12 flex flex-wrap flex-col md:flex-row items-stretch justify-center gap-7 md:gap-16">
        <Ach
          title={"Bronze medal"}
          org={"MOS World Championship"}
          location={"New York, NY"}
          desc={
            "I represented Romania's national team and won the bronze medal worldwide"
          }
          className="flex-none"
        />
        <Ach
          title={"Study scholarship"}
          org={"State University of New York"}
          location={"Cortland, NY"}
          desc={
            "I was awarded the Babes-Bolyai University's scholarship for an exchange semester"
          }
          className="flex-1"
        />
        <Ach
          title={"Volunteer teacher"}
          org={"Tiberiu Popoviciu High School"}
          location={"Cluj-Napoca, RO"}
          desc={
            "I volunteered as a teacher for ICT classes and helped students prepare for competitions and the ICT Olympiad."
          }
          className="w-6/12"
        />
        <Ach
          title={"First Place"}
          org={"MOS World Championship"}
          location={"Bucharest, RO"}
          desc={
            "I won the national competition in Bucharest and moved on to represent Romania at the world championship in New York"
          }
          className="w-6/12"
        />
        <Ach
          title={"Second place"}
          org={"Olympiad in Information Technology"}
          location={"Cluj-Napoca, RO"}
          desc={
            "I won the second place at the regional stage of the ICT Olympiad"
          }
          className="w-6/12"
        />
      </div>
    </div>
  );
}
