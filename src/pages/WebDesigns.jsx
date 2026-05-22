import React from "react"
import {
  Globe,
  Zap,
  Brain,
  Users,
  Award,
  Mail,
} from "lucide-react"

import Footer from "../components/Footer"

const projects = [
  {
    title: "Restaurant Website",
    category: "Restaurant",
    desc: "Luxury dining website with online booking and menu showcase.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200",
  },
  {
    title: "SaaS Dashboard",
    category: "SaaS",
    desc: "Modern SaaS dashboard for startups and businesses.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
  },
  {
    title: "Healthcare Platform",
    category: "Healthcare",
    desc: "Medical appointment and healthcare management platform.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200",
  },
  {
    title: "Travel Website",
    category: "Travel",
    desc: "Premium travel booking and hotel reservation website.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
  },
]

const stats = [
  {
    value: "50+",
    label: "Projects Delivered",
    icon: Zap,
  },
  {
    value: "30+",
    label: "AI Solutions",
    icon: Brain,
  },
  {
    value: "100+",
    label: "Happy Clients",
    icon: Users,
  },
  {
    value: "5+",
    label: "Years Experience",
    icon: Award,
  },
]

export default function WebDesigns() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#020817] text-white">

      {/* HERO SECTION */}

      <section className="relative overflow-hidden border-b border-white/10">

        {/* GRID BACKGROUND */}

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <div className="mb-6 flex items-center gap-3 text-sm text-white/60">
              <span>Home</span>
              <span>›</span>
              <span className="font-semibold text-white">
                Website Designs
              </span>
            </div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-red-500">
              <Globe className="h-3 w-3" />
              Web Designs
            </div>

            <h1 className="max-w-3xl text-6xl font-black leading-none md:text-7xl">
              Professional{" "}
              <span className="text-red-500">
                Website
              </span>
              <br />
              <span className="text-red-500">
                Designs
              </span>{" "}
              for Every Industry
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-9 text-white/60">
              From restaurants to SaaS, healthcare to travel —
              explore premium website designs crafted for
              businesses of all kinds.
            </p>

            <p className="mt-6 italic text-red-400">
              "Pixel-perfect designs that convert visitors into customers"
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <button className="rounded-full bg-red-500 px-8 py-4 font-semibold transition hover:scale-105 hover:bg-red-600">
                Get Custom Design
              </button>

              <button className="rounded-full border border-red-500 px-8 py-4 font-semibold transition hover:bg-red-500 hover:text-white">
                View All Works
              </button>

            </div>

            <div className="mt-14 flex gap-12">

              <div>
                <h3 className="text-4xl font-black text-red-500">
                  20+
                </h3>
                <p className="mt-2 text-white/50">
                  Designs
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-red-500">
                  6+
                </h3>
                <p className="mt-2 text-white/50">
                  Industries
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-red-500">
                  100%
                </h3>
                <p className="mt-2 text-white/50">
                  Responsive
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative hidden lg:block">

            <div className="grid grid-cols-2 gap-8">

              {projects.map((item, index) => (
                <div
                  key={index}
                  className={`overflow-hidden rounded-3xl border border-red-500/20 bg-[#081225] shadow-2xl ${
                    index % 2 === 1 ? "mt-24" : ""
                  }`}
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-64 w-full object-cover"
                  />

                  <div className="p-6">

                    <p className="text-sm font-bold uppercase tracking-widest text-red-500">
                      {item.category}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-white/50">
                      {item.desc}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* CTA SECTION */}

      <section className="bg-gradient-to-r from-[#12030b] to-[#0a1022] py-24 text-center">

        <div className="mx-auto max-w-3xl px-6">

          <h2 className="text-5xl font-black">
            Need a Custom Business Website?
          </h2>

          <p className="mt-6 text-lg text-white/60">
            Let us design and build a high-converting website
            tailored to your industry and audience.
          </p>

          <button className="mt-10 rounded-full bg-red-500 px-10 py-4 font-semibold transition hover:scale-105">
            Get Started
          </button>

        </div>

      </section>

      {/* STATS */}

      <section className="px-6 py-20">

        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-[#081225] p-10 text-center"
            >

              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-red-500/30 bg-red-500/10">

                <item.icon className="h-6 w-6 text-red-500" />

              </div>

              <h3 className="text-5xl font-black">
                {item.value}
              </h3>

              <p className="mt-3 text-white/50">
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* NEWSLETTER */}

      <section className="px-6 pb-24">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 rounded-[40px] border border-red-500/20 bg-gradient-to-r from-[#17060e] to-[#1c0f1f] px-10 py-14 lg:flex-row">

          <div>

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-red-500">
              Stay Updated
            </p>

            <h2 className="text-5xl font-black">
              Get Exclusive Updates
            </h2>

            <p className="mt-5 max-w-xl text-lg text-white/50">
              Subscribe for the latest projects, AI innovations,
              and wedding platform recommendations.
            </p>

          </div>

          <div className="w-full max-w-xl">

            <div className="flex flex-col gap-4 sm:flex-row">

              <div className="flex flex-1 items-center gap-3 rounded-2xl bg-[#162033] px-5 py-4">

                <Mail className="h-5 w-5 text-white/40" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent outline-none"
                />

              </div>

              <button className="rounded-2xl bg-red-500 px-8 py-4 font-semibold transition hover:bg-red-600">
                Subscribe
              </button>

            </div>

            <p className="mt-3 text-sm text-white/30">
              No spam. Unsubscribe anytime.
            </p>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  )
}