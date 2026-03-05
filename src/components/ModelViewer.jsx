import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls, Environment, Float } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import modelUrl from '../assets/Mars 2020 Perseverance Rover.glb?url'

// ── Draco decoder served locally from /draco/ ─────────────────────
useGLTF.setDecoderPath('/draco/')
useGLTF.preload(modelUrl)

/* ─────────────────────────────── Model ─────────────────────────── */
function Rover({ scale, position }) {
  const { scene } = useGLTF(modelUrl)
  const roverRef = useRef(null)

  useFrame((_, delta) => {
    if (roverRef.current) {
      roverRef.current.rotation.y += delta * 0.18
    }
  })

  return <primitive ref={roverRef} object={scene} scale={scale} position={position} />
}

/* ─────────────────────────── Skeleton fallback ──────────────────── */
function Fallback() {
  return (
    <mesh>
      <boxGeometry args={[1.4, 0.4, 2.2]} />
      <meshStandardMaterial color="#1a1a1a" wireframe />
    </mesh>
  )
}

/* ──────────────────── Standalone section component ─────────────── */
export default function RoverSection() {
  const [isMobile, setIsMobile] = useState(false)
  const baseBg = '#000000'

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)')
    const update = () => setIsMobile(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  const modelScale = isMobile ? 14 : 43
  const modelPosition = isMobile ? [48, -88, 0] : [130, -85, 20]
  const cameraPosition = isMobile ? [140, 52, 140] : [260, 95, 260]
  const controlDistance = isMobile ? 195 : 380

  const roverParagraph = isMobile
    ? "Perseverance is exploring Jezero Crater to look for ancient microbial life and collect rock cores for future return to Earth."
    : "NASA's Mars 2020 Perseverance Rover is exploring Jezero Crater to search for signs of ancient microbial life, study the planet's climate and geology, and collect carefully selected rock cores for a future sample return mission to Earth. Its onboard instruments, including SHERLOC and PIXL, analyze minerals and organic compounds at microscopic scale, while the Ingenuity helicopter technology demonstration helped validate powered flight in the thin Martian atmosphere and opened new possibilities for robotic exploration."

  return (
    <section
      id="rover"
      style={{
        backgroundColor: baseBg,
        padding: isMobile ? 'clamp(1.5rem, 4vw, 2rem) 0' : '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* ── Fullscreen desktop / compact mobile viewer ── */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: isMobile ? '100%' : 'none',
          height: isMobile ? '670px' : '100vh',
          backgroundColor: baseBg,
          border: isMobile ? '1px solid #1a1a1a' : 'none',
          overflow: 'hidden',
        }}
      >
        <div
          style={
            isMobile
              ? {
                position: 'absolute',
                inset: 0,
              }
              : {
                position: 'absolute',
                top: 0,
                left: 'calc(38% - 1px)',
                width: 'calc(62% + 1px)',
                height: '100%',
                backgroundColor: baseBg,
              }
          }
        >
        <Canvas
          dpr={[1, 2]}
          camera={{ position: cameraPosition, fov: 40, near: 0.1, far: 6000 }}
          gl={{ antialias: true, alpha: false }}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            background: baseBg,
          }}
          shadows={{ type: THREE.PCFShadowMap }}
        >
        <ambientLight intensity={0.7} />
        <directionalLight
          position={[5, 8, 5]}
          intensity={2}
          castShadow
          shadow-mapSize={[2048, 2048]}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <directionalLight position={[-4, 2, -4]} intensity={0.35} />

        <Environment preset="sunset" />

        <Suspense fallback={<Fallback />}>
          <Float speed={0.4} rotationIntensity={0.02} floatIntensity={0.3}>
            <Rover scale={modelScale} position={modelPosition} />
          </Float>
        </Suspense>

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          target={modelPosition}
          minDistance={controlDistance}
          maxDistance={controlDistance}
          minPolarAngle={0.02}
          maxPolarAngle={Math.PI - 0.02}
          autoRotate={false}
          autoRotateSpeed={0.5}
        />
      </Canvas>
      </div>

      {/* Left content block */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{
          position: 'absolute',
          top: isMobile ? '1rem' : 'clamp(6rem, 18vh, 10rem)',
          left: isMobile ? '1rem' : 'clamp(1.2rem, 3vw, 2rem)',
          maxWidth: isMobile ? '52%' : '34%',
          backgroundColor: '#000000',
          padding: isMobile ? '0.7rem' : '1.2rem',
          zIndex: 20,
          pointerEvents: 'none',
        }}
      >
        <span style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.55rem',
          letterSpacing: '0.35em',
          color: '#444',
          textTransform: 'uppercase',
          display: 'block',
          marginBottom: '0.5rem',
        }}>
          NASA JPL — Mars 2020
        </span>
        <span style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: isMobile ? 'clamp(1.5rem, 8vw, 2.4rem)' : 'clamp(2rem, 5vw, 4.5rem)',
          lineHeight: 0.87,
          letterSpacing: '0.03em',
          color: '#f5f5f5',
          display: 'block',
          textTransform: 'uppercase',
          marginBottom: isMobile ? '0.6rem' : '0.9rem',
        }}>
          PERSE-<br />VERANCE
        </span>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: isMobile ? '0.66rem' : '0.88rem',
          lineHeight: isMobile ? 1.65 : 1.7,
          color: '#d1d5db',
          margin: 0,
          position: 'relative',
          zIndex: 10,
        }}>
          {roverParagraph}
        </p>
      </motion.div>

      {/* Bottom-right interaction hint */}
      <div style={{
        position: 'absolute',
        bottom: isMobile ? '1rem' : 'clamp(1.2rem, 3vh, 2rem)',
        right: isMobile ? '1rem' : 'clamp(1.2rem, 3vw, 2rem)',
        zIndex: 20,
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '4px',
      }}>
        <span style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.55rem',
          letterSpacing: '0.2em',
          color: '#444',
          textTransform: 'uppercase',
        }}>
          Perseverance Rover
        </span>
        <span style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.5rem',
          letterSpacing: '0.25em',
          color: '#2e2e2e',
          textTransform: 'uppercase',
        }}>
          Drag to rotate · Scroll to zoom
        </span>
      </div>
    </div>
    </section>
  )
}
