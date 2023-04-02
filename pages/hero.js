import Navbar from "./navbar.js";
import { motion } from "framer-motion";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import LargeScreenGraphics from "./components/largeScreenGraphics.js";

export default function Hero() {
  return (
    <motion.div className="bg-brand-dark h-screen w-screen">
      <div className="flex flex-col pt-10 items-center text-center h-screen md:text-left max-w-screen-2xl mx-auto">
        <Navbar />
        <LargeScreenGraphics />

        <div className="my-auto">
          <motion.div className="mx-6 top-11 mt-36 md:mt-0 lg:-mt-16">
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
              Crafting elegant and innovative software solutions that can
              positively impact society.
            </motion.h3>

            {/* Icons */}

            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: "0%" }}
              className="flex flex-row lg:flex-col lg:hidden items-center justify-center md:justify-start py-10 bg-brand-dark text-brand-light text-3xl"
            >
              <motion.div
                whileHover={{ y: -8, color: "#FF", scale: 1.1 }}
                animate={{
                  y: [
                    0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0,
                  ],
                }}
                transition={{ duration: 3.5, repeat: Infinity }}
              >
                <a href="https://github.com/munteanadrian" target="_blank">
                  <BsGithub className="lg:ml-12 my-8 md:my-6" />
                </a>
              </motion.div>

              <motion.div
                whileHover={{ y: -8, color: "#FF", scale: 1.1 }}
                animate={{
                  y: [
                    0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0,
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
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0,
                  ],
                }}
                transition={{ duration: 3.5, repeat: Infinity }}
              >
                <a href="mailto:amuntean2000@gmail.com" target="_blank">
                  <IoIosMail className="ml-12 my-8 md:my-6" />
                </a>
              </motion.div>
            </motion.div>

            {/* Scroller */}

            <motion.div className="border-brand-light border w-5 h-10 rounded-3xl mx-auto mt-20 md:mt-20 md:mx-0 lg:mt-10">
              <motion.div
                animate={{ y: ["0%", "100%", "0%"] }}
                transition={{ duration: 1, delay: 0, repeat: Infinity }}
                className="bg-brand-light h-3 w-2 rounded-full mt-2 mx-auto"
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
