import styles from "./CafeSlideshow.module.css";

const photoExtensions = [
  "png",
  "png",
  "png",
  "png",
  "jpg",
  "jpg",
  "jpg",
  "png",
  "png",
  "png",
  "jpg",
];

const photos = photoExtensions.map((extension, index) => ({
  src: `/cafe/slideshow${index + 1}.${extension}`,
  alt: `Prose Patisserie and Cafe photo ${index + 1}`,
}));

export default function CafeSlideshow() {
  return (
    <section
      aria-label="Photos of Prose Patisserie and Cafe"
      className={styles.section}
    >
      <div className={styles.header}>
        <p className={`${styles.eyebrow} text-[11px] uppercase tracking-[0.2em] text-slate-500`}>
          A glimpse of Prose
        </p>
        <h2 className="font-serif text-3xl font-normal text-slate-800 sm:text-4xl">
          Little moments
        </h2>
      </div>

      <div className={styles.viewport}>
        <div className={styles.track}>
          {[0, 1].map((sequence) => (
            <div
              key={sequence}
              className={styles.sequence}
              aria-hidden={sequence === 1}
            >
              {photos.map((photo, index) => (
                <img
                  key={photo.src}
                  src={photo.src}
                  alt={sequence === 0 ? photo.alt : ""}
                  loading={index < 3 && sequence === 0 ? "eager" : "lazy"}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
