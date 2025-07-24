import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <section id="about" className="p-5 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-center text-primary mb-8"
            >
              About Me
            </motion.h2>{" "}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl max-w-3xl mx-auto text-center mt-2 text-gray-600"
            >
              Discover my journey, skills, and what drives my passion for
              software development.
            </motion.p>
            <div className="w-24 h-1.5 bg-purple-600 mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-12">
            <div className="text-lg text-gray-700 leading-relaxed space-y-4  bg-purple-50 rounded-lg shadow-lg p-8 transform hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <p>
                Hi, I'm <b>Muhhammed</b>, a full-stack developer trained at Sail
                Innovation Lab. I build clean, user-friendly web apps using
                React, Node.js, and TypeScript. I love writing semantic HTML,
                building scalable solutions, and working in teams to solve real
                problems.
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg shadow-lg p-8 transform hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                My Philosophy
              </h3>
              <p className="text-gray-700 italic">
                "Building software is not just about writing code; it's about
                solving real-world problems with creativity, precision, and a
                relentless pursuit of improvement."
              </p>
              <ul className="mt-6 text-gray-700 space-y-2">
                <li className="flex items-center">
                  <span className="text-purple-600 mr-2">&#10003;</span> Clean
                  Code Advocate
                </li>
                <li className="flex items-center">
                  <span className="text-purple-600 mr-2">&#10003;</span>{" "}
                  User-Centric Design
                </li>
                <li className="flex items-center">
                  <span className="text-purple-600 mr-2">&#10003;</span>{" "}
                  Continuous Learner
                </li>
                <li className="flex items-center">
                  <span className="text-purple-600 mr-2">&#10003;</span>{" "}
                  Collaborative Team Player
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
