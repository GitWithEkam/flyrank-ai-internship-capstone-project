type FeatureCardProps = {
  title: string
  description: string
  icon: string
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-brand-500/40 hover:bg-white/10">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600/20 text-xl">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-400">{description}</p>
    </article>
  )
}
