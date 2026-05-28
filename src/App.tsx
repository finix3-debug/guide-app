import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "sonner";
import MainScreen from "./screens/MainScreen";
import GuideScreen from "./screens/GuideScreen";
import ProtocolsScreen from "./screens/ProtocolsScreen";
import ContactScreen from "./screens/ContactScreen";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainScreen />} />
        <Route path="/guide" element={<GuideScreen />} />
        <Route path="/protocoles" element={<ProtocolsScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black font-serif antialiased">
        <AnimatedRoutes />
        <Toaster position="top-center" richColors theme="dark" />
      </div>
    </Router>
  );
}

export default App;