import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import bigboss from "@/public/bigboss.jpg";
import hotel from "@/public/hotel.png";
import next from "@/public/next.png";

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
    title: "Big boss game",
    location: "Rayong, TH",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Mayahi hotel",
    location: "Bangkok, TH",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Big boss game",
    description:
      "This is a 3D computer game with a unity design that can be played for enjoyment and education.",
    tags: ["Unity", "C#", "Illustator", "Premiere pro", "Blender"],
    imageUrl: bigboss,
  },
  {
    title: "Mayahi hotel",
    description:
      "This is a web based Hotel Management System for customers booking and admins.",
    tags: ["React", "JavaScript", "CSS", "MongoDB"],
    imageUrl: hotel,
  },
  {
    title: "Monie eiei",
    description:
      "This is a web based Money Management System for customers with friends and families.",
    tags: ["Next.js", "MongoDB", "Tailwind", "Javascript"],
    imageUrl: next,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "MySQL",
  "Python",
  "Google sheet",
  "Excel",
  "Jupyter notebook",
  "Google collab",
] as const;
