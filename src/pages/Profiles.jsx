import React from "react";

import aiImage from "../assets/ai.jpg";
import catProfile from "../assets/cat-profile.jpg";

const profiles = [
  {
    title: "Developer Portfolio",
    category: "Developer",
    image: aiImage,
    description:
      "Modern developer portfolio with projects, GitHub stats and skills showcase.",
  },

  {
    title: "Designer Portfolio",
    category: "Designer",
    image: catProfile,
    description:
      "Creative designer portfolio with animations and premium layouts.",
  },

  {
    title: "Student Portfolio",
    category: "Student",
    image: aiImage,
    description:
      "Professional student portfolio with education and certifications.",
  },

  {
    title: "Software Engineer",
    category: "Engineer",
    image: catProfile,
    description:
      "Advanced engineer portfolio with modern UI and responsive sections.",
  },

  {
    title: "Marketing Portfolio",
    category: "Marketing",
    image: aiImage,
    description:
      "Marketing showcase portfolio with branding and campaign projects.",
  },

  {
    title: "Doctor Portfolio",
    category: "Doctor",
    image: catProfile,
    description:
      "Professional medical portfolio website with appointments and services.",
  },
];

export default function Profiles() {
  return (
    <div className="bg-[#040b17] min-h-screen text-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#050d1a] via-[#071427] to-[#050d1a]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <div>
              <span className="border border-red-500/30 bg-red-500/10 text-red-400 px-5 py-2 rounded-full text-sm">
                PROFILE DESIGNS
              </span>

              <h1 className="text-6xl md:text-7xl font-black leading-tight mt-8">
                Stunning Portfolios <br />
                For Every Creator
              </h1>

              <p className="text-gray-400 text-xl mt-8 leading-relaxed max-w-2xl">
                Developer portfolios, student showcases, designer websites and
                professional profile designs crafted with modern UI.
              </p>

              <div className="flex gap-5 mt-10 flex-wrap">
                <button className="bg-red-500 hover:bg-red-600 transition px-8 py-4 rounded-2xl font-semibold">
                  Browse Designs
                </button>

                <button className="border border-red-500 text-red-400 hover:bg-red-500 hover:text-white transition px-8 py-4 rounded-2xl font-semibold">
                  Request Custom
                </button>
              </div>

              {/* TAGS */}
              <div className="flex gap-4 mt-12 flex-wrap">
                <span className="bg-[#0f1729] px-5 py-3 rounded-full text-gray-300 border border-white/5">
                  Pixel Perfect
                </span>

                <span className="bg-[#0f1729] px-5 py-3 rounded-full text-gray-300 border border-white/5">
                  Responsive
                </span>

                <span className="bg-[#0f1729] px-5 py-3 rounded-full text-gray-300 border border-white/5">
                  Customizable
                </span>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="grid grid-cols-2 gap-6">
              {profiles.slice(0, 4).map((item, index) => (
                <div
                  key={index}
                  className="bg-[#091423] rounded-3xl overflow-hidden border border-white/10 shadow-2xl hover:scale-105 transition duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-52 object-cover"
                  />

                  <div className="p-5">
                    <span className="text-red-400 text-sm">
                      {item.category}
                    </span>

                    <h2 className="text-2xl font-bold mt-3">
                      {item.title}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROFILE SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-5xl font-black">
              Profile Design Samples
            </h2>

            <p className="text-gray-400 text-xl mt-6">
              Premium portfolio templates crafted for professionals.
            </p>
          </div>

          {/* FILTERS */}
          <div className="flex flex-wrap gap-4 mt-16 justify-center">
            {[
              "All",
              "Developer",
              "Designer",
              "Student",
              "Engineer",
              "Doctor",
            ].map((item, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full border transition ${
                  index === 0
                    ? "bg-red-500 border-red-500"
                    : "border-white/10 bg-[#091423] hover:border-red-500"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* PROFILE CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            {profiles.map((profile, index) => (
              <div
                key={index}
                className="bg-[#091423] rounded-3xl overflow-hidden border border-white/10 hover:border-red-500 transition duration-300 hover:scale-[1.02]"
              >
                <img
                  src={profile.image}
                  alt={profile.title}
                  className="w-full h-64 object-cover"
                />

                <div className="p-7">
                  <span className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm">
                    {profile.category}
                  </span>

                  <h2 className="text-3xl font-bold mt-6">
                    {profile.title}
                  </h2>

                  <p className="text-gray-400 mt-5 leading-relaxed">
                    {profile.description}
                  </p>

                  <div className="flex justify-between items-center mt-8">
                    <button className="text-red-400 font-semibold hover:text-red-300">
                      Visit Website →
                    </button>

                    <button className="w-12 h-12 rounded-full border border-white/10 hover:border-red-500 transition">
                      ↗
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#101827] to-[#1a1020] rounded-[40px] p-16 text-center border border-white/5">
          <h2 className="text-5xl font-black">
            Want A Custom Profile Website?
          </h2>

          <p className="text-gray-400 text-xl mt-8 max-w-3xl mx-auto">
            We build stunning portfolio websites tailored to your personal
            brand and career goals.
          </p>

          <button className="bg-red-500 hover:bg-red-600 transition px-10 py-5 rounded-2xl text-lg font-semibold mt-12">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}