"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Now I'm a {" "}
        <span className="font-medium"> Computer Engineering student </span> at King Mongkut's University of Technology Thonburi, {" "}
        I decided to pursue <span className="font-medium">
        my passion for Data and AI.</span> I enrolled in an online bootcamp and learned it.{" "}
        <span className="italic">My favorite part of Data and AI</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem and the importance of data. My core stack
        is{" "}
        <span className="font-medium">
        Google sheet, Excel, Python, React, Next.js, Node.js, MongoDB
        </span>
        . I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a Data Analyst, Data Science, Software Engineering and, Frontend Developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy
        watching movies, playing with my dog and cat, listening to music, and reading books. 
      </p>
    </motion.section>
  );
}
