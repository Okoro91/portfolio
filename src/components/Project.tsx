import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import SectionHeader from "./common/SectionHeader";
import { projectsData } from "./data/projectsData";

const Project = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="My Projects"
          subtitle="A collection of my fullstack web development projects, demonstrating my skills."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col overflow-hidden transform"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover object-center rounded-t-lg"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-purple-700 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-base mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-600 mb-1">
                    Technologies:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-purple-100 text-purple-700 text-xs font-medium px-2.5 py-0.5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mt-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500 px-3 py-1.5 text-sm"
                  >
                    <FaGithub size={16} className="mr-2" /> GitHub
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-purple-500 text-purple-600 hover:bg-purple-50 focus:ring-purple-200 px-3 py-1.5 text-sm"
                    >
                      <FaExternalLinkAlt size={16} className="mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
