import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Skills from './components/Skills.tsx';
import Experience from './components/Experience.tsx';
import PortfolioProjects from './components/Portfolio.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import Test from './components/Test.tsx';
function App() {
  return (
    <div className="w-full">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <PortfolioProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
