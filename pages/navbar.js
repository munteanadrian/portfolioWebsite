import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: "0%" }}
      className="text-brand-light absolute px-7 md:px-14 py-6 md:py-8 flex w-screen justify-between items-center"
    >
      <motion.h2
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-lg font-martian"
      >
        &lt;adrian&gt;
      </motion.h2>
      <nav className="flex gap-8 items-center text-lg">
        <a
          href="https://drive.google.com/file/d/11WF19lyJGy5dLmzz274BA2xnY2jVxtFI/view?usp=sharing"
          target="_blank"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-brand-light text-brand-dark px-5 py-2 font-semibold rounded-3xl"
          >
            Resume
          </motion.button>
        </a>
      </nav>
    </motion.div>
  );
}
