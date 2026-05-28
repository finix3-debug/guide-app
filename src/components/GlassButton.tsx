import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassButtonProps {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}

export const GlassButton = ({ children, onClick, className = "" }: GlassButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.25)" }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`w-full max-w-xs py-4 px-6 rounded-xl border border-white/40 
        bg-white/20 backdrop-blur-md text-white font-serif text-lg 
        shadow-[0_0_15px_rgba(0,255,255,0.1)] transition-all duration-300
        flex items-center justify-center gap-3 ${className}`}
    >
      {children}
    </motion.button>
  );
};