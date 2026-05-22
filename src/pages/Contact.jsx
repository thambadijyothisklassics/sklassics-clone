import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  MessageCircle,
  ChevronDown,
  Code,
  Brain,
  Palette,
  Rocket,
  Zap,
  Users,
  Award,
  BadgeCheck,
} from "lucide-react";

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "What services does SKLASSICS TECHNOLOGIES offer?",
      a: "We provide web development, AI solutions, UI/UX design, branding, portfolio websites, and business consulting services.",
    },
    {
      q: "How quickly do you respond to inquiries?",
      a: "Our team usually responds within 24 hours.",
    },
    {
      q: "Do you work with international clients?",
      a: "Yes, we work with clients globally.",
    },
    {
      q: "What is your typical project timeline?",
      a: "Project timelines depend on complexity, usually between 1–8 weeks.",
    },
    {
      q: "Do you offer post-launch support?",
      a: "Yes, we provide complete support after deployment.",
    },
  ];

  return (
    <div className="bg-[#020817] text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-screen px-6 flex items-center border-b border-[#101b2d]">

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(#1b2b46 1px, transparent 1px), linear-gradient(to right, #1b2b46 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* LEFT */}
          <div>
            <p className="inline-block border border-red-500/30 text-red-400 px-5 py-2 rounded-full text-sm uppercase tracking-widest">
              Get In Touch
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mt-8">
              Let’s Build Something
              <span className="text-red-500 block">
                Extraordinary
              </span>
            </h1>

            <p className="text-gray-400 text-xl mt-8 leading-relaxed">
              Have a project idea, need consultation, or want to explore our
              services? We’re here to turn your vision into reality.
            </p>

            <p className="text-red-400 italic mt-6">
              “Your success is our mission — let’s start the conversation.”
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-10">
              <a
                href="https://wa.me/916305490580"
                target="_blank"
                className="bg-red-500 hover:bg-red-600 transition px-8 py-4 rounded-full font-semibold flex items-center gap-2"
              >
                Chat on WhatsApp
                <MessageCircle size={18} />
              </a>

              <a
                href="#contact-form"
                className="border border-red-500 hover:bg-red-500 transition px-8 py-4 rounded-full font-semibold flex items-center gap-2"
              >
                Send Email
                <Mail size={18} />
              </a>
            </div>

            {/* FEATURES */}
            <div className="flex flex-wrap gap-8 mt-12 text-gray-400">
              <div className="flex items-center gap-2">
                <Clock className="text-red-500" size={18} />
                24hr Response
              </div>

              <div className="flex items-center gap-2">
                <Users className="text-red-500" size={18} />
                Global Clients
              </div>

              <div className="flex items-center gap-2">
                <BadgeCheck className="text-red-500" size={18} />
                Dedicated Support
              </div>
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className="relative hidden lg:block">

            <div className="absolute top-0 left-10 bg-[#071224] border border-red-500/20 rounded-3xl overflow-hidden w-72 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="h-52 w-full object-cover"
              />
              <div className="p-5">
                <p className="text-red-500 text-sm uppercase">
                  Our Office
                </p>
                <h3 className="text-xl font-bold mt-2">
                  Visit us in Hyderabad
                </h3>
                <p className="text-gray-400 mt-2">
                  6305490580
                </p>
              </div>
            </div>

            <div className="absolute top-[-20px] right-0 bg-[#071224] border border-[#16243d] rounded-2xl p-5 w-40">
              <Mail className="text-red-500" />
              <h3 className="mt-3 font-semibold">
                Email Us
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                info@sklassics.com
              </p>
            </div>

            <div className="absolute bottom-[-180px] right-0 bg-[#071224] border border-red-500/20 rounded-3xl overflow-hidden w-72 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="h-52 w-full object-cover"
              />
              <div className="p-5">
                <p className="text-red-500 text-sm uppercase">
                  Our Team
                </p>
                <h3 className="text-xl font-bold mt-2">
                  Ready to help you
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6 border-b border-[#101b2d]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-[#071224] border border-[#16243d] rounded-2xl p-6 flex items-center gap-4">
            <Code className="text-red-500" size={40} />
            <div>
              <h3 className="text-2xl font-bold">
                Web Development
              </h3>
              <p className="text-gray-400 mt-2">
                Websites, web apps & e-commerce
              </p>
            </div>
          </div>

          <div className="bg-[#071224] border border-[#16243d] rounded-2xl p-6 flex items-center gap-4">
            <Brain className="text-red-500" size={40} />
            <div>
              <h3 className="text-2xl font-bold">
                AI Solutions
              </h3>
              <p className="text-gray-400 mt-2">
                ML, NLP, computer vision & more
              </p>
            </div>
          </div>

          <div className="bg-[#071224] border border-[#16243d] rounded-2xl p-6 flex items-center gap-4">
            <Palette className="text-red-500" size={40} />
            <div>
              <h3 className="text-2xl font-bold">
                Design Services
              </h3>
              <p className="text-gray-400 mt-2">
                UI/UX, branding & portfolios
              </p>
            </div>
          </div>

          <div className="bg-[#071224] border border-[#16243d] rounded-2xl p-6 flex items-center gap-4">
            <Rocket className="text-red-500" size={40} />
            <div>
              <h3 className="text-2xl font-bold">
                Business Growth
              </h3>
              <p className="text-gray-400 mt-2">
                Consulting, strategy & support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section
        id="contact-form"
        className="py-28 px-6"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center">
            <p className="inline-block border border-red-500/30 text-red-400 px-5 py-2 rounded-full text-sm uppercase tracking-widest">
              Contact
            </p>

            <h2 className="text-5xl md:text-6xl font-bold mt-8">
              Send Us a Message
            </h2>

            <p className="text-gray-400 text-xl mt-6">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 mt-20">

            {/* LEFT INFO */}
            <div className="space-y-8">

              <div>
                <h3 className="text-4xl font-bold">
                  Contact Information
                </h3>

                <p className="text-gray-400 mt-6 leading-relaxed">
                  SKLASSICS TECHNOLOGIES PVT LTD is your trusted partner for web development, AI solutions, and digital innovation.
                </p>
              </div>

              <div className="space-y-6">

                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#071224] border border-[#16243d] flex items-center justify-center">
                    <Mail className="text-red-500" />
                  </div>

                  <div>
                    <p className="text-gray-400 uppercase text-sm">
                      Email
                    </p>
                    <h3 className="font-bold text-lg">
                      info@sklassics.com
                    </h3>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#071224] border border-[#16243d] flex items-center justify-center">
                    <Phone className="text-red-500" />
                  </div>

                  <div>
                    <p className="text-gray-400 uppercase text-sm">
                      Phone
                    </p>
                    <h3 className="font-bold text-lg">
                      6305490580
                    </h3>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#071224] border border-[#16243d] flex items-center justify-center">
                    <Clock className="text-red-500" />
                  </div>

                  <div>
                    <p className="text-gray-400 uppercase text-sm">
                      Office Hours
                    </p>
                    <h3 className="font-bold text-lg">
                      Mon–Sat, 10:00 AM – 7:00 PM
                    </h3>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#071224] border border-[#16243d] flex items-center justify-center">
                    <MapPin className="text-red-500" />
                  </div>

                  <div>
                    <p className="text-gray-400 uppercase text-sm">
                      Location
                    </p>
                    <h3 className="font-bold text-lg">
                      Hyderabad, Telangana
                    </h3>
                  </div>
                </div>
              </div>

              {/* WHY US */}
              <div className="bg-[#071224] border border-[#16243d] rounded-3xl p-8">
                <h3 className="text-2xl font-bold">
                  Why Choose Us
                </h3>

                <div className="space-y-4 mt-6 text-gray-400">
                  <p>• 50+ Projects Delivered</p>
                  <p>• Trusted by 40+ Businesses</p>
                  <p>• 24-Hour Response Time</p>
                  <p>• Post-Launch Support</p>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="lg:col-span-2 bg-[#071224] border border-[#16243d] rounded-3xl p-10">

              <h3 className="text-4xl font-bold">
                Tell Us About Your Project
              </h3>

              <p className="text-gray-400 mt-4">
                Fill in the details and we’ll reach out with the best solution.
              </p>

              <form className="mt-10 space-y-6">

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="bg-[#132238] border border-[#22314a] rounded-xl px-5 py-4 outline-none"
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-[#132238] border border-[#22314a] rounded-xl px-5 py-4 outline-none"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Phone"
                    className="bg-[#132238] border border-[#22314a] rounded-xl px-5 py-4 outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Company"
                    className="bg-[#132238] border border-[#22314a] rounded-xl px-5 py-4 outline-none"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <select className="bg-[#132238] border border-[#22314a] rounded-xl px-5 py-4 outline-none">
                    <option>Select service</option>
                    <option>Web Development</option>
                    <option>AI Solutions</option>
                    <option>UI/UX Design</option>
                  </select>

                  <select className="bg-[#132238] border border-[#22314a] rounded-xl px-5 py-4 outline-none">
                    <option>Budget Range</option>
                    <option>₹10K - ₹50K</option>
                    <option>₹50K - ₹1L</option>
                    <option>₹1L+</option>
                  </select>
                </div>

                <textarea
                  rows="6"
                  placeholder="Project Details"
                  className="w-full bg-[#132238] border border-[#22314a] rounded-xl px-5 py-4 outline-none"
                />

                <button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 transition py-5 rounded-full text-lg font-bold flex items-center justify-center gap-3"
                >
                  Submit Inquiry
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 px-6 bg-[#04101f]">
        <div className="max-w-5xl mx-auto">

          <div className="text-center">
            <p className="inline-block border border-red-500/30 text-red-400 px-5 py-2 rounded-full text-sm uppercase tracking-widest">
              FAQ
            </p>

            <h2 className="text-5xl md:text-6xl font-bold mt-8">
              Frequently Asked Questions
            </h2>

            <p className="text-gray-400 text-xl mt-6">
              Find answers to common questions about working with us.
            </p>
          </div>

          <div className="mt-16 space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#071224] border border-[#16243d] rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className="text-xl font-semibold">
                    {faq.q}
                  </span>

                  <ChevronDown
                    className={`transition ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-[#120912] to-[#091321] text-center">
        <h2 className="text-5xl font-bold">
          Ready to <span className="text-red-500">Get Started?</span>
        </h2>

        <p className="text-gray-400 text-xl mt-6 max-w-3xl mx-auto">
          Whether it’s a website, AI solution, or business consultation —
          we’re just a message away.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-12">

          {/* THIS STAYS ON SAME PAGE */}
          <a
            href="#contact-form"
            className="bg-red-500 hover:bg-red-600 transition px-8 py-4 rounded-full font-semibold flex items-center gap-2"
          >
            Get Started
            <ArrowRight size={18} />
          </a>

          <a
            href="#contact-form"
            className="border border-red-500 hover:bg-red-500 transition px-8 py-4 rounded-full font-semibold"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 px-6 border-t border-[#101b2d]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-[#071224] border border-[#16243d] rounded-3xl p-8 text-center">
            <Zap className="text-red-500 mx-auto" size={40} />
            <h2 className="text-5xl font-bold mt-6">50+</h2>
            <p className="text-gray-400 mt-2">Projects Delivered</p>
          </div>

          <div className="bg-[#071224] border border-[#16243d] rounded-3xl p-8 text-center">
            <Brain className="text-red-500 mx-auto" size={40} />
            <h2 className="text-5xl font-bold mt-6">30+</h2>
            <p className="text-gray-400 mt-2">AI Solutions</p>
          </div>

          <div className="bg-[#071224] border border-[#16243d] rounded-3xl p-8 text-center">
            <Users className="text-red-500 mx-auto" size={40} />
            <h2 className="text-5xl font-bold mt-6">100+</h2>
            <p className="text-gray-400 mt-2">Happy Clients</p>
          </div>

          <div className="bg-[#071224] border border-[#16243d] rounded-3xl p-8 text-center">
            <Award className="text-red-500 mx-auto" size={40} />
            <h2 className="text-5xl font-bold mt-6">5+</h2>
            <p className="text-gray-400 mt-2">Years Experience</p>
          </div>
        </div>
      </section>
    </div>
  );
}