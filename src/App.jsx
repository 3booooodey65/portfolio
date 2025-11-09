import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import CurrentlyLearning from './components/CurrentlyLearning.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const App = () => (
  <div className="min-h-screen bg-slate-50 font-sans">
    <Header />
    <main>
      <Hero />
      <Skills />
      <CurrentlyLearning />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
