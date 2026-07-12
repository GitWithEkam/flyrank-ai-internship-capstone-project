import { Header } from './components/Header'
import { FeatureCard } from './components/FeatureCard'

const features = [
  {
    title: 'Component-Driven UI',
    description:
      'Modular React components with TypeScript for type-safe, reusable interfaces.',
    icon: '⚛️',
  },
  {
    title: 'Modern Tooling',
    description:
      'Vite for fast builds, Tailwind CSS for utility-first styling, and ESLint for code quality.',
    icon: '⚡',
  },
  {
    title: 'AI-Assisted Workflow',
    description:
      'Built with AI pair-programming while maintaining clean, readable, production-ready code.',
    icon: '🤖',
  },
]

const stack = ['React 19', 'Vite 6', 'TypeScript', 'Tailwind CSS 4', 'ESLint']

const roadmap = [
  { label: 'Vite + React + TypeScript scaffold', done: true },
  { label: 'Tailwind CSS and design tokens', done: true },
  { label: 'Core UI components and layout', done: true },
  { label: 'Routing and page structure', done: false },
  { label: 'ESLint and CI pipeline', done: true },
  { label: 'Production deployment', done: false },
]

function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="relative overflow-hidden px-6 py-20 md:py-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.25),_transparent_55%)]" />
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="mb-4 inline-block rounded-full border border-brand-500/30 bg-brand-600/10 px-4 py-1 text-sm text-brand-100">
              FlyRank AI Internship Capstone · 2026
            </p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Frontend engineering with{' '}
              <span className="text-brand-500">modern React</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-400">
              A production-quality React application showcasing professional
              frontend development practices, responsive design, and
              AI-assisted workflows.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#about"
                className="rounded-xl bg-brand-600 px-6 py-3 font-medium text-white transition hover:bg-brand-700"
              >
                Explore the project
              </a>
              <a
                href="https://github.com/GitWithEkam/flyrank-ai-internship-capstone-project"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/15 px-6 py-3 font-medium text-slate-200 transition hover:border-white/30 hover:bg-white/5"
              >
                Star on GitHub
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-white/10 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-3xl font-bold text-white">About</h2>
            <p className="mb-12 max-w-3xl text-slate-400">
              This capstone project documents my work during the FlyRank AI
              Frontend Engineering Internship — focused on accessible UI,
              maintainable architecture, and effective use of AI development tools.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="border-t border-white/10 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-3xl font-bold text-white">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="roadmap" className="border-t border-white/10 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-3xl font-bold text-white">Roadmap</h2>
            <ul className="space-y-3">
              {roadmap.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                >
                  <span
                    className={
                      item.done
                        ? 'text-emerald-400'
                        : 'text-slate-500'
                    }
                    aria-hidden="true"
                  >
                    {item.done ? '✓' : '○'}
                  </span>
                  <span className={item.done ? 'text-slate-300' : 'text-slate-500'}>
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Ekamnoor Singh · MIT License
      </footer>
    </div>
  )
}

export default App
