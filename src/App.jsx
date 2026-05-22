
import ScrollToTop from './components/ScrollToTop'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import AIProjects from './pages/AIProjects'
import OurWorks from './pages/OurWorks'
import WebDesigns from './pages/WebDesigns'
import Tutor from './pages/Tutor'
import Workshops from './pages/Workshops'
import LMS from './pages/LMS'
import Profiles from './pages/Profiles'
import Contact from './pages/Contact'
import { Sparkles, Plus, Car, HelpCircle, Brain, Briefcase, Globe, GraduationCap, Presentation, BookOpen, Bot, Heart, User, IndianRupee, Zap, Users, Award, Mail } from 'lucide-react'
import Header from './components/Header'
import Footer from './components/Footer'
import CategoryCard from './components/CategoryCard'

const categories = [
  { title: 'EasyFindRide', subtitle: 'Smart ride booking platform', description: 'Book rides easily with a simple, user-friendly platform designed for smooth travel, quick access, and convenient mobility.', badge: 'Ride Booking', cta: 'Visit Platform', icon: Car, image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80', highlighted: true, titleAccent: true },
  { title: 'Sklassics Quiz', subtitle: 'Online quiz and learning platform', description: 'Practice, test your knowledge, and improve your skills with interactive quizzes built for students and learners.', badge: 'Quiz Platform', cta: 'Visit Platform', icon: HelpCircle, image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&q=80' },
  { title: 'AI Projects', subtitle: 'Artificial intelligence & ML solutions', description: 'Chatbots, face recognition, voice assistants, deep learning, NLP, computer vision — cutting-edge AI/ML projects and demos.', badge: '30+ Projects', cta: 'Explore Designs', icon: Brain, image:'https://i.ytimg.com/vi/vT0Q_5UEKXE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDbJj0-Bc6Aqnpmcgud2b-7j7FaFg' },
  { title: 'Our Works', subtitle: 'Real-world projects & applications', description: "Hostel booking, e-commerce, food delivery, real estate, fitness apps — full-stack projects we've built and delivered.", badge: '12+ Projects', cta: 'Explore Designs', icon: Briefcase, image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80', highlighted: true, titleAccent: true },
  { title: 'Website Designs', subtitle: 'Business & industry-specific websites', description: 'Restaurant, SaaS, healthcare, law firm, gym, travel — premium website designs crafted for every industry.', badge: '6+ Designs', cta: 'Explore Designs', icon: Globe, image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80' },
  { title: 'Tutor', subtitle: 'Online tutoring platform', description: 'Learn with guided support, tutor-led sessions, and structured educational resources through the Sklassics Tutor platform.', badge: 'Learning', cta: 'Visit Platform', icon: GraduationCap, image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80' },
  { title: 'Workshops', subtitle: 'Practical learning sessions', description: 'Hands-on workshops for students and professionals to learn practical skills, modern tools, and real-world technologies.', badge: 'Workshops', cta: 'Visit Platform', icon: Presentation, image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80' },
  { title: 'LMS', subtitle: 'Student learning advanced technologies', description: 'A student learning platform for advanced technologies, structured courses, skill development, and career-focused learning.', badge: 'Courses', cta: 'Visit Platform', icon: BookOpen, image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80' },
  { title: 'AI Interview', subtitle: 'AI-powered interview platform', description: 'Practice interviews, generate smart questions, and improve candidate readiness with an AI-powered interview experience.', badge: 'AI Interview', cta: 'Visit Platform', icon: Bot, image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80' },
  { title: 'Wedding Websites', subtitle: 'Multi-faith wedding platform discovery', description: 'Explore curated wedding platforms for Hindu, Muslim, and Christian ceremonies — venue support, vendor connections, and planning tools.', badge: '18+ Platforms', cta: 'Explore Designs', icon: Heart, image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', titleAccent: true },
  { title: 'Profile & Portfolio', subtitle: 'Stunning personal & professional profiles', description: 'Developer portfolios, designer showcases, photographer galleries, freelancer resumes — beautifully crafted profile websites.', badge: '6+ Designs', cta: 'Explore Designs', icon: User,image: 'https://sklassics.com/src/assets/categories/cat-profile.jpg' , titleAccent: true },
  { title: 'Car Rental', subtitle: 'Reliable car rental service', description: 'Find rental cars for local travel, outstation trips, business travel, and comfortable journeys through Hanuman Cars.', badge: 'Car Rental', cta: 'Visit Platform', icon: Car, image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80' },
  { title: 'EasyFindLoan', subtitle: 'Simple loan discovery platform', description: 'Explore loan options with a simple platform designed to help users find suitable financial solutions quickly and easily.', badge: 'Loan Platform', cta: 'Visit Platform', icon: IndianRupee, image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80' },
]

const features = [
  { num: '1', title: 'Custom Designs', desc: 'Every project is uniquely crafted — no templates, no shortcuts.' },
  { num: '2', title: 'Mobile First', desc: 'Responsive designs that look stunning on every screen size.' },
  { num: '3', title: 'Fast & Optimized', desc: 'Built for speed with modern tech stacks and best practices.' },
  { num: '4', title: 'Ongoing Support', desc: 'We provide continuous support and updates after launch.' },
]

const stats = [
  { value: '50+', label: 'Projects Delivered', icon: Zap },
  { value: '30+', label: 'AI Solutions', icon: Brain },
  { value: '100+', label: 'Happy Clients', icon: Users },
  { value: '5+', label: 'Years Experience', icon: Award },
]

export default function App() {
  return (
  <BrowserRouter>
     <ScrollToTop />
    <Routes>

  {/* HOME PAGE */}
     <Route
  path="/"
  element={
    <div className="min-h-screen bg-background">
        <Header />

        <main>
          <section className="px-6 py-24 text-center">
            <div className="mx-auto max-w-5xl">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-5 py-2 text-xs font-bold uppercase tracking-wider text-brand">
                <Sparkles className="h-3 w-3" />
                Welcome To Sklassics
              </div>

              <h1 className="mb-8 text-6xl font-bold leading-tight md:text-7xl">
                What Are You <span className="text-brand">Looking For?</span>
              </h1>

              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                We design stunning websites for every need.choose your category below to explore our sample designs find your perfect match.
              </p>
            </div>
          </section>

          <section className="px-6 pb-24">
            <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((c) => (
                <CategoryCard key={c.title} {...c} />
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    }
  />

  {/* OTHER PAGES */}

  <Route
    path="/home"
    element={
      <>
        <Header />
        <Home />
        <Footer />
      </>
    }
  />

  <Route
    path="/about"
    element={
      <>
        <Header />
        <About />
        <Footer />
      </>
    }
  />

  <Route
    path="/aiprojects"
    element={
      <>
        <Header />
        <AIProjects />
        <Footer />
      </>
    }
  />

  <Route
    path="/ourworks"
    element={
      <>
        <Header />
        <OurWorks />
        <Footer />
      </>
    }
  />

  <Route
    path="/webdesigns"
    element={
      <>
        <Header />
        <WebDesigns />
        <Footer />
      </>
    }
  />

  <Route
    path="/tutor"
    element={
      <>
        <Header />
        <Tutor />
        <Footer />
      </>
    }
  />

  <Route
    path="/workshops"
    element={
      <>
        <Header />
        <Workshops />
        <Footer />
      </>
    }
  />

  <Route
    path="/lms"
    element={
      <>
        <Header />
        <LMS />
        <Footer />
      </>
    }
  />

  <Route
    path="/profiles"
    element={
      <>
        <Header />
        <Profiles />
        <Footer />
      </>
    }
  />

  <Route
    path="/contact"
    element={
      <>
        <Header />
        <Contact />
        <Footer />
      </>
    }
  />

</Routes>

      
  </BrowserRouter>
)
}