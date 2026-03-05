import React, { useState } from 'react'
import { motion } from 'framer-motion'

/* ── Scroll reveal ─────────────────────────────────────────── */
const revealUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

/* ── Social links ──────────────────────────────────────────── */
const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/om-patole/' },
  { label: 'GitHub', href: 'https://github.com/OmPatole' },
  { label: 'Email', href: 'mailto:ompatole@proton.me' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/Om_Patole/' },
]

function ContactLink({ label, href }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="contact-link"
      style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 'clamp(0.65rem, 1vw, 0.75rem)',
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        color: hovered ? '#f5f5f5' : '#888',
        transition: 'color 0.2s ease',
      }}
    >
      {label}
      <motion.span
        animate={hovered ? { x: 3, y: -3 } : { x: 0, y: 0 }}
        transition={{ duration: 0.2 }}
        style={{ fontSize: '0.7rem' }}
      >
        ↗
      </motion.span>
    </motion.a>
  )
}

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: '#0a0a0a',
        padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 3rem) clamp(3rem, 6vw, 5rem)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* ── Max-width centred container ── */}
      <div style={{ maxWidth: '1024px', margin: '0 auto', width: '100%', flex: 1, display: 'flex', flexDirection: 'column' }}>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
        >
          {/* Divider */}
          <motion.div variants={revealUp} className="divider" style={{ marginBottom: '3rem' }} />

          <motion.span
            variants={revealUp}
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: '0.65rem',
              letterSpacing: '0.35em',
              color: '#888',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '2.5rem',
            }}
          >
            04 — Contact
          </motion.span>

          {/* ── "LET'S TALK" — centred, dominates screen ── */}
          <motion.div
            variants={revealUp}
            style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            <h2
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: 'clamp(4rem, 18vw, 16rem)',
                lineHeight: 0.85,
                letterSpacing: '-0.02em',
                color: '#f5f5f5',
                textTransform: 'uppercase',
              }}
            >
              LET'S<br />TALK
            </h2>
          </motion.div>

          {/* ── Sub-copy + Email CTA — centred ── */}
          <motion.div
            variants={revealUp}
            style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(0.75rem, 1.2vw, 0.9rem)',
                color: '#c0c0c0',
                lineHeight: 1.8,
                marginBottom: '1.5rem',
                maxWidth: '420px',
                margin: '0 auto 1.5rem',
              }}
            >
              Open to internships, full-time roles, freelance projects,<br />
              and collaboration on interesting ideas.
            </p>
            <motion.a
              href="mailto:ompatole@proton.me"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: 'clamp(0.85rem, 1.5vw, 1.05rem)',
                letterSpacing: '0.15em',
                color: '#888',
                textDecoration: 'none',
                textTransform: 'uppercase',
                display: 'inline-block',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f5f5f5')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}
              whileHover={{ x: 6 }}
              transition={{ duration: 0.2 }}
            >
              ompatole@proton.me →
            </motion.a>
          </motion.div>

          {/* ── Divider before education ── */}
          <motion.div
            variants={revealUp}
            style={{
              width: '100%',
              height: '1px',
              background: '#1a1a1a',
              marginBottom: 'clamp(2rem, 4vw, 3rem)',
            }}
          />

          {/* ── Education block ── */}
          <motion.div
            variants={revealUp}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '0.5rem',
              marginBottom: 'clamp(2rem, 4vw, 3rem)',
            }}
          >
            <span
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: '0.65rem',
                letterSpacing: '0.35em',
                color: '#888',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '1rem',
              }}
            >
              Education
            </span>

            <h3
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: 'clamp(1.2rem, 3.5vw, 2.5rem)',
                letterSpacing: '0.03em',
                color: '#f5f5f5',
                textTransform: 'uppercase',
                lineHeight: 1.1,
              }}
            >
              B.Tech in Computer Science
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(0.75rem, 1.1vw, 0.88rem)',
                color: '#888',
                letterSpacing: '0.05em',
                marginTop: '0.25rem',
              }}
            >
              Shivaji University, Kolhapur &nbsp;|&nbsp; Expected 2027
            </p>
          </motion.div>

          {/* ── Bottom bar — links + copyright ── */}
          <motion.div
            variants={revealUp}
            style={{
              marginTop: 'auto',
              paddingTop: '2rem',
              borderTop: '1px solid #1a1a1a',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', gap: 'clamp(1rem, 3vw, 2.5rem)', flexWrap: 'wrap' }}>
              {links.map((l) => (
                <ContactLink key={l.label} label={l.label} href={l.href} />
              ))}
            </div>

            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.6rem',
                letterSpacing: '0.15em',
                color: '#333',
                textTransform: 'uppercase',
              }}
            >
              ©2026 Om Patole — Built with React
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}