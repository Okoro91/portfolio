import { Home, User, Folder, Mail } from "lucide-react";
import profile from "../../assets/img/profile_img.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <img
          src={profile}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-primary self-end"
        />
        <h2 className="mt-4 text-lg  dark:text-white font-bold text-purple-700 hover:text-purple-800 transition-colors">
          Muhammed Ibrahim
        </h2>
        <div className="flex self-end space-x-4 mt-2">
          <a
            href="https://github.com/Okoro91"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithub
              size={20}
              className="text-gray-600 hover:text-purple-600 transition-colors"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/mi-okoro/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin
              size={20}
              className="text-gray-600 hover:text-purple-600 transition-colors"
            />
          </a>
        </div>
      </div>
      <nav className="mt-10 space-y-4 flex flex-col pl-10">
        <a
          href="#home"
          className="flex items-center gap-2  dark:text-gray-200   text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
        >
          <Home size={20} className="h-5 w-5" /> Home
        </a>
        <a
          href="#about"
          className="flex items-center gap-2  dark:text-gray-200   text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
        >
          <User size={20} /> About
        </a>
        <a
          href="#projects"
          className="flex items-center gap-2  dark:text-gray-200   text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
        >
          <Folder size={20} /> Projects
        </a>
        <a
          href="#contact"
          className="flex items-center gap-2  dark:text-gray-200   text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
        >
          <Mail size={20} /> Contact
        </a>
      </nav>
    </>
  );
};

export default Navbar;
