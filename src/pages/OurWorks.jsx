import {
  Sparkles,
  ArrowRight,
  Layers3,
  Code2,
  Rocket,
  ExternalLink,
  Filter,
  ArrowUp,
  MessageCircle,
  Mail,
  Users,
  Brain,
  Award,
  Zap,
} from "lucide-react"

const projects = [
  {
    title: "HostelHub",
    category: "PLATFORM",
    subtitle: "Hostel Booking Platform",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
    desc: "A modern hostel booking platform with real-time bed availability, traveler reviews, room comparisons, and secure booking flow.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    status: "LIVE",
    year: "2024",
  },

  {
    title: "LuxStay Hotels",
    category: "WEB APP",
    subtitle: "Premium Hotel Booking",
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200&q=80",
    desc: "Luxury hotel reservation system featuring suite galleries, dynamic pricing, guest dashboards, and multi-property management.",
    tags: ["React", "TypeScript", "PostgreSQL", "Tailwind"],
    status: "LIVE",
    year: "2024",
  },

  {
    title: "QuizMaster Pro",
    category: "SAAS",
    subtitle: "Interactive Quiz Platform",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
    desc: "Gamified online quiz platform with real-time leaderboards, timed challenges, category-based quizzes, and detailed analytics.",
    tags: ["React", "Firebase", "Framer Motion", "WebSocket"],
    status: "LIVE",
    year: "2024",
  },

  {
    title: "ShopVault",
    category: "WEB APP",
    subtitle: "E-Commerce Storefront",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200&q=80",
    desc: "Full-featured e-commerce platform with product catalogs, payment gateway integration, wishlist, and advanced filtering.",
    tags: ["React", "Next.js", "Stripe", "Algolia"],
    status: "COMPLETED",
    year: "2024",
  },

  {
    title: "FoodDash",
    category: "MOBILE WEB",
    subtitle: "Food Delivery App",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80",
    desc: "Restaurant ordering platform with live tracking, delivery management, driver assignment, and customer dashboards.",
    tags: ["React", "Node.js", "MongoDB", "Mapbox"],
    status: "LIVE",
    year: "2025",
  },

  {
    title: "PropFinder",
    category: "PLATFORM",
    subtitle: "Real Estate Listings",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200&q=80",
    desc: "Real estate platform with property listings, map-based search, virtual tours, and smart recommendation systems.",
    tags: ["React", "PostgreSQL", "Cloudinary", "Mapbox"],
    status: "LIVE",
    year: "2024",
  },
]

const process = [
  {
    num: "1",
    title: "Discovery",
    desc: "Understanding your vision, audience, and business goals through detailed consultation.",
    icon: Sparkles,
  },

  {
    num: "2",
    title: "Design",
    desc: "Crafting stunning UI/UX with wireframes, prototypes, and pixel-perfect mockups.",
    icon: Layers3,
  },

  {
    num: "3",
    title: "Development",
    desc: "Building with modern tech stacks — React, TypeScript, Node.js, and more.",
    icon: Code2,
  },

  {
    num: "4",
    title: "Launch",
    desc: "Deploying, testing, and optimizing for performance, SEO, and user experience.",
    icon: Rocket,
  },
]

const stats = [
  { value: "50+", label: "Projects Delivered", icon: Zap },
  { value: "30+", label: "AI Solutions", icon: Brain },
  { value: "100+", label: "Happy Clients", icon: Users },
  { value: "5+", label: "Years Experience", icon: Award },
]

export default function OurWorks() {
  return (
    <div className="min-h-screen bg-[#020817] text-white">

      {/* HERO */}

      <section className="relative border-b border-white/5">

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />

        <div className="relative mx-auto grid max-w-7xl gap-20 px-6 py-24 lg:grid-cols-2">

          <div>

            <div className="mb-6 flex items-center gap-3 text-sm text-gray-400">
              <span>Home</span>
              <span>›</span>
              <span className="text-white">Works</span>
            </div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-500">
              <Sparkles className="h-3 w-3" />
              Our Portfolio
            </div>

            <h1 className="max-w-3xl text-6xl font-black leading-tight md:text-7xl">
              Websites & Apps We've
              <span className="block text-red-500">
                Designed & Built
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-2xl leading-relaxed text-gray-400">
              From hostels to fintech, AI platforms to ride-sharing —
              explore the diverse range of web solutions we've crafted.
            </p>

            <p className="mt-6 italic text-red-500">
              “Turning visions into high-performance digital products”
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <button className="flex items-center gap-3 rounded-full bg-red-500 px-10 py-4 text-lg font-semibold transition hover:scale-105">
                Start a Project
                <ArrowRight className="h-5 w-5" />
              </button>

              <button className="rounded-full border border-red-500 px-10 py-4 text-lg font-semibold transition hover:bg-red-500">
                View Designs
              </button>

            </div>

            <div className="mt-16 flex flex-wrap gap-12">

              <div>
                <h3 className="text-5xl font-black text-red-500">12+</h3>
                <p className="mt-2 text-gray-400">Projects</p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-red-500">8+</h3>
                <p className="mt-2 text-gray-400">Industries</p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-red-500">100%</h3>
                <p className="mt-2 text-gray-400">Client Satisfaction</p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="relative hidden lg:block">

            <div className="absolute right-0 top-0 rotate-6 rounded-3xl border border-red-500/20 bg-[#07101f] p-4 shadow-[0_0_60px_rgba(239,68,68,0.15)]">
              <img
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&q=80"
                className="h-[240px] w-[420px] rounded-2xl object-cover"
              />
              <div className="mt-4">
                <p className="text-sm font-bold tracking-widest text-red-500">
                  HOTEL WEBSITE
                </p>
                <p className="mt-2 text-xl text-gray-300">
                  Luxury booking site
                </p>
              </div>
            </div>

            <div className="absolute left-0 top-20 -rotate-3 rounded-3xl border border-red-500/20 bg-[#07101f] p-4 shadow-[0_0_60px_rgba(239,68,68,0.15)]">
              <img
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=900&q=80"
                className="h-[260px] w-[460px] rounded-2xl object-cover"
              />
              <div className="mt-4">
                <p className="text-sm font-bold tracking-widest text-red-500">
                  HOSTEL BOOKING
                </p>
                <p className="mt-2 text-xl text-gray-300">
                  Full-stack platform
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="border-b border-white/5 bg-[#040d1d] py-16">

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 md:grid-cols-4">

          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <h3 className="text-6xl font-black text-red-500">
                {s.value}
              </h3>
              <p className="mt-4 text-2xl text-gray-400">{s.label}</p>
            </div>
          ))}

        </div>

      </section>

      {/* FEATURED WORKS */}

      <section className="px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-500">
              <Layers3 className="h-3 w-3" />
              Projects
            </div>

            <h2 className="text-6xl font-black">
              Featured Works
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-2xl leading-relaxed text-gray-400">
              Each project is crafted with attention to detail,
              performance, and user experience.
            </p>

          </div>

          {/* FILTERS */}

          <div className="mt-16 flex flex-wrap items-center justify-center gap-4">

            <button className="rounded-full border border-white/10 p-4">
              <Filter className="h-5 w-5 text-gray-400" />
            </button>

            {["All", "Web App", "Platform", "SaaS", "Mobile Web", "Dashboard"].map((item, i) => (
              <button
                key={item}
                className={`rounded-full px-8 py-4 text-lg transition ${
                  i === 0
                    ? "bg-red-500 text-white"
                    : "border border-white/10 text-gray-300 hover:border-red-500"
                }`}
              >
                {item}
              </button>
            ))}

          </div>

          {/* PROJECT GRID */}

          <div className="mt-20 grid gap-10 lg:grid-cols-3">

            {projects.map((p) => (
              <div
                key={p.title}
                className="group overflow-hidden rounded-[32px] border border-white/10 bg-[#07101f] transition hover:-translate-y-2 hover:border-red-500/40"
              >

                <div className="relative overflow-hidden">

                  <img
                    src={p.image}
                    className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#07101f] to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full bg-emerald-500/20 px-5 py-2 text-sm font-semibold text-emerald-400 backdrop-blur">
                    ● {p.status}
                  </div>

                  <div className="absolute right-5 top-5 rounded-full bg-black/50 px-5 py-2 text-sm font-bold backdrop-blur">
                    {p.year}
                  </div>

                </div>

                <div className="p-8">

                  <p className="text-sm font-bold tracking-widest text-red-500">
                    {p.category}
                  </p>

                  <h3 className="mt-4 text-5xl font-black">
                    {p.title}
                  </h3>

                  <p className="mt-3 text-2xl text-gray-400">
                    {p.subtitle}
                  </p>

                  <p className="mt-6 text-lg leading-relaxed text-gray-400">
                    {p.desc}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">

                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* PROCESS */}

      <section className="border-t border-white/5 px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-500">
              <Rocket className="h-3 w-3" />
              Process
            </div>

            <h2 className="text-6xl font-black">
              How We Build
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-2xl text-gray-400">
              Our proven development process ensures quality delivery every time.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {process.map((item) => (
              <div
                key={item.title}
                className="relative rounded-[28px] border border-white/10 bg-[#07101f] p-10"
              >

                <div className="absolute -top-5 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-red-500 text-lg font-bold">
                  {item.num}
                </div>

                <div className="mt-6 flex justify-center">
                  <item.icon className="h-10 w-10 text-red-500" />
                </div>

                <h3 className="mt-8 text-center text-4xl font-black">
                  {item.title}
                </h3>

                <p className="mt-6 text-center text-lg leading-relaxed text-gray-400">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-[#14070a] via-[#1a0a0e] to-[#14070a] px-6 py-24 text-center">

        <h2 className="text-5xl font-black">
          Have a Project in Mind?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-400">
          Let’s bring your ideas to life with a stunning,
          high-performance website or web application.
        </p>

        <button className="mt-10 rounded-full bg-red-500 px-10 py-4 text-lg font-semibold transition hover:scale-105">
          Start a Project →
        </button>

      </section>

      {/* BOTTOM STATS */}

      <section className="px-6 py-20">

        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-3xl border border-white/10 bg-[#07101f] p-10 text-center"
            >

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10">
                <s.icon className="h-6 w-6 text-red-500" />
              </div>

              <h3 className="mt-6 text-5xl font-black text-red-500">
                {s.value}
              </h3>

              <p className="mt-3 text-gray-400">
                {s.label}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* NEWSLETTER */}

      <section className="px-6 pb-24">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 rounded-[36px] border border-red-500/20 bg-gradient-to-r from-[#1a0a0e] to-[#120915] p-12 lg:flex-row lg:items-center">

          <div>

            <div className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-red-500">
              <Sparkles className="h-3 w-3" />
              Stay Updated
            </div>

            <h3 className="text-4xl font-black">
              Get Exclusive Updates
            </h3>

            <p className="mt-4 text-xl text-gray-400">
              Subscribe for the latest projects, AI innovations, and platform recommendations.
            </p>

          </div>

          <div className="flex flex-col gap-4 sm:flex-row">

            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-[#07101f] px-6 py-4">
              <Mail className="h-5 w-5 text-red-500" />
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent outline-none"
              />
            </div>

            <button className="rounded-full bg-red-500 px-8 py-4 font-semibold">
              Subscribe →
            </button>

          </div>

        </div>

      </section>

      {/* FLOATING BUTTONS */}

      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">

        <button className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500 shadow-[0_0_30px_rgba(239,68,68,0.5)]">
          <ArrowUp className="h-7 w-7" />
        </button>

        <button className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-[0_0_30px_rgba(34,197,94,0.5)]">
          <MessageCircle className="h-7 w-7" />
        </button>

      </div>

    </div>
  )
}