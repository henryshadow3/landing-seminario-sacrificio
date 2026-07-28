const particulas = Array.from({ length: 80 }, (_, i) => {
  const ruido = (semilla) => {
    const valor = Math.sin((i + 1) * semilla) * 43758.5453;
    return valor - Math.floor(valor);
  };

  return {
    id: i,
    top: `${ruido(12.9898) * 100}%`,
    left: `${ruido(78.233) * 100}%`,
    size: ruido(37.719) * 2.5 + 0.8,
    delay: `${ruido(19.913) * 8}s`,
    duration: `${ruido(93.117) * 6 + 4}s`,
  };
});

export default function GlimmerBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particulas.map((p) => (
        <div
          key={p.id}
          className="absolute bg-white rounded-full animate-sparkle"
          style={{
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: p.delay,
            animationDuration: p.duration,
            boxShadow: "0 0 8px rgba(47, 243, 224, 0.65)",
          }}
        />
      ))}
    </div>
  );
}
