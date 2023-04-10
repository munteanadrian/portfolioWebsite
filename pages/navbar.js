import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: "0%" }}
      className="text-brand-light absolute top-0 left-0 right-0 w-auto px-7 lg:px-14 py-6 lg:py-8 flex flex-row items-center justify-between gap-32 md:mx-10 md:mt-4 lg:mt-0 lg:mx-0 lg:gap-96 z-50"
    >
      <motion.h2
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-lg font-martian"
      >
        &lt;adrian&gt;
      </motion.h2>
      <nav className="flex gap-8 items-center text-lg">
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-brand-light text-brand-dark px-5 py-2 font-semibold rounded-3xl"
          href="/AdrianMunteanResume.pdf"
          target="_blank"
          download="Adrian-Muntean-Resume"
        >
          Resume
        </motion.a>
      </nav>
    </motion.div>
  );
}
