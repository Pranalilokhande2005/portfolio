import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Cough Signature Analysis",
    description:
      "Built an end-to-end AI pipeline to classify COVID, Asthma, and Healthy coughs using mel-spectrograms and a 1-channel ResNet18 model with Grad-CAM based explainability.",
    tech: ["Deep Learning", "ResNet18", "XAI", "FastAPI", "React"],
    video: "/projects/cough/demo.mp4",
  },
  {
    title: "Smart Board to Slide Deck Converter",
    description:
      "Developed a web-based tool that converts smart board content into structured slide decks using AI-based content parsing and automated layout generation.",
    tech: ["React", "AI Parsing", "UI Automation"],
    video: "/projects/smartboard/demo.mp4",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-slate-950 via-slate-900 to-black px-6 py-24 text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Projects
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            A selection of AI and full-stack projects focused on real-world
            problem solving, explainability, and clean system design.
          </p>
        </motion.div>

        {/* PROJECT CARDS */}
        <div className="grid gap-14 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-900 via-slate-950 to-black rounded-2xl border border-slate-800 shadow-2xl overflow-hidden hover:shadow-teal-500/50 transition-shadow"
            >
              {/* VIDEO */}
              <video
                src={project.video}
                controls
                className="w-full h-56 object-cover bg-black"
              />

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-teal-400">
                  {project.title}
                </h3>

                <p className="mt-4 text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full 
                                 bg-slate-800 text-teal-400 
                                 border border-teal-400/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
