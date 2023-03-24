import Navbar from "./navbar.js";
import { motion } from "framer-motion";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";

export default function Hero() {
  return (
    <motion.div className="bg-brand-dark h-screen w-screen flex flex-col text-center md:text-left">
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: "0%" }}
        className="hidden md:block md:absolute bottom-12 left-16 border-l-2 border-b-2 border-brand-light h-96 w-96"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: "0%" }}
        className="hidden md:block md:absolute right-16 top-44 h-80 border-r-2 border-brand-light"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: "0%" }}
        className="hidden md:block md:absolute bottom-10 right-20"
      >
        <span className="font-martian lowercase text-brand-light/50 text-xs">
          adrian muntean's portfolio website
        </span>
      </motion.div>

      <motion.div className="mx-6 md:mx-auto mt-36 md:m-auto">
        <motion.h3
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: "0%" }}
          className="text-brand-light font-martian text-lg lowercase mt-12 md:-mt-2"
        >
          Hello, I am
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: "0%" }}
          transition={{ delay: 0.1 }}
          className="text-brand-light font-outfit text-5xl md:text-7xl py-6 font-semibold"
        >
          Adrian Muntean
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: "0%" }}
          transition={{ delay: 0.2 }}
          className="text-brand-light/75 font-outfit text-3xl md:text-5xl pb-6"
        >
          Software Engineer
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: "0%" }}
          transition={{ delay: 0.3 }}
          className="text-brand-light font-outfit text-lg max-w-sm px-5 md:px-0 md:max-w-md leading-8 md:text-justify"
        >
          Tech, computers, coding. I am passionate about problem-solving and
          finding efficient solutions.
        </motion.h3>
        <motion.div className="border-brand-light border w-5 h-10 mt-14 md:mt-10 rounded-3xl mx-auto">
          <motion.div
            animate={{ y: ["0%", "100%", "0%"] }}
            transition={{ duration: 1, delay: 0, repeat: Infinity }}
            className="bg-brand-light h-3 w-2 rounded-full mt-2 mx-auto"
          ></motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: "0%" }}
          className="flex sm:flex-row md:flex-col justify-center mt-12 md:-mt-40 md:absolute left-0.5 bg-brand-dark text-brand-light text-3xl"
        >
          <motion.div
            whileHover={{ y: -8, color: "#FF", scale: 1.1 }}
            animate={{
              y: [
                0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              ],
            }}
            transition={{ duration: 3.5, repeat: Infinity }}
          >
            <a href="https://github.com/munteanadrian" target="_blank">
              <BsGithub className="md:ml-12 my-8 md:my-6" />
            </a>
          </motion.div>

          <motion.div
            whileHover={{ y: -8, color: "#FF", scale: 1.1 }}
            animate={{
              y: [
                0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              ],
            }}
            transition={{ duration: 3.5, repeat: Infinity }}
          >
            <a href="https://github.com/munteanadrian" target="_blank">
              <BsLinkedin className="ml-12 my-8 md:my-3" />
            </a>
          </motion.div>

          <motion.div
            whileHover={{ y: -8, color: "#FF", scale: 1.1 }}
            animate={{
              y: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              ],
            }}
            transition={{ duration: 3.5, repeat: Infinity }}
          >
            <a href="mailto:amuntean2000@gmail.com" target="_blank">
              <IoIosMail className="ml-12 my-8 md:my-6" />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
