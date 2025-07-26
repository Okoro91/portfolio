import Navbar from "./navbar/Navbar";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="lg:hidden  flex justify-between items-center fixed top-0 left-0 w-full bg-secondary  shadow-md z-50 bg-opacity-95 backdrop-blur-sm py-4 px-10">
      <a
        href="#hero"
        className="text-2xl font-bold text-purple-700 hover:text-purple-800 transition-colors"
      >
        <h1 className="text-xl font-bold">Muhammed</h1>
      </a>

      <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <X size={32} /> : <Menu size={32} />}
      </button>

      {open && (
        <div
          className="absolute top-0 left-0 w-64 h-screen bg-secondary  z-50 p-6"
          onClick={() => setOpen(false)}
        >
          <Navbar />
        </div>
      )}
    </header>
  );
};

export default Header;
