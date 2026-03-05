import React, { useEffect } from 'react'
import { animate } from 'framer-motion'

/**
 * MaskReveal — a solid black (#0a0a0a) circle grows from the bottom-center,
 * expanding over the initial light-gray background until the full dark
 * portfolio is covered and the overlay can be removed.
 *
 * Flow:
 *  1. body starts light (#e5e5e5 — set inline before any content renders)
 *  2. black overlay clip-path expands: circle(0%) → circle(150%)
 *  3. overlay hidden; body bg reset to transparent (dark site shows through)
 */
export default function MaskReveal({ onDone }) {
    useEffect(() => {
        // Paint body light so the black circle has something to cover
        document.body.style.backgroundColor = '#e5e5e5'

        const overlay = document.getElementById('mask-overlay')
        if (!overlay) return

        const controls = animate(
            overlay,
            { clipPath: ['circle(0% at 50% 100%)', 'circle(150% at 50% 100%)'] },
            {
                duration: 0.85,
                ease: [0.42, 0, 0.58, 1],
                delay: 0.05,
                onComplete: () => {
                    // Snap body back to dark and hide overlay
                    document.body.style.backgroundColor = ''
                    overlay.style.display = 'none'
                    onDone?.()
                },
            }
        )

        return () => controls.stop()
    }, [onDone])

    return (
        <div
            id="mask-overlay"
            style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: '#0a0a0a',   // BLACK circle
                zIndex: 9999,
                pointerEvents: 'none',
                willChange: 'clip-path',
                clipPath: 'circle(0% at 50% 100%)',
            }}
        />
    )
}
