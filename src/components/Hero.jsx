import React from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-black px-6"
    >
      {/* TOP NAVIGATION */}
      <div className="absolute top-0 left-0 w-full px-6 py-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h2 className="text-white font-bold text-lg">
            Pranali<span className="text-teal-400">.</span>
          </h2>

          <nav className="flex gap-8 text-slate-300">
            <a href="#home" className="hover:text-teal-400 transition">
              Home
            </a>
            <a href="#about" className="hover:text-teal-400 transition">
              About
            </a>
            <a href="#skills" className="hover:text-teal-400 transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-teal-400 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-teal-400 transition">
              Contact
            </a>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <p className="text-teal-400 uppercase tracking-widest text-sm">
            Hello, I’m
          </p>

          <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-white">
            Pranali Lokhande
          </h1>

          <p className="mt-4 text-lg text-slate-300">
            AI / ML Engineer • Deep Learning • Full-Stack AI
          </p>

          <p className="mt-4 text-slate-400 max-w-xl">
            I design and build intelligent, explainable AI systems and modern
            web applications focused on real-world impact and clean engineering.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-teal-500 text-black font-semibold hover:bg-teal-400 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded-xl flex items-center gap-2 border border-slate-500 text-white hover:border-teal-400 hover:text-teal-400 transition"
            >
              <Download size={18} />
              Download Resume
            </a>

            <a
              href="mailto:YOUR_EMAIL@gmail.com"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
            >
              Contact Me
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="mt-8 flex gap-6 justify-center md:justify-start text-slate-400">
            <a
              href="https://github.com/Pranalilokhande2005"
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-400 transition"
            >
              <Github size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/pranali-lokhande-38aba437a/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-400 transition"
            >
              <Linkedin size={22} />
            </a>

            <a
              href="mailto:lpranali490@gmail.com"
              className="hover:text-teal-400 transition"
            >
              <Mail size={22} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-teal-500 blur-2xl opacity-30"></div>

            <img
              src="/profile.jpg"
              alt="Profile"
              className="relative w-72 h-72 rounded-full object-cover border-4 border-teal-400 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
