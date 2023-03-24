import { BsLinkedin, BsGithub } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div>
      <div className="bg-dot-pattern flex flex-col w-screen">
        <div className="m-auto py-12 w-11/12 flex flex-col justify-center items-center">
          <div className="text-brand-dark flex justify-evenly items-center gap-12 text-5xl">
            <motion.a
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              href="https://www.linkedin.com/in/muntean-adrian"
              target="_blank"
            >
              <BsLinkedin />
            </motion.a>

            <motion.a
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              href="https://github.com/munteanadrian"
              target="_blank"
            >
              <BsGithub />
            </motion.a>

            <motion.a
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              href="mailto:amuntean2000@gmail.com"
              target="_blank"
              className="text-6xl"
            >
              <IoIosMail />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}
