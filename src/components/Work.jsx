import { useEffect, useRef, useState } from 'react'

const work = [
  {
    id: 'dribul',
    n: '01',
    title: 'Dribul',
    kind: 'Web · News platform · dribul.com',
    desc: "News platform. Opinionated editorial tooling, fast pages, AI-assisted summarization. Live at dribul.com.",
    stack: ['Remix', 'Postgres', 'Elastic', 'Cloudflare'],
    yr: '2024',
    status: 'LIVE',
    bg: 'linear-gradient(135deg,#14161c,#252836)',
    preview: { kind: 'news', accent: '#c9c9d3' },
  },
  {
    id: 'myelometrix',
    n: '02',
    title: 'Myelometrix',
    kind: 'Web · Health metrics · myelometrix.com',
    desc: "Web app for rare-disease clinicians. Longitudinal charting, cohort comparison, exportable reports. Full product details at myelometrix.com.",
    stack: ['Next.js', 'FastAPI', 'Postgres', 'HL7/FHIR'],
    yr: '2025',
    status: 'BETA',
    bg: 'linear-gradient(135deg,#0e1a20,#0d2d32)',
    preview: { kind: 'chart', accent: '#5ad6c4' },
  },
]

function PreviewContents({ preview }) {
  const a = preview.accent
  if (preview.kind === 'news') {
    return (
      <div style={{ width: 260, height: 170, background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 4, padding: 14, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ fontFamily: 'serif', color: a, fontSize: 14, letterSpacing: '-.01em', lineHeight: 1.15 }}>
          The markets didn&apos;t blink. Here&apos;s what did.
        </div>
        <div style={{ fontFamily: 'serif', color: 'rgba(255,255,255,.55)', fontSize: 9, lineHeight: 1.4 }}>
          Summary — three things moved overnight. Only one of them mattered to your portfolio.
        </div>
        <div style={{ marginTop: 'auto', display: 'flex', gap: 8, fontFamily: 'monospace', fontSize: 8, color: 'rgba(255,255,255,.4)' }}>
          <span>MARKETS</span><span>·</span><span>6 min read</span><span>·</span><span>03:14 GMT</span>
        </div>
      </div>
    )
  }
  if (preview.kind === 'chart') {
    return (
      <div style={{ width: 260, height: 170, background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 4, padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'monospace', fontSize: 9, color: 'rgba(255,255,255,.5)' }}>
          <span>PATIENT 07-A</span><span>12-WK</span>
        </div>
        <svg viewBox="0 0 200 80" style={{ width: '100%', height: 70 }}>
          <polyline fill="none" stroke={a} strokeWidth="1.25" points="0,60 20,55 40,58 60,45 80,48 100,30 120,34 140,22 160,25 180,15 200,18" />
          <polyline fill="none" stroke="rgba(255,255,255,.25)" strokeWidth="1" strokeDasharray="2,2" points="0,65 200,40" />
        </svg>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'monospace', fontSize: 8, color: 'rgba(255,255,255,.4)' }}>
          <span>Wk 01</span><span>Wk 06</span><span>Wk 12</span>
        </div>
      </div>
    )
  }
  return null
}

export default function Work() {
  const [active, setActive] = useState(null)
  const previewRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
      if (active && previewRef.current) {
        previewRef.current.style.left = (e.clientX + 180) + 'px'
        previewRef.current.style.top = e.clientY + 'px'
      }
    }
    document.addEventListener('mousemove', onMove)
    return () => document.removeEventListener('mousemove', onMove)
  }, [active])

  const activeItem = active ? work.find((w) => w.id === active) : null

  return (
    <>
      <section className="work" id="work">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="kicker" style={{ marginBottom: 14 }}>§ 02 — Shipped work</div>
              <div className="title">Selected index, <em>recent.</em></div>
            </div>
            <div></div>
            <div className="right">
              <div className="kicker">Entries</div>
              <div className="count">{String(work.length).padStart(2, '0')} / {String(work.length).padStart(2, '0')}</div>
            </div>
          </div>

          <ul className="work-list">
            {work.map((w) => (
              <li
                key={w.id}
                className="work-row"
                onMouseEnter={(e) => {
                  setActive(w.id)
                  if (previewRef.current) {
                    previewRef.current.style.left = (mouseRef.current.x + 180) + 'px'
                    previewRef.current.style.top = mouseRef.current.y + 'px'
                  }
                }}
                onMouseLeave={() => setActive(null)}
              >
                <div className="idx"><b>{w.n}</b> / {String(work.length).padStart(2, '0')}</div>
                <div className="name">
                  <h3>{w.title}</h3>
                  <div className="kind">{w.kind}</div>
                </div>
                <div className="desc">{w.desc}</div>
                <div className="stack">
                  {w.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                <div className="yr">
                  <b>{w.yr}</b>{w.status}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div
        ref={previewRef}
        className={`preview${active ? ' active' : ''}`}
        style={activeItem ? { background: activeItem.bg } : undefined}
      >
        <div className="canvas">
          {activeItem && <PreviewContents preview={activeItem.preview} />}
        </div>
      </div>
    </>
  )
}
