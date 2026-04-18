const lanes = [
  {
    num: 'Lane 01 / Product',
    title: <>Things people <em>open</em> every day.</>,
    blurb: 'Native apps, web, consumer tools. First 90 seconds matter as much as the back end.',
    items: [
      { n: 'P.01', label: 'iOS & iPadOS applications', e: 'Swift · SwiftUI' },
      { n: 'P.02', label: 'Web applications & SaaS', e: 'Next · Remix' },
      { n: 'P.03', label: 'Product design & systems', e: 'Figma' },
      { n: 'P.04', label: 'Growth loops & onboarding', e: 'Analytics' },
      { n: 'P.05', label: 'Subscriptions & billing', e: 'RevenueCat · Stripe' },
    ],
  },
  {
    num: 'Lane 02 / Intelligence',
    title: <>AI that <em>actually</em> lands.</>,
    blurb: 'Video, voice, language. One job, done well — production, not demos.',
    items: [
      { n: 'I.01', label: 'Video analysis & feedback', e: 'Vision · LLM' },
      { n: 'I.02', label: 'Voice agents & transcription', e: 'Whisper · TTS' },
      { n: 'I.03', label: 'Retrieval & structured answers', e: 'Vector · RAG' },
      { n: 'I.04', label: 'Evals, guardrails & tuning', e: 'Bench' },
      { n: 'I.05', label: 'Editorial & media intelligence', e: 'Pipelines' },
    ],
  },
  {
    num: 'Lane 03 / Infrastructure',
    title: <>Boring things, <em>done right.</em></>,
    blurb: 'Cloud, DevOps, media ops. The parts that feel inevitable, not improvised.',
    items: [
      { n: 'F.01', label: 'Cloud architecture & cost', e: 'AWS · GCP · Railway · Modal' },
      { n: 'F.02', label: 'CI/CD & release engineering', e: 'GH Actions' },
      { n: 'F.03', label: 'Observability & on-call', e: 'OTel · Sentry' },
      { n: 'F.04', label: 'Directories & content systems', e: 'Headless CMS' },
      { n: 'F.05', label: 'Brand systems & guidelines', e: 'Design ops' },
    ],
  },
]

export default function Capabilities() {
  return (
    <section className="caps" id="capabilities">
      <div className="wrap">
        <div className="sec-head" style={{ borderBottomColor: 'var(--rule-soft)' }}>
          <div>
            <div className="kicker" style={{ marginBottom: 14 }}>§ 03 — Capabilities</div>
            <div className="title">Three lanes, <em>one team.</em></div>
          </div>
          <div></div>
          <div className="right">
            <div className="kicker">Practice areas</div>
            <div className="count">03</div>
          </div>
        </div>

        <div className="caps-grid" style={{ marginTop: 32 }}>
          {lanes.map((lane) => (
            <div key={lane.num} className="lane">
              <div className="num">
                <span>{lane.num}</span>
                <span className="dot"></span>
              </div>
              <h4>{lane.title}</h4>
              <p className="blurb">{lane.blurb}</p>
              <ul>
                {lane.items.map((it) => (
                  <li key={it.n}>
                    <span className="n">{it.n}</span>
                    <span>{it.label}</span>
                    <span className="e">{it.e}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
