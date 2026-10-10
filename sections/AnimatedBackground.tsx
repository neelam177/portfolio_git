// AnimatedBackground.tsx  (remove Navbar and unused imports)
"use client";

export default function AnimatedBackground() {
  return (
    <div className="animated-background" aria-hidden="true">
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />
      <div className="bg-blob bg-blob-3" />
      {Array.from({ length: 12 }, (_, i) => (
        <div key={i} className={`bubble bubble-${i + 1}`} />
      ))}
      <div className="background-glow" />
    </div>
  );
}