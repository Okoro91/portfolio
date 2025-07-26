import { FaGithub, FaLinkedin, FaCodepen } from "react-icons/fa";

const Footer = () => {
  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/Okoro91",
      IconComponent: FaGithub,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mi-okoro/",
      IconComponent: FaLinkedin,
    },
    {
      name: "CodePen",
      url: "https://codepen.io/Okoro91",
      IconComponent: FaCodepen,
    },
  ];
  return (
    <>
      <footer className="w-full bg-secondary  shadow-md bg-opacity-95 backdrop-blur-sm  py-5 px-4">
        <div className="mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-6">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className=" transition-colors duration-200 text-gray-600 hover:text-purple-600"
                aria-label={social.name}
              >
                <social.IconComponent size={28} />{" "}
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
