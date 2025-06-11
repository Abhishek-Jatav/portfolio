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
        Delhi Technological University (2022–2026), with a CGPA of 6.5. I
        developed a strong interest in{" "}
        <span className="font-medium">web development</span> and built a{" "}
        <span className="font-medium">Student Notes Sharing Platform</span>{" "}
        using Next.js, Firebase, and Tailwind CSS.{" "}
        <span className="italic">My favorite part of coding</span> is solving
        real problems. I <span className="underline">love</span> turning ideas
        into functional apps. My core stack includes{" "}
        <span className="font-medium">
          Next.js, React, Firebase, and Tailwind CSS
        </span>
        . I'm familiar with GitHub and Netlify and am looking for a{" "}
        <span className="font-medium">software role or internship</span>.
      </p>

      <p className="text-lg">
        <span className="italic">When I'm not coding</span>, I enjoy managing
        events. As an{" "}
        <span className="font-medium">Event Manager at ASHRAE DTU</span>, I
        organized workshops and handled logistics. I also enjoy{" "}
        <span className="font-medium">learning new tools</span> and exploring
        Firebase features in my spare time.
      </p>
    </motion.section>
  );
}
