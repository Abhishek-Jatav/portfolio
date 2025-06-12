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
      "Pursuing a B.Tech in Mechanical Engineering (2022–2026). Developed strong technical and analytical skills alongside a growing passion for web development.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2026",
  },
  {
    title: "Event Manager - ASHRAE DTU",
    location: "Delhi Technological University",
    description:
      "Managed technical events, workshops, and lectures. Handled logistics, promotions, and coordinated with faculty, students, and industry professionals.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
  {
    title: "Student Notes Sharing Platform",
    location: "Remote / Personal Project",
    description:
      "Built a full-stack web platform using Next.js, Firebase, and Tailwind CSS. Features include PDF upload/download, preview, search, filters, responsive UI, and an admin dashboard. Deployed on Netlify with CI/CD via GitHub.",
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
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/urresources-aa70e.firebasestorage.app/o/portfolio%2Fnerd.png?alt=media&token=29f5261a-841c-4fef-97e4-a5bfba307533",
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

