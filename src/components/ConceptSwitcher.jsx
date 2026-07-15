const concepts = [
  { href: '/concept-civic', label: '01', name: 'Civic editorial' },
  { href: '/concept-ops', label: '02', name: 'Operations' },
  { href: '/concept-fusion', label: '03', name: 'Fusion' },
  { href: '/concept-atlas', label: '04', name: 'Institutional' },
  { href: '/concept-signal', label: '05', name: 'Cinematic' },
]

export default function ConceptSwitcher({ active }) {
  return (
    <nav className="concept-switcher" aria-label="Design concepts">
      <span className="concept-switcher-title">Design directions</span>
      <div className="concept-switcher-links">
        {concepts.map((concept) => (
          <a
            href={concept.href}
            key={concept.label}
            aria-current={active === concept.label ? 'page' : undefined}
          >
            <span>{concept.label}</span> {concept.name}
          </a>
        ))}
      </div>
    </nav>
  )
}
