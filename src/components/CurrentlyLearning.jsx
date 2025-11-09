const learningItems = [
  'Next.js',
  'TypeScript',
  'Testing (Jest / React Testing Library)',
  'Performance Optimization',
  'Accessibility (a11y)',
];

const CurrentlyLearning = () => (
  <section id="learning" className="bg-slate-900 py-20">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-indigo-300">
          Currently Learning
        </span>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Leveling Up My Craft
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 md:mx-auto">
          Exploring emerging tools and practices to stay ahead of the curve and deliver better experiences.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {learningItems.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-slate-700 bg-slate-800/60 p-6 shadow-lg shadow-slate-900/40 transition duration-200 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-indigo-900/20"
          >
            <p className="text-lg font-medium text-white">{item}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CurrentlyLearning;
