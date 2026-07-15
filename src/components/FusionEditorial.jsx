const notes = [
  ['Cloud migration','Cloud migration is not the same as modernization','A practical distinction between moving infrastructure and improving how systems are owned, changed, and operated.'],
  ['Platform engineering','Designing CI/CD infrastructure for operational scale','What changes when a delivery platform needs to launch thousands of isolated jobs every day.'],
  ['Application modernization','Turning internal scripts into supported software','The architecture, interface, documentation, and operational work between a useful script and a dependable product.'],
]

export default function FusionEditorial() {
  return <>
    <section className="fusion-position"><span>Our position</span><p>Modernization is not a migration event. It is the work of making technology safer to operate, clearer to own, and easier to improve.</p></section>
    <section className="fusion-notes" id="fusion-insights">
      <div className="fusion-notes-head"><span>Field notes</span><h2>Thinking from the work.</h2><a href="#fusion-contact">View all insights ↗</a></div>
      <div className="fusion-note-list">{notes.map(([topic,title,copy],index)=><article key={title}><span>0{index+1} / {topic}</span><h3>{title}</h3><p>{copy}</p><a href="#fusion-contact" aria-label={`Read ${title}`}>Read note ↗</a></article>)}</div>
    </section>
    <section className="fusion-founder"><div className="fusion-founder-mark" aria-hidden>AM</div><div><span>Founder-led delivery</span><h2>Senior engineering stays close to the work.</h2></div><p>AYM Tech Media is led by Abdulnasir Mohammed, a cloud infrastructure engineer with more than a decade of experience across migration, platform automation, production operations, APIs, and application delivery.</p></section>
  </>
}
