import { FiDownload, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import img from "../assets/img/hero_img.gif";
import cv from "../assets/doc/muhammed_CV.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center lg:justify-between bg-text-accent w-full pt-20 lg:pt-0 lg:pb-20 mb-10 lg:mt-10"
    >
      <style>
        {`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 2s ease-in-out infinite;
        }
        `}
      </style>
      <div className="container mx-auto flex flex-col lg:flex-row items-center ">
        <div className="hero-img mt-10 w-full  relative lg:w-1/2 mb-12 lg:m-0 shadow-xl rounded-xl bg-[#0a1716] overflow-hidden">
          <img
            src={img}
            alt="YourName"
            className="w-100 rounded-x mx-auto object-cover animate-float"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:w-1/2 text-center lg:text-left lg:pl-5"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            Hi, I'm <br />
            <span className="text-purple-600">Muhammed Ibrahim</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700  mb-8">
            A passionate Fullstack Software Developer building scalable and
            user-centric web applications.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/Okoro91"
              className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500 px-5 py-2.5 text-lg"
              target="_blank"
            >
              View My Work <FiArrowRight size={20} className="ml-2" />
            </a>

            <a
              href={cv}
              download
              className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-purple-500 text-purple-600 hover:bg-purple-50 focus:ring-purple-200 px-5 py-2.5 text-lg"
            >
              <FiDownload size={20} className="mr-2" /> Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
