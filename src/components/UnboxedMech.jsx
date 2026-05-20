const videos = [
  {
    title: 'Ferrari Transformer Robot',
    category: 'Car to robot',
    src: '/unboxedmech/videos/ferrari-transformer-robot.mp4',
    note: 'Miniature Ferrari-inspired car assembles into a front-facing robot.',
  },
  {
    title: 'Mercedes Transformer Robot',
    category: 'Car to robot',
    src: '/unboxedmech/videos/mercedes-transformer-robot.mp4',
    note: 'Luxury-car visual language translated into a glossy robot form.',
  },
  {
    title: 'Lamborghini Transformer Robot',
    category: 'Car to robot',
    src: '/unboxedmech/videos/lamborghini-transformer-robot.mp4',
    note: 'Angular sports-car transformation with toy-scale realism.',
  },
  {
    title: 'BMW Transformer Robot',
    category: 'Car to robot',
    src: '/unboxedmech/videos/bmw-transformer-robot.mp4',
    note: 'Brand-color continuity and mechanical panel assembly.',
  },
  {
    title: 'Porsche Transformer Robot',
    category: 'Car to robot',
    src: '/unboxedmech/videos/porsche-transformer-robot.mp4',
    note: 'Compact sports-car silhouette expanded into a collectible robot.',
  },
  {
    title: 'Bugatti Transformer Robot',
    category: 'Car to robot',
    src: '/unboxedmech/videos/bugatti-transformer-robot.mp4',
    note: 'Hypercar-inspired blue armor, grille cues, and polished metal finish.',
  },
  {
    title: 'Ferrari Armor Lion',
    category: 'Animal armor',
    src: '/unboxedmech/videos/ferrari-armor-lion.mp4',
    note: 'Road-speed car panels assemble around a running animal.',
  },
  {
    title: 'Lamborghini Iron Bull',
    category: 'Animal armor',
    src: '/unboxedmech/videos/lamborghini-iron-bull.mp4',
    note: 'Bull identity paired with angular supercar armor language.',
  },
  {
    title: 'BMW Iron Wolf',
    category: 'Animal armor',
    src: '/unboxedmech/videos/bmw-iron-wolf.mp4',
    note: 'Performance-car armor wraps a running wolf in a cinematic road shot.',
  },
  {
    title: 'USA Eagle Mech',
    category: 'Country mech',
    src: '/unboxedmech/videos/usa-eagle-mech.mp4',
    note: 'Flag-color capsule transforms into an eagle-inspired collectible.',
  },
  {
    title: 'Brazil Jaguar Mech',
    category: 'Country mech',
    src: '/unboxedmech/videos/brazil-jaguar-mech.mp4',
    note: 'Country palette and jaguar symbolism in a short-form reveal.',
  },
  {
    title: 'Japan Samurai Fox Mech',
    category: 'Country mech',
    src: '/unboxedmech/videos/japan-samurai-fox-mech.mp4',
    note: 'Cultural silhouette, clean color palette, and toy unboxing rhythm.',
  },
  {
    title: 'Egypt Jackal Mech',
    category: 'Country mech',
    src: '/unboxedmech/videos/egypt-jackal-mech.mp4',
    note: 'Anubis-inspired final form with gold and black mechanical armor.',
  },
  {
    title: 'Germany Wolf Mech',
    category: 'Country mech',
    src: '/unboxedmech/videos/germany-wolf-mech.mp4',
    note: 'Engineering-themed wolf mech using black, red, and gold cues.',
  },
  {
    title: 'France Rooster Mech',
    category: 'Country mech',
    src: '/unboxedmech/videos/france-rooster-mech.mp4',
    note: 'National color transformation into a stylized rooster collectible.',
  },
  {
    title: 'UK Lion Knight Mech',
    category: 'Country mech',
    src: '/unboxedmech/videos/uk-lion-knight-mech.mp4',
    note: 'Royal heraldry direction with a lion-knight final character.',
  },
]

const stats = [
  ['16', 'AI transformation videos'],
  ['3', 'repeatable formats'],
  ['8-10s', 'short-form pacing'],
  ['9:16', 'vertical-first output'],
]

const formats = [
  {
    title: 'Country Mechs',
    desc: 'Countries become collectible mechanical characters using flag colors, national symbols, and a clear first-frame/final-frame transformation.',
  },
  {
    title: 'Car Transformers',
    desc: 'High-polish miniature cars reconfigure into front-facing robot toys while preserving brand color, silhouette, and product photography realism.',
  },
  {
    title: 'Animal Armor',
    desc: 'A car races beside an animal, then assembles around it as full-body armor while the subject stays grounded and readable.',
  },
]

export default function UnboxedMech() {
  return (
    <main className="unboxed">
      <section className="unboxed-hero">
        <div className="page">
          <a className="back-link" href="/">← AYM Tech Media</a>
          <div className="hero-status"><span className="hero-dot" /> Creator portfolio</div>
          <h1>
            Unboxed Mech turns curiosity hooks into <span className="accent">cinematic AI transformations</span>.
          </h1>
          <p className="hero-sub">
            A vertical-video concept account built around toy unboxing, car transformations,
            country symbolism, and high-retention visual reveals for TikTok, Reels, and Shorts.
          </p>
          <div className="hero-actions">
            <a href="#portfolio" className="btn btn-primary">Watch portfolio →</a>
            <a href="#process" className="btn btn-ghost">View process</a>
          </div>
        </div>
      </section>

      <section>
        <div className="page">
          <div className="unboxed-stats" aria-label="Portfolio statistics">
            {stats.map(([n, label]) => (
              <div className="stat" key={label}>
                <strong>{n}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process">
        <div className="page">
          <div className="section-head">
            <div>
              <div className="label">§ 01 — Creative system</div>
              <h2 className="section-title" style={{ marginTop: 8 }}>Designed for repeatable output.</h2>
            </div>
          </div>
          <div className="format-grid">
            {formats.map((item) => (
              <article className="format-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio">
        <div className="page">
          <div className="section-head">
            <div>
              <div className="label">§ 02 — Video portfolio</div>
              <h2 className="section-title" style={{ marginTop: 8 }}>Selected Unboxed Mech tests.</h2>
            </div>
            <div className="label">{videos.length} clips</div>
          </div>
          <div className="video-grid">
            {videos.map((video) => (
              <article className="video-card" key={video.src}>
                <video src={video.src} controls playsInline preload="metadata" />
                <div className="video-meta">
                  <span>{video.category}</span>
                  <h3>{video.title}</h3>
                  <p>{video.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="page">
          <div className="creator-note">
            <div>
              <div className="label">§ 03 — Dreamina creator program</div>
              <h2>Why this fits</h2>
            </div>
            <p>
              The account is built around a consistent production loop: strong first frame,
              recognizable final target, storyboard reference, precise motion prompt, and
              vertical video review. Dreamina/Seedance is a natural fit because the format
              depends on image-guided transformation, fast iteration, and cinematic motion.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
