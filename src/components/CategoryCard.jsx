import { ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react'

export default function CategoryCard({ title, subtitle, description, badge, cta, icon: Icon, image, highlighted, titleAccent }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition-all hover:border-brand/50">
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        {image && <img src={image} alt={title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
        <button className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-background/70 backdrop-blur hover:bg-brand">
          <ExternalLink className="h-4 w-4" />
        </button>
        <span className="absolute right-4 top-4 rounded-full bg-background/70 px-3 py-1 text-xs font-medium backdrop-blur">{badge}</span>
        <div className="absolute -bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-xl border border-brand/40 bg-card">
          <Icon className="h-5 w-5 text-brand" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6 pt-8">
        <h3 className={`mb-1 text-2xl font-bold ${titleAccent ? 'text-brand' : 'text-foreground'}`}>{title}</h3>
        <p className="mb-3 text-sm font-medium text-brand">{subtitle}</p>
        <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
        <div className="flex items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:translate-x-1 transition-transform">
            {cta} <ArrowRight className="h-4 w-4" />
          </a>
          <span className={`flex h-9 w-9 items-center justify-center rounded-full border ${highlighted ? 'border-brand bg-brand/10 text-brand' : 'border-border text-muted-foreground'}`}>
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </article>
  )
}
