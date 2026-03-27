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

    // Matrix-like eyes animation
    const eyeSize = 20;
    const spacing = 60;
    let animationId: number;

    const animate = () => {
      // Clear with slight fade
      ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw eyes
      ctx.fillStyle = 'rgba(255, 255, 0, 0.15)';
      ctx.strokeStyle = 'rgba(255, 255, 0, 0.25)';
      ctx.lineWidth = 1;

      const time = Date.now() * 0.0005;

      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          // Eyes
          const angle = Math.atan2(Math.sin(time + y * 0.01), Math.cos(time + x * 0.01));
          const pupilOffsetX = Math.cos(angle) * 5;
          const pupilOffsetY = Math.sin(angle) * 5;

          // Draw eye white
          ctx.beginPath();
          ctx.arc(x, y, eyeSize, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          // Draw pupil
          ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
          ctx.beginPath();
          ctx.arc(x + pupilOffsetX, y + pupilOffsetY, eyeSize * 0.4, 0, Math.PI * 2);
          ctx.fill();

          // Glint
          ctx.fillStyle = 'rgba(255, 255, 0, 0.5)';
          ctx.beginPath();
          ctx.arc(x + pupilOffsetX + 3, y + pupilOffsetY - 3, eyeSize * 0.15, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-20"
      style={{ background: 'transparent' }}
    />
  );
};
