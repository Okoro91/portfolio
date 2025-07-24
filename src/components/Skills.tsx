import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaDatabase,
} from "react-icons/fa";

const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact size={50} /> },
    { name: "Node.js", icon: <FaNodeJs size={50} /> },
    { name: "JavaScript", icon: <FaJsSquare size={50} /> },
    { name: "HTML5", icon: <FaHtml5 size={50} /> },
    { name: "CSS3", icon: <FaCss3Alt size={50} /> },
    { name: "Python", icon: <FaPython size={50} /> },
    { name: "Database", icon: <FaDatabase size={50} /> },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8">
          My Skills
        </h2>
        <div className="w-24 h-1.5 bg-purple-600 mx-auto mb-14 rounded-full"></div>
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="flex space-x-8 whitespace-nowrap"
          >
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center  text-primary p-4 rounded-lg hover:bg-secondary transition duration-300 bg-accent shadow-lg"
              >
                {skill.icon}
                <span className="mt-2 text-sm font-semibold text-primary">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
