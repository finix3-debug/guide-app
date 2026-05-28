import React, { useState, forwardRef, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, UserRoundCog, Loader2, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';
// @ts-ignore - Missing type declarations for react-pageflip
import HTMLFlipBook from 'react-pageflip';

// Image sources organized by "page name"
const guidePages = [
  { name: 'Page 1', url: 'https://i.ibb.co/HDn57L25/img-1.png' },
  { name: 'Page 2', url: 'https://i.ibb.co/N28R0V8f/img-2.png' },
  { name: 'Page 3', url: 'https://i.ibb.co/nsx5J2kQ/img-3.png' },
  { name: 'Page 4', url: 'https://i.ibb.co/nNqtXKnS/img-4.png' },
  { name: 'Page 5', url: 'https://i.ibb.co/tMNHxCmm/img-5.png' },
  { name: 'Page 6', url: 'https://i.ibb.co/x85VJFPb/img-6.png' },
  { name: 'Page 7', url: 'https://i.ibb.co/MxHJLxj6/img-7.png' },
  { name: 'Page 8', url: 'https://i.ibb.co/spM6R7h9/img-8.png' },
  { name: 'Page 9', url: 'https://i.ibb.co/qLJBZS0B/img-09.png' },
  { name: 'Page 10', url: 'https://i.ibb.co/5gpXsmvH/img-10.png' },
  { name: 'Page 10', url: 'https://i.ibb.co/h1c6TJtp/img-11.png' },
  { name: 'Page 11', url: 'https://i.ibb.co/GZBGfBt/img-12.png' }
];

const FlipPage = forwardRef<HTMLDivElement, { url: string; width: number; height: number }>((props, ref) => {
  return (
    <div className="bg-white shadow-2xl relative overflow-hidden" ref={ref}>
      <img 
        src={props.url} 
        alt="Guide Page"
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  );
});

const GuideScreen = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [containerWidth, setContainerWidth] = useState(400);
  const flipbookRef = useRef<any>(null);

  // Responsive width calculation
  useEffect(() => {
    const updateWidth = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      if (isFullscreen) {
        const targetWidth = Math.min(width - 40, (height - 100) / 1.41);
        setContainerWidth(Math.floor(targetWidth));
      } else {
        if (width < 640) {
          setContainerWidth(width - 60);
        } else {
          setContainerWidth(450);
        }
      }
    };
    
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [isFullscreen]);

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      className={`relative w-full h-full bg-black flex flex-col ${isFullscreen ? 'p-0' : 'pt-16'}`}
    >
      <AnimatePresence>
        {!isFullscreen && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="px-8 flex flex-col gap-6"
          >
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors w-fit group"
            >
              <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
              <span className="text-xl font-serif font-medium">Retour</span>
            </button>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <UserRoundCog className="w-8 h-8 text-cyan-500 opacity-80" />
                <h2 className="text-3xl font-serif font-bold text-white tracking-wider">
                  Le Rôle du Manipulateur Dans la Prise en Charge Des Patients Au Cours de L’Angioscanner Thoracique  
                </h2>
              </div>
              <button 
                onClick={() => setIsFullscreen(true)}
                className="p-2 bg-zinc-800 rounded-full text-cyan-400 hover:bg-zinc-700 transition-all shadow-lg border border-cyan-500/20"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {isFullscreen && (
        <button 
          onClick={() => setIsFullscreen(false)}
          className="absolute top-6 right-6 z-50 p-3 bg-black/60 backdrop-blur-md rounded-full text-white hover:bg-black/80 transition-all border border-white/10 shadow-2xl"
        >
          <Minimize2 className="w-6 h-6" />
        </button>
      )}

      {/* Flipbook Container */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 min-h-0">
        <div className="relative w-full flex flex-col items-center justify-center">
          <HTMLFlipBook
            width={containerWidth}
            height={Math.round(containerWidth * 1.41)}
            size="stretch"
            minWidth={300}
            maxWidth={isFullscreen ? 800 : 500}
            minHeight={420}
            maxHeight={isFullscreen ? 1100 : 700}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            onFlip={(e: any) => setCurrentPage(e.data)}
            className="shadow-[0_40px_80px_-15px_rgba(0,0,0,0.9)]"
            ref={flipbookRef}
            startPage={0}
            drawShadow={true}
            flippingTime={1000}
            usePortrait={true}
            autoSize={true}
            clickEventForward={true}
            useMouseEvents={true}
            swipeDistance={30}
            showPageCorners={true}
            disableFlipByClick={false}
            style={{}}
            startZIndex={0}
          >
            {guidePages.map((page, index) => (
              <FlipPage 
                key={`page_${index + 1}`} 
                url={page.url}
                width={containerWidth}
                height={Math.round(containerWidth * 1.41)}
              />
            ))}
          </HTMLFlipBook>

          {/* Flipbook Controls */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mt-10 flex items-center gap-8 bg-zinc-900/90 backdrop-blur-xl px-8 py-4 rounded-full border border-white/10 shadow-2xl"
          >
            <button 
              onClick={() => flipbookRef.current?.pageFlip()?.flipPrev()}
              disabled={currentPage === 0}
              className={`p-2 transition-all ${currentPage === 0 ? 'text-zinc-600' : 'text-cyan-400 hover:text-white hover:scale-110'}`}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <div className="flex flex-col items-center min-w-[80px]">
              <span className="text-white/40 font-serif text-[10px] tracking-[0.3em] uppercase mb-1">Page</span>
              <span className="text-cyan-400 font-serif font-bold text-xl tabular-nums">
                {currentPage + 1} <span className="text-white/20 mx-1">/</span> {guidePages.length}
              </span>
            </div>

            <button 
              onClick={() => flipbookRef.current?.pageFlip()?.flipNext()}
              disabled={currentPage >= guidePages.length - 1}
              className={`p-2 transition-all ${currentPage >= guidePages.length - 1 ? 'text-zinc-600' : 'text-cyan-400 hover:text-white hover:scale-110'}`}
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </motion.div>
        </div>
      </div>

      {!isFullscreen && (
        <div className="bg-black py-6 px-8 text-center border-t border-white/5 mt-auto">
          <p className="text-white/20 text-[9px] font-serif uppercase tracking-[0.6em]">
            Z.Rania MIMSP-Saida / 2026 
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default GuideScreen;
