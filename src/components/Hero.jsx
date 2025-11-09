import { useEffect, useMemo, useState } from 'react';
import SocialLinks from './SocialLinks.jsx';
import Abdalrahman from '../images/Abdalrahman.jpg';

const titles = ['Frontend Developer', 'React Enthusiast', 'UI / UX Explorer'];

const TYPING_SPEED = 120;
const ERASING_SPEED = 60;
const DELAY_AFTER_COMPLETE = 1200;

const Hero = () => {
  const fullName = useMemo(() => 'Abdalrahman Mater', []);
  const [nameDisplay, setNameDisplay] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [titleDisplay, setTitleDisplay] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (nameDisplay === fullName) {
      return undefined;
    }

    const timeout = setTimeout(() => {
      setNameDisplay(fullName.slice(0, nameDisplay.length + 1));
    }, TYPING_SPEED);

    return () => clearTimeout(timeout);
  }, [fullName, nameDisplay]);

  useEffect(() => {
    if (nameDisplay !== fullName) return undefined;

    const currentTitle = titles[titleIndex];

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
  }, [isDeleting, nameDisplay, titleDisplay, titleIndex]);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        <div className="flex-1 space-y-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
            Hello, I'm
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            <span className="block">{nameDisplay}</span>
            <span className="mt-2 block text-lg font-medium text-indigo-600 sm:text-xl">
              {titleDisplay}
              <span className="ml-1 inline-block h-6 w-1 animate-pulse bg-indigo-500 align-middle sm:h-7" />
            </span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            I'm a passionate frontend developer crafting engaging interfaces and seamless experiences.
            I love transforming ideas into reality using modern JavaScript frameworks and thoughtful design
            systems.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              Contact Me
            </a>
            <SocialLinks className="hidden md:flex" />
          </div>
        </div>
        <div className="flex w-full flex-1 flex-col items-center gap-6">
          <div className="relative">
            <div className="h-56 w-56 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-1 shadow-2xl shadow-indigo-200 sm:h-64 sm:w-64">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white overflow-hidden">
                <span className="text-lg font-semibold text-slate-500 "><img className='w-100' src={Abdalrahman} alt="Abdalrahman's Photo" /></span>
              </div>
            </div>
            <div className="font-semibold text-center absolute -bottom-6 left-1/2 hidden -translate-x-1/2 rounded-full bg-white/90 px-6 py-2 text-sm font-medium text-indigo-600 shadow-lg shadow-indigo-100 md:block">
              <span className='font-bold'>Available</span> for work
            </div>
          </div>
          <SocialLinks className="md:hidden" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
