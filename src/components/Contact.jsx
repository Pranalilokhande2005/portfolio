import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Form not connected to backend yet)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-slate-950 via-slate-900 to-black px-6 py-24 text-white relative"
    >
      {/* Optional teal glow behind section */}
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
            Contact Me
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            I’m open to collaboration or a freelance projects. Reach out via the form or social links below.
          </p>
        </motion.div>

        {/* CONTACT FORM + SOCIAL */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 outline-none text-white"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 outline-none text-white"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 outline-none text-white"
              required
            ></textarea>
            <button
              type="submit"
              className="mt-2 px-6 py-3 rounded-xl bg-teal-500 text-black font-semibold hover:bg-teal-400 transition"
            >
              Send Message
            </button>
          </motion.form>

          {/* SOCIAL LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center md:items-start gap-6 text-slate-400"
          >
            <h3 className="text-2xl font-semibold text-white">Connect with me</h3>
            <div className="flex gap-6 mt-2">
              <a
                href="https://github.com/Pranalilokhande2005"
                target="_blank"
                rel="noreferrer"
                className="hover:text-teal-400 transition"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/pranali-lokhande-38aba437a/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-teal-400 transition"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:lpranali490@gmail.com"
                className="hover:text-teal-400 transition"
              >
                <Mail size={28} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;