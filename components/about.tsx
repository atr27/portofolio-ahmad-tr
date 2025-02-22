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
        Setelah lulus dengan gelar sarjana, saya memutuskan untuk mengejar minat dan kemampuan saya di bidang pemprograman. 
        Saya mendaftar banyak kelas training coding dan fokus pengembangan skills pemrograman di{" "}
        <span className="font-medium">Full Stack Website Development</span>.{" "}
        <span className="font-medium">Bagian favorit saya dari pemprograman adalah</span> aspek pengembangan di bagian frontend dan backend. Saya suka
        menyelesaikan suatu masalah dan solusinya dapat ditemukan. Kemampuan pemprograman saya antara lain{" "}
        <span className="font-medium">
           Vue js, Laravel, MySQL, React, Next js, Express js, MongoDB, PostgreSQL, Docker, Spring Boot, Django, dan Flutter
        </span>
        . Saya familiar dengan Java, Python, dan PHP. Dan saya juga senang{" "}
        <span className="font-medium">mempelajari hal-hal baru dengan cepat.</span>{" "}Saat ini saya sedang mencari posisi{" "}
        <span className="font-medium">kerja full-time di kantor </span> sebagai Frontend atau Backend Web Developer.
        Saya juga senang belajar dan mengembangkan aplikasi mobile dengan Flutter.
      </p>
    
    </motion.section>
  );
}
