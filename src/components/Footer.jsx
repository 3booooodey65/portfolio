const Footer = ({ t }) => (
  <footer className="bg-slate-900 py-10">
    <div className="mx-auto max-w-6xl px-4 text-center text-sm text-slate-400 sm:px-6 lg:px-8">
      <p className="text-center rtl:text-right">{t.copyright}</p>
      <p className="mt-2 text-center rtl:text-right">{t.madeWith}</p>
    </div>
  </footer>
);

export default Footer;
