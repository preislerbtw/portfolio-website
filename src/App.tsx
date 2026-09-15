import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;