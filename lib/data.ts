import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Project1 from "@/public/Project1.png"
import Project2 from "@/public/Project2.png"
import Project3 from "@/public/Project3.png"

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
] as const;

export const projectsData = [
  {
    title: "Anime Pedia Website",
    description:
      "Project website ini menggunakan framework Next JS dengan fitur stream video dan mesin pencarian",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: Project1,
    web:"https://animepedia-rho.vercel.app/"
  },
  {
    title: "Website CRUD",
    description:
      "Project website ini menggunakan framework Laravel version 9",
    tags: ["PHP", "Laravel", "Bootstrap"],
    imageUrl: Project2,
    web:"https://laravel-crud.taufikr.my.id/books"
  },
  {
    title: "Website CRUD-IMAGE",
    description:
      "Project website ini menggunakan framework Laravel 10 dengan tambahan fitur upload file image",
    tags: ["PHP", "Laravel", "Bootstrap"],
    imageUrl: Project3,
    web:"https://crud-image.taufikr.my.id/post"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "MySQL",
  "Codeigniter",
  "Laravel",
] as const;
