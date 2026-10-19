"use client";

import { motion } from "framer-motion";

type FloatingPetalsProps = {
  count?: number;
  className?: string;
};

const petals = [
  { left: "5%", delay: 0, duration: 9, size: 12, rotate: 25 },
  { left: "14%", delay: 2, duration: 11, size: 9, rotate: -20 },
  { left: "25%", delay: 4, duration: 10, size: 13, rotate: 45 },
  { left: "37%", delay: 1, duration: 12, size: 8, rotate: -35 },
  { left: "48%", delay: 5, duration: 9, size: 11, rotate: 30 },
  { left: "59%", delay: 3, duration: 11, size: 10, rotate: -25 },
  { left: "70%", delay: 6, duration: 10, size: 13, rotate: 40 },
  { left: "82%", delay: 2, duration: 12, size: 9, rotate: -30 },
  { left: "93%", delay: 4, duration: 9, size: 11, rotate: 20 },
  { left: "30%", delay: 7, duration: 13, size: 8, rotate: -45 },
  { left: "75%", delay: 8, duration: 11, size: 10, rotate: 35 },
  { left: "90%", delay: 1, duration: 13, size: 12, rotate: -20 },
];

export default function FloatingPetals({
  count = 9,
  className = "",
}: FloatingPetalsProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-10 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {petals.slice(0, count).map((petal, index) => (
        <motion.span
          key={index}
          className="absolute top-[-30px] block rounded-[100%_0_100%_0] bg-[#E8B7A5]/60"
          style={{
            left: petal.left,
            width: petal.size,
            height: petal.size * 0.65,
          }}
          initial={{
            y: -30,
            x: 0,
            rotate: petal.rotate,
            opacity: 0,
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, 25, -20, 30, -10],
            rotate: [
              petal.rotate,
              petal.rotate + 120,
              petal.rotate + 240,
              petal.rotate + 360,
            ],
            opacity: [0, 0.7, 0.65, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}