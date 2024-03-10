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
        Setelah lulus dengan gelar sarjana di bidang{" "}
        <span className="font-medium">Biologi</span>, saya memutuskan untuk mengejar minat dan kemampuan saya di bidang pemprograman. 
        Saya mendaftar banyak kelas training coding secara online tanpa adanya disalurkan kerja dan belajar pengembangan{" "}
        <span className="font-medium">Full Stack Website Development</span>.{" "}
        <span className="font-medium">Bagian favorit saya dari pemprograman adalah</span> aspek pemecahan masalah. Saya suka
        menyelesaikan suatu masalah dan solusinya dapat ditemukan. Kemampuan pemprograman saya antara lain{" "}
        <span className="font-medium">
          React, Next.js, Node.js, Express.js, Codeigniter, Laravel, dan MongoDB
        </span>
        . Saya familiar dengan typescript. Saya selalu mempelajari teknologi baru. Saya juga senang{" "}
        <span className="font-medium">mempelajari hal-hal baru dengan cepat.</span>{" "}Saat ini saya sedang mencari posisi{" "}
        <span className="font-medium">kerja full-time</span> sebagai Backend Web Developer.
        
      </p>
    
    </motion.section>
  );
}
