import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#0a0a0a',
        color: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.7rem',
          letterSpacing: '0.35em',
          color: '#888',
          textTransform: 'uppercase',
          marginBottom: '1rem',
        }}
      >
        Page Not Found
      </p>

      <h1
        style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: 'clamp(4rem, 18vw, 12rem)',
          lineHeight: 0.85,
          letterSpacing: '0.05em',
          marginBottom: '1rem',
        }}
      >
        404
      </h1>

      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 'clamp(0.9rem, 1.6vw, 1rem)',
          color: '#d1d5db',
          lineHeight: 1.8,
          maxWidth: '520px',
          marginBottom: '2rem',
        }}
      >
        The page you are trying to reach does not exist or was moved.
      </p>

      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link
          to="/"
          className="nav-link"
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: '0.9rem',
            letterSpacing: '0.18em',
            color: '#f5f5f5',
            textDecoration: 'none',
            textTransform: 'uppercase',
          }}
        >
          Back Home
        </Link>
        <Link
          to="/blog"
          className="nav-link"
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: '0.9rem',
            letterSpacing: '0.18em',
            color: '#f5f5f5',
            textDecoration: 'none',
            textTransform: 'uppercase',
          }}
        >
          Go to Blog
        </Link>
      </div>
    </main>
  )
}
