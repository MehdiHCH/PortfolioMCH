/**
 * Interactive node mesh used as the Projects section backdrop.
 *
 * Adapted from a full-screen hero treatment into a section layer:
 *  - sized to its own container (ResizeObserver), not the window
 *  - transparent, so the project cards sit on top of it
 *  - connections walk grid neighbours (O(n)) instead of every pair (O(n^2)),
 *    which is what makes it affordable to leave mounted on a long page
 *  - pauses entirely when scrolled out of view, and renders one static frame
 *    when the visitor prefers reduced motion
 */
import { useEffect, useRef } from "react";

const SPACING = 62;
const MOUSE_RADIUS = 200;
const SPRING_K = 18;
const DAMPING = 0.82;
const LINK_DIST = SPACING * 1.5;

export default function ProjectsConstellation() {
  const holderRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const holder = holderRef.current;
    const canvas = canvasRef.current;
    if (!holder || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const accent = [155, 126, 249]; // --color-primary
    const base = [190, 200, 225];

    let raf = 0;
    let w = 0;
    let h = 0;
    let cols = 0;
    let rows = 0;
    let nodes = [];
    let visible = true;
    let last = performance.now();
    const mouse = { x: -9999, y: -9999 };

    const build = () => {
      const rect = holder.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = Math.max(1, Math.round(rect.width));
      h = Math.max(1, Math.round(rect.height));
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.ceil(w / SPACING) + 1;
      rows = Math.ceil(h / SPACING) + 1;
      nodes = [];
      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          const x = i * SPACING;
          const y = j * SPACING;
          nodes.push({
            x, y, vx: 0, vy: 0, baseX: x, baseY: y,
            r: Math.random() * 1.1 + 1,
            pulse: Math.random() * Math.PI * 2,
          });
        }
      }
    };

    const at = (i, j) => nodes[j * cols + i];

    const draw = (dt) => {
      ctx.clearRect(0, 0, w, h);

      for (const n of nodes) {
        n.pulse += dt * 2.4;
        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const d = Math.hypot(dx, dy);
        if (d < MOUSE_RADIUS && d > 0) {
          const force = (1 - d / MOUSE_RADIUS) * 1400;
          const a = Math.atan2(dy, dx);
          n.vx -= Math.cos(a) * force * dt;
          n.vy -= Math.sin(a) * force * dt;
        }
        n.vx = (n.vx + (n.baseX - n.x) * SPRING_K * dt) * DAMPING;
        n.vy = (n.vy + (n.baseY - n.y) * SPRING_K * dt) * DAMPING;
        n.x += n.vx * dt * 60;
        n.y += n.vy * dt * 60;
      }

      // grid-neighbour links only: right, down, down-right
      ctx.lineWidth = 0.7;
      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          const n = at(i, j);
          if (!n) continue;
          for (const [di, dj] of [[1, 0], [0, 1], [1, 1]]) {
            const m = i + di < cols && j + dj < rows ? at(i + di, j + dj) : null;
            if (!m) continue;
            const dist = Math.hypot(n.x - m.x, n.y - m.y);
            if (dist > LINK_DIST) continue;
            ctx.strokeStyle = `rgba(${base.join(",")},${(1 - dist / LINK_DIST) * 0.3})`;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        const d = Math.hypot(mouse.x - n.x, mouse.y - n.y);
        const near = d < MOUSE_RADIUS;
        const alpha = near ? 1 : 0.38 + Math.sin(n.pulse) * 0.12;
        ctx.fillStyle = `rgba(${(near ? accent : base).join(",")},${alpha})`;
        const r = near ? n.r * 2 : n.r + Math.sin(n.pulse) * 0.25;
        ctx.beginPath();
        ctx.arc(n.x, n.y, Math.max(0.5, r), 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (visible) draw(dt);
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };

    build();

    if (reduced) {
      draw(0);                      // one static frame, no loop
    } else {
      window.addEventListener("mousemove", onMove, { passive: true });
      window.addEventListener("mouseleave", onLeave);
      raf = requestAnimationFrame(loop);
    }

    const ro = new ResizeObserver(build);
    ro.observe(holder);
    // stop burning frames while the section is off-screen
    const io = new IntersectionObserver(
      ([entry]) => { visible = entry.isIntersecting; },
      { rootMargin: "120px" },
    );
    io.observe(holder);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={holderRef} className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <canvas ref={canvasRef} className="block h-full w-full" />
      {/* fade the mesh out at the edges so it reads as texture, not a panel */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-transparent to-background/90" />
    </div>
  );
}
