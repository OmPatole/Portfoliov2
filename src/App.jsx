import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Loader from './components/Loader'
import MaskReveal from './components/MaskReveal'
import Home from './pages/Home'
import Blog from './pages/Blog'
import NotFound from './pages/NotFound'

/**
 * Sequence:
 *  1. Loader plays (~1.2s) — "O.P." + progress bar on dark background
 *  2. Loader exits (fade out)
 *  3. MaskReveal fires — body turns light gray, black circle expands from bottom
 *  4. Circle fully covers screen → body reverts dark → overlay hidden
 *  5. Router mounts, site content visible with staggered entrance animations
 */
export default function App() {
  const [phase, setPhase] = useState('loading') // 'loading' | 'reveal' | 'done'

  return (
    <>
      {phase === 'loading' && <Loader onDone={() => setPhase('reveal')} />}
      {phase === 'reveal' && <MaskReveal onDone={() => setPhase('done')} />}

      <div
        style={{
          opacity: phase === 'done' ? 1 : 0,
          transition: 'opacity 0.2s ease',
          pointerEvents: phase === 'done' ? 'auto' : 'none',
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}