import React from 'react'
import { NavLink } from "react-router-dom"
import logo from '../assets/logo.png'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">

          <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `relative text-sm pb-2 transition-all duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-foreground/80 hover:text-brand"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        Home

                        <span
                          className={`absolute left-0 -bottom-1 h-[2px] bg-red-500 transition-all duration-300 ${
                            isActive ? "w-full" : "w-0"
                          }`}
                        ></span>
                      </>
                    )}
                  </NavLink>

          <NavLink
            to="/aiprojects"
            className={({ isActive }) =>
              `text-sm pb-1 transition-colors ${
                isActive
                  ? "border-b-2 border-brand text-foreground"
                  : "text-foreground/80 hover:text-brand"
              }`
            }
          >
            AI Projects
          </NavLink>

          <NavLink
            to="/ourworks"
            className={({ isActive }) =>
              `text-sm pb-1 transition-colors ${
                isActive
                  ? "border-b-2 border-brand text-foreground"
                  : "text-foreground/80 hover:text-brand"
              }`
            }
          >
            Our Works
          </NavLink>

          <NavLink
            to="/webdesigns"
            className={({ isActive }) =>
              `text-sm pb-1 transition-colors ${
                isActive
                  ? "border-b-2 border-brand text-foreground"
                  : "text-foreground/80 hover:text-brand"
              }`
            }
          >
            Web Designs
          </NavLink>

          <NavLink
            to="/tutor"
            className={({ isActive }) =>
              `text-sm pb-1 transition-colors ${
                isActive
                  ? "border-b-2 border-brand text-foreground"
                  : "text-foreground/80 hover:text-brand"
              }`
            }
          >
            Tutor
          </NavLink>

          <NavLink
            to="/workshops"
            className={({ isActive }) =>
              `text-sm pb-1 transition-colors ${
                isActive
                  ? "border-b-2 border-brand text-foreground"
                  : "text-foreground/80 hover:text-brand"
              }`
            }
          >
            Workshops
          </NavLink>

          <NavLink
            to="/lms"
            className={({ isActive }) =>
              `text-sm pb-1 transition-colors ${
                isActive
                  ? "border-b-2 border-brand text-foreground"
                  : "text-foreground/80 hover:text-brand"
              }`
            }
          >
            LMS
          </NavLink>

          <NavLink
            to="/profiles"
            className={({ isActive }) =>
              `text-sm pb-1 transition-colors ${
                isActive
                  ? "border-b-2 border-brand text-foreground"
                  : "text-foreground/80 hover:text-brand"
              }`
            }
          >
            Profiles
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm pb-1 transition-colors ${
                isActive
                  ? "border-b-2 border-brand text-foreground"
                  : "text-foreground/80 hover:text-brand"
              }`
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-sm pb-1 transition-colors ${
                isActive
                  ? "border-b-2 border-brand text-foreground"
                  : "text-foreground/80 hover:text-brand"
              }`
            }
          >
            Contact
          </NavLink>

        </nav>

        {/* Button */}
        <button className="rounded-full bg-brand px-6 py-2.5 text-sm font-medium text-brand-foreground hover:opacity-90">
          Get Started
        </button>

      </div>
    </header>
  )
}