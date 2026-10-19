"use client";

import { useEffect, useRef, useState } from "react";
import { Music2, Pause, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.35;

    return () => {
      audio.pause();
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }

      setShowLabel(true);

      setTimeout(() => {
        setShowLabel(false);
      }, 2500);

    } catch (error) {
      console.error(
        "Unable to play wedding music:",
        error
      );
    }
  };

  return (
    <>
      {/* Audio */}

      <audio
        ref={audioRef}
        src="/music/wedding.mp3"
        preload="metadata"
      />

      {/* Floating player */}

      <div className="fixed bottom-6 right-6 z-[80]">

        <AnimatePresence>

          {showLabel && (
            <motion.div
              initial={{
                opacity: 0,
                x: 20,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                x: 20,
                scale: 0.9,
              }}
              className="absolute bottom-16 right-0 whitespace-nowrap rounded-full border border-[#c8a45d]/30 bg-[#3b2925]/95 px-4 py-2 text-xs text-[#f8f3ea] shadow-xl backdrop-blur-md"
            >
              {isPlaying
                ? "♪ Our wedding song"
                : "Music paused"}
            </motion.div>
          )}

        </AnimatePresence>

        {/* Player button */}

        <motion.button
          type="button"
          onClick={toggleMusic}
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.92,
          }}
          className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#c8a45d]/60 bg-[#722536] text-[#f8f3ea] shadow-xl shadow-[#3b2925]/20"
          aria-label={
            isPlaying
              ? "Pause wedding music"
              : "Play wedding music"
          }
        >

          {/* Rotating ring */}

          <motion.span
            animate={
              isPlaying
                ? {
                    rotate: 360,
                  }
                : {
                    rotate: 0,
                  }
            }
            transition={
              isPlaying
                ? {
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }
                : {
                    duration: 0.3,
                  }
            }
            className="absolute inset-1 rounded-full border border-dashed border-[#d9bd80]/50"
          />

          {/* Icon */}

          <AnimatePresence mode="wait">

            {isPlaying ? (
              <motion.div
                key="pause"
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.7,
                }}
              >
                <Pause size={19} />
              </motion.div>
            ) : (
              <motion.div
                key="play"
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.7,
                }}
              >
                <Play
                  size={19}
                  className="ml-0.5"
                />
              </motion.div>
            )}

          </AnimatePresence>

        </motion.button>

        {/* Music waves */}

        {isPlaying && (
          <div className="absolute -left-3 bottom-3 flex items-end gap-[2px]">

            {[1, 2, 3, 4].map((bar) => (
              <motion.span
                key={bar}
                animate={{
                  height: [4, 12, 6, 14, 4],
                }}
                transition={{
                  duration: 0.8,
                  delay: bar * 0.1,
                  repeat: Infinity,
                }}
                className="w-[2px] rounded-full bg-[#c8a45d]"
              />
            ))}

          </div>
        )}

      </div>
    </>
  );
}