import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Project1 from "@/public/resto.png"
import Project2 from "@/public/grosir.png"
import Project3 from "@/public/ecommerce.png"
import Project4 from "@/public/travel.png"
import Project5 from "@/public/klinik.png"

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
    title: "Resto Web",
    description:
      "Username: admin, Password: admin",
    tags: ["Laravel", "Bootstrap", "JQuery"],
    imageUrl: Project1,
    web:"https://resto.ataufikr.biz.id/"
  },
  {
    title: "Laravel Store (Point Of Sales Website)",
    description:
      "Username: admin@mail.com, Password: admin; Username: user1@mail.com, Password: user1",
    tags: ["JQuery", "Laravel", "Bootstrap"],
    imageUrl: Project2,
    web:"https://grosir.ataufikr.biz.id/"
  },
  {
    title: "E-Commerce Web",
    description:
      "Admin Panel Link : https://ecommerce.ataufikr.biz.id/admin/login, Username: admin@mail.com, Password: admin123",
    tags: ["Vue JS", "Laravel", "Tailwind"],
    imageUrl: Project3,
    web:"https://ecommerce.ataufikr.biz.id/"
  },
  {
    title: "Travel Web",
    description:
      "Access Admin Panel, Username: admin@admin.com, Password: admin12345",
    tags: ["Laravel", "Bootstrap", "JQuery"],
    imageUrl: Project4,
    web:"http://travel-agency.ataufikr.biz.id/"
  },
  {
    title: "Klinik Web",
    description:
      "User: admin@mail.com password : admin;  User: dokter-a@mail.com password : dokter;  User: apoteker@mail.com password : apoteker",
    tags: ["Laravel Filament"],
    imageUrl: Project5,
    web:"https://klinik.ataufikr.biz.id/"
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "PHP",
  "JavaScript",
  "JQuery",
  "React",
  "Vue JS",
  "Next.js",
  "Git",
  "Tailwind",
  "MySQL",
  "Laravel",
] as const;
