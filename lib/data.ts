import Project1 from "@/public/StreamWeb.png"
import Project2 from "@/public/grosir.png"

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
    title: "StreamWeb",
    description:
      "This is a website that allows users to stream movie.",
    tags: ["Laravel", "Tailwind", "React"],
    imageUrl: Project1,
    web:"http://stream.ataufikr.my.id/"
  },
  {
    title: "Website Grosir",
    description:
      "Username: admin@mail.com, Password: admin; Username: user1@mail.com, Password: user1",
    tags: ["JQuery", "Laravel", "Bootstrap"],
    imageUrl: Project2,
    web:"http://grosir.ataufikr.my.id/"
  },
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
  "Spring Boot",
  "Golang",
  "Node JS",
  "Express JS",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "Django",
  "Flutter",
] as const;
