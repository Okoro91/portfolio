import Sidebar from "./components/navbar/Sidebar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <Sidebar />
      <main className="lg:ml-56 p-8">
        <Header />
        <Hero />
        <About />
      </main>
    </div>
  );
};

export default App;
