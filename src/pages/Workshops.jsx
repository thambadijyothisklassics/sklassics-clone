import React from "react";
import {
  Brain,
  Database,
  Code2,
  Cloud,
  Eye,
  BarChart3,
  MessageSquare,
  Cpu,
  Rocket,
  Award,
  CheckCircle2,
  Users,
  Briefcase,
  BookOpen,
  Star,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const workshopCards = [
  {
    title: "Generative AI",
    desc: "Master LLMs, RAG systems, AI agents and prompt engineering",
    icon: Brain,
  },
  {
    title: "Machine Learning",
    desc: "Build neural networks, CNNs, LSTMs and GANs from scratch",
    icon: Cpu,
  },
  {
    title: "Power BI & Analytics",
    desc: "Create stunning dashboards and business reports",
    icon: BarChart3,
  },
  {
    title: "SQL & Databases",
    desc: "Master database design and optimization",
    icon: Database,
  },
  {
    title: "Computer Vision",
    desc: "Build image recognition systems",
    icon: Eye,
  },
  {
    title: "AWS Cloud",
    desc: "Deploy scalable applications with cloud services",
    icon: Cloud,
  },
];

const curriculum = [
  "Gen AI",
  "ML",
  "DL",
  "NLP",
  "Power BI",
  "SQL",
  "CV",
  "Big Data",
  "AWS",
  "Python FS",
  "Java FS",
];

export default function Workshops() {
  return (
    <div className="bg-[#f5f7f7]">

      {/* HERO SECTION */}

      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0d6b67] via-[#1f8d88] to-[#0b6d68] text-white">

        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative z-10 px-6 md:px-20 py-20">

          <div className="max-w-4xl">

            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm">
              ✨ 10+ Industry-Driven Hands-On Workshops
            </div>

            <h1 className="mt-10 text-6xl md:text-8xl font-black leading-none">
              SKLASSICS
            </h1>

            <h2 className="text-5xl md:text-7xl font-black text-lime-400">
              WORKSHOPS
            </h2>

            <p className="mt-8 text-3xl font-bold text-lime-300">
              AI • ML • Data • Cloud
            </p>

            <p className="mt-8 max-w-3xl text-xl leading-10 text-white/90">
              From Generative AI to Machine Learning, Power BI to AWS Cloud —
              our comprehensive workshops bridge the gap between academic
              learning and industry expectations.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Gen AI",
                "ML/DL",
                "Power BI",
                "SQL",
                "Python",
                "AWS",
                "Computer Vision",
                "NLP",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-5">

              <button className="rounded-2xl bg-white px-8 py-4 text-lg font-bold text-[#0b6d68]">
                Explore Workshops →
              </button>

              <button className="rounded-2xl border border-white px-8 py-4 text-lg font-bold">
                ▶ View Curriculum
              </button>
            </div>

            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-white/20 pt-10">

              <div>
                <h3 className="text-5xl font-black text-lime-400">10+</h3>
                <p className="mt-2 text-white/80">Workshop Topics</p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-lime-400">500+</h3>
                <p className="mt-2 text-white/80">Students Trained</p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-lime-400">15+</h3>
                <p className="mt-2 text-white/80">Colleges Partnered</p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-lime-400">95%</h3>
                <p className="mt-2 text-white/80">Success Rate</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MASTER TECH DOMAINS */}

      <section className="px-6 md:px-20 py-24">

        <div className="grid md:grid-cols-2 gap-16">

          <div>

            <p className="font-bold uppercase tracking-wider text-lime-500">
              Complete Technology Training
            </p>

            <h2 className="mt-5 text-5xl font-black leading-tight">
              Master Multiple{" "}
              <span className="text-lime-500">
                Tech Domains
              </span>
            </h2>

            <p className="mt-8 text-xl leading-10 text-slate-600">
              Our workshops cover the complete spectrum of modern technology
              from Generative AI and Machine Learning to Power BI, SQL,
              Python, AWS Cloud, and beyond.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <div className="rounded-full bg-purple-500 px-6 py-3 text-white font-bold">
                AI & ML
              </div>

              <div className="rounded-full bg-orange-500 px-6 py-3 text-white font-bold">
                Data Analytics
              </div>

              <div className="rounded-full bg-cyan-500 px-6 py-3 text-white font-bold">
                Programming
              </div>

              <div className="rounded-full bg-blue-500 px-6 py-3 text-white font-bold">
                Cloud & DevOps
              </div>

            </div>

            <div className="mt-12 flex gap-10 border-t pt-10">

              <div>
                <h3 className="text-4xl font-black text-lime-500">
                  10+
                </h3>

                <p className="text-slate-500">
                  Workshops
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-lime-500">
                  50+
                </h3>

                <p className="text-slate-500">
                  Projects
                </p>
              </div>
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {[
              {
                title: "Hands-On Learning",
                desc: "Practical industry-ready skills through immersive learning",
                icon: Rocket,
              },
              {
                title: "Real Projects",
                desc: "Build portfolio-worthy projects in AI & Data Science",
                icon: Briefcase,
              },
              {
                title: "Enhanced Technical Culture",
                desc: "Future-ready student development",
                icon: Users,
              },
              {
                title: "Industry Preparation",
                desc: "Training covering modern technologies",
                icon: Award,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white p-10 shadow-sm"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-lime-100 p-4">
                  <item.icon className="text-lime-500" />
                </div>

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-5 text-lg leading-8 text-slate-500">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* WORKSHOP CATEGORIES */}

      <section className="bg-gradient-to-r from-[#0d6b67] to-[#2d9d98] px-6 md:px-20 py-24 text-white">

        <div className="grid md:grid-cols-2 gap-20">

          <div>

            <p className="font-bold uppercase tracking-widest text-lime-400">
              Complete Technology Training
            </p>

            <h2 className="mt-6 text-6xl font-black leading-tight">
              THE SKLASSICS
              <br />
              <span className="text-lime-400">
                WORKSHOPS
              </span>
            </h2>

            <p className="mt-10 text-xl leading-10 text-white/90">
              Sklassics offers comprehensive training programs covering
              Power BI, Machine Learning, Deep Learning, Computer Vision,
              NLP, Generative AI, SQL, Python, Java and more.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-6">

              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 text-center">
                <h3 className="text-4xl font-black text-lime-400">
                  10+
                </h3>

                <p>Topics</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 text-center">
                <h3 className="text-4xl font-black text-lime-400">
                  2-6
                </h3>

                <p>Days</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 text-center">
                <h3 className="text-4xl font-black text-lime-400">
                  50+
                </h3>

                <p>Projects</p>
              </div>

            </div>
          </div>

          <div>

            <h3 className="mb-10 text-4xl font-black">
              Workshop Categories
            </h3>

            <div className="space-y-6">

              {workshopCards.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 rounded-3xl border border-white/10 bg-white/10 p-8"
                >
                  <div className="rounded-2xl bg-white/10 p-5">
                    <item.icon className="text-lime-400" />
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold text-lime-400">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-white/80">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* CURRICULUM */}

      <section className="px-6 md:px-20 py-24 text-center">

        <p className="font-bold uppercase tracking-widest text-lime-500">
          Comprehensive Programs
        </p>

        <h2 className="mt-5 text-6xl font-black">
          Workshop{" "}
          <span className="text-lime-500">
            Curriculum
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-4xl text-xl leading-10 text-slate-500">
          Select a workshop to explore the complete day-by-day curriculum
          and hands-on projects.
        </p>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-8">

          {curriculum.map((item, index) => (
            <div
              key={index}
              className={`rounded-3xl border p-10 transition hover:scale-105 ${
                item === "NLP"
                  ? "bg-pink-600 text-white"
                  : "bg-white"
              }`}
            >
              <div className="mb-5 flex justify-center">
                <div className="rounded-2xl bg-slate-100 p-5">
                  <BookOpen />
                </div>
              </div>

              <h3 className="text-2xl font-black">
                {item}
              </h3>

              <p className="mt-2 text-slate-500">
                5-Day
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* PACKAGES */}

      <section className="px-6 md:px-20 py-24">

        <div className="text-center">

          <p className="font-bold uppercase tracking-widest text-lime-500">
            Flexible Options
          </p>

          <h2 className="mt-5 text-6xl font-black">
            Workshop{" "}
            <span className="text-lime-500">
              Packages
            </span>
          </h2>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-10">

          {[
            {
              title: "2-Day Workshop",
              price: "₹150",
              color: "bg-orange-500",
            },
            {
              title: "3-4 Day Workshop",
              price: "₹300",
              color: "bg-[#15716d]",
            },
            {
              title: "5-6 Day Bootcamp",
              price: "₹500",
              color: "bg-pink-600",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl bg-white shadow-xl"
            >
              <div className={`${item.color} p-10 text-white`}>

                <h3 className="text-3xl font-black">
                  {item.title}
                </h3>

                <p className="mt-6 text-6xl font-black">
                  {item.price}
                </p>

                <p className="mt-2 text-lg">
                  per student
                </p>
              </div>

              <div className="space-y-5 p-10">

                {[
                  "Hands-on learning",
                  "Mini Projects",
                  "Certificates",
                  "Mentorship",
                  "Industry workflow",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-4"
                  >
                    <CheckCircle2 className="text-lime-500" />

                    <p className="text-lg text-slate-600">
                      {feature}
                    </p>
                  </div>
                ))}

                <button className="mt-8 w-full rounded-2xl border-2 border-[#15716d] py-4 text-lg font-bold text-[#15716d]">
                  Choose Package
                </button>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATE */}

      <section className="px-6 md:px-20 py-24">

        <div className="text-center">

          <p className="font-bold uppercase tracking-widest text-lime-500">
            Official Recognition
          </p>

          <h2 className="mt-5 text-6xl font-black">
            Earn Your{" "}
            <span className="text-lime-500">
              Certificate
            </span>
          </h2>

        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-16 items-center">

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80"
            alt="Certificate"
            className="rounded-3xl shadow-2xl"
          />

          <div>

            <h3 className="text-4xl font-black">
              What Your Certificate Represents
            </h3>

            <div className="mt-10 space-y-8">

              {[
                "Industry Recognized",
                "Verified & Authentic",
                "Skill Endorsement",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-5"
                >
                  <div className="rounded-2xl bg-lime-100 p-4">
                    <Award className="text-lime-500" />
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold">
                      {item}
                    </h4>
                  </div>
                </div>
              ))}

            </div>

            <button className="mt-12 rounded-2xl bg-lime-500 px-10 py-5 text-xl font-bold text-white">
              Enroll & Earn Certificate
            </button>

          </div>
        </div>
      </section>

      {/* INTERNSHIP */}

      <section className="bg-gradient-to-r from-[#0d6b67] to-[#2d9d98] px-6 md:px-20 py-24 text-white">

        <div className="text-center">

          <h2 className="text-6xl font-black">
            Internship{" "}
            <span className="text-lime-400">
              Opportunities
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-5xl text-xl leading-10 text-white/90">
            Students who enroll in our workshops get exclusive internship
            opportunities at Sklassics Technologies.
          </p>

        </div>

        <div className="mt-20 grid md:grid-cols-4 gap-8">

          {[
            "Workshop Enrollment",
            "Skill Assessment",
            "Screening Round",
            "Internship Offer",
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/10 p-10 text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-lime-500 text-2xl font-black">
                {index + 1}
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                {item}
              </h3>

              <p className="mt-5 text-white/80">
                Learn and grow with industry-level training.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}

      <section className="px-6 md:px-20 py-24">

        <div className="text-center">

          <p className="font-bold uppercase tracking-widest text-lime-500">
            Why Choose Us
          </p>

          <h2 className="mt-5 text-6xl font-black">
            Benefits for{" "}
            <span className="text-lime-500">
              Students & Colleges
            </span>
          </h2>
        </div>

        <div className="mt-20 grid md:grid-cols-4 gap-10">

          {[
            "Real-World Experience",
            "Portfolio Development",
            "Competitive Advantage",
            "Complete Resources",
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-10 shadow-sm"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#15716d] text-white text-2xl font-black">
                {index + 1}
              </div>

              <h3 className="text-3xl font-black">
                {item}
              </h3>

              <p className="mt-6 text-lg leading-8 text-slate-500">
                Learn with industry-ready projects and real practical
                training.
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* CONTACT */}

      <section className="bg-gradient-to-r from-[#0d6b67] to-[#2d9d98] px-6 md:px-20 py-24 text-white">

        <div className="grid md:grid-cols-2 gap-16">

          <div>

            <h2 className="text-5xl font-black">
              Sklassics
            </h2>

            <p className="mt-8 text-xl leading-10 text-white/90">
              Transforming students into industry-ready professionals
              through comprehensive technology training.
            </p>

            <div className="mt-12 space-y-5 text-lime-300 text-lg">
              <p>↗ www.sklassics.com</p>
              <p>↗ www.sklassicsworld.com</p>
              <p>↗ www.sklassicsai.com</p>
              <p>↗ www.sklassicsquiz.com</p>
            </div>

          </div>

          <div>

            <h2 className="text-5xl font-black">
              CONTACT US
            </h2>

            <div className="mt-12 space-y-8">

              <div className="flex items-center gap-5 rounded-3xl bg-white/10 p-6">
                <Phone className="text-lime-400" />

                <div>
                  <p className="text-white/70">Phone</p>
                  <h3 className="text-2xl font-bold">
                    +91 6305490580
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-5 rounded-3xl bg-white/10 p-6">
                <Mail className="text-lime-400" />

                <div>
                  <p className="text-white/70">Email</p>
                  <h3 className="text-2xl font-bold">
                    info@sklassics.com
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-5 rounded-3xl bg-white/10 p-6">
                <MapPin className="text-lime-400" />

                <div>
                  <p className="text-white/70">Address</p>
                  <h3 className="text-2xl font-bold">
                    ECIL, Hyderabad
                  </h3>
                </div>
              </div>

            </div>

            <button className="mt-12 rounded-2xl bg-lime-500 px-10 py-5 text-xl font-bold text-white">
              Schedule a Workshop
            </button>

          </div>
        </div>
      </section>

    </div>
  );
}