const videos = [
  {
    title: 'Ferrari Transformer Robot',
    category: 'Car to robot',
    channel: 'Unboxed Mech',
    src: '/portfolio/videos/unboxedmech/ferrari-transformer-robot.mp4',
    note: 'Miniature Ferrari-inspired car assembles into a front-facing robot.',
  },
  {
    title: 'Mercedes Transformer Robot',
    category: 'Car to robot',
    channel: 'Unboxed Mech',
    src: '/portfolio/videos/unboxedmech/mercedes-transformer-robot.mp4',
    note: 'Luxury-car visual language translated into a glossy robot form.',
  },
  {
    title: 'Lamborghini Transformer Robot',
    category: 'Car to robot',
    channel: 'Unboxed Mech',
    src: '/portfolio/videos/unboxedmech/lamborghini-transformer-robot.mp4',
    note: 'Angular sports-car transformation with toy-scale realism.',
  },
  {
    title: 'BMW Transformer Robot',
    category: 'Car to robot',
    channel: 'Unboxed Mech',
    src: '/portfolio/videos/unboxedmech/bmw-transformer-robot.mp4',
    note: 'Brand-color continuity and mechanical panel assembly.',
  },
  {
    title: 'Porsche Transformer Robot',
    category: 'Car to robot',
    channel: 'Unboxed Mech',
    src: '/portfolio/videos/unboxedmech/porsche-transformer-robot.mp4',
    note: 'Compact sports-car silhouette expanded into a collectible robot.',
  },
  {
    title: 'Bugatti Transformer Robot',
    category: 'Car to robot',
    channel: 'Unboxed Mech',
    src: '/portfolio/videos/unboxedmech/bugatti-transformer-robot.mp4',
    note: 'Hypercar-inspired blue armor, grille cues, and polished metal finish.',
  },
  {
    title: 'Ferrari Armor Lion',
    category: 'Animal armor',
    channel: 'Unboxed Mech',
    src: '/portfolio/videos/unboxedmech/ferrari-armor-lion.mp4',
    note: 'Road-speed car panels assemble around a running animal.',
  },
  {
    title: 'Ferrari Armor Horse',
    category: 'Animal armor',
    channel: 'Unboxed Mech',
    src: '/portfolio/videos/unboxedmech/ferrari-armor-horse.mp4',
    note: 'Horse sprint concept with glossy supercar armor assembly.',
  },
  {
    title: 'Lamborghini Iron Bull',
    category: 'Animal armor',
    channel: 'Unboxed Mech',
    src: '/portfolio/videos/unboxedmech/lamborghini-iron-bull.mp4',
    note: 'Bull identity paired with angular supercar armor language.',
  },
  {
    title: 'BMW Iron Wolf',
    category: 'Animal armor',
    channel: 'Unboxed Mech',
    src: '/portfolio/videos/unboxedmech/bmw-iron-wolf.mp4',
    note: 'Performance-car armor wraps a running wolf in a cinematic road shot.',
  },
  {
    title: 'USA Eagle Mech',
    category: 'Country mech',
    channel: 'Unboxed Mech',
    src: '/portfolio/videos/unboxedmech/usa-eagle-mech.mp4',
    note: 'Flag-color capsule transforms into an eagle-inspired collectible.',
  },
  {
    title: 'Brazil Jaguar Mech',
    category: 'Country mech',
    channel: 'Unboxed Mech',
    src: '/portfolio/videos/unboxedmech/brazil-jaguar-mech.mp4',
    note: 'Country palette and jaguar symbolism in a short-form reveal.',
  },
  {
    title: 'Japan Samurai Fox Mech',
    category: 'Country mech',
    channel: 'Unboxed Mech',
    src: '/portfolio/videos/unboxedmech/japan-samurai-fox-mech.mp4',
    note: 'Cultural silhouette, clean color palette, and toy unboxing rhythm.',
  },
  {
    title: 'Egypt Jackal Mech',
    category: 'Country mech',
    channel: 'Unboxed Mech',
    src: '/portfolio/videos/unboxedmech/egypt-jackal-mech.mp4',
    note: 'Anubis-inspired final form with gold and black mechanical armor.',
  },
  {
    title: 'Germany Wolf Mech',
    category: 'Country mech',
    channel: 'Unboxed Mech',
    src: '/portfolio/videos/unboxedmech/germany-wolf-mech.mp4',
    note: 'Engineering-themed wolf mech using black, red, and gold cues.',
  },
  {
    title: 'France Rooster Mech',
    category: 'Country mech',
    channel: 'Unboxed Mech',
    src: '/portfolio/videos/unboxedmech/france-rooster-mech.mp4',
    note: 'National color transformation into a stylized rooster collectible.',
  },
  {
    title: 'UK Lion Knight Mech',
    category: 'Country mech',
    channel: 'Unboxed Mech',
    src: '/portfolio/videos/unboxedmech/uk-lion-knight-mech.mp4',
    note: 'Royal heraldry direction with a lion-knight final character.',
  },
  {
    title: 'Living Room Reset',
    category: 'Cleaning timelapse',
    channel: 'Clean With Mia',
    src: '/portfolio/videos/clean-with-mia/living-room-reset.mp4',
    note: 'Realistic room reset concept for cleaning-service marketing.',
  },
  {
    title: 'Cat Prayer Fish Gag',
    category: 'Cat comedy',
    channel: 'Cats On The Job',
    src: '/portfolio/videos/cats-on-the-job/cat-prayer-fish.mp4',
    note: 'Anthropomorphic cat short built around a fast visual punchline.',
  },
  {
    title: 'Kitchen Chaos',
    category: 'Cat comedy',
    channel: 'Cats On The Job',
    src: '/portfolio/videos/cats-on-the-job/kitchen-chaos.mp4',
    note: 'Two-cat workplace gag with a messy cooking setup.',
  },
  {
    title: 'Chef Cat Part 1',
    category: 'Cat comedy',
    channel: 'Cats On The Job',
    src: '/portfolio/videos/cats-on-the-job/chef-part-1.mp4',
    note: 'Night-market chef cat setup for a recurring character lane.',
  },
  {
    title: 'Chef Cat Part 2',
    category: 'Cat comedy',
    channel: 'Cats On The Job',
    src: '/portfolio/videos/cats-on-the-job/chef-part-2.mp4',
    note: 'Follow-up beat from the chef cat concept.',
  },
  {
    title: 'Chef Cat Full Cut',
    category: 'Cat comedy',
    channel: 'Cats On The Job',
    src: '/portfolio/videos/cats-on-the-job/chef-full.mp4',
    note: 'Longer full version of the chef cat restaurant short.',
  },
  {
    title: 'Chef Cat Alt Cut',
    category: 'Cat comedy',
    channel: 'Cats On The Job',
    src: '/portfolio/videos/cats-on-the-job/chef-v2-full.mp4',
    note: 'Alternate full edit for testing pacing and retention.',
  },
]

const stats = [
  [String(videos.length), 'portfolio videos'],
  ['4', 'repeatable formats'],
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
  {
    title: 'Service Ads',
    desc: 'Satisfying cleaning, grooming, and local-service transformations built as attention hooks for paid social and organic lead generation.',
  },
  {
    title: 'Character Comedy',
    desc: 'Recurring short-form character concepts, including cat workplace gags, where each clip tests one clear visual joke.',
  },
]

const channels = [
  {
    name: 'Unboxed Mech',
    desc: 'Country mechs, car transformers, and animal armor for curiosity-led vertical content.',
  },
  {
    name: 'Clean With Mia',
    desc: 'Realistic cleaning transformations positioned for cleaning-service marketing.',
  },
  {
    name: 'Cats On The Job',
    desc: 'Anthropomorphic cat comedy and fluffy pet transformation concepts.',
  },
]

const groupedVideos = channels.map((channel) => ({
  ...channel,
  videos: videos.filter((video) => video.channel === channel.name),
}))

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
            <div className="label">{videos.length} watermarked clips</div>
          </div>
          <div className="channel-stack">
            {groupedVideos.map((group) => (
              <div className="channel-block" key={group.name}>
                <div className="channel-head">
                  <div>
                    <h3>{group.name}</h3>
                    <p>{group.desc}</p>
                  </div>
                  <span>{group.videos.length} clips</span>
                </div>
                <div className="video-grid">
                  {group.videos.map((video) => (
                    <article className="video-card" key={video.src}>
                      <div className="video-stage">
                        <video src={video.src} controls playsInline preload="metadata" />
                        <div className="portfolio-mark">AYM Tech Media</div>
                      </div>
                      <div className="video-meta">
                        <span>{video.category}</span>
                        <h3>{video.title}</h3>
                        <p>{video.note}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
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
              vertical video review. These portfolio previews are watermarked display copies.
              Dreamina/Seedance is a natural fit because the format
              depends on image-guided transformation, fast iteration, and cinematic motion.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
