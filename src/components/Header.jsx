import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'
  const resumeUrl = `${import.meta.env.BASE_URL}Resume.pdf`

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const scrollTo = (id) => {
    setOpen(false)
    if (!isHome) {
      navigate('/')
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 400)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { label: 'EXPERIENCE', action: () => scrollTo('experience') },
    { label: 'PROJECTS', action: () => scrollTo('projects') },
    { label: 'CONTACT', action: () => scrollTo('contact') },
  ]

  return (
    <>
      {/* ── HEADER BAR ── */}
      <header
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          padding: '0 clamp(1.5rem, 4vw, 3rem)',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: scrolled || open ? 'rgba(10,10,10,0.96)' : 'transparent',
          backdropFilter: scrolled || open ? 'blur(10px)' : 'none',
          transition: 'background-color 0.3s ease, border-color 0.3s ease',
          borderBottom: scrolled && !open ? '1px solid #1e1e1e' : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            to="/"
            onClick={() => { setOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="glitch-hover"
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(0.9rem, 1.6vw, 1.1rem)',
              letterSpacing: '0.14em',
              color: '#f5f5f5',
              textDecoration: 'none',
              display: 'block',
            }}
          >
            OM PATOLE
          </Link>
        </motion.div>

        {/* ── DESKTOP NAV (hidden on mobile) ── */}
        <motion.nav
          className="desktop-nav"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={item.action}
              className="nav-link"
            >
              {item.label}
            </button>
          ))}
          <Link
            to="/blog"
            className="nav-link"
            style={{ color: location.pathname.startsWith('/blog') ? '#f5f5f5' : undefined }}
          >
            BLOG
          </Link>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            RESUME
          </a>
        </motion.nav>

        {/* Hamburger (hidden on desktop) */}
        <motion.button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hamburger-btn"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            position: 'relative',
            zIndex: 110,
          }}
        >
          <motion.span
            animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.28 }}
            style={{ display: 'block', width: '22px', height: '1.5px', background: '#f5f5f5', transformOrigin: 'center' }}
          />
          <motion.span
            animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.28 }}
            style={{ display: 'block', width: '22px', height: '1.5px', background: '#f5f5f5' }}
          />
          <motion.span
            animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.28 }}
            style={{ display: 'block', width: '22px', height: '1.5px', background: '#f5f5f5', transformOrigin: 'center' }}
          />
        </motion.button>
      </header>

      {/* ── FULL-SCREEN OVERLAY MENU ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: '#0a0a0a',
              zIndex: 90,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
            }}
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.label}
                onClick={item.action}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.07 }}
                className="glitch-hover"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "'Anton', sans-serif",
                  fontSize: 'clamp(2.5rem, 9vw, 4.5rem)',
                  color: '#f5f5f5',
                  letterSpacing: '0.06em',
                  lineHeight: 1.1,
                  padding: '0.25rem 0',
                }}
              >
                {item.label}
              </motion.button>
            ))}

            {/* Blog link */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + navItems.length * 0.07 }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                <Link
                  to="/blog"
                  onClick={() => setOpen(false)}
                  className="glitch-hover"
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: 'clamp(2.5rem, 9vw, 4.5rem)',
                    color: '#f5f5f5',
                    textDecoration: 'none',
                    letterSpacing: '0.06em',
                    lineHeight: 1.1,
                    display: 'block',
                    padding: '0.25rem 0',
                  }}
                >
                  BLOG
                </Link>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glitch-hover"
                  onClick={() => setOpen(false)}
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: 'clamp(2.5rem, 9vw, 4.5rem)',
                    color: '#f5f5f5',
                    textDecoration: 'none',
                    letterSpacing: '0.06em',
                    lineHeight: 1.1,
                    display: 'block',
                    padding: '0.25rem 0',
                  }}
                >
                  RESUME
                </a>
              </div>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.52 }}
              style={{ display: 'flex', gap: '2rem', marginTop: '2.5rem' }}
            >
              {[
                { label: 'GitHub', href: 'https://github.com/OmPatole' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/om-patole/' },
                { label: 'Email', href: 'mailto:ompatole@proton.me' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.72rem',
                    letterSpacing: '0.15em',
                    color: '#555',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#f5f5f5')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}
                >
                  {s.label}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
