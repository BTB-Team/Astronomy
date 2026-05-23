import React, { useEffect, useRef } from 'react';

const  GalaxyBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let stars = [];
    let constellations = [];
    let animationId;
    let mouseX = 0;
    let mouseY = 0;

    const isMobile = window.innerWidth < 768;
    const farStarsCount = isMobile ? 80 : 180;
    const midStarsCount = isMobile ? 50 : 100;
    const nearStarsCount = isMobile ? 45 : 90;
    const constellationCount = isMobile ? 5 : 10;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.01;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.01;
    };

    class Star {
      constructor(type) {
        this.type = type;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        if (type === "far") { this.size = 0.6; this.speed = 0.01; }
        else if (type === "mid") { this.size = Math.random() * 1.5 + 1; this.speed = 0.03; }
        else { this.size = Math.random() * 2 + 2; this.speed = 0.08; }
        this.opacity = Math.random();
        this.offset = Math.random() * 1000;
        this.wave = Math.random() * 0.5 + 0.5;
        this.glow = Math.random() > 0.65;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x + mouseX, this.y + mouseY);
        let pulse = 0.6 + Math.sin(Date.now() * 0.002 + this.offset) * 0.4;
        ctx.globalAlpha = this.opacity * pulse;
        if (this.glow) {
          ctx.shadowBlur = 12;
          ctx.shadowColor = "rgba(255,255,255,.9)";
        }
        ctx.fillStyle = "#fff";
        if (this.type === "near") {
          ctx.rotate(this.offset * 0.01);
          ctx.beginPath();
          ctx.moveTo(0, -this.size * 2.5);
          ctx.lineTo(this.size * 0.8, -this.size * 0.6);
          ctx.lineTo(this.size * 2.3, 0);
          ctx.lineTo(this.size * 0.7, this.size * 0.7);
          ctx.lineTo(0, this.size * 2.5);
          ctx.lineTo(-this.size * 0.7, this.size * 0.7);
          ctx.lineTo(-this.size * 2.3, 0);
          ctx.lineTo(-this.size * 0.8, -this.size * 0.6);
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      update() {
        this.offset += 0.01;
        this.y += this.speed;
        this.x += Math.sin(this.offset * this.wave) * 0.08;
        if (this.y > canvas.height + 10) {
          this.y = -10;
          this.x = Math.random() * canvas.width;
        }
      }
    }

    class Constellation {
      constructor() {
        this.points = [];
        let cx = Math.random() * canvas.width;
        let cy = Math.random() * canvas.height;
        let total = Math.floor(Math.random() * 3) + 4;
        let x = cx;
        let y = cy;
        for (let i = 0; i < total; i++) {
          x += (Math.random() * 180) - 90;
          y += (Math.random() * 140) - 70;
          this.points.push({
            baseX: x, baseY: y, x: x, y: y,
            offset: Math.random() * 1000,
            waveX: Math.random() * 0.8 + 0.2,
            waveY: Math.random() * 0.8 + 0.2,
            range: Math.random() * 35 + 20
          });
        }
      }

      draw() {
        ctx.save();
        ctx.translate(mouseX * 0.5, mouseY * 0.5);
        for (let i = 0; i < this.points.length - 1; i++) {
          ctx.save();
          ctx.shadowBlur = 6;
          ctx.shadowColor = "rgba(255,255,255,.6)";
          ctx.beginPath();
          ctx.moveTo(this.points[i].x, this.points[i].y);
          ctx.lineTo(this.points[i + 1].x, this.points[i + 1].y);
          ctx.strokeStyle = "rgba(255,255,255,.55)";
          ctx.lineWidth = 0.7;
          ctx.stroke();
          ctx.restore();
        }
        this.points.forEach(p => {
          ctx.shadowBlur = 22;
          ctx.shadowColor = "#fff";
          ctx.fillStyle = "#fff";
          ctx.beginPath();
          ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
          ctx.fill();
        });
        ctx.restore();
      }

      update() {
        this.points.forEach(p => {
          p.offset += 0.01;
          p.x = p.baseX + Math.sin(p.offset * p.waveX) * p.range;
          p.y = p.baseY + Math.cos(p.offset * p.waveY) * p.range;
        });
      }
    }

    const init = () => {
      stars = [];
      constellations = [];
      for (let i = 0; i < farStarsCount; i++) stars.push(new Star("far"));
      for (let i = 0; i < midStarsCount; i++) stars.push(new Star("mid"));
      for (let i = 0; i < nearStarsCount; i++) stars.push(new Star("near"));
      for (let i = 0; i < constellationCount; i++) constellations.push(new Constellation());
    };

    const resize = () => {
        const parent = canvas.parentElement;
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;

        init();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(s => { s.update(); s.draw(); });
      constellations.forEach(c => { c.update(); c.draw(); });
      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden w-full max-w-[1366px] mx-auto bg-[#010008] bg-gradient-to-b from-[#010008] via-[#070013] to-[#130026]">
      {/* Glow Effects using Tailwind (Substitutes for radial-gradients) */}
      <div className="absolute top-[20%] left-[15%] w-[60%] h-[60%] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[60%] left-[80%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />
      
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

export default  GalaxyBackground;
