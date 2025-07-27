import Sidebar from "./components/navbar/Sidebar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Soon from "./components/Soon";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Sidebar />
      <main className="lg:ml-64">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Soon title="PROJECT" />
        <Soon title="CONTACT" />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
