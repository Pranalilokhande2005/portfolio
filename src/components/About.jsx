import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-b from-slate-950 via-slate-900 to-black"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-2">About Me</h2>
        <div className="w-20 h-1 bg-teal-500 mx-auto mb-4 rounded"></div>
        <p className="text-slate-300 max-w-2xl mx-auto">
          I’m an AI / ML Engineer passionate about building intelligent, explainable systems that solve real-world problems. My work combines deep learning, full-stack development, and clean engineering practices to create scalable and impactful solutions. I love exploring new technologies, designing efficient pipelines, and making AI understandable for everyone.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-slate-800 rounded-xl shadow p-6 hover:shadow-lg transition duration-300">
          <div className="text-teal-500 mb-4 text-3xl">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <h3 className="font-semibold text-white mb-2">
            Acharya Institute of Technology Student
          </h3>
          <p className="text-slate-400 text-sm">
            B.Tech CSE with specialization in AI & ML.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-slate-800 rounded-xl shadow p-6 hover:shadow-lg transition duration-300">
          <div className="text-teal-500 mb-4 text-3xl">
            <i className="fas fa-code"></i>
          </div>
          <h3 className="font-semibold text-white mb-2">Developer</h3>
          <p className="text-slate-400 text-sm">
            Hands-on experience with Python, C, ML/DL, TensorFlow, Streamlit, Java and real-world projects.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-slate-800 rounded-xl shadow p-6 hover:shadow-lg transition duration-300">
          <div className="text-teal-500 mb-4 text-3xl">
            <i className="fas fa-lightbulb"></i>
          </div>
          <h3 className="font-semibold text-white mb-2">AI/ML Project Builder</h3>
          <p className="text-slate-400 text-sm">
            Built apps like Doctor Assistant, Cough Detection, and Smartboard.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-slate-800 rounded-xl shadow p-6 hover:shadow-lg transition duration-300">
          <div className="text-teal-500 mb-4 text-3xl">
            <i className="fas fa-rocket"></i>
          </div>
          <h3 className="font-semibold text-white mb-2">Impact-Focused</h3>
          <p className="text-slate-400 text-sm">
            Python & Java Developer | ML Enthusiast | Building Tech That Solves Real-World Problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
