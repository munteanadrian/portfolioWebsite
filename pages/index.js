import Head from "next/head";

import Hero from "./hero.js";
import About from "./about.js";
import Projects from "./projects.js";
import Contact from "./contact.js";
import Skills from "./skills.js";
import LoadingPage from "./loadingPage.js";

import { useEffect, useState } from "react";
import Achievements from "./Achievements.js";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      <Head>
        <title>Adrian Muntean | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loading === false ? (
        <main>
          <Hero />
          <About />
          <Achievements />
          {/* <Skills /> */}
          <Projects />
          <Contact />
        </main>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}