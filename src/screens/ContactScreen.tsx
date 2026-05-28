import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, Info, FileText, Download } from "lucide-react";
import { Flipbook } from "../components/Flipbook";

const GUIDE_PDF_URL = "https://storage.googleapis.com/dala-prod-public-storage/attachments/d72d17ec-a3be-4e7e-bcca-533f54043adf/1779960426717_guide_pratique.pdf";

const CONTACT_PAGES = [
  { name: "page_01_intro.webp", url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4998d01f-62b9-49ee-a51e-5bdd22d50976/guide-a-intro-eb36b9c5-1779956718090.webp" },
  { name: "page_02_prep.webp", url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4998d01f-62b9-49ee-a51e-5bdd22d50976/guide-b-prep-a3ef3fec-1779956717944.webp" },
  { name: "page_03_contrast.webp", url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4998d01f-62b9-49ee-a51e-5bdd22d50976/guide-c-contrast-073838c1-1779956718206.webp" },
  { name: "page_04_acquisition.webp", url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4998d01f-62b9-49ee-a51e-5bdd22d50976/guide-d-acquisition-562728da-1779956718608.webp" },
  { name: "page_05_reconstruct.webp", url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4998d01f-62b9-49ee-a51e-5bdd22d50976/guide-e-reconstruction-13149a2e-1779956718818.webp" },
  { name: "page_06_anatomy.webp", url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4998d01f-62b9-49ee-a51e-5bdd22d50976/guide-f-anatomy-851d28f7-1779956719230.webp" },
  { name: "page_07_pathology.webp", url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4998d01f-62b9-49ee-a51e-5bdd22d50976/guide-g-pathology-5b79830f-1779956717957.webp" },
  { name: "page_08_postprocessing.webp", url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4998d01f-62b9-49ee-a51e-5bdd22d50976/guide-h-postprocessing-b2e45707-1779956718075.webp" },
  { name: "page_09_reporting.webp", url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4998d01f-62b9-49ee-a51e-5bdd22d50976/guide-i-reporting-735fa77b-1779956720951.webp" },
  { name: "page_10_radiation.webp", url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4998d01f-62b9-49ee-a51e-5bdd22d50976/guide-j-radiation-5f566d31-1779956720806.webp" },
  { name: "page_11_emergency.webp", url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4998d01f-62b9-49ee-a51e-5bdd22d50976/guide-k-emergency-294cce36-1779956721140.webp" },
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
      {/* Dynamic Header */}
      <div className="pt-16 px-8 pb-8 flex items-center justify-between z-20 border-b border-white/5 bg-black/50 backdrop-blur-xl shadow-2xl">
        <button 
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group"
        >
          <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xl font-serif font-medium uppercase tracking-tighter">Main</span>
        </button>

        <div className="flex flex-col items-end">
          <div className="flex items-center gap-3">
            <Info className="text-cyan-500 w-6 h-6" />
            <h2 className="text-2xl font-serif font-bold text-white tracking-widest uppercase">
              Contact
            </h2>
          </div>
        </div>
      </div>

      {/* BookFlip Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 relative z-10 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="w-full max-w-lg mb-10">
          <Flipbook images={CONTACT_PAGES} />
        </div>

        {/* PDF Link Access */}
        <div className="flex flex-col items-center gap-4">
          <motion.a
            href={GUIDE_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(6, 182, 212, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 transition-all shadow-[0_0_30px_rgba(6,182,212,0.15)]"
          >
            <FileText size={20} />
            <span className="font-serif font-medium text-lg">Consulter Infos & Contact PDF</span>
            <Download size={16} className="opacity-60 ml-2" />
          </motion.a>
        </div>
      </div>

      {/* Background Decorative Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-cyan-500/5 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
    </motion.div>
  );
};

export default ContactScreen;
