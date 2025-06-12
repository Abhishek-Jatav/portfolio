import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "B.Tech in Mechanical Engineering",
    location: "Delhi Technological University, New Delhi",
    description:
      "Pursuing a B.Tech in Mechanical Engineering (2022–2026). Gained strong problem-solving skills and developed a keen interest in web development through hands-on projects.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2026",
  },
  {
    title: "Event Manager - ASHRAE DTU",
    location: "Delhi Technological University",
    description:
      "Led successful events and workshops by improving planning strategies. Enhanced team coordination, handled logistics, and resolved real-time challenges with faculty and peers.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
  {
    title: "Student Notes Sharing Platform",
    location: "Remote / Personal Project",
    description:
      "Built a full-stack web app using Next.js, Firebase, and Tailwind CSS. Improved UX with PDF preview, search, and filters. Gained CI/CD skills via GitHub and Netlify deployment.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;


export const projectsData = [
  {
    title: "Student Notes Sharing Platform",
    description:
      "Web app to share and access academic notes with preview and filters.",
    tags: [
      "Next.js",
      "Firebase Realtime Database",
      "Firebase Auth",
      "Tailwind CSS",
      "GitHub",
    ],
    imageUrl: "/nerd.png",
  },
] as const;

export const skillsData = [
  "HTML",
  "Next.js",
  "React.js",
  "Firebase Auth",
  "Firebase Realtime DB",
  "Firebase Storage",
  "Firebase App Check",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Deployment",
] as const;
