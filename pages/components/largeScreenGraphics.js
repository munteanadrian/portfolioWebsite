import { motion } from "framer-motion";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";

export default function LargeScreenGraphics() {
  return (
    <div className="hidden lg:block lg:absolute mx-auto top-0 h-screen w-screen">
      {/* lines and other */}

      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: "0%" }}
        className="hidden lg:block lg:absolute left-14 bottom-14 border-l-2 border-b-2 border-brand-light h-96 w-96"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: "0%" }}
        className="hidden lg:block lg:absolute right-14 bottom-52 h-80 border-r-2 border-brand-light"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: "0%" }}
        className="hidden lg:block lg:absolute bottom-14 right-20"
      >
        <span className="font-martian lowercase text-brand-light/50 text-xs">
          adrian muntean's portfolio website
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: "0%" }}
        className="flex flex-col items-center justify-center py-3 bg-brand-dark text-brand-light text-3xl bottom-28 -left-1.5 absolute"
      >
        <motion.div
          whileHover={{ y: -8, color: "#FF", scale: 1.1 }}
          animate={{
            y: [0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
            y: [0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
            y: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          }}
          transition={{ duration: 3.5, repeat: Infinity }}
        >
          <a href="mailto:amuntean2000@gmail.com" target="_blank">
            <IoIosMail className="ml-12 my-8 md:my-6" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
