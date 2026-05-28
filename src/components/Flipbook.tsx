import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

interface FlipbookImage {
  name: string;
  url: string;
}

interface FlipbookProps {
  images: FlipbookImage[];
}

/**
 * A highly immersive 3D BookFlip component that simulates physical page-turning.
 */
export const Flipbook: React.FC<FlipbookProps> = ({ images }) => {
  // Sort images alphabetically by filename to maintain clinical sequence
  const sortedImages = useMemo(() => {
    return [...images].sort((a, b) => a.name.localeCompare(b.name));
  }, [images]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Realistic Book-Flip Animation Variants
  const bookFlipVariants: Variants = {
    initial: (direction: number) => ({
      rotateY: direction > 0 ? -120 : 120, // Extreme angle for peeling start
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.9,
      transformOrigin: "left center",
    }),
    animate: {
      rotateY: 0,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for physical weight
      },
    },
    exit: (direction: number) => ({
      rotateY: direction < 0 ? -120 : 120,
      x: direction < 0 ? 200 : -200,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.7,
        ease: "easeIn",
      },
    }),
  };

  const turnPage = (newDirection: number) => {
    const nextIndex = currentIndex + newDirection;
    if (nextIndex >= 0 && nextIndex < sortedImages.length) {
      setDirection(newDirection);
      setCurrentIndex(nextIndex);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col items-center">
      {/* 3D Book Stage */}
      <div className="relative w-full aspect-[3/4.5] perspective-3000 group">
        
        {/* Book Spine Decoration */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-zinc-950/80 z-20 rounded-l-lg border-r border-cyan-500/20 shadow-[10px_0_15px_rgba(0,0,0,0.5)]" />
        
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={bookFlipVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 w-full h-full bg-zinc-900 rounded-r-2xl overflow-hidden preserve-3d shadow-[25px_25px_50px_rgba(0,0,0,0.7)]"
            style={{ 
              boxShadow: "inset -15px 0 40px rgba(0,0,0,0.6), 15px 15px 40px rgba(0,0,0,0.8)"
            }}
          >
            {/* Realistic Page Shadow Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none" 
            />

            {/* Content Container */}
            <div className="w-full h-full relative p-1 bg-white/5 pl-8">
              <img
                src={sortedImages[currentIndex].url}
                alt={sortedImages[currentIndex].name}
                className="w-full h-full object-cover rounded-sm"
                loading="eager"
              />
              
              {/* Paper Texture Overlay */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-[0.03] pointer-events-none" />
            </div>

            {/* Corner Badge */}
            <div className="absolute bottom-6 right-6 bg-cyan-500/10 backdrop-blur-xl px-4 py-1.5 rounded-full border border-cyan-500/30">
              <span className="text-[10px] font-serif text-cyan-400 font-bold uppercase tracking-widest">
                Page {currentIndex + 1}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Ambient Glow */}
        <div className="absolute -inset-4 bg-cyan-500/5 blur-[40px] pointer-events-none -z-10" />
      </div>

      {/* Navigation & Controls */}
      <div className="mt-12 flex flex-col items-center gap-8 w-full">
        <div className="flex items-center justify-between w-full max-w-sm px-6">
          <button
            onClick={() => turnPage(-1)}
            disabled={currentIndex === 0}
            className={`group p-5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 transition-all active:scale-90
              ${currentIndex === 0 ? 'opacity-10 cursor-not-allowed' : 'hover:bg-cyan-500/20 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]'}`}
          >
            <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
          </button>

          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-2">
              {sortedImages.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 transition-all duration-500 rounded-full 
                    ${i === currentIndex ? 'w-10 bg-cyan-400 shadow-[0_0_12px_rgba(0,255,255,0.8)]' : 'w-1.5 bg-zinc-800'}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <BookOpen size={14} className="text-cyan-600" />
              <span className="text-[11px] text-zinc-500 uppercase font-serif tracking-[0.3em]">
                {currentIndex + 1} of {sortedImages.length} Sections
              </span>
            </div>
          </div>

          <button
            onClick={() => turnPage(1)}
            disabled={currentIndex === sortedImages.length - 1}
            className={`group p-5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 transition-all active:scale-90
              ${currentIndex === sortedImages.length - 1 ? 'opacity-10 cursor-not-allowed' : 'hover:bg-cyan-500/20 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]'}`}
          >
            <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Feature Tagline */}
        <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-2xl flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs text-zinc-400 font-serif italic tracking-wider">
            Enhanced 3D Medical Protocol Interaction
          </span>
        </div>
      </div>
    </div>
  );
};