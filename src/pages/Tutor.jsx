import React from "react";
import {
  Users,
  BadgeCheck,
  Rocket,
  ArrowUpRight,
} from "lucide-react";

const programs = [
  { name: "SSC", color: "bg-emerald-500" },
  { name: "CBSE", color: "bg-orange-500" },
  { name: "ISC", color: "bg-purple-500" },
  { name: "ICSE", color: "bg-pink-500" },
  { name: "IGCSE", color: "bg-blue-500" },
  { name: "Class XI-XII", color: "bg-amber-500" },
  { name: "EAMCET", color: "bg-cyan-500" },
  { name: "JEE MAINS", color: "bg-slate-800" },
];

const Tutor = () => {
  return (
    <div className="bg-[#f4f7f8] min-h-screen">

      {/* HERO SECTION */}
      <section className="bg-[#021028] text-white px-8 md:px-20 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-5xl font-bold leading-tight">
              <span className="text-cyan-400">
                Smart Tutoring
              </span>
              <br />
              Built for Real Results
            </h1>

            <p className="text-gray-300 mt-6 text-lg leading-8">
              At Sklassics, we combine expert tutors with AI-powered
              insights to help students learn faster, understand deeper,
              and perform better in every subject.
            </p>

            <button className="mt-8 bg-cyan-400 hover:bg-cyan-300 text-black font-semibold px-8 py-4 rounded-xl transition">
              Contact Us
            </button>

            {/* STATS */}
            <div className="flex gap-10 mt-10">
              <div>
                <h2 className="text-3xl font-bold">50K+</h2>
                <p className="text-gray-400">Students</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">500+</h2>
                <p className="text-gray-400">Courses</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">4.9 ★</h2>
                <p className="text-gray-400">Rating</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop"
              alt="AI"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* LEARNING PATH */}
      <section className="py-20 px-8 md:px-20">
        <div className="text-center">
          <p className="text-cyan-500 font-semibold">
            Our Programs
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Choose Your{" "}
            <span className="text-cyan-400">
              Learning Path
            </span>
          </h2>

          <p className="text-gray-500 mt-5 text-lg">
            Explore our curriculum designed for different boards and exams
          </p>
        </div>

        {/* PROGRAM CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {programs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 relative overflow-hidden h-44 flex items-center justify-center group"
            >

              {/* TOP CORNER */}
              <div
                className={`absolute top-0 right-0 w-16 h-16 ${item.color} flex items-start justify-end p-3`}
                style={{
                  clipPath: "polygon(100% 0, 0 0, 100% 100%)",
                }}
              >
                <ArrowUpRight
                  className="text-white group-hover:rotate-45 transition"
                  size={20}
                />
              </div>

              {/* TEXT */}
              <h3 className="text-3xl font-extrabold text-[#021028] tracking-wide">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="px-8 md:px-20 py-20">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1600&auto=format&fit=crop"
              alt="Students"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          {/* CONTENT */}
          <div>
            <p className="text-cyan-500 font-semibold">
              About Sklassics
            </p>

            <h2 className="text-5xl font-bold leading-tight mt-4">
              India’s Premier{" "}
              <span className="text-cyan-400">
                AI-Powered
              </span>
              <br />
              Education Platform
            </h2>

            <p className="text-gray-600 mt-6 text-lg leading-8">
              We're revolutionizing education with personalized AI learning
              experiences. Our platform adapts to each student's unique
              learning style, pace, and goals to deliver exceptional
              results.
            </p>

            {/* FEATURES */}
            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-5">
                <div className="bg-cyan-100 p-4 rounded-xl">
                  <Users className="text-cyan-500" />
                </div>

                <h3 className="text-2xl font-semibold">
                  Expert AI Trainers
                </h3>
              </div>

              <div className="flex items-center gap-5">
                <div className="bg-cyan-100 p-4 rounded-xl">
                  <BadgeCheck className="text-cyan-500" />
                </div>

                <h3 className="text-2xl font-semibold">
                  Certified Curriculum
                </h3>
              </div>

              <div className="flex items-center gap-5">
                <div className="bg-cyan-100 p-4 rounded-xl">
                  <Rocket className="text-cyan-500" />
                </div>

                <h3 className="text-2xl font-semibold">
                  Interactive Learning
                </h3>
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 border-t pt-10">
              <div>
                <h2 className="text-4xl font-bold text-cyan-500">
                  15+
                </h2>
                <p className="text-gray-500">Years Experience</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-cyan-500">
                  50K+
                </h2>
                <p className="text-gray-500">Happy Students</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-cyan-500">
                  98%
                </h2>
                <p className="text-gray-500">Success Rate</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-cyan-500">
                  24/7
                </h2>
                <p className="text-gray-500">AI Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IT TRAINING SECTION */}
      <section className="bg-[#075f5b] text-white py-20 px-8 text-center">
        <p className="text-cyan-200 font-semibold text-xl">
          Training & Career Support
        </p>

        <h2 className="text-5xl font-bold mt-5">
          IT Training & Placements
        </h2>

        <p className="text-gray-200 mt-6 text-xl max-w-4xl mx-auto leading-9">
          A glimpse of our IT training programs and placement activities —
          from hands-on technical sessions and project mentoring to
          placement drives, mock interviews, and career guidance.
        </p>
      </section>
    </div>
  );
};

export default Tutor;