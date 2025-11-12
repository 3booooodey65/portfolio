import { useEffect, useMemo, useState } from 'react';
import SocialLinks from './SocialLinks.jsx';
import Abdalrahman from '../images/Abdalrahman.jpg';

const TYPING_SPEED = 120;
const ERASING_SPEED = 60;
const DELAY_AFTER_COMPLETE = 1200;

const Hero = ({ t }) => {
  const [nameDisplay, setNameDisplay] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [titleDisplay, setTitleDisplay] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = useMemo(() => t.titles || [], [t.titles]);

  useEffect(() => {
    setNameDisplay('');
    setTitleIndex(0);
    setTitleDisplay('');
    setIsDeleting(false);
  }, [t.name, titles]);

  useEffect(() => {
    const fullName = t.name;

    if (nameDisplay === fullName) {
      return undefined;
    }

    const timeout = setTimeout(() => {
      setNameDisplay(fullName.slice(0, nameDisplay.length + 1));
    }, TYPING_SPEED);

    return () => clearTimeout(timeout);
  }, [nameDisplay, t.name]);

  useEffect(() => {
    if (nameDisplay !== t.name || titles.length === 0) return undefined;

    const currentTitle = titles[titleIndex % titles.length];

    if (!isDeleting && titleDisplay === currentTitle) {
      const timeout = setTimeout(() => setIsDeleting(true), DELAY_AFTER_COMPLETE);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && titleDisplay === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      return undefined;
    }

    const timeout = setTimeout(() => {
      const nextLength = titleDisplay.length + (isDeleting ? -1 : 1);
      setTitleDisplay(currentTitle.slice(0, nextLength));
    }, isDeleting ? ERASING_SPEED : TYPING_SPEED);

    return () => clearTimeout(timeout);
  }, [isDeleting, nameDisplay, titleDisplay, titleIndex, titles, t.name]);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8 rtl:lg:flex-row-reverse">
        <div className="flex-1 space-y-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 text-left rtl:text-right">
            {t.greeting}
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 text-left sm:text-4xl lg:text-5xl rtl:text-right">
            <span className="block">{nameDisplay}</span>
            <span className="mt-2 block text-lg font-medium text-indigo-600 sm:text-xl">
              {titleDisplay}
              <span className="ml-1 inline-block h-6 w-1 animate-pulse bg-indigo-500 align-middle sm:h-7 rtl:ml-0 rtl:mr-1" />
            </span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-600 text-left sm:text-lg rtl:text-right">
            {t.description}
          </p>
          <div className="flex flex-wrap items-center gap-4 rtl:flex-row-reverse">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              {t.contactButton}
            </a>
            <SocialLinks className="hidden md:flex" />
          </div>
        </div>
        <div className="flex w-full flex-1 flex-col items-center gap-6">
          <div className="relative">
            <div className="h-56 w-56 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-1 shadow-2xl shadow-indigo-200 sm:h-64 sm:w-64">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white overflow-hidden">
                <span className="text-lg font-semibold text-slate-500">
                  
                  <img src={Abdalrahman} alt="Abdalrahman's Photo" />
                </span>
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 hidden -translate-x-1/2 rounded-full bg-white/90 px-6 py-2 text-sm font-medium text-indigo-600 shadow-lg shadow-indigo-100 md:block">
              {t.availability}
            </div>
          </div>
          <SocialLinks className="md:hidden" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
