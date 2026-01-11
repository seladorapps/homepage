import { useState, useEffect } from 'react'
import './App.css'

// App data
const apps = [
  {
    id: 1,
    name: 'Everyday Wisdom',
    description: 'Daily wisdom quotes to inspire and motivate you throughout your day.',
    icon: '🧠',
    androidLink: 'https://play.google.com/apps/internaltest/4699382704732330205',
    iosLink: '#',
  },
  {
    id: 2,
    name: 'Everyday Humour',
    description: 'Start your day with a smile! Daily jokes and funny content.',
    icon: '😄',
    androidLink: '#',
    iosLink: '#',
  },
]

function Header({ isScrolled }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo-section">
          <img 
            src="https://plus.unsplash.com/premium_photo-1664302753070-e4cc31119668?q=80&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=100&h=100&fit=crop&crop=face" 
            alt="Chimp mascot" 
            className="logo-image"
          />
          <h1 className="logo-text">Selador Apps</h1>
        </div>
        
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#apps" onClick={() => setMenuOpen(false)}>Links</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  )
}

function AppCard({ app, index }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300 + index * 200)
    return () => clearTimeout(timer)
  }, [index])

  const direction = index % 2 === 0 ? 'left' : 'right'

  return (
    <div className={`app-card ${isVisible ? 'visible' : ''} from-${direction}`}>
      <div className="app-icon">{app.icon}</div>
      <div className="app-info">
        <h3>{app.name}</h3>
        <p>{app.description}</p>
        <div className="store-links">
          <a 
            href={app.androidLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="store-btn android"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396"/>
            </svg>
            Google Play
          </a>
          <a 
            href={app.iosLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="store-btn ios"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            App Store
          </a>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="hero">
      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <h2 className="hero-title from-left">Welcome to Selador Apps</h2>
        <p className="hero-subtitle from-right">Creating apps that make your everyday life better</p>
      </div>
    </section>
  )
}

function AppsSection() {
  return (
    <section id="apps" className="apps-section">
      <h2 className="section-title">Our Apps</h2>
      <div className="apps-grid">
        {apps.map((app, index) => (
          <AppCard key={app.id} app={app} index={index} />
        ))}
      </div>
    </section>
  )
}

function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('about')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about-section">
      <div className={`about-content ${isVisible ? 'visible' : ''}`}>
        <h2 className="section-title from-left">About Us</h2>
        <p className="from-right">
          At Selador Apps, we believe in creating simple, beautiful applications 
          that bring joy and value to your daily life. Our team is passionate about 
          crafting experiences that are both useful and delightful.
        </p>
      </div>
    </section>
  )
}

function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('contact')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="contact-section">
      <div className={`contact-content ${isVisible ? 'visible' : ''}`}>
        <h2 className="section-title from-right">Contact</h2>
        <p className="from-left">
          Have questions or feedback? We'd love to hear from you!
        </p>
        <a href="mailto:contact@seladorapps.com" className="contact-btn from-left">
          Get in Touch
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; 2026 Selador Apps. All rights reserved.{' '}
        <a href="privacy-policy.html">Privacy Policy</a>
      </p>
    </footer>
  )
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <Header isScrolled={isScrolled} />
      <main>
        <Hero />
        <AppsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
