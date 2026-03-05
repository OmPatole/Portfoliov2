import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

const article = {
  id: 'cyber-awareness-social-media',
  title: 'Cyber Awareness: How Social Media Can Expose Your Data',
  subtitle: 'A practical guide to what gets public, how leaks happen, and what you can do today.',
  date: 'Mar 2026',
  tag: 'Cyber Awareness',
  readTime: '11 min read',
}

export default function BlogPost() {
  const { slug } = useParams()

  if (slug !== article.id) {
    return (
      <div
        style={{
          minHeight: '100vh',
          backgroundColor: '#0a0a0a',
          color: '#f5f5f5',
          display: 'grid',
          placeItems: 'center',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <div>
          <h1 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(2.2rem, 8vw, 4rem)' }}>Blog Not Found</h1>
          <Link
            to="/blog"
            style={{
              marginTop: '1rem',
              display: 'inline-block',
              color: '#888',
              fontFamily: "'Oswald', sans-serif",
              letterSpacing: '0.15em',
              textDecoration: 'none',
            }}
          >
            BACK TO BLOG
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#0a0a0a',
        color: '#f5f5f5',
        padding: 'clamp(5rem, 8vw, 7rem) clamp(1.5rem, 5vw, 3rem) clamp(3rem, 6vw, 5rem)',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ marginBottom: '2.5rem' }}
        >
          <Link
            to="/blog"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: '0.7rem',
              letterSpacing: '0.25em',
              color: '#888',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            ← BACK TO BLOG
          </Link>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: '0.65rem',
              letterSpacing: '0.25em',
              color: '#888',
              textTransform: 'uppercase',
            }}
          >
            {article.tag} · {article.date} · {article.readTime}
          </span>

          <h1
            style={{
              marginTop: '1rem',
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(2.4rem, 9vw, 5.5rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.01em',
              textTransform: 'uppercase',
            }}
          >
            {article.title}
          </h1>

          <p
            style={{
              marginTop: '1rem',
              fontFamily: "'Inter', sans-serif",
              color: '#b0b0b0',
              fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)',
              lineHeight: 1.8,
              maxWidth: '760px',
            }}
          >
            {article.subtitle}
          </p>

          <div
            style={{
              marginTop: '2.5rem',
              borderTop: '1px solid #1a1a1a',
              paddingTop: '2rem',
              display: 'grid',
              gap: '1.2rem',
              maxWidth: '760px',
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(0.92rem, 1.4vw, 1.03rem)',
              lineHeight: 1.95,
              color: '#c8c8c8',
            }}
          >
            <p>
              Most people think social media risk is only about posting a photo at the wrong time.
              In reality, the bigger problem is data layering: small details from many posts combine
              into a full profile of your life, habits, location, relationships, and behavior patterns.
              A single post may look harmless, but ten small posts over six months can reveal where
              you live, where you study or work, when you are away from home, and who can be targeted
              to impersonate you.
            </p>
            <p>
              The first exposure path is public profile metadata. Bio text, username history, tagged
              photos, and account links can expose your real email pattern, birthday, workplace,
              education timeline, and even old phone numbers. Attackers use this for password-reset
              attempts, account recovery abuse, and targeted phishing. If your username is reused
              across platforms, they can quickly map your digital footprint and test credential leaks.
            </p>
            <p>
              The second exposure path is location intelligence. Story backgrounds, reflection in
              windows, school IDs, office badges, delivery labels, and geo-tags can reveal precise
              addresses or recurring movement routes. Even when geo-tagging is disabled, image context
              plus posting time creates patterns. Someone does not need your live location if they can
              predict your routine from your posting behavior.
            </p>
            <p>
              The third exposure path is social graph abuse. Friend lists, visible comments, frequent
              interactions, and family tags help attackers choose the easiest victim around you.
              Instead of attacking you directly, they may send fake emergency messages to your friends,
              spoof your profile picture, or clone your account with a similar handle. Trust between
              real people becomes the weak link.
            </p>
            <p>
              Another overlooked risk is oversharing documents and screens. Screenshots of dashboards,
              booking confirmations, QR codes, and digital passes can leak reference numbers or token
              fragments. A resume posted publicly may include phone number, personal email, full legal
              name, and exact education details that are later used to pass identity verification calls.
              What feels like professional visibility can become a social-engineering dataset.
            </p>
            <p>
              AI has accelerated this threat. Public voice clips, short videos, and high-quality photos
              are now enough to generate believable impersonations. Deepfake scam calls do not always
              require long recordings. If your voice and face are publicly available, attackers can
              imitate urgency and trust with frightening accuracy, especially against family members who
              are not expecting such attacks.
            </p>
            <p>
              To reduce risk, start with profile hygiene. Make your friend list private, limit who can
              tag you, disable auto-location, and remove unnecessary personal details from bios. Review
              old posts every few months and delete anything that reveals identifiers: ID cards,
              utility bills, travel plans before the trip ends, school details of siblings, or visible
              personal documents in the background.
            </p>
            <p>
              Next, secure your accounts like critical infrastructure. Use unique passwords with a
              password manager, enable app-based MFA, turn on login alerts, and remove unknown sessions
              and connected apps. If a platform supports passkeys, use them. Also create separate email
              addresses for social media and financial accounts so one breach cannot cascade everywhere.
            </p>
            <p>
              Communication hygiene matters just as much. Never trust urgent requests based only on DMs,
              profile pictures, or voice notes. Verify with a second channel: call back on a known
              number, ask a personal challenge question, or confirm in person. For family groups, agree
              on a simple verification phrase for emergencies. A five-second check can prevent major loss.
            </p>
            <p>
              Think in layers: visibility control, account hardening, and behavior verification.
              Cyber awareness is not quitting social media; it is using it intentionally. Post with a
              delay, avoid real-time location sharing, and treat each upload as public forever,
              even if a platform says "close friends" or "temporary story." Privacy settings reduce
              exposure, but your posting habits decide your real security posture.
            </p>
            <p>
              The most practical mindset is this: if this content were seen by a scammer, what could
              they infer, automate, or fake? Ask that before posting. Digital safety is not one setting
              hidden in an app menu. It is a repeated decision made every day, one post at a time.
            </p>
          </div>
        </motion.article>
      </div>
    </div>
  )
}
