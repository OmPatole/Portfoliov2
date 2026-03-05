import React from 'react'
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

/* ── Data ──────────────────────────────────────────────────── */
const roles = [
    {
        id: 'vidyanta',
        period: '2025',
        company: 'Vidyanta Tech',
        role: 'Senior Developer',
        type: 'Freelance Startup',
        description:
            'Led full-stack development for a growing EdTech startup. Architected scalable MERN applications, implemented CI/CD pipelines, mentored junior developers, and delivered production features end-to-end.',
        tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
    },
    {
        id: 'nasscom',
        period: '2024',
        company: 'NASSCOM FutureSkills Prime',
        role: 'Generative AI Intern',
        type: 'Industry Internship',
        description:
            "Built generative AI workflows, prompt engineering pipelines, and LLM integrations within industry-level environments. Contributed to AI-driven automation tooling under NASSCOM's FutureSkills Prime initiative.",
        tags: ['GenAI', 'LLMs', 'Prompt Engineering', 'Python'],
    },
    {
        id: 'shu',
        period: '2024',
        company: 'Shivaji University',
        role: 'Technical Intern',
        type: 'Networking Unit',
        description:
            'Worked within the Networking Unit on campus infrastructure tooling. Configured and monitored network systems, built internal dashboards, and assisted in deploying the Captive Portal system for university Wi-Fi access control.',
        tags: ['Networking', 'Node.js', 'React', 'Firebase'],
    },
]

export default function Experience() {
    return (
        <section
            id="experience"
            style={{
                backgroundColor: '#0a0a0a',
                padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 3rem)',
            }}
        >
            {/* Section header */}
            <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
            >
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
                    02 — Experience
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
                    WHERE I'VE<br />WORKED
                </motion.h2>
            </motion.div>

            {/* Roles */}
            <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                style={{ display: 'flex', flexDirection: 'column' }}
            >
                {roles.map((r, i) => (
                    <motion.div
                        key={r.id}
                        variants={revealUp}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'clamp(4rem, 8vw, 7rem) 1fr auto',
                            alignItems: 'start',
                            gap: '0 clamp(1rem, 3vw, 3rem)',
                            padding: 'clamp(1.5rem, 3vw, 2.5rem) 0',
                            borderBottom: '1px solid #1a1a1a',
                            cursor: 'default',
                        }}
                    >
                        {/* Year */}
                        <span
                            style={{
                                fontFamily: "'Oswald', sans-serif",
                                fontSize: 'clamp(0.65rem, 1vw, 0.75rem)',
                                letterSpacing: '0.2em',
                                color: '#888',
                                textTransform: 'uppercase',
                                paddingTop: '0.3rem',
                            }}
                        >
                            {r.period}
                        </span>

                        {/* Main content */}
                        <div>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', flexWrap: 'wrap' }}>
                                <h3
                                    style={{
                                        fontFamily: "'Anton', sans-serif",
                                        fontSize: 'clamp(1.4rem, 4vw, 3rem)',
                                        lineHeight: 1,
                                        color: '#f5f5f5',
                                        letterSpacing: '0.02em',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    {r.role}
                                </h3>
                                <span
                                    style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontSize: '0.7rem',
                                        letterSpacing: '0.2em',
                                        color: '#888',
                                        textTransform: 'uppercase',
                                        border: '1px solid #2a2a2a',
                                        padding: '2px 8px',
                                        borderRadius: '2px',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    {r.type}
                                </span>
                            </div>

                            <p
                                style={{
                                    fontFamily: "'Oswald', sans-serif",
                                    fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
                                    letterSpacing: '0.1em',
                                    color: '#888',
                                    marginTop: '0.25rem',
                                    textTransform: 'uppercase',
                                }}
                            >
                                @ {r.company}
                            </p>

                            <p
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: 'clamp(0.75rem, 1.2vw, 0.85rem)',
                                    color: '#c0c0c0',
                                    lineHeight: 1.8,
                                    marginTop: '1rem',
                                    maxWidth: '600px',
                                }}
                            >
                                {r.description}
                            </p>

                            {/* Tags */}
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                                {r.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        style={{
                                            fontFamily: "'Inter', sans-serif",
                                            fontSize: '0.6rem',
                                            letterSpacing: '0.15em',
                                            color: '#888',
                                            textTransform: 'uppercase',
                                            border: '1px solid #2a2a2a',
                                            padding: '3px 8px',
                                            borderRadius: '2px',
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Index */}
                        <span
                            style={{
                                fontFamily: "'Oswald', sans-serif",
                                fontSize: '0.6rem',
                                color: '#333',
                                letterSpacing: '0.1em',
                                paddingTop: '0.3rem',
                            }}
                        >
                            0{i + 1}
                        </span>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}
