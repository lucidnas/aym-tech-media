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

const insightDetails = {
  'migration-without-the-mythology': {
    lead: 'Cloud migration is not a single technical event. It is a controlled change to how an organization operates, owns risk, and recovers when something goes wrong.',
    sections: [
      ['Begin with operational truth', [
        'Before choosing a target platform, document the system as it actually exists. Identify who owns it, who supports it after hours, which dependencies are undocumented, how data moves, where credentials live, and what the organization cannot afford to interrupt.',
        'This work often changes the migration plan. A service that looks simple on an architecture diagram may depend on a manual reconciliation process, a fixed network route, or an individual who carries years of undocumented knowledge. Those conditions are part of the architecture whether or not they appear in code.',
      ]],
      ['Classify before you move', [
        'Not every workload deserves the same migration strategy. Some systems can be retired. Some should remain on premises because of latency, sovereignty, hardware, or operational constraints. Others can be rehosted temporarily, while selected services justify deeper redesign.',
        'A useful portfolio assessment records business criticality, recovery requirements, data sensitivity, integration complexity, current cost, technical health, and change readiness. The result should be a defensible sequence of decisions, not a blanket instruction to move everything to the cloud.',
      ]],
      ['Build the operating foundation first', [
        'The first cloud workload should not arrive before identity, network boundaries, account structure, logging, encryption, backup policy, cost controls, and deployment standards are established. These foundations are easier to build deliberately than to retrofit after teams begin creating resources independently.',
        'For AWS environments, that usually means a multi-account structure, centralized identity, infrastructure as code, organization-level audit logging, defined connectivity, and clear ownership for security findings and operational alerts. The foundation does not need to be elaborate, but it must be understandable and repeatable.',
      ]],
      ['Move in evidence-producing increments', [
        'A migration phase should leave behind something that can be tested: a working landing zone, a proven network path, a restored backup, an exercised rollback procedure, or one end-to-end service operating under real monitoring. Progress is more credible when it reduces a specific uncertainty.',
        'Start with a representative workload rather than the easiest or most critical system. The right pilot exposes the real identity, data, integration, and support patterns without putting the organization at unacceptable risk. Its lessons should update the standards used by every migration that follows.',
      ]],
      ['Treat cutover as an operational decision', [
        'A technically successful deployment is not yet a successful migration. Before cutover, teams need explicit go and no-go criteria, named decision owners, validated data reconciliation, communication plans, rollback thresholds, and a support model for the first hours and days of operation.',
        'After cutover, compare the new environment with the assumptions that justified the move. Review reliability, performance, security findings, support effort, and actual cost. Modernization creates value only when the new system is easier to operate and change, not merely hosted somewhere different.',
      ]],
      ['Leave the system easier to understand', [
        'The final deliverable is not just infrastructure. It is a durable record of how the system works: architecture diagrams, decision records, runbooks, recovery procedures, service ownership, escalation paths, and known tradeoffs.',
        'Migration without mythology is disciplined, sometimes unglamorous work. It replaces promises of transformation with visible evidence, controlled risk, and systems that the organization can confidently own after the project team leaves.',
      ]],
    ],
  },
  'api-operating-model': {
    lead: 'An API is not only a technical interface. It is an agreement about ownership, change, reliability, security, and how teams work together.',
    sections: [
      ['Design the ownership model', ['Every API needs a team accountable for its contract, operational health, documentation, and lifecycle. Shared technology without clear ownership becomes shared risk.']],
      ['Make change predictable', ['Versioning, compatibility rules, deprecation windows, and consumer communication should be established before pressure forces an improvised decision. Good governance makes routine change easier rather than adding approval theater.']],
      ['Operate the interface', ['Authentication, authorization, rate limits, observability, error conventions, and service objectives are part of the product. An endpoint is not ready merely because it returns the expected payload in development.']],
      ['Measure what consumers experience', ['Monitor availability, latency, error rates, adoption, and breaking-change risk from the consumer perspective. The operating model should reveal whether the interface is dependable and whether teams can safely evolve it.']],
    ],
  },
  'architecture-decisions-that-age-well': {
    lead: 'Architecture ages well when future teams can understand why a decision was made, what it costs, and when it should be reconsidered.',
    sections: [
      ['Record the constraint, not just the choice', ['A useful decision record explains the problem, alternatives, constraints, consequences, and evidence available at the time. “Use service X” is a configuration note, not an architectural decision.']],
      ['Prefer reversible commitments', ['When two options are credible, favor the one that preserves learning and limits the cost of change. Irreversible commitments deserve stronger evidence, explicit ownership, and a review date.']],
      ['Keep the ordinary parts ordinary', ['Standard identity, deployment, logging, networking, and data patterns reduce cognitive load. Spend novelty where it creates real organizational value, not where a familiar solution would be easier to operate.']],
      ['Review decisions against reality', ['Revisit important decisions when scale, regulation, team structure, vendor economics, or operational evidence changes. A decision can have been correct when made and still need to change later.']],
    ],
  },
}

const insightReadTime = (slug) => {
  const detail = insightDetails[slug]
  const text = [detail.lead, ...detail.sections.flatMap(([, paragraphs]) => paragraphs)].join(' ')
  return Math.max(1, Math.ceil(text.trim().split(/\s+/).length / 220))
}

const reviewPrefix = window.location.pathname.match(/^\/(aym-[^/]+)/)?.[0] || ''
const routeHref = (path) => reviewPrefix ? `${reviewPrefix}/?route=${encodeURIComponent(path)}` : path
const homeAnchor = (id) => `${reviewPrefix || ''}/#${id}`
const assetHref = (path) => `${reviewPrefix}${path}`
const currentRoute = () => new URLSearchParams(window.location.search).get('route') || window.location.pathname

function ThemeButton({ theme, setTheme }) {
  const nextTheme = theme === 'light' ? 'dark' : 'light'
  return <button className="dd-theme" onClick={() => setTheme(nextTheme)} aria-label={`Use ${nextTheme} mode`} title={`Use ${nextTheme} mode`}>
    {theme === 'light'
      ? <svg className="theme-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 15.2A8.5 8.5 0 0 1 8.8 4 8.5 8.5 0 1 0 20 15.2Z"/></svg>
      : <svg className="theme-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.5"/><path d="M12 2v2.2M12 19.8V22M2 12h2.2M19.8 12H22M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M19.1 4.9l-1.6 1.6M6.5 17.5l-1.6 1.6"/></svg>}
  </button>
}

function Wordmark() {
  return <a className="dd-wordmark" href={routeHref('/')} aria-label="AYM Cloud Systems home">AYM<span>Cloud Systems</span></a>
}

function FinalNav({ theme, setTheme }) {
  return <nav className="dd-nav final-nav">
    <Wordmark />
    <div className="dd-navlinks"><a href={homeAnchor('practice')}>Practice</a><a href={homeAnchor('work')}>Work</a><a href={routeHref('/insights')}>Insights</a></div>
    <div className="dd-tools"><ThemeButton theme={theme} setTheme={setTheme} /><a className="dd-contact" href="#contact">Discuss a project</a></div>
  </nav>
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
  return <header className="hero-editorial"><div><p className="eyebrow">Independent cloud engineering practice</p><h1>Modern infrastructure needs <em>better judgment.</em></h1><p className="lede">AYM helps organizations modernize cloud systems, APIs, and applications with engineering discipline.</p><a className="text-cta" href="#contact">Discuss a project</a></div><article><span>Latest technical brief · 08.2026</span><h2>Migration without the mythology</h2><p>A practical framework for changing critical systems without losing operational control.</p><a href="#insights">Read the brief</a></article></header>
}

function AtlasHero() {
  return <header className="hero-atlas"><div className="atlas-map"><i/><i/><i/><i/><span>Cloud</span><span>APIs</span><span>Applications</span><span>Operations</span></div><div className="atlas-copy"><p className="eyebrow">Systems modernization</p><h1>Find the route through complexity.</h1><p className="lede">Cloud modernization, application delivery, and API platforms designed to remain understandable.</p><a className="text-cta" href="#practice">Map your next move</a></div></header>
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
  return <header className="hero-archive"><div className="archive-stamp"><span>AYM Archive</span><b>2014<br/>2026</b><small>Documenting twelve years of applied engineering</small></div><div><p className="eyebrow">Record / Change / Evidence</p><h1>Make change traceable.</h1><p className="lede">Modernize critical systems with a clear record of decisions, risks, and results.</p><a className="text-cta" href="#work">Review the work</a></div></header>
}

function CivicHero() {
  return <header className="hero-civic"><div className="civic-grid"/><div><p className="eyebrow">Technology for complex organizations</p><h1>Made fit<br/>for the<br/>long term.</h1></div><p>AYM brings disciplined cloud and application modernization to systems that people depend on.</p><a href="#practice">Explore the practice</a></header>
}

function MaterialHero() {
  return <header className="hero-material"><div className="material-image"><div className="material-lines"/><span>Infrastructure study 01</span></div><div><p className="eyebrow">Cloud / APIs / Applications</p><h1>Build technology with a longer life.</h1><p>Engineering designed for real operational conditions.</p><a className="text-cta" href="#practice">View capabilities</a></div></header>
}

function SignalHero() {
  return <header className="hero-signal"><div className="signal-field">{Array.from({length: 28},(_,i)=><i key={i}/>)}</div><p className="eyebrow">AYM Signal Bureau / Chicago</p><h1>Turn technical complexity into a clear signal.</h1><div><p>Cloud systems and software foundations that let organizations move with confidence.</p><a href="#contact">Send an inquiry</a></div></header>
}

function StewardHero() {
  return <header className="hero-steward"><div className="steward-landscape"><i/><i/><i/></div><div><p className="eyebrow">Assess / Modernize / Build / Sustain</p><h1>Modernize what your organization depends on.</h1><p className="lede">Cloud engineering and application delivery brought into clearer, more durable operation.</p><a className="text-cta" href="#contact">Talk with AYM</a></div></header>
}

const heroMap = [EditorialHero, AtlasHero, TransitionHero, LedgerHero, OperatingHero, ArchiveHero, CivicHero, MaterialHero, SignalHero, StewardHero]

function PracticeSection({ index }) {
  return <section className="dd-section" id="practice"><div className="section-kicker"><span>01</span><p>{index === 1 ? 'Terrain' : index === 3 ? 'The ledger' : index === 6 ? 'Public value' : 'Areas of practice'}</p></div><div className="practice-list">{practices.map((p,i)=><article key={p}><span>0{i+1}</span><h2>{p}</h2><p>{['Secure, observable platforms built for controlled change.','Interfaces that make systems and ownership easier to understand.','Web and desktop software shaped around real operational work.','Architecture, automation, and handover that keep systems dependable.'][i]}</p></article>)}</div></section>
}

function WorkSection({ index }) {
  return <section className="dd-section work-section" id="work"><div className="section-kicker"><span>02</span><p>{index === 5 ? 'Evidence archive' : index === 2 ? 'From current to future' : 'Selected engagements'}</p></div><div className="case-layout"><article><small>Platform modernization / Multi-cloud</small><h2>A clearer foundation for critical services.</h2><p>Assessment, target architecture, infrastructure automation, migration sequencing, and operational handover.</p><div className="case-diagram"><i/><i/><i/><i/></div></article><aside><p>Typical project outputs</p><ul><li>Current-state assessment</li><li>Target architecture</li><li>Decision and risk register</li><li>Migration roadmap</li><li>Operational documentation</li></ul></aside></div></section>
}

function InsightsSection({ index, number = '03', simple = false }) {
  const slugs = ['migration-without-the-mythology','api-operating-model','architecture-decisions-that-age-well']
  return <section className={`dd-section${simple ? ' insights-simple' : ''}`} id="insights">{simple ? <h2 className="simple-section-title">Insights</h2> : <div className="section-kicker"><span>{number}</span><p>{['The Review','Atlas Notes','Transition Notes','The Journal','Operating Notes','The Archive','Modernization Briefs','Infrastructure Notes','Signal','Guides and Notes'][index]}</p></div>}<div className="article-list">{articles.map((a,i)=><a href={routeHref(`/insights/${slugs[i]}`)} key={a[0]}><span>Field note<br/>{insightReadTime(slugs[i])} min read</span><div><h2>{a[0]}</h2><p>{a[1]}</p></div></a>)}</div></section>
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
  return <main className="dd-gallery" data-theme={theme}><nav><Wordmark/><ThemeButton theme={theme} setTheme={setTheme}/></nav><header><p>New website study / August 2026</p><h1>Ten directions for a more established AYM.</h1><div><span>Cloud modernization</span><span>Technical authority</span><span>Editorial depth</span></div></header><section>{directions.map((d,i)=><a href={`/design/${d.slug}`} key={d.slug} style={{'--swatch':d.accent}}><span>{d.no}</span><div><h2>{d.name}</h2><p>{d.idea}</p></div><i/><b>View direction</b>{i<3&&<em>Recommended</em>}</a>)}</section><footer><p>Each direction includes light and dark modes, an insights system, and a complete consultancy narrative.</p></footer></main>
}

function FinalSite() {
  const [theme,setTheme] = useState(() => localStorage.getItem('aym-theme') || 'light')
  useEffect(() => { localStorage.setItem('aym-theme',theme) },[theme])
  return <main className="dd-concept final-site" data-theme={theme} style={{'--accent':'#b84f32','--paper':'#f7f8f6','--night':'#182023'}}>
    <FinalNav theme={theme} setTheme={setTheme}/>
    <header className="final-hero">
      <div className="final-hero-copy"><h1>Move forward without losing control.</h1><p className="lede">We modernize cloud infrastructure, APIs, and applications for organizations that cannot afford disruption.</p><div className="final-actions"><a href="#contact">Discuss a project</a></div></div>
      <aside><dl><div><dt>Experience</dt><dd>10+ years</dd></div><div><dt>Discipline</dt><dd>Cloud infrastructure</dd></div><div><dt>Capabilities</dt><dd>Cloud, APIs, applications</dd></div><div><dt>Engagement</dt><dd>Advisory and delivery</dd></div></dl></aside>
    </header>
    <section className="dd-section final-practice" id="practice"><header><h2>What we do</h2></header><div className="practice-list">{['Cloud infrastructure','APIs and integration','Application delivery','Advisory and operations'].map((p,i)=><article key={p}><h2>{p}</h2><p>{['AWS, hybrid architecture, infrastructure as code, networking, security, observability, and migration.','Services and integration layers that connect data, applications, and existing platforms.','Web and desktop software designed around real operational work.','Architecture, implementation, documentation, handover, and ongoing technical support.'][i]}</p></article>)}</div></section>
    <section className="dd-section flagship-work" id="work"><header><h2>Selected work</h2><p>One example of how we turn complex technical requirements into a credible, fundable platform.</p></header><a href={routeHref('/work/myelometrix')}><div><p className="project-type">Health technology platform</p><h3>MyeloMetrix</h3><p>MyeloMetrix is a spinal MRI morphometry platform in active development across cloud infrastructure, API services, medical-image processing, web, and desktop applications.</p></div><aside><strong>$100K+</strong><span>grant funding secured to date</span><b>Read the case study</b></aside></a></section>
    <footer id="contact"><h2>Let’s make the next move clear.</h2><a href="mailto:hello@aymtechmedia.com">hello@aymtechmedia.com</a><div><Wordmark/><span>A consulting practice of AYM Tech Media LLC · © 2026</span></div></footer>
  </main>
}

const pageContent = {
  '/modernize': { kicker:'Modernize', title:'Change the system without losing control.', intro:'Modernization is a sequence of accountable decisions, not a wholesale rewrite.', sections:[['Assess what is true','Map architecture, dependencies, operating constraints, security requirements, and accumulated risk.'],['Choose what should change','Define the target state, record tradeoffs, and sequence work around operational reality.'],['Deliver in controlled increments','Build, migrate, validate, and document each change without making the whole organization wait for a big reveal.'],['Leave clear ownership','Transfer knowledge, operational playbooks, and decision history so the system remains understandable.']] },
  '/practice': { kicker:'The practice', title:'Senior engineering across the whole system.', intro:'Cloud foundations, APIs, and applications are treated as one connected operating environment.', sections:[['Cloud foundations','AWS and multi-cloud architecture, networking, security, infrastructure as code, CI/CD, observability, and migration.'],['API platforms','Service contracts, integration layers, authentication, metering, governance, and reliable delivery.'],['Application delivery','Production web and desktop applications designed around the way people actually work.'],['Operational resilience','Architecture review, automation, incident readiness, documentation, knowledge transfer, and ongoing advisory.']] },
  '/approach': { kicker:'The approach', title:'A clear record of every important decision.', intro:'Engagements reduce uncertainty, make tradeoffs visible, and move from assessment to durable operation.', sections:[['Assess','Current-state architecture, dependencies, constraints, risks, and stakeholder needs.'],['Decide','Target architecture, decision records, delivery priorities, and a practical transition plan.'],['Deliver','Incremental implementation, visible progress, technical validation, and documented change.'],['Sustain','Operational readiness, knowledge transfer, clear documentation, and ongoing advisory support.']] },
}

function PageShell({ children, theme, setTheme }) {
  return <main className="dd-concept final-site inner-site" data-theme={theme} style={{'--accent':'#b84f32','--paper':'#f7f8f6','--night':'#182023'}}><FinalNav theme={theme} setTheme={setTheme}/>{children}<footer id="contact"><p>Have a complex system to modernize?</p><h2>Let’s make the next move clear.</h2><a href="mailto:hello@aymtechmedia.com">hello@aymtechmedia.com</a><div><Wordmark/><span>ACS / Cloud modernization practice</span><span>A consulting practice of AYM Tech Media LLC · © 2026</span></div></footer></main>
}

function StandardPage({ content }) {
  const [theme,setTheme] = useState(() => localStorage.getItem('aym-theme') || 'light')
  useEffect(() => { localStorage.setItem('aym-theme',theme) },[theme])
  return <PageShell theme={theme} setTheme={setTheme}><header className="inner-hero"><p className="eyebrow">ACS / {content.kicker}</p><h1>{content.title}</h1><p>{content.intro}</p></header><section className="inner-ledger">{content.sections.map((s)=><article key={s[0]}><h2>{s[0]}</h2><p>{s[1]}</p></article>)}</section></PageShell>
}

function WorkIndex() {
  const [theme,setTheme] = useState(() => localStorage.getItem('aym-theme') || 'light')
  useEffect(() => { localStorage.setItem('aym-theme',theme) },[theme])
  return <PageShell theme={theme} setTheme={setTheme}><header className="inner-hero"><p className="eyebrow">ACS / Selected work</p><h1>Proof through working systems.</h1><p>Products and platforms that connect engineering execution to measurable organizational progress.</p></header><section className="work-index"><a href={routeHref('/work/myelometrix')}><span>Health technology</span><h2>MyeloMetrix</h2><p>From research requirement to a funded spinal MRI analysis platform in active development.</p><strong>$100K+ secured</strong><b>View case study</b></a></section></PageShell>
}

function MyeloMetrixCase() {
  const [theme,setTheme] = useState(() => localStorage.getItem('aym-theme') || 'light')
  useEffect(() => { localStorage.setItem('aym-theme',theme) },[theme])
  return <PageShell theme={theme} setTheme={setTheme}>
    <header className="case-hero">
      <div><p className="eyebrow">Case study / Health technology</p><h1>Myelo<br/>Metrix</h1><p>A quantitative intelligence platform for spinal MRI, developed from product strategy through cloud infrastructure and cross-platform delivery.</p><div className="case-links"><a href="https://myelometrix.com" target="_blank" rel="noreferrer">Open MyeloMetrix</a><a href="https://myelometrix.com/downloads" target="_blank" rel="noreferrer">Download the application</a></div></div>
      <aside><div><strong>$100K+</strong><span>Grant funding secured to date</span></div><div><strong>Web + desktop</strong><span>Mac and Windows delivery</span></div><div><strong>Cloud pipeline</strong><span>Elastic medical-image processing</span></div><div><strong>API-ready</strong><span>Licensing and integration foundation</span></div></aside>
    </header>
    <section className="case-product"><header><h2>A working platform in active development.</h2><p>The desktop application gives researchers and clinical teams a clear path from MRI upload to vertebral-level measurements, comparisons, visualizations, and exportable results.</p></header><figure><img src={assetHref('/case-studies/myelometrix-app.png')} alt="MyeloMetrix desktop application showing its spinal morphometry products and analysis interface"/><figcaption>The current MyeloMetrix desktop interface.</figcaption></figure></section>
    <section className="case-statement"><span>The challenge</span><h2>Turn specialist imaging research into a product people can reliably use.</h2><p>MyeloMetrix analyzes cervical spinal MRI and produces objective vertebral-level measurements, visual overlays, comparisons, and exportable result packages. The challenge was larger than an algorithm. It required a complete product around the analysis workflow.</p></section>
    <section className="case-capabilities"><div className="section-heading"><p>What the work demonstrates</p></div><div>{[['Product architecture','A coherent system spanning customer experience, account access, analysis workflows, results, and commercial readiness.'],['Cloud infrastructure','Elastic processing for medical images with capacity controls, retries, monitoring, and cost-aware execution.'],['API engineering','A foundation for authenticated access, organization licensing, usage metering, batch processing, and external integrations.'],['Desktop applications','Mac and Windows delivery for researchers and clinical users working with NIfTI and structured data.'],['Applied AI roadmap','A product-led path from an established analysis pipeline to proprietary AI-native inference and quality control.'],['Security and governance','Strict ingestion, de-identification planning, controlled data handling, and a path toward enterprise deployment.']].map((x)=><article key={x[0]}><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></section>
    <section className="case-outcome"><span>The outcome</span><div><h2>Technical execution became funding leverage.</h2><p>The platform has helped secure more than $100,000 in grant funding so far, with additional grant opportunities in the pipeline. That traction demonstrates more than a polished interface. It shows the ability to translate a specialized idea into credible product architecture, working software, operational infrastructure, and a fundable roadmap.</p><blockquote>Build enough of the real system that stakeholders can evaluate the opportunity, not just the promise.</blockquote></div></section>
  </PageShell>
}

function InsightsIndex() {
  const [theme,setTheme] = useState(() => localStorage.getItem('aym-theme') || 'light')
  useEffect(() => { localStorage.setItem('aym-theme',theme) },[theme])
  return <PageShell theme={theme} setTheme={setTheme}><header className="inner-hero insights-hero"><p className="eyebrow">ACS / Transition notes</p><h1>Insights</h1><p>Practical thinking on cloud migration, APIs, application delivery, and operational responsibility.</p></header><InsightsSection index={2} simple/></PageShell>
}

function InsightArticle({ slug }) {
  const index = ['migration-without-the-mythology','api-operating-model','architecture-decisions-that-age-well'].indexOf(slug)
  const item = articles[Math.max(index,0)]
  const resolvedSlug = index >= 0 ? slug : 'migration-without-the-mythology'
  const detail = insightDetails[resolvedSlug]
  const [theme,setTheme] = useState(() => localStorage.getItem('aym-theme') || 'light')
  useEffect(() => { localStorage.setItem('aym-theme',theme) },[theme])
  return <PageShell theme={theme} setTheme={setTheme}><article className="insight-page"><header><p className="eyebrow">Field note / {insightReadTime(resolvedSlug)} min read</p><h1>{item[0]}</h1><p>{item[1]}</p></header><div><p className="insight-lead">{detail.lead}</p>{detail.sections.map(([heading, paragraphs])=><section className="insight-section" key={heading}><h2>{heading}</h2>{paragraphs.map((paragraph)=><p key={paragraph}>{paragraph}</p>)}</section>)}</div></article></PageShell>
}

export default function DesignDirections() {
  const path = currentRoute()
  if (pageContent[path]) return <StandardPage content={pageContent[path]}/>
  if (path === '/work') return <WorkIndex/>
  if (path === '/work/myelometrix') return <MyeloMetrixCase/>
  if (path === '/insights') return <InsightsIndex/>
  const insightSlug = path.match(/^\/insights\/([^/]+)/)?.[1]
  if (insightSlug) return <InsightArticle slug={insightSlug}/>
  if (path === '/designs') return <Gallery/>
  const slug = path.match(/^\/design\/([^/]+)/)?.[1]
  const index = directions.findIndex(d => d.slug === slug)
  return index >= 0 ? <Concept direction={directions[index]} index={index}/> : <FinalSite/>
}
