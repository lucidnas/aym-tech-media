import { useEffect, useState } from 'react'

const directions = [
  { slug: 'technical-review', name: 'The Technical Review', no: '01', idea: 'Consultancy as an independent technical publication', accent: '#a84e30', light: '#f4f1eb', dark: '#18201e' },
  { slug: 'systems-atlas', name: 'Systems Atlas', no: '02', idea: 'Modernization as a navigable systems landscape', accent: '#d65737', light: '#e7ece8', dark: '#0c1e24' },
  { slug: 'transition-room', name: 'Transition Room', no: '03', idea: 'A controlled passage from legacy to modern operations', accent: '#c53c2e', light: '#f1f3f2', dark: '#171b1c' },
  { slug: 'practice-ledger', name: 'The Practice Ledger', no: '04', idea: 'A high-trust engineering practice with tangible outputs', accent: '#b84f32', light: '#f7f8f6', dark: '#182023' },
  { slug: 'operating-system', name: 'The Operating System', no: '05', idea: 'Technology decisions translated into durable operations', accent: '#007c91', light: '#edf0ef', dark: '#111b1c' },
  { slug: 'archive-change', name: 'Archive of Change', no: '06', idea: 'An evidence-led record of complex work made clearer', accent: '#b6332d', light: '#edece7', dark: '#202724' },
  { slug: 'civic-modernism', name: 'Civic Modernism', no: '07', idea: 'Institutional confidence shaped by modern civic architecture', accent: '#a65037', light: '#f3f5f2', dark: '#172126' },
  { slug: 'material-infrastructure', name: 'Material Infrastructure', no: '08', idea: 'Invisible cloud systems given a physical identity', accent: '#d65a34', light: '#f5f4f0', dark: '#1b2022' },
  { slug: 'signal-bureau', name: 'Signal Bureau', no: '09', idea: 'Technical complexity resolved into a clear signal', accent: '#c24a30', light: '#f2f4f3', dark: '#0f1e23' },
  { slug: 'stewardship-studio', name: 'The Stewardship Studio', no: '10', idea: 'Long-term responsibility as the center of modernization', accent: '#a94734', light: '#f0f4ef', dark: '#16231f' },
]

const practices = ['Cloud foundations', 'API platforms', 'Application delivery', 'Operational resilience']
const articles = [
  ['Migration without the mythology', 'A practical field guide to sequencing cloud change.'],
  ['The API is an operating model', 'Why interface design is also organizational design.'],
  ['Architecture decisions that age well', 'A framework for choosing what should remain boring.'],
]

function ThemeButton({ theme, setTheme }) {
  return <button className="dd-theme" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label={`Use ${theme === 'light' ? 'dark' : 'light'} mode`}><span />{theme === 'light' ? 'Dark' : 'Light'}</button>
}

function Wordmark() {
  return <a className="dd-wordmark" href="/">AYM<span>Tech Media</span></a>
}

function Chrome({ direction, theme, setTheme }) {
  return <>
    <nav className="dd-nav">
      <Wordmark />
      <div className="dd-navlinks"><a href="#practice">Practice</a><a href="#work">Work</a><a href="#insights">Insights</a></div>
      <div className="dd-tools"><ThemeButton theme={theme} setTheme={setTheme} /><a className="dd-contact" href="#contact">Discuss a project</a></div>
    </nav>
    <a className="dd-back" href="/">All directions</a>
    <div className="dd-index">{direction.no} / 10</div>
  </>
}

function Proof() {
  return <div className="dd-proof"><div><strong>10+</strong><span>years engineering experience</span></div><div><strong>4</strong><span>connected areas of practice</span></div><div><strong>1</strong><span>accountable technical partner</span></div></div>
}

function EditorialHero() {
  return <header className="hero-editorial"><div><p className="eyebrow">Independent cloud engineering practice</p><h1>Modern infrastructure needs <em>better judgment.</em></h1><p className="lede">AYM helps organizations modernize cloud systems, APIs, and applications with engineering discipline.</p><a className="text-cta" href="#contact">Discuss a project <b>↗</b></a></div><article><span>Latest technical brief · 08.2026</span><h2>Migration without the mythology</h2><p>A practical framework for changing critical systems without losing operational control.</p><a href="#insights">Read the brief</a></article></header>
}

function AtlasHero() {
  return <header className="hero-atlas"><div className="atlas-map"><i/><i/><i/><i/><span>Cloud</span><span>APIs</span><span>Applications</span><span>Operations</span></div><div className="atlas-copy"><p className="eyebrow">Systems modernization</p><h1>Find the route through complexity.</h1><p className="lede">Cloud modernization, application delivery, and API platforms designed to remain understandable.</p><a className="text-cta" href="#practice">Map your next move <b>↗</b></a></div></header>
}

function TransitionHero() {
  return <header className="hero-transition"><section><span>Current state / 01</span><h1>Aging platforms.<br/>Fragmented ownership.<br/>Hidden risk.</h1></section><section><span>Future state / 02</span><h1>Dependable foundations.<br/>Clear interfaces.<br/>Usable systems.</h1><p>Move forward without losing control.</p><a href="#contact">Plan the transition</a></section></header>
}

function LedgerHero() {
  return <header className="hero-ledger"><div><p className="eyebrow">AYM / Engineering practice</p><h1>Engineering that stands up to scrutiny.</h1><p className="lede">Cloud, API, and application modernization for organizations with complex responsibilities.</p></div><dl><div><dt>Established</dt><dd>2014</dd></div><div><dt>Principal discipline</dt><dd>Cloud infrastructure</dd></div><div><dt>Engagement</dt><dd>Advisory + delivery</dd></div><div><dt>Availability</dt><dd>Q4 / 2026</dd></div></dl></header>
}

function OperatingHero() {
  return <header className="hero-operating"><div><p className="eyebrow">The AYM operating model</p><h1>Better systems create better operations.</h1><p>Cloud platforms and applications built for clear ownership, change, and resilience.</p></div><div className="operating-rings"><span>Teams</span><span>Applications</span><span>Interfaces</span><span>Foundations</span></div></header>
}

function ArchiveHero() {
  return <header className="hero-archive"><div className="archive-stamp"><span>AYM Archive</span><b>2014<br/>2026</b><small>Documenting twelve years of applied engineering</small></div><div><p className="eyebrow">Record / Change / Evidence</p><h1>Make change traceable.</h1><p className="lede">Modernize critical systems with a clear record of decisions, risks, and results.</p><a className="text-cta" href="#work">Review the work <b>↗</b></a></div></header>
}

function CivicHero() {
  return <header className="hero-civic"><div className="civic-grid"/><div><p className="eyebrow">Technology for complex organizations</p><h1>Made fit<br/>for the<br/>long term.</h1></div><p>AYM brings disciplined cloud and application modernization to systems that people depend on.</p><a href="#practice">Explore the practice</a></header>
}

function MaterialHero() {
  return <header className="hero-material"><div className="material-image"><div className="material-lines"/><span>Infrastructure study 01</span></div><div><p className="eyebrow">Cloud / APIs / Applications</p><h1>Build technology with a longer life.</h1><p>Engineering designed for real operational conditions.</p><a className="text-cta" href="#practice">View capabilities <b>↗</b></a></div></header>
}

function SignalHero() {
  return <header className="hero-signal"><div className="signal-field">{Array.from({length: 28},(_,i)=><i key={i}/>)}</div><p className="eyebrow">AYM Signal Bureau / Chicago</p><h1>Turn technical complexity into a clear signal.</h1><div><p>Cloud systems and software foundations that let organizations move with confidence.</p><a href="#contact">Send an inquiry</a></div></header>
}

function StewardHero() {
  return <header className="hero-steward"><div className="steward-landscape"><i/><i/><i/></div><div><p className="eyebrow">Assess / Modernize / Build / Sustain</p><h1>Modernize what your organization depends on.</h1><p className="lede">Cloud engineering and application delivery brought into clearer, more durable operation.</p><a className="text-cta" href="#contact">Talk with AYM <b>↗</b></a></div></header>
}

const heroMap = [EditorialHero, AtlasHero, TransitionHero, LedgerHero, OperatingHero, ArchiveHero, CivicHero, MaterialHero, SignalHero, StewardHero]

function PracticeSection({ index }) {
  return <section className="dd-section" id="practice"><div className="section-kicker"><span>01</span><p>{index === 1 ? 'Terrain' : index === 3 ? 'The ledger' : index === 6 ? 'Public value' : 'Areas of practice'}</p></div><div className="practice-list">{practices.map((p,i)=><article key={p}><span>0{i+1}</span><h2>{p}</h2><p>{['Secure, observable platforms built for controlled change.','Interfaces that make systems and ownership easier to understand.','Web and desktop software shaped around real operational work.','Architecture, automation, and handover that keep systems dependable.'][i]}</p><b>↗</b></article>)}</div></section>
}

function WorkSection({ index }) {
  return <section className="dd-section work-section" id="work"><div className="section-kicker"><span>02</span><p>{index === 5 ? 'Evidence archive' : index === 2 ? 'From current to future' : 'Selected engagements'}</p></div><div className="case-layout"><article><small>Platform modernization / Multi-cloud</small><h2>A clearer foundation for critical services.</h2><p>Assessment, target architecture, infrastructure automation, migration sequencing, and operational handover.</p><div className="case-diagram"><i/><i/><i/><i/></div></article><aside><p>Typical project outputs</p><ul><li>Current-state assessment</li><li>Target architecture</li><li>Decision and risk register</li><li>Migration roadmap</li><li>Operational documentation</li></ul></aside></div></section>
}

function InsightsSection({ index }) {
  return <section className="dd-section" id="insights"><div className="section-kicker"><span>03</span><p>{['The Review','Atlas Notes','Transition Notes','The Journal','Operating Notes','The Archive','Modernization Briefs','Infrastructure Notes','Signal','Guides and Notes'][index]}</p></div><div className="article-list">{articles.map((a,i)=><article key={a[0]}><span>Brief 0{i+1}<br/>8 min read</span><div><h2>{a[0]}</h2><p>{a[1]}</p></div><b>↗</b></article>)}</div></section>
}

function Footer({ direction }) {
  return <footer id="contact"><p>Have a complex system to modernize?</p><h2>Let’s make the next move clear.</h2><a href="mailto:hello@aymtechmedia.com">hello@aymtechmedia.com</a><div><Wordmark/><span>{direction.name} / Design direction</span><span>Chicago · Available worldwide</span></div></footer>
}

function Concept({ direction, index }) {
  const [theme,setTheme] = useState(() => localStorage.getItem('aym-theme') || 'light')
  useEffect(() => { localStorage.setItem('aym-theme',theme) },[theme])
  const Hero = heroMap[index]
  return <main className={`dd-concept concept-${index+1}`} data-theme={theme} style={{'--accent':direction.accent,'--paper':direction.light,'--night':direction.dark}}><Chrome direction={direction} theme={theme} setTheme={setTheme}/><Hero/><Proof/><PracticeSection index={index}/><WorkSection index={index}/><InsightsSection index={index}/><Footer direction={direction}/></main>
}

function Gallery() {
  const [theme,setTheme] = useState('light')
  return <main className="dd-gallery" data-theme={theme}><nav><Wordmark/><ThemeButton theme={theme} setTheme={setTheme}/></nav><header><p>New website study / August 2026</p><h1>Ten directions for a more established AYM.</h1><div><span>Cloud modernization</span><span>Technical authority</span><span>Editorial depth</span></div></header><section>{directions.map((d,i)=><a href={`/design/${d.slug}`} key={d.slug} style={{'--swatch':d.accent}}><span>{d.no}</span><div><h2>{d.name}</h2><p>{d.idea}</p></div><i/><b>View direction ↗</b>{i<3&&<em>Recommended</em>}</a>)}</section><footer><p>Each direction includes light and dark modes, an insights system, and a complete consultancy narrative.</p></footer></main>
}

export default function DesignDirections() {
  const slug = window.location.pathname.match(/^\/design\/([^/]+)/)?.[1]
  const index = directions.findIndex(d => d.slug === slug)
  return index >= 0 ? <Concept direction={directions[index]} index={index}/> : <Gallery/>
}
