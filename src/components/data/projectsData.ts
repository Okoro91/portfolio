import fashion from "../../assets/img/fashion-store.png";
import website from "../../assets/img/firstwebsite.png";
import piggyvest from "../../assets/img/piggyclone.png";
import recipeFinder from "../../assets/img/recipe-finder.png";
import musicApp from "../../assets/img/music-app-lg.png";
import memeGenerator from "../../assets/img/meme-generator.png";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies?: string[];
  githubUrl: string;
  liveUrl: string;
}

export const projectsData: Project[] = [
  {
    title: "Myfirst Website",
    description:
      "My foundational step into web development, this static site demonstrates a strong grasp of core web technologies. It showcases semantic structuring, clean layout, and basic CSS styling, serving as a solid representation of accessible and well-organized content.",
    image: website,
    technologies: ["HTML", "CSS"],
    githubUrl: "https://github.com/Okoro91/myfirst-website",
    liveUrl: "https://okoro91.github.io/myfirst-website/",
  },
  {
    title: "PiggyVest Clone",
    description:
      "Built a full-featured clone of the PiggyVest savings platform, replicating its UI and navigation across all major sections. Created reusable components for saving plans, header/footer, and call-to-action buttons. Implemented responsive layouts for mobile and desktop views using Tailwind utility classes. Ensured smooth routing using React Router v6.",
    image: piggyvest,
    technologies: ["React", "Javascript", "Tailwind CSS"],
    githubUrl: "https://github.com/Okoro91/piggyvestreact",
    liveUrl: " https://piggyvestreact.vercel.app/",
  },
  {
    title: "Recipe Finder (AI)",
    description:
      "Developed an AI-powered application that suggests recipes based on user-provided ingredients. Integrated Hugging Face's inference API to generate creative markdown-based recipe outputs.Used controlled components and asynchronous state management with useState and useEffect. Practiced working with .env secrets and secure API key management",
    image: recipeFinder,
    technologies: ["React", "Hugging Face API", "Javascript", "Tailwind CSS"],
    githubUrl: "https://github.com/Okoro91/recipe-finder",
    liveUrl: "https://mi-meme-generator.vercel.app/",
  },
  {
    title: "Music App",
    description:
      "An interactive web-based music player built to deliver a smooth and responsive listening experience. It includes intuitive controls like play, pause, next, and previous, while dynamically updating track info and progress, offering a polished front-end interaction",
    image: musicApp,
    technologies: ["HTML", "CSS", "Javascript"],
    githubUrl: "https://github.com/Okoro91/music-player",
    liveUrl: "https://mi-music.netlify.app/",
  },
  {
    title: "Meme Generator",
    description:
      "A fun and dynamic meme creation tool that allows users to fetch templates from an external API and overlay them with custom text. The app focuses on simplicity, fast interactivity, and seamless content rendering across devices.",
    image: memeGenerator,
    technologies: ["React", "Javascript", "API", "HTML", "Tailwind CSS"],
    githubUrl: "https://github.com/Okoro91/meme-generator",
    liveUrl: "https://mi-meme-generator.vercel.app/",
  },
  {
    title: "Fashion Store Page",
    description:
      "A detailed front-end clone of the popular PiggyVest platform, recreated with multiple pages and reusable components. It captures the core savings and investment features, displaying data-driven UI elements and a functional dashboard structure.",
    image: fashion,
    technologies: ["React", "Javascript", "API", "HTML", "Tailwind CSS"],
    githubUrl: "https://github.com/Okoro91/fashion-store",
    liveUrl: " https://mi-fashion-store.vercel.app/",
  },
];
