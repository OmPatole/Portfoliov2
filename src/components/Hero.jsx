import React from 'react'
import { motion } from 'framer-motion'

/* ── Stagger container ─────────────────────────────────────── */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const itemUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

/* ── Scroll-down animated line ─────────────────────────────── */
function ScrollLine() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.6rem',
        marginTop: '1rem',
      }}
    >
      <span
        style={{
          fontFamily: "'Oswald', sans-serif",
          fontSize: '0.65rem',
          letterSpacing: '0.3em',
          color: '#888',
          textTransform: 'uppercase',
        }}
      >
        See My Work
      </span>
      <div style={{ width: '1px', height: '60px', overflow: 'hidden', position: 'relative' }}>
        <motion.div
          style={{
            width: '1px',
            height: '100%',
            background: 'linear-gradient(to bottom, transparent, #f5f5f5, transparent)',
          }}
          animate={{ y: ['-100%', '200%'] }}
          transition={{ duration: 1.4, ease: 'easeInOut', repeat: Infinity }}
        />
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        backgroundColor: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 'clamp(6rem, 10vw, 8rem) clamp(1.5rem, 5vw, 3rem) 3rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 2 }}
      >

        {/* ── "HI ! I'M" ──────────────────────────────────── */}
        <motion.div variants={itemUp}>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)',
              letterSpacing: '0.3em',
              color: '#aaaaaa',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '0.5rem',
            }}
          >
            HI ! I'M
          </span>
        </motion.div>

        {/* ── "OM PATOLE" ──────────────────────────────────── */}
        <motion.div variants={itemUp} style={{ overflow: 'hidden' }}>
          <h1
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(4rem, 15vw, 14rem)',
              lineHeight: 0.88,
              letterSpacing: '-0.01em',
              color: '#f5f5f5',
              textAlign: 'left',
              textTransform: 'uppercase',
            }}
          >
            OM PATOLE
          </h1>
        </motion.div>

        {/* ── Description + Role row ───────────────────────── */}
        <motion.div
          variants={itemUp}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginTop: 'clamp(1rem, 3vw, 2rem)',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          {/* Left — small blurb, now clearly visible */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(0.78rem, 1.2vw, 0.9rem)',
              color: '#c8c8c8',
              lineHeight: 1.8,
              maxWidth: '260px',
              letterSpacing: '0.02em',
              position: 'relative',
              zIndex: 2,
            }}
          >
            Building full-stack<br />
            web experiences &amp;<br />
            security-first tools.
          </p>

          {/* Right — "MERN STACK DEVELOPER" */}
          <div style={{ textAlign: 'right' }}>
            <span
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: 'clamp(2rem, 6vw, 5.5rem)',
                lineHeight: 0.88,
                letterSpacing: '0.02em',
                color: '#f5f5f5',
                display: 'block',
                textTransform: 'uppercase',
              }}
            >
              MERN STACK
            </span>
            <span
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: 'clamp(2rem, 6vw, 5.5rem)',
                lineHeight: 0.88,
                letterSpacing: '0.02em',
                color: '#f5f5f5',
                display: 'block',
                textTransform: 'uppercase',
              }}
            >
              DEVELOPER
            </span>
          </div>
        </motion.div>

        {/* ── Second small text balancer ───────────────────── */}
        <motion.div
          variants={itemUp}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 'clamp(1.5rem, 3vw, 2.5rem)',
            flexWrap: 'wrap',
            gap: '1rem',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <span
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: 'clamp(0.65rem, 1vw, 0.75rem)',
              letterSpacing: '0.25em',
              color: '#888',
              textTransform: 'uppercase',
            }}
          >
            Kolhapur, India — Open to Opportunities
          </span>
          <span
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: 'clamp(0.65rem, 1vw, 0.75rem)',
              letterSpacing: '0.25em',
              color: '#888',
              textTransform: 'uppercase',
            }}
          >
            React · Node · MongoDB · Express
          </span>
        </motion.div>
      </motion.div>

      {/* ── Scrolling indicator ──────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        style={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 2 }}
      >
        <ScrollLine />
      </motion.div>
    </section>
  )
}