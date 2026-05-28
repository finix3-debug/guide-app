import { Activity, ShieldAlert } from "lucide-react";

export const MedicalHeader = () => {
  return (
    <div className="w-full px-4 pt-8 pb-4">
      <div className="bg-cyan-500/30 backdrop-blur-md border border-cyan-400/30 rounded-2xl py-6 px-6 flex items-center justify-between shadow-[0_0_20px_rgba(0,255,255,0.2)]">
        <div className="text-cyan-400">
          <Activity size={28} />
        </div>
        
        <h1 className="text-white font-serif text-2xl font-bold tracking-widest text-center flex-1">
          ANGIOSCANNER
        </h1>

        <div className="text-cyan-400">
          <ShieldAlert size={28} />
        </div>
      </div>
    </div>
  );
};