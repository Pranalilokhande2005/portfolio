import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Python", category: "AI/ML" },
  { name: "TensorFlow / PyTorch", category: "AI/ML" },
  { name: "Deep Learning", category: "AI/ML" },
  { name: "Scikit-Learn", category: "AI/ML" },
  { name: "FastAPI", category: "Backend" },
  { name: "React.js", category: "Frontend" },
  { name: "TailwindCSS", category: "Frontend" },
  { name: "SQL / MySQL / PostgreSQL", category: "Database" },
  { name: "Git & GitHub", category: "Tools" },
  { name: "Explainable AI (XAI)", category: "AI/ML" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gradient-to-br from-slate-950 via-slate-900 to-black px-6 py-24 text-white"
    >
      {/* Optional subtle glow behind the section like Hero profile */}
      <div className="absolute inset-0 -z-10 bg-teal-500 blur-3xl opacity-10 rounded-3xl"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Skills
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Technologies, frameworks, and tools I use to build AI/ML systems and modern web applications.
          </p>
        </motion.div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-slate-950 rounded-xl p-5 flex flex-col items-center justify-center text-center border border-slate-800 hover:border-teal-400 hover:bg-slate-900 hover:text-teal-400 transition-all cursor-default shadow-lg"
            >
              <p className="font-semibold text-white">{skill.name}</p>
              <span className="text-sm text-slate-400 mt-1">{skill.category}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
