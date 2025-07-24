import Navbar from "./Navbar";

const Sidebar = () => {
  return (
    <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col bg-secondary dark:bg-gray-900 z-50 p-5">
      <Navbar />
    </aside>
  );
};

export default Sidebar;
