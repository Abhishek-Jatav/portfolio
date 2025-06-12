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
      id="about">
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-lg">
        I'm pursuing a{" "}
        <span className="font-medium">B.Tech in Mechanical Engineering</span> at
        Delhi Technological University (2022–2026),  I
        discovered my passion for{" "}
        <span className="font-medium">web development</span> through building a{" "}
        <span className="font-medium">Student Notes Sharing Platform</span>{" "}
        using Next.js, Firebase, and Tailwind CSS. This project taught me how to
        solve real problems and ship complete features.{" "}
        <span className="italic">My favorite part of coding</span> is turning
        feedback into better user experiences. I now work confidently with{" "}
        <span className="font-medium">
          Next.js, React, Firebase, and Tailwind CSS
        </span>
        . I've improved my workflow using GitHub and Netlify, and I'm actively
        seeking a{" "}
        <span className="font-medium">software role or internship</span>.
      </p>

      <p className="text-lg">
        <span className="italic">When I'm not coding</span>, I like working with
        people. As an{" "}
        <span className="font-medium">Event Manager at ASHRAE DTU</span>, I
        successfully organized technical events and resolved real-time issues. I
        gained experience in planning, team coordination, and{" "}
        <span className="font-medium">problem-solving under pressure</span>. In
        my free time, I explore more and try out{" "}
        <span className="font-medium">new tools</span> to stay ahead.
      </p>
    </motion.section>
  );
}
