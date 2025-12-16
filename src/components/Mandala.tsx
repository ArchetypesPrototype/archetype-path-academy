import { useEffect, useState } from "react";
import mandalaImage from "@/assets/mandala-hero.png";

interface MandalaProps {
  size?: number;
  className?: string;
  useImage?: boolean;
}

const Mandala = ({ size = 200, className = "", useImage = false }: MandalaProps) => {
  const [animationPhase, setAnimationPhase] = useState<"spin" | "pulse">("spin");

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationPhase("pulse");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (useImage) {
    return (
      <div className={`relative ${className}`}>
        <img
          src={mandalaImage}
          alt="Mandala"
          width={size}
          height={size}
          className={`${
            animationPhase === "spin" ? "animate-spin-once" : "animate-pulse-glow"
          } transition-all duration-300 rounded-full`}
        />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        className={`${
          animationPhase === "spin" ? "animate-spin-once" : "animate-pulse-glow"
        } transition-all duration-300`}
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--gold))" />
            <stop offset="100%" stopColor="hsl(var(--gold-light))" />
          </linearGradient>
          <linearGradient id="mysticGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--mystic))" />
            <stop offset="100%" stopColor="hsl(var(--mystic-light))" />
          </linearGradient>
        </defs>
        
        {/* Outer circle */}
        <circle
          cx="100"
          cy="100"
          r="95"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="2"
        />
        
        {/* Inner decorative circles */}
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="url(#mysticGradient)"
          strokeWidth="1.5"
          strokeDasharray="10 5"
        />
        
        <circle
          cx="100"
          cy="100"
          r="60"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="1"
        />
        
        {/* Petals */}
        {[...Array(12)].map((_, i) => (
          <g key={i} transform={`rotate(${i * 30} 100 100)`}>
            <path
              d="M100 20 Q115 60 100 100 Q85 60 100 20"
              fill="url(#goldGradient)"
              opacity="0.3"
            />
            <path
              d="M100 40 Q110 70 100 100 Q90 70 100 40"
              fill="url(#mysticGradient)"
              opacity="0.5"
            />
          </g>
        ))}
        
        {/* Center */}
        <circle
          cx="100"
          cy="100"
          r="15"
          fill="url(#goldGradient)"
        />
        <circle
          cx="100"
          cy="100"
          r="8"
          fill="url(#mysticGradient)"
        />
        
        {/* Zodiac symbols positions */}
        {[...Array(12)].map((_, i) => (
          <circle
            key={`dot-${i}`}
            cx={100 + 70 * Math.cos((i * 30 - 90) * Math.PI / 180)}
            cy={100 + 70 * Math.sin((i * 30 - 90) * Math.PI / 180)}
            r="4"
            fill="url(#goldGradient)"
          />
        ))}
      </svg>
    </div>
  );
};

export default Mandala;
