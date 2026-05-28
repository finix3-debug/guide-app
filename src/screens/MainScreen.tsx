import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Heart, Syringe } from "lucide-react";
import { GlassButton } from "../components/GlassButton";
import { MedicalHeader } from "../components/MedicalHeader";

const MainScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-hidden bg-black">
      {/* Full-screen Medical Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{ 
          backgroundImage: `url('https://storage.googleapis.com/dala-prod-public-storage/attachments/d72d17ec-a3be-4e7e-bcca-533f54043adf/1779956183258_bg_main.png')`,
        }}
      />
      
      {/* Overlay for better readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

      {/* Content Area */}
      <div className="relative z-20 flex flex-col h-full flex-1">
        <MedicalHeader />

        <div className="flex-1 flex flex-col items-center justify-center px-6 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full flex flex-col items-center gap-6"
          >
            <GlassButton onClick={() => navigate("/guide")}>
              <BookOpen size={20} className="text-cyan-300" />
              <span>Guide Pratique</span>
            </GlassButton>

            <GlassButton onClick={() => navigate("/protocoles")}>
              <Heart size={41} className="text-cyan-300" />
              <span>Anatomie Cardio Vasculaire & L'Angioscanner thoracique</span>
            </GlassButton>

            <GlassButton onClick={() => navigate("/contact")}>
              <Syringe size={41} className="text-cyan-300" />
              <span>L’injecteur automatique          & Produit de contraste</span>
            </GlassButton>
          </motion.div>
        </div>

        {/* Subtle Bottom Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-cyan-500/10 blur-[100px] pointer-events-none" />
      </div>
    </div>
  );
};

export default MainScreen;
