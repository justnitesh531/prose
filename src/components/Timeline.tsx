'use client';

import React, { useEffect, useState, useRef } from 'react';
import { EyeMatrix } from './EyeMatrix';

interface PortfolioItem {
  id: string;
  label: string;
  title: string;
  description: string;
  youtubeId: string;
}

interface TimelineProps {
  data: PortfolioItem[];
}

// Ambient tone generator
const AmbientAudio: React.FC = () => {
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  useEffect(() => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      audioContextRef.current = audioContext;

      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      const filter = audioContext.createBiquadFilter();

      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(60, audioContext.currentTime);
      oscillator.frequency.setValueAtTime(65, audioContext.currentTime + 15);

      gainNode.gain.setValueAtTime(0.02, audioContext.currentTime);
      gainNode.gain.setValueAtTime(0.015, audioContext.currentTime + 15);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(200, audioContext.currentTime);

      oscillator.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.start();

      oscillatorRef.current = oscillator;
      gainRef.current = gainNode;

      return () => {
        try {
          oscillator.stop();
        } catch (e) {
          // Already stopped
        }
      };
    } catch (e) {
      // Audio not supported, silently fail
    }
  }, []);

  return null;
};

// Geometric bird + dimmer fireflies
const FireflyAndBird: React.FC<{ scrollProgress: number }> = ({ scrollProgress }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const firefliesRef = useRef<Array<{
    x: number; y: number; vx: number; vy: number;
    alpha: number; life: number; maxLife: number; size: number;
  }>>([]);
  const birdRef = useRef<{ x: number; y: number; wingPhase: number }>({
    x: 0,
    y: 0,
    wingPhase: 0,
  });
  const animIdRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const getPathY = (xNorm: number): number => {
      const t = xNorm % 1;
      const p0y = 0.5, p1y = 1.2, p2y = -0.2, p3y = 0.5;
      const mt = 1 - t;
      const by = mt * mt * mt * p0y + 3 * mt * mt * t * p1y + 3 * mt * t * t * p2y + t * t * t * p3y;
      return canvas.height * by;
    };

    const spawnFirefly = () => {
      const baseX = (scrollProgress / 100) * canvas.width;
      const spread = canvas.width * 0.12;
      const x = baseX + (Math.random() - 0.5) * spread * 2;
      const xNorm = ((x % canvas.width) + canvas.width) % canvas.width / canvas.width;
      const pathY = getPathY(xNorm);
      firefliesRef.current.push({
        x,
        y: pathY + (Math.random() - 0.5) * 60,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: 0,
        life: 0,
        maxLife: 80 + Math.random() * 120,
        size: 1.5 + Math.random() * 2,
      });
    };

    const drawBird = (x: number, y: number, wingPhase: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.strokeStyle = 'rgba(245, 214, 79, 0.6)';
      ctx.fillStyle = 'rgba(245, 214, 79, 0.5)';
      ctx.lineWidth = 1.5;

      // Body
      ctx.beginPath();
      ctx.ellipse(0, 0, 8, 5, 0, 0, Math.PI * 2);
      ctx.fill();

      // Head
      ctx.beginPath();
      ctx.arc(7, -2, 3, 0, Math.PI * 2);
      ctx.fill();

      // Eye
      ctx.fillStyle = 'rgba(245, 214, 79, 0.9)';
      ctx.beginPath();
      ctx.arc(9, -2, 1, 0, Math.PI * 2);
      ctx.fill();

      // Wings (animated with flapping motion)
      ctx.strokeStyle = 'rgba(245, 214, 79, 0.4)';
      const wingFlap = Math.sin(wingPhase) * 8; // Flap amplitude
      const wingBend = Math.sin(wingPhase) * 0.4;

      // Left wing
      ctx.beginPath();
      ctx.moveTo(-2, -5 + wingFlap);
      ctx.quadraticCurveTo(-5, -10 + wingFlap - wingBend, -8, -8 + wingFlap);
      ctx.stroke();

      // Right wing
      ctx.beginPath();
      ctx.moveTo(-2, 5 - wingFlap);
      ctx.quadraticCurveTo(-5, 10 - wingFlap + wingBend, -8, 8 - wingFlap);
      ctx.stroke();

      // Tail
      ctx.strokeStyle = 'rgba(245, 214, 79, 0.6)';
      ctx.beginPath();
      ctx.moveTo(-8, 0);
      ctx.lineTo(-14, 2);
      ctx.stroke();

      ctx.restore();
    };

    let frame = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      // Spawn fireflies
      if (frame % 25 === 0 && firefliesRef.current.length < 6) {
        spawnFirefly();
      }

      // Update and draw fireflies (dimmer)
      firefliesRef.current = firefliesRef.current.filter(f => f.life < f.maxLife);
      firefliesRef.current.forEach(f => {
        f.life++;
        f.x += f.vx;
        f.y += f.vy;
        const progress = f.life / f.maxLife;
        f.alpha = progress < 0.3 ? progress / 0.3 : progress > 0.7 ? (1 - progress) / 0.3 : 1;

        // Dimmer glow
        const glow = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.size * 5);
        glow.addColorStop(0, `rgba(245, 214, 79, ${f.alpha * 0.4})`);
        glow.addColorStop(0.4, `rgba(245, 214, 79, ${f.alpha * 0.15})`);
        glow.addColorStop(1, `rgba(245, 214, 79, 0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.size * 5, 0, Math.PI * 2);
        ctx.fill();

        // Dimmer core
        ctx.fillStyle = `rgba(255, 245, 180, ${f.alpha * 0.5})`;
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.size * 0.7, 0, Math.PI * 2);
        ctx.fill();
      });

      // Update and draw bird
      const birdBaseX = (scrollProgress / 100) * canvas.width;
      const birdXNorm = ((birdBaseX % canvas.width) + canvas.width) % canvas.width / canvas.width;
      const birdPathY = getPathY(birdXNorm);
      birdRef.current.x = birdBaseX + Math.sin(frame * 0.02) * 40;
      birdRef.current.y = birdPathY + Math.cos(frame * 0.015) * 20;
      birdRef.current.wingPhase = frame * 0.1;

      drawBird(birdRef.current.x, birdRef.current.y, birdRef.current.wingPhase);

      animIdRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      cancelAnimationFrame(animIdRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [scrollProgress]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ background: 'transparent', zIndex: 1 }}
    />
  );
};

const PortfolioSection: React.FC<PortfolioItem & { index: number }> = ({
  id,
  label,
  title,
  description,
  youtubeId,
  index,
}) => (<section className="h-panel portfolio-section" id={id}>
  <div className="portfolio-inner">
    <div className="portfolio-video-wrap">
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
    <div className="portfolio-text">
      <p className="portfolio-label">
        [{String(index + 1).padStart(2, '0')}] {label}
      </p>
      <h2 className="portfolio-title">{title}</h2>
      <p className="portfolio-desc">{description}</p>
    </div>
  </div>
</section>
);

const ContactSection: React.FC = () => (
  <section className="h-panel contact-section">
    <div className="contact-inner">
      <p className="month-id">[LET'S TALK]</p>
      <h2 className="month-main">START A<br />PROJECT</h2>
      <div className="contact-links">
        <a href="mailto:justnitesh@gmail.com?subject=Project%20enquiry&body=I%20have%20a%20project%20I%27d%20like%20to%20discuss%20with%20Prose%20%26%20Pixels%20Studio.%20Looking%20forward%20to%20exploring%20creative%20possibilities%20together.">justnitesh@gmail.com</a>
        <a href="tel:+917989964722">7989964722</a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">[IG]</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">[LI]</a>
        <a href="https://vimeo.com" target="_blank" rel="noreferrer">[VI]</a>
      </div>
      <p className="contact-location">NORTH GOA, INDIA</p>
    </div>
  </section>
);

export const Timeline: React.FC<TimelineProps> = ({ data }) => {
  const [trackX, setTrackX] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let targetX = 0;
    let currentX = 0;
    let animationFrame = 0;

    const handleScroll = () => {
      setIsScrolling(true);

      clearTimeout((handleScroll as any).scrollTimeout);

      (handleScroll as any).scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 120);
      const doc = document.documentElement;
      const maxScrollY = doc.scrollHeight - window.innerHeight;

      const scrollPercentage =
        maxScrollY > 0 ? window.scrollY / maxScrollY : 0;

      setScrollProgress(Math.min(scrollPercentage * 100, 100));

      const track = document.querySelector(
        '.horizontal-track'
      ) as HTMLElement;

      if (track) {
        const maxScrollX = Math.max(
          0,
          track.scrollWidth - window.innerWidth
        );

        targetX = -(scrollPercentage * maxScrollX);
      }
    };

    const animate = () => {
      const distance = targetX - currentX;

      currentX += distance * 0.10;

      if (Math.abs(distance) < 0.1) {
        currentX = targetX;
      }

      setTrackX(currentX);

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    handleScroll();
    animate();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <div className="timeline-page">
        <EyeMatrix />
        <FireflyAndBird scrollProgress={scrollProgress} />
        <AmbientAudio />

        <div className="progress-indicator" aria-hidden="true">
          <div>[{Math.round(scrollProgress).toString().padStart(2, '0')}%]</div>
        </div>

        <main className="timeline-wrap">
          <div className="horizontal-shell">
            <div className="horizontal-stage">
              <div
                className="horizontal-track"
                style={{
                  transform: `translate3d(${trackX}px, 0, 0)`,
                  filter: isScrolling ? 'blur(0.2px)' : 'blur(0px)',
                }}
              >
                <div className="dotted-path" aria-hidden="true" />

                <section className="h-panel intro-screen">
                  <header className="utility-row">
                    <p>[P_S_23]</p>
                    <a href="https://www.prose.co.in/" target="_blank" rel="noreferrer">
                      Prose & Pixels Studio®
                    </a>
                    <div>
                      <a href="#" aria-label="X">[X]</a>
                      <a href="#" aria-label="Instagram">[IG]</a>
                      <a href="#" aria-label="LinkedIn">[LI]</a>
                    </div>
                  </header>
                  <div className="intro-hero-grid">
                    <div className="intro-title-wrap">
                      <p className="intro-label">PORTFOLIO</p>
                      <h1 className="intro-block">PROSE STUDIO</h1>
                    </div>
                  </div>
                  <div className="intro-footer-row">
                    <a href="mailto:justnitesh@gmail.com?subject=Project%20enquiry&body=I%20have%20a%20project%20I%27d%20like%20to%20discuss%20with%20Prose%20%26%20Pixels%20Studio.%20Looking%20forward%20to%20exploring%20creative%20possibilities%20together.">[START A PROJECT WITH US]</a>
                    <div className="intro-scroll-copy">
                      <span>[SCROLL]</span>
                      <span>This way →</span>
                      <span>Brand films, music videos, corporate productions.</span>
                    </div>
                  </div>
                </section>

                {data.map((item) => (
                  <PortfolioSection key={item.id} {...item} />
                ))}

                <ContactSection />
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="scroll-spacer" />
    </>
  );
};
