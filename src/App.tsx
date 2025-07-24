import Sidebar from "./components/navbar/Sidebar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Soon from "./components/Soon";

const App = () => {
  return (
    <div>
      <Sidebar />
      <main className="lg:ml-56 p-8">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Soon title="PROJECT" />
        <Soon title="CONTACT" />
        <Soon title="FOOTER" />
      </main>
    </div>
  );
};

export default App;
