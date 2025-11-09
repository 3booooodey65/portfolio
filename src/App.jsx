import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import CurrentlyLearning from './components/CurrentlyLearning.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import LanguageSelection from './components/LanguageSelection.jsx';
import translations from './translations.js';

const App = () => {
  const [language, setLanguage] = useState('en');
  const [showLanguageSelection, setShowLanguageSelection] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const storedLanguage = window.localStorage.getItem('portfolioLanguage');

    if (storedLanguage === 'en' || storedLanguage === 'ar') {
      setLanguage(storedLanguage);
      setShowLanguageSelection(false);
    } else {
      setShowLanguageSelection(true);
    }
  }, []);

  const handleSelectLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('portfolioLanguage', selectedLanguage);
    }
    setShowLanguageSelection(false);
  };

  const t = translations[language];
  const languageSelectionCopy = {
    title: `${translations.en.languageSelection.title} / ${translations.ar.languageSelection.title}`,
    description: `${translations.en.languageSelection.description} / ${translations.ar.languageSelection.description}`,
    english: translations.en.languageSelection.english,
    arabic: translations.en.languageSelection.arabic,
  };

  const navLinks = [
    { href: '#home', label: t.navbar.home },
    { href: '#skills', label: t.navbar.skills },
    { href: '#learning', label: t.navbar.learning },
    { href: '#projects', label: t.navbar.projects },
    { href: '#contact', label: t.navbar.contact },
  ];

  return (
    <div dir={language === 'ar' ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-50 font-sans">
      {showLanguageSelection && (
        <LanguageSelection
          onSelectLanguage={handleSelectLanguage}
          translations={languageSelectionCopy}
        />
      )}
      <Header language={language} navLinks={navLinks} />
      <main>
        <Hero t={t.hero} />
        <Skills language={language} t={t.skills} />
        <CurrentlyLearning language={language} t={t.learning} />
        <Projects language={language} t={t.projects} />
        <Contact language={language} t={t.contact} />
      </main>
      <Footer t={t.footer} />
    </div>
  );
};

export default App;
