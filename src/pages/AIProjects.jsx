import {
  Brain,
  Cpu,
  Eye,
  MessageSquare,
  Sparkles,
  Bot,
  Search,
  ArrowRight,
  Mail,
} from "lucide-react"

export default function AIProjects() {
  const domains = [
    {
      title: "Machine Learning",
      desc: "Predictive models & intelligent algorithms",
      icon: Brain,
    },
    {
      title: "Deep Learning",
      desc: "Neural networks & advanced pattern recognition",
      icon: Cpu,
    },
    {
      title: "Computer Vision",
      desc: "Image & video analysis systems",
      icon: Eye,
    },
    {
      title: "Natural Language Processing",
      desc: "Text understanding & language models",
      icon: MessageSquare,
    },
    {
      title: "Generative AI",
      desc: "Content creation & LLM-powered tools",
      icon: Sparkles,
    },
    {
      title: "Agentic AI",
      desc: "Autonomous agents & multi-agent systems",
      icon: Bot,
    },
  ]

  const projects = [
    {
      title: "AI Chatbot Solution",
      category: "NLP",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
      desc: "Intelligent chatbot for customer support automation.",
    },
    {
      title: "Smart Attendance System",
      category: "Computer Vision",
      image:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1200&auto=format&fit=crop",
      desc: "Automated attendance using facial recognition.",
    },
    {
      title: "Loan Approval Prediction",
      category: "Machine Learning",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
      desc: "AI model predicting loan eligibility.",
    },
    {
      title: "AI Fraud Detection",
      category: "Machine Learning",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop",
      desc: "Detects financial fraud using anomaly detection.",
    },
    {
      title: "Medical Image Diagnosis AI",
      category: "Deep Learning",
      image:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1200&auto=format&fit=crop",
      desc: "Detects disease patterns in medical images.",
    },
    {
      title: "Emotion Detection System",
      category: "Computer Vision",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      desc: "Identifies facial emotions in real-time.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#020817] text-white overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-2">
          
          {/* LEFT */}
          <div>
            <div className="mb-6 inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm tracking-widest text-red-500">
              AI & DATA SCIENCE
            </div>

            <h1 className="mb-6 text-6xl font-bold leading-none md:text-7xl">
              <span className="text-white">AI & Data Science</span>
              <br />
              <span className="text-red-500">Projects</span>
            </h1>

            <p className="mb-6 max-w-xl text-xl text-slate-400">
              Transforming ideas into intelligent solutions — from predictive
              analytics to autonomous agents.
            </p>

            <p className="mb-10 italic text-red-400">
              “Real-world AI solutions for modern businesses”
            </p>

            <div className="mb-16 flex flex-wrap gap-4">
              <button className="rounded-full bg-red-500 px-8 py-4 text-lg font-semibold transition hover:bg-red-600">
                Start Your AI Project
              </button>

              <button className="rounded-full border border-red-500 px-8 py-4 text-lg font-semibold hover:bg-red-500/10">
                View All Works
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <h3 className="text-5xl font-bold text-red-500">50+</h3>
                <p className="mt-2 text-slate-400">AI Projects</p>
              </div>

              <div>
                <h3 className="text-5xl font-bold text-red-500">30+</h3>
                <p className="mt-2 text-slate-400">Models Deployed</p>
              </div>

              <div>
                <h3 className="text-5xl font-bold text-red-500">40+</h3>
                <p className="mt-2 text-slate-400">Clients Served</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-6">
            <div className="overflow-hidden rounded-3xl border border-red-500/20 bg-[#081120]">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <p className="mb-2 text-sm tracking-widest text-red-500">
                  DEEP LEARNING
                </p>
                <h3 className="text-2xl font-bold">Neural networks & AI</h3>
              </div>
            </div>

            <div className="mt-12 overflow-hidden rounded-3xl border border-red-500/20 bg-[#081120]">
              <img
                src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1200&auto=format&fit=crop"
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <p className="mb-2 text-sm tracking-widest text-red-500">
                  GENERATIVE AI
                </p>
                <h3 className="text-2xl font-bold">LLM-powered tools</h3>
              </div>
            </div>

            <div className="-mt-8 overflow-hidden rounded-3xl border border-red-500/20 bg-[#081120]">
              <img
                src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1200&auto=format&fit=crop"
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <p className="mb-2 text-sm tracking-widest text-red-500">
                  COMPUTER VISION
                </p>
                <h3 className="text-2xl font-bold">Image analysis</h3>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-3xl border border-red-500/20 bg-[#081120]">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop"
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <p className="mb-2 text-sm tracking-widest text-red-500">
                  AGENTIC AI
                </p>
                <h3 className="text-2xl font-bold">Autonomous agents</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI DOMAINS */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <div className="mb-5 inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm tracking-widest text-red-500">
              EXPERTISE
            </div>

            <h2 className="mb-4 text-6xl font-bold">AI Domains</h2>

            <p className="text-xl text-slate-400">
              Deep expertise across the most impactful areas of AI.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {domains.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-[#07111f] p-10 transition hover:border-red-500/40"
              >
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-red-500/10">
                  <item.icon className="h-10 w-10 text-red-500" />
                </div>

                <h3 className="mb-4 text-4xl font-bold">
                  {item.title}
                </h3>

                <p className="text-lg text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-5 text-6xl font-bold">
              Featured AI Projects
            </h2>

            <p className="text-xl text-slate-400">
              Explore our growing portfolio of AI solutions.
            </p>
          </div>

          <div className="mx-auto mb-12 flex max-w-2xl items-center rounded-2xl border border-white/10 bg-[#111c2d] px-5 py-4">
            <Search className="mr-3 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full bg-transparent text-lg outline-none"
            />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="overflow-hidden rounded-3xl border border-white/10 bg-[#07111f] transition hover:border-red-500/40"
              >
                <img
                  src={project.image}
                  className="h-72 w-full object-cover"
                />

                <div className="p-8">
                  <div className="mb-4 inline-flex rounded-full bg-red-500/10 px-4 py-2 text-sm tracking-widest text-red-500">
                    {project.category}
                  </div>

                  <h3 className="mb-4 text-4xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mb-6 text-lg text-slate-400">
                    {project.desc}
                  </p>

                  <button className="flex items-center gap-2 text-lg font-semibold text-red-500">
                    Request Details
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUBSCRIBE */}
      <section className="px-6 pb-24">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-[40px] border border-red-500/20 bg-gradient-to-r from-[#13060b] to-[#081120] p-12 lg:flex-row lg:items-center">
          <div>
            <p className="mb-4 text-sm tracking-widest text-red-500">
              STAY UPDATED
            </p>

            <h2 className="mb-4 text-5xl font-bold">
              Get Exclusive Updates
            </h2>

            <p className="max-w-2xl text-xl text-slate-400">
              Subscribe for the latest projects, AI innovations, and updates.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex items-center gap-3 rounded-2xl bg-[#111c2d] px-6 py-4">
              <Mail className="text-slate-400" />
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent outline-none"
              />
            </div>

            <button className="rounded-2xl bg-red-500 px-8 py-4 text-lg font-semibold hover:bg-red-600">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}