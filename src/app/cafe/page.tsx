import CafeSlideshow from "./CafeSlideshow";
import styles from "./CafePage.module.css";

const instagramReels = [
  "https://www.instagram.com/reel/DYZDSoPzLkT/",
  "https://www.instagram.com/reel/DdnlaDYNTcE/",
  "https://www.instagram.com/reel/DVfwpOPDE_L/",
  "https://www.instagram.com/reel/DVu6GTnjNiF/",
];

export const metadata = {
  title: "Prose Patisserie & Cafe | Arthshila, Goa",
  description:
    "Visit Prose Patisserie & Cafe at Arthshila, Nachinola, Goa, for coffee, pastries, and slow moments.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CafePage() {
  return (
    <main className={`${styles.page} min-h-screen w-full bg-stone-50 text-slate-800`}>
      {/* Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroGrid}>
          <div>
            <p className={`${styles.eyebrow} text-xs uppercase tracking-[0.25em] text-slate-500`}>
              Arthshila · Nachinola · Goa
            </p>

            <h1 className="font-serif text-5xl font-normal leading-tight sm:text-6xl lg:text-7xl">
              Prose
              <span className="block text-slate-500">
                Patisserie &amp; Cafe
              </span>
            </h1>

            <p className={`${styles.heroCopy} max-w-xl text-base leading-8 text-slate-600 sm:text-lg`}>
              A little pause in the day, served with good coffee, thoughtful
              bakes, and something lovely on the table.
            </p>

            <a
              href="#visit"
              className={`${styles.primaryLink} inline-flex border border-slate-700 text-xs uppercase tracking-[0.18em] transition hover:bg-slate-800 hover:text-white`}
            >
              Find us
            </a>
          </div>

          <div className={styles.heroImage}>
            <img
              src="/cafe/hero.jpg"
              alt="Prose Patisserie and Cafe"
            />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className={styles.introSection}>
        <div className={styles.introContent}>
          <p className={`${styles.eyebrow} text-xs uppercase tracking-[0.25em] text-slate-500`}>
            A place to pause
          </p>

          <h2 className="font-serif text-3xl font-normal sm:text-4xl">
            Good things take time.
          </h2>

          <p className={`${styles.introCopy} max-w-2xl text-base leading-8 text-slate-600`}>
            Come by for a cup of coffee, a fresh pastry, and a moment away from
            the rush. We look forward to welcoming you to Prose.
          </p>
        </div>
      </section>

      {/* Automatic photo slideshow */}
      <CafeSlideshow />

      {/* Instagram Reel */}
      <section
        aria-labelledby="instagram-reels-heading"
        className={styles.reelsSection}
      >
        <div className={styles.sectionContent}>
          <div className={styles.reelsHeader}>
            <p className={`${styles.eyebrow} text-[11px] uppercase tracking-[0.2em] text-slate-500`}>
              From Instagram
            </p>
            <h2
              id="instagram-reels-heading"
              className="font-serif text-3xl font-normal text-slate-800 sm:text-4xl"
            >
              A little more Prose
            </h2>
          </div>

          <div className={styles.reelsGrid}>
            {instagramReels.map((reelUrl, index) => (
              <div key={reelUrl} className={styles.reelCard}>
                <div className={styles.reelFrame}>
                  <iframe
                    src={`${reelUrl}embed`}
                    title={`Prose Patisserie and Cafe Instagram Reel ${index + 1}`}
                    loading="lazy"
                    allow="clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <a
                  href={reelUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.reelLink} inline-block border-b border-slate-500 pb-1 text-sm text-slate-700 hover:text-slate-500`}
                >
                  Watch on Instagram
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      <section
        id="visit"
        className={styles.visitSection}
      >
        <div className={styles.visitGrid}>
          <div>
            <p className={`${styles.eyebrow} text-xs uppercase tracking-[0.25em] text-slate-500`}>
              Come find us
            </p>

            <h2 className="font-serif text-3xl font-normal sm:text-4xl">
              Visit Prose
            </h2>

            <p className={`${styles.detailCopy} leading-7 text-slate-600`}>
              Arthshila, Nachinola, Goa, India
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Prose+Patisserie+Cafe+Arthshila+Nachinola+Goa"
              target="_blank"
              rel="noreferrer"
              className={`${styles.detailLink} inline-block border-b border-slate-500 pb-1 text-sm text-slate-700 hover:text-slate-500`}
            >
              Open in Google Maps
            </a>
          </div>

          <div>
            <p className={`${styles.eyebrow} text-xs uppercase tracking-[0.25em] text-slate-500`}>
              Stay in touch
            </p>

            <h2 className="font-serif text-3xl font-normal sm:text-4xl">
              Follow along
            </h2>

            <p className={`${styles.detailCopy} leading-7 text-slate-600`}>
              Follow Prose on Instagram for café moments, bakes, and updates.
            </p>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className={`${styles.detailLink} inline-block border-b border-slate-500 pb-1 text-sm text-slate-700 hover:text-slate-500`}
            >
              Find us on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={`${styles.footerContent} text-xs tracking-wide text-slate-500`}>
          <p>Prose Patisserie &amp; Cafe</p>
          <p>Arthshila, Nachinola, Goa</p>
        </div>
      </footer>
    </main>
  );
}