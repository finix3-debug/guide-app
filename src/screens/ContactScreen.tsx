import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, Info, FileText, Download } from "lucide-react";
import { Flipbook } from "../components/Flipbook";

// رابط ملف الـ PDF الخاص بالاتصال
const CONTACT_PDF_URL = "https://storage.googleapis.com/dala-prod-public-storage/attachments/d72d17ec-a3be-4e7e-bcca-533f54043adf/1779960426717_guide_pratique.pdf";

// هنا نضع صور صفحات Contact - يمكنك تغيير الروابط لاحقاً
const CONTACT_PAGES = [
  { name: "contact_01.webp", url: "https://via.placeholder.com/600x800" },
  { name: "contact_02.webp", url: "https://via.placeholder.com/600x800" },
];

const ContactScreen = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      className="relative w-full min-h-screen bg-black flex flex-col overflow-hidden"
    >
      {/* Header */}
      <div className="pt-16 px-8 pb-8 flex items-center justify-between z-20 border-b border-white/5 bg-black/50 backdrop-blur-xl shadow-2xl">
        <button 
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group"
        >
          <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xl font-serif font-medium uppercase tracking-tighter">Main</span>
        </button>

        <div className="flex items-center gap-3">
          <Info className="text-cyan-500 w-6 h-6" />
          <h2 className="text-2xl font-serif font-bold text-white tracking-widest uppercase">
            Contact
          </h2>
        </div>
      </div>

      {/* BookFlip Content - هذا الجزء هو المسؤول عن الـ Flipbook */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 relative z-10 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="w-full max-w-lg mb-10">
          <Flipbook images={CONTACT_PAGES} />
        </div>

        {/* PDF Link */}
        <motion.a
          href={CONTACT_PDF_URL}
          target="_blank"
          className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 transition-all"
        >
          <FileText size={20} />
          <span className="font-serif font-medium text-lg">Consulter Infos & Contact PDF</span>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ContactScreen;
