import { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#learning', label: 'Currently Learning' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-50/90 backdrop-blur border-b border-slate-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-lg font-semibold tracking-tight text-slate-900">
          Abdalrahman Mater
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="transition-colors duration-150 hover:text-slate-900"
            >
              {label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 transition-colors duration-150 hover:bg-slate-200 hover:text-slate-900 md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <HiX className="h-6 w-6" /> : <HiMenuAlt3 className="h-6 w-6" />}
        </button>
      </div>
      {isOpen && (
        <div className="border-t border-slate-200 bg-slate-50 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-4 text-base font-medium text-slate-600 sm:px-6">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className="rounded-md px-3 py-2 transition-colors duration-150 hover:bg-slate-200 hover:text-slate-900"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
