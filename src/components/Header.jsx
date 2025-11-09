import { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Header = ({ language, navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isArabic = language === 'ar';

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const closeMenu = () => setIsOpen(false);

  const toggleAriaLabel = isOpen
    ? isArabic
      ? 'إغلاق القائمة'
      : 'Close navigation'
    : isArabic
    ? 'فتح القائمة'
    : 'Open navigation';

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-slate-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className={`text-lg font-semibold tracking-tight text-slate-900 ${
            isArabic ? 'text-right' : 'text-left'
          }`}
        >
          {language === 'ar' ? 'عبدالرحمن ماتر' : 'Abdalrahman Mater'}
        </a>
        <nav
          className={`hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex ${
            isArabic ? 'flex-row-reverse text-right' : 'text-left'
          }`}
        >
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
          aria-label={toggleAriaLabel}
        >
          {isOpen ? <HiX className="h-6 w-6" /> : <HiMenuAlt3 className="h-6 w-6" />}
        </button>
      </div>
      {isOpen && (
        <div className="border-t border-slate-200 bg-slate-50 md:hidden">
          <nav
            className={`mx-auto flex max-w-6xl flex-col px-4 py-4 text-base font-medium text-slate-600 sm:px-6 ${
              isArabic ? 'items-end text-right' : 'items-start text-left'
            }`}
          >
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
