import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Brutalist loader — shows before the mask reveal plays.
 * Displays "O.P." in massive Anton type with a counting line that fills
 * across the screen, then fires onDone() when ready.
 */
export default function Loader({ onDone }) {
    const [progress, setProgress] = useState(0)
    const [exiting, setExiting] = useState(false)

    useEffect(() => {
        // Simulate load progress (0 → 100) over ~900ms
        let val = 0
        const id = setInterval(() => {
            val += Math.random() * 22 + 8
            if (val >= 100) {
                val = 100
                clearInterval(id)
                setTimeout(() => {
                    setExiting(true)
                    setTimeout(onDone, 500)
                }, 200)
            }
            setProgress(Math.min(val, 100))
        }, 80)

        return () => clearInterval(id)
    }, [])

    return (
        <AnimatePresence>
            {!exiting && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        backgroundColor: '#0a0a0a',
                        zIndex: 10000,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-end',
                        padding: 'clamp(2rem, 5vw, 4rem)',
                        overflow: 'hidden',
                    }}
                >
                    {/* Large initials */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        style={{ position: 'absolute', top: '50%', left: 'clamp(2rem, 5vw, 4rem)', transform: 'translateY(-50%)' }}
                    >
                        <span
                            style={{
                                fontFamily: "'Anton', sans-serif",
                                fontSize: 'clamp(6rem, 22vw, 18rem)',
                                lineHeight: 0.85,
                                letterSpacing: '-0.02em',
                                color: '#f5f5f5',
                                display: 'block',
                                userSelect: 'none',
                            }}
                        >
                            O.P.
                        </span>
                        <span
                            style={{
                                fontFamily: "'Oswald', sans-serif",
                                fontSize: 'clamp(0.6rem, 1.2vw, 0.75rem)',
                                letterSpacing: '0.35em',
                                color: '#555',
                                textTransform: 'uppercase',
                                display: 'block',
                                marginTop: '0.75rem',
                            }}
                        >
                            MERN Stack Developer
                        </span>
                    </motion.div>

                    {/* Bottom progress bar + counter */}
                    <div style={{ width: '100%', zIndex: 1 }}>
                        {/* Percentage */}
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'baseline',
                                marginBottom: '0.75rem',
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Oswald', sans-serif",
                                    fontSize: '0.6rem',
                                    letterSpacing: '0.3em',
                                    color: '#444',
                                    textTransform: 'uppercase',
                                }}
                            >
                                Loading
                            </span>
                            <motion.span
                                style={{
                                    fontFamily: "'Anton', sans-serif",
                                    fontSize: 'clamp(0.9rem, 2vw, 1.2rem)',
                                    color: '#f5f5f5',
                                    letterSpacing: '0.05em',
                                }}
                            >
                                {Math.round(progress)}
                            </motion.span>
                        </div>

                        {/* Track */}
                        <div
                            style={{
                                width: '100%',
                                height: '1px',
                                background: '#1e1e1e',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                        >
                            <motion.div
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    height: '100%',
                                    background: '#f5f5f5',
                                    width: `${progress}%`,
                                    transition: 'width 0.1s linear',
                                }}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
