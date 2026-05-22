import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"

import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020817]">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* LOGO + ABOUT */}

          <div>

            <div className="mb-6 flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500 text-lg font-black text-white">
                S
              </div>

              <span className="text-3xl font-black text-white">
                klassics
              </span>

            </div>

            <p className="mb-7 text-[15px] leading-8 text-white/60">
              Your one-stop destination for cutting-edge AI
              projects, stunning web designs, professional
              portfolios, and multi-faith wedding platform
              discovery.
            </p>

            <div className="flex gap-3">

              {[Facebook, Instagram, Twitter, Youtube, Linkedin].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#081225] transition hover:border-red-500 hover:text-red-500"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              )}

            </div>

          </div>

          {/* EXPLORE */}

          <div>

            <h4 className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-red-500">
              — Explore
            </h4>

            <ul className="space-y-4 text-[15px]">

              <li>
                <Link
                  to="/"
                  className="text-white/70 transition hover:text-red-500"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/ourworks"
                  className="text-white/70 transition hover:text-red-500"
                >
                  Our Works
                </Link>
              </li>

              <li>
                <Link
                  to="/webdesigns"
                  className="text-white/70 transition hover:text-red-500"
                >
                  Web Designs
                </Link>
              </li>

              <li>
                <Link
                  to="/aiprojects"
                  className="text-white/70 transition hover:text-red-500"
                >
                  AI Projects
                </Link>
              </li>

            </ul>

          </div>

          {/* COMPANY */}

          <div>

            <h4 className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-red-500">
              — Company
            </h4>

            <ul className="space-y-4 text-[15px]">

              <li>
                <Link
                  to="/about"
                  className="text-white/70 transition hover:text-red-500"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/profiles"
                  className="text-white/70 transition hover:text-red-500"
                >
                  Profiles
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-white/70 transition hover:text-red-500"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* CONTACT */}

          <div>

            <h4 className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-red-500">
              — Get In Touch
            </h4>

            <ul className="space-y-5 text-[15px] text-white/80">

              <li className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#081225]">
                  <Mail className="h-4 w-4 text-red-500" />
                </div>

                info@sklassics.com

              </li>

              <li className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#081225]">
                  <Phone className="h-4 w-4 text-red-500" />
                </div>

                +91 9392732341

              </li>

              <li className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#081225]">
                  <MapPin className="h-4 w-4 text-red-500" />
                </div>

                Hyderabad, India

              </li>

            </ul>

            {/* WORKING HOURS */}

            <div className="mt-8 rounded-2xl border border-white/10 bg-[#081225] p-5">

              <p className="mb-4 text-sm font-bold uppercase text-white">
                WORKING HOURS
              </p>

              <div className="space-y-3 text-sm text-white/60">

                <div className="flex justify-between">
                  <span>Mon – Fri</span>
                  <span>10:00 AM – 7:00 PM</span>
                </div>

                <div className="flex justify-between">
                  <span>Sat – Sun</span>
                  <span>10:00 AM – 5:00 PM</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </footer>
  )
}