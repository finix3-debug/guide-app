import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Info } from 'lucide-react';

const ContactScreen = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      className="relative w-full h-full bg-black flex flex-col px-8 pt-16"
    >
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-cyan-400 mb-16 hover:text-cyan-300 transition-colors w-fit group"
      >
        <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
        <span className="text-xl font-serif font-medium">Back</span>
      </button>

      <div className="flex flex-col items-center">
        <Info className="w-12 h-12 text-cyan-500 mb-6 opacity-80" />
        <h2 className="text-3xl font-serif font-bold text-white mb-10 tracking-wider">
          Infos & Contact
        </h2>

        <div className="w-full text-center">
          <p className="text-zinc-300 text-lg font-serif italic">
            Content for Infos & Contact coming soon...
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactScreen;
