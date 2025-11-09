const LanguageSelection = ({ onSelectLanguage, translations }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm">
    <div className="mx-4 w-full max-w-xl rounded-3xl bg-white p-10 text-center shadow-2xl shadow-slate-900/20">
      <h2 className="text-3xl font-bold text-slate-900">
        {translations.title}
      </h2>
      <p className="mt-4 text-base text-slate-600">
        {translations.description}
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
        <button
          type="button"
          onClick={() => onSelectLanguage('en')}
          className="w-full rounded-full bg-indigo-600 px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-indigo-200 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
        >
          {translations.english}
        </button>
        <button
          type="button"
          onClick={() => onSelectLanguage('ar')}
          className="w-full rounded-full border border-indigo-500 px-10 py-4 text-lg font-semibold text-indigo-600 shadow-lg shadow-indigo-100 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-indigo-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
        >
          {translations.arabic}
        </button>
      </div>
    </div>
  </div>
);

export default LanguageSelection;
