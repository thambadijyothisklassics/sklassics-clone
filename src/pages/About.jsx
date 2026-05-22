import React from "react";
import {
  ArrowRight,
  Briefcase,
  Users,
  Trophy,
  Star,
} from "lucide-react";

export default function About() {
  return (
    <div className="bg-[#020817] text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6 border-b border-[#101b2d]">
        
        {/* GRID BACKGROUND */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(#1b2b46 1px, transparent 1px), linear-gradient(to right, #1b2b46 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* FLOATING IMAGES */}
        <img
          src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop"
          alt=""
          className="absolute top-10 left-10 w-40 rounded-2xl rotate-[-10deg] border border-red-500/20 shadow-2xl hidden lg:block"
        />

        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
          alt=""
          className="absolute bottom-24 left-0 w-52 rounded-2xl rotate-[8deg] border border-red-500/20 shadow-2xl hidden lg:block"
        />

        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
          alt=""
          className="absolute top-0 right-10 w-40 rounded-2xl rotate-[8deg] border border-red-500/20 shadow-2xl hidden lg:block"
        />

        <img
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop"
          alt=""
          className="absolute bottom-32 right-0 w-52 rounded-2xl rotate-[-8deg] border border-red-500/20 shadow-2xl hidden lg:block"
        />

        {/* CENTER CONTENT */}
        <div className="relative z-10 text-center max-w-5xl">
          <p className="inline-flex items-center gap-2 border border-red-500/30 text-red-400 px-5 py-2 rounded-full text-sm tracking-widest uppercase">
            About Us
          </p>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
            About{" "}
            <span className="text-red-500">
              SKLASSICS <br />
              TECHNOLOGIES
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mt-8 max-w-3xl mx-auto leading-relaxed">
            A trusted technology and service brand delivering innovative
            digital solutions, creative designs, and professional business
            services across India.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14">
            <div>
              <h2 className="text-4xl font-bold text-red-500">50+</h2>
              <p className="text-gray-400 mt-2">Projects Delivered</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-red-500">30+</h2>
              <p className="text-gray-400 mt-2">Happy Clients</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-red-500">3+</h2>
              <p className="text-gray-400 mt-2">Years Experience</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-red-500">100%</h2>
              <p className="text-gray-400 mt-2">Client Satisfaction</p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center gap-5 mt-14">
            <button className="bg-red-500 hover:bg-red-600 transition px-8 py-4 rounded-full font-semibold flex items-center gap-2">
              Get In Touch
              <ArrowRight size={18} />
            </button>

            <button className="border border-red-500 hover:bg-red-500 transition px-8 py-4 rounded-full font-semibold">
              Explore Our Work
            </button>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-28 px-6 relative">
        <div className="max-w-6xl mx-auto text-center">
          <p className="inline-block border border-red-500/30 text-red-400 px-5 py-2 rounded-full text-sm uppercase tracking-widest">
            Introduction
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-8">
            Who We Are
          </h2>

          <p className="text-gray-400 text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
            Innovative, reliable, modern, and customer-focused — that’s the
            foundation of everything we do.
          </p>

          {/* CONTENT BOX */}
          <div className="mt-16 bg-[#071224] border border-[#16243d] rounded-3xl p-10 md:p-16 shadow-2xl">
            <p className="text-gray-300 text-lg leading-[2rem]">
              SKLASSICS TECHNOLOGIES PVT LTD is a forward-thinking technology
              company committed to transforming ideas into impactful digital
              experiences. We specialize in professional web design, software
              development, wedding platforms, portfolio creation, and
              comprehensive business solutions.
            </p>

            <p className="text-gray-400 text-lg leading-[2rem] mt-10">
              Quality, trust, and customer satisfaction are the pillars of our
              business. We believe in building lasting relationships with our
              clients through transparent communication, reliable delivery, and
              solutions that genuinely make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="pb-28 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="bg-[#071224] border border-[#16243d] rounded-3xl p-8 hover:-translate-y-2 transition">
            <Briefcase className="text-red-500" size={50} />
            <h3 className="text-2xl font-bold mt-6">
              Professional Services
            </h3>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Premium-quality web solutions, AI products, and business
              platforms crafted with modern technologies.
            </p>
          </div>

          <div className="bg-[#071224] border border-[#16243d] rounded-3xl p-8 hover:-translate-y-2 transition">
            <Users className="text-red-500" size={50} />
            <h3 className="text-2xl font-bold mt-6">
              Trusted By Clients
            </h3>
            <p className="text-gray-400 mt-4 leading-relaxed">
              We work closely with startups, businesses, creators, and
              professionals across multiple industries.
            </p>
          </div>

          <div className="bg-[#071224] border border-[#16243d] rounded-3xl p-8 hover:-translate-y-2 transition">
            <Trophy className="text-red-500" size={50} />
            <h3 className="text-2xl font-bold mt-6">
              Quality Delivery
            </h3>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Every project is built with attention to detail, performance,
              responsiveness, and long-term scalability.
            </p>
          </div>

          <div className="bg-[#071224] border border-[#16243d] rounded-3xl p-8 hover:-translate-y-2 transition">
            <Star className="text-red-500" size={50} />
            <h3 className="text-2xl font-bold mt-6">
              Innovation First
            </h3>
            <p className="text-gray-400 mt-4 leading-relaxed">
              We continuously innovate with modern UI/UX, AI technologies,
              automation tools, and scalable systems.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}