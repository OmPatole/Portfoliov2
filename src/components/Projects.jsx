import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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

/* ── Project data ──────────────────────────────────────────── */
const projects = [
  {
    id: 'quiz-app',
    name: 'QUIZ APP',
    year: '2026',
    category: 'Full Stack',
    description:
      'Full-featured quiz platform with separate Admin and Student portals. CSV bulk question import, JWT-secured auth, real-time leaderboards, and performance analytics via Recharts.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind', 'Recharts', 'JWT'],
    link: 'https://github.com/OmPatole',
  },
  {
    id: 'captive-portal',
    name: 'CAPTIVE PORTAL',
    year: '2025',
    category: 'Networking',
    description:
      'Wi-Fi captive portal for university network access control. Google OAuth login, Firebase session management, and Ruckus SmartZone API integration for real-time device authorization.',
    stack: ['React', 'Node.js', 'Firebase', 'Ruckus SmartZone API', 'Google OAuth'],
    link: 'https://github.com/OmPatole',
  },
  {
    id: 'xeroguard',
    name: 'XEROGUARD',
    year: '2026',
    category: 'Security',
    description:
      'Document privacy solution that detects, redacts, and watermarks sensitive information in files before sharing. Zero-trust approach to document handling.',
    stack: ['React', 'Node.js', 'Express', 'PDF.js', 'Canvas API'],
    link: 'https://github.com/OmPatole',
  },
  {
    id: 'cgpa-calc',
    name: 'CGPA CALC',
    year: '2025',
    category: 'Utility',
    description:
      'Real-time CGPA and SGPA calculator for Indian university students. Dynamic course entry, grade point mapping, and instant cumulative GPA calculation.',
    stack: ['React', 'Vite', 'Tailwind'],
    link: 'https://github.com/OmPatole',
  },
]

/* ── Single project row ────────────────────────────────────── */
function ProjectRow({ project, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      variants={revealUp}
      className="project-row"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        borderBottom: '1px solid #1a1a1a',
        overflow: 'hidden',
      }}
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', display: 'block' }}
      >
        {/* Title row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 'clamp(0.8rem, 2vw, 1.5rem) 0',
            gap: '1rem',
          }}
        >
          {/* Index */}
          <span
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: '0.6rem',
              color: '#666',
              letterSpacing: '0.1em',
              minWidth: '2rem',
            }}
          >
            0{index + 1}
          </span>

          {/* Project name — massive */}
          <motion.h3
            animate={hovered ? { x: 8 } : { x: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(2.5rem, 8vw, 8rem)',
              lineHeight: 0.9,
              letterSpacing: '-0.01em',
              color: '#f5f5f5',
              flex: 1,
              textTransform: 'uppercase',
            }}
          >
            {project.name}
          </motion.h3>

          {/* Category + year */}
          <div style={{ textAlign: 'right', flexShrink: 0 }}>
            <span
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: 'clamp(0.6rem, 1vw, 0.75rem)',
                letterSpacing: '0.2em',
                color: '#888',
                display: 'block',
                textTransform: 'uppercase',
              }}
            >
              {project.category}
            </span>
            <span
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: '0.6rem',
                letterSpacing: '0.15em',
                color: '#666',
                textTransform: 'uppercase',
              }}
            >
              {project.year}
            </span>
          </div>

          {/* Arrow on hover */}
          <motion.span
            animate={hovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.2rem',
              color: '#f5f5f5',
              minWidth: '1.5rem',
            }}
          >
            ↗
          </motion.span>
        </div>

        {/* Expandable detail panel */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div
                style={{
                  paddingBottom: '1.5rem',
                  paddingLeft: '2.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '2rem',
                  flexWrap: 'wrap',
                }}
              >
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 'clamp(0.7rem, 1.1vw, 0.82rem)',
                    color: '#c0c0c0',
                    lineHeight: 1.8,
                    maxWidth: '500px',
                  }}
                >
                  {project.description}
                </p>

                {/* Stack tags */}
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.6rem',
                        letterSpacing: '0.15em',
                        color: '#888',
                        border: '1px solid #2a2a2a',
                        padding: '3px 8px',
                        borderRadius: '2px',
                        textTransform: 'uppercase',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </a>
    </motion.div>
  )
}

/* ── Section ───────────────────────────────────────────────── */
export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        backgroundColor: '#0a0a0a',
        padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 3rem)',
      }}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        {/* Divider */}
        <motion.div variants={revealUp} className="divider" style={{ marginBottom: '3rem' }} />

        <motion.span
          variants={revealUp}
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: '0.65rem',
            letterSpacing: '0.35em',
            color: '#555',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '2.5rem',
          }}
        >
          03 — Projects
        </motion.span>

        <motion.h2
          variants={revealUp}
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: 'clamp(3rem, 9vw, 8rem)',
            lineHeight: 0.9,
            letterSpacing: '0.01em',
            color: '#f5f5f5',
            marginBottom: 'clamp(3rem, 6vw, 5rem)',
            textTransform: 'uppercase',
          }}
        >
          SELECTED<br />WORK
        </motion.h2>

        {/* Project list */}
        <motion.div variants={stagger}>
          {projects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}