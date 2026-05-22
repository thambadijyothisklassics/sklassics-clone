import React from "react";
import {
  GraduationCap,
  BookOpen,
  Trophy,
  TrendingUp,
  Brain,
  Shield,
  Rocket,
  Code,
  Database,
  Smartphone,
  Globe,
  Cloud,
  Star,
  CheckCircle,
} from "lucide-react";

const skills = [
  {
    title: "JavaScript",
    learners: "45K+ learners",
    icon: <Code size={34} />,
  },
  {
    title: "React",
    learners: "38K+ learners",
    icon: <Code size={34} />,
  },
  {
    title: "Node.js",
    learners: "32K+ learners",
    icon: <Database size={34} />,
  },
  {
    title: "Python",
    learners: "52K+ learners",
    icon: <Code size={34} />,
  },
  {
    title: "Web Dev",
    learners: "41K+ learners",
    icon: <Globe size={34} />,
  },
  {
    title: "Mobile",
    learners: "29K+ learners",
    icon: <Smartphone size={34} />,
  },
  {
    title: "AI/ML",
    learners: "22K+ learners",
    icon: <Brain size={34} />,
  },
  {
    title: "Cloud",
    learners: "18K+ learners",
    icon: <Cloud size={34} />,
  },
];

const LMSLanding = () => {
  return (
    <div className="bg-[#f4f7fb] min-h-screen">
      {/* HERO SECTION */}
      <section
        className="relative min-h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-6xl md:text-7xl font-black text-white leading-tight">
              Transform Your <br />
              <span className="text-green-400">Career</span> in 90 Days
            </h1>

            <p className="text-gray-200 text-xl mt-6 leading-relaxed">
              Become job-ready with a guided 90-day blueprint combining
              projects, mentorship and interview preparation.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl text-white font-semibold transition">
                Start Your Transformation
              </button>

              <button className="border border-white px-8 py-4 rounded-xl text-white hover:bg-white hover:text-black transition">
                See Success Stories
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">
              <div className="bg-white/90 rounded-2xl p-5 text-center">
                <h2 className="text-3xl font-bold">10K+</h2>
                <p className="text-gray-600">Success Stories</p>
              </div>

              <div className="bg-white/90 rounded-2xl p-5 text-center">
                <h2 className="text-3xl font-bold">30+</h2>
                <p className="text-gray-600">Courses</p>
              </div>

              <div className="bg-white/90 rounded-2xl p-5 text-center">
                <h2 className="text-3xl font-bold">97%</h2>
                <p className="text-gray-600">Success Rate</p>
              </div>

              <div className="bg-white/90 rounded-2xl p-5 text-center">
                <h2 className="text-3xl font-bold">₹50K</h2>
                <p className="text-gray-600">Avg Salary Increase</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-5xl font-bold">
              Master Skills That{" "}
              <span className="text-green-500">Guarantee Success</span>
            </h2>

            <p className="text-gray-600 text-xl mt-6 max-w-3xl mx-auto">
              Learn the most in-demand technologies from industry experts and
              accelerate your career growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:scale-105 transition duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-green-500 text-white flex items-center justify-center">
                  {skill.icon}
                </div>

                <h3 className="text-2xl font-bold mt-6">{skill.title}</h3>

                <p className="text-gray-500 mt-2">{skill.learners}</p>

                <span className="inline-block mt-5 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                  High Demand
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-5xl font-bold">
              Why Students Choose{" "}
              <span className="text-green-500">Sklassics</span>
            </h2>

            <p className="text-gray-600 text-xl mt-6">
              We don’t just teach — we transform careers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            <div className="bg-[#f7f7f7] p-8 rounded-3xl shadow">
              <Rocket className="text-green-500" size={50} />
              <h3 className="text-2xl font-bold mt-5">
                90-Day Transformation
              </h3>
              <p className="text-gray-600 mt-4">
                Get job-ready in just 3 months.
              </p>
            </div>

            <div className="bg-[#f7f7f7] p-8 rounded-3xl shadow">
              <Brain className="text-purple-500" size={50} />
              <h3 className="text-2xl font-bold mt-5">
                Personalized Learning
              </h3>
              <p className="text-gray-600 mt-4">
                AI-powered adaptive learning paths.
              </p>
            </div>

            <div className="bg-[#f7f7f7] p-8 rounded-3xl shadow">
              <GraduationCap className="text-pink-500" size={50} />
              <h3 className="text-2xl font-bold mt-5">
                Certificates
              </h3>
              <p className="text-gray-600 mt-4">
                Industry-recognized certifications.
              </p>
            </div>

            <div className="bg-[#f7f7f7] p-8 rounded-3xl shadow">
              <TrendingUp className="text-green-500" size={50} />
              <h3 className="text-2xl font-bold mt-5">
                Salary Growth
              </h3>
              <p className="text-gray-600 mt-4">
                Boost your salary and career opportunities.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mt-20">
            <div className="bg-[#f5faf7] p-10 rounded-3xl shadow">
              <h3 className="text-4xl font-bold mb-8">
                Success Guaranteed
              </h3>

              <div className="space-y-5">
                {[
                  "Internships & placements",
                  "Mock interviews",
                  "Industry mentorship",
                  "Remote work opportunities",
                  "Career guidance",
                  "Real-world projects",
                ].map((item, i) => (
                  <div className="flex items-center gap-4" key={i}>
                    <CheckCircle className="text-green-500" />
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop"
                alt="AI"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-5xl font-bold">
              Student Success{" "}
              <span className="text-green-500">Stories</span>
            </h2>

            <p className="text-gray-600 text-xl mt-6">
              Real students. Real results.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-20">
            {[
              {
                name: "Priya Sharma",
                role: "Software Engineer at Infosys",
                review:
                  "Now I earn ₹15 LPA after joining Sklassics.",
              },
              {
                name: "Sneha Patel",
                role: "Data Scientist at TCS",
                review:
                  "The transition was possible only because of Sklassics.",
              },
              {
                name: "Rahul Verma",
                role: "Freelance Web Developer",
                review:
                  "Now I earn over ₹12 LPA working remotely.",
              },
            ].map((student, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-8"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={`https://i.pravatar.cc/150?img=${index + 10}`}
                    alt=""
                    className="w-20 h-20 rounded-full"
                  />

                  <div>
                    <h3 className="text-2xl font-bold">
                      {student.name}
                    </h3>

                    <p className="text-green-600 font-semibold">
                      {student.role}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 mt-8 text-lg leading-relaxed">
                  "{student.review}"
                </p>

                <div className="flex mt-6 gap-1 text-yellow-400">
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LMSLanding;