'use client';

import React, { useEffect, useRef } from 'react';

export const EyeMatrix: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const chars = 'UNSEENPROSESTUDIO';
    const spacing = 14;
    const pointer = { x: canvas.width * 0.5, y: canvas.height * 0.35 };
    let animationId: number;

    const movePointer = (event: MouseEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };
    window.addEventListener('mousemove', movePointer);

    const animate = () => {
      ctx.fillStyle = 'rgba(217, 217, 217, 0.16)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const time = Date.now() * 0.0005;
      ctx.font = '10px ui-monospace, Menlo, Monaco, Consolas, monospace';
      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          const index = Math.floor((x * 0.7 + y * 0.3 + time * 100) % chars.length);
          const char = chars[index];
          const dx = x - pointer.x;
          const dy = y - pointer.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const influence = Math.max(0, 1 - dist / 260);
          const alpha = 0.05 + influence * 0.4;

          ctx.fillStyle = `rgba(41, 41, 41, ${(alpha * 0.45).toFixed(3)})`;
          ctx.fillText(char, x, y);
        }
      }

      const halo = ctx.createRadialGradient(pointer.x, pointer.y, 8, pointer.x, pointer.y, 180);
      halo.addColorStop(0, 'rgba(52, 52, 52, 0.16)');
      halo.addColorStop(1, 'rgba(52, 52, 52, 0)');
      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.arc(pointer.x, pointer.y, 180, 0, Math.PI * 2);
      ctx.fill();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', movePointer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-45"
      style={{ background: 'transparent' }}
    />
  );
};
