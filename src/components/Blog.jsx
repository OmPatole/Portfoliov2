import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

/* ── Scroll reveal ─────────────────────────────────────────── */
const revealUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
}

const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
}

/* ── Article data ──────────────────────────────────────────── */
const articles = [
    {
        id: 'cyber-awareness-social-media',
        title: 'Cyber Awareness: How Social Media Can Expose Your Data',
        subtitle: 'A practical guide to what gets public, how leaks happen, and what you can do today.',
        date: 'Mar 2026',
        tag: 'Cyber Awareness',
        readTime: '11 min read',
    },
]

/* ── Article row ───────────────────────────────────────────── */
function ArticleRow({ article, index }) {
    return (
        <motion.div
            variants={revealUp}
            className="article-row"
            style={{
                borderTop: '1px solid #1a1a1a',
            }}
        >
            <Link
                to={`/blog/${article.id}`}
                style={{
                    textDecoration: 'none',
                    display: 'grid',
                    gridTemplateColumns: 'clamp(1.5rem, 3vw, 2.5rem) 1fr auto',
                    alignItems: 'center',
                    gap: '0 clamp(1rem, 3vw, 2.5rem)',
                    padding: 'clamp(1.2rem, 2.5vw, 2rem) 0',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {/* Index */}
                <span
                    style={{
                        fontFamily: "'Oswald', sans-serif",
                        fontSize: '0.6rem',
                        color: '#555',
                        letterSpacing: '0.1em',
                    }}
                >
                    0{index + 1}
                </span>

                {/* Title + subtitle */}
                <div>
                    <h3
                        style={{
                            fontFamily: "'Anton', sans-serif",
                            fontSize: 'clamp(1.1rem, 3.5vw, 2.8rem)',
                            lineHeight: 1,
                            letterSpacing: '0.01em',
                            color: '#f5f5f5',
                            textTransform: 'uppercase',
                            marginBottom: '0.3rem',
                        }}
                    >
                        {article.title}
                    </h3>
                    <p
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: 'clamp(0.7rem, 1.1vw, 0.82rem)',
                            color: '#888',
                            lineHeight: 1.5,
                            maxWidth: '560px',
                        }}
                    >
                        {article.subtitle}
                    </p>
                </div>

                {/* Meta */}
                <div
                    style={{
                        textAlign: 'right',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        gap: '0.25rem',
                        flexShrink: 0,
                    }}
                >
                    <span
                        style={{
                            fontFamily: "'Oswald', sans-serif",
                            fontSize: '0.6rem',
                            letterSpacing: '0.2em',
                            color: '#888',
                            textTransform: 'uppercase',
                            border: '1px solid #2a2a2a',
                            padding: '2px 7px',
                            borderRadius: '2px',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {article.tag}
                    </span>
                    <span
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.6rem',
                            color: '#555',
                            letterSpacing: '0.1em',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {article.date} · {article.readTime}
                    </span>

                    {/* Static arrow */}
                    <span style={{ fontSize: '1rem', color: '#f5f5f5' }}>↗</span>
                </div>
            </Link>
        </motion.div>
    )
}

/* ── Page ──────────────────────────────────────────────────── */
export default function Blog() {
    return (
        <div
            style={{
                minHeight: '100vh',
                backgroundColor: '#0a0a0a',
                color: '#f5f5f5',
                padding: 'clamp(5rem, 8vw, 7rem) clamp(1.5rem, 5vw, 3rem) clamp(3rem, 6vw, 5rem)',
            }}
        >
            {/* ── Max-width container ── */}
            <div style={{ maxWidth: '1024px', margin: '0 auto', width: '100%' }}>

                {/* Back link */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}
                >
                    <Link
                        to="/"
                        style={{
                            fontFamily: "'Oswald', sans-serif",
                            fontSize: '0.7rem',
                            letterSpacing: '0.25em',
                            color: '#888',
                            textTransform: 'uppercase',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            textDecoration: 'none',
                            transition: 'color 0.2s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#f5f5f5')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}
                    >
                        ← BACK TO HOME
                    </Link>
                </motion.div>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    style={{ width: '100%', height: '1px', background: '#1a1a1a', marginBottom: '3rem', transformOrigin: 'left' }}
                />

                {/* Page header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)', textAlign: 'center' }}
                >
                    <span
                        style={{
                            fontFamily: "'Oswald', sans-serif",
                            fontSize: '0.65rem',
                            letterSpacing: '0.35em',
                            color: '#888',
                            textTransform: 'uppercase',
                            display: 'block',
                            marginBottom: '1.5rem',
                        }}
                    >
                        Writing & Notes
                    </span>
                    <h1
                        style={{
                            fontFamily: "'Anton', sans-serif",
                            fontSize: 'clamp(4rem, 15vw, 12rem)',
                            lineHeight: 0.88,
                            letterSpacing: '-0.01em',
                            color: '#f5f5f5',
                            textTransform: 'uppercase',
                        }}
                    >
                        NOTES
                    </h1>
                    <p
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: 'clamp(0.75rem, 1.2vw, 0.9rem)',
                            color: '#888',
                            marginTop: '1.5rem',
                            maxWidth: '420px',
                            margin: '1.5rem auto 0',
                            lineHeight: 1.8,
                        }}
                    >
                        Thoughts on full-stack development, security engineering,
                        and building things that actually work.
                    </p>
                </motion.div>

                {/* Article list */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate="show"
                    style={{ borderBottom: '1px solid #1a1a1a' }}
                >
                    {articles.map((article, i) => (
                        <ArticleRow key={article.id} article={article} index={i} />
                    ))}
                </motion.div>

                {/* Footer note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.65rem',
                        letterSpacing: '0.15em',
                        color: '#333',
                        textTransform: 'uppercase',
                        textAlign: 'center',
                        marginTop: '3rem',
                    }}
                >
                    More articles coming soon — follow on{' '}
                    <a
                        href="https://x.com/Om_patole3030"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#555', textDecoration: 'none' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#f5f5f5')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}
                    >
                        X / Twitter ↗
                    </a>
                </motion.p>
            </div>
        </div>
    )
}
