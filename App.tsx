import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './modules/Dashboard';
import RealVsFake from './modules/RealVsFake';
import CultureGuard from './modules/CultureGuard';
import EthicalCreator from './modules/EthicalCreator';
import Academy from './modules/Academy';
import PromptLab from './modules/PromptLab';
import Library from './modules/Library';
import DigitalCitizenship from './modules/DigitalCitizenship';
import { ModuleView } from './types';

function App() {
  const [currentView, setCurrentView] = useState<ModuleView>(ModuleView.DASHBOARD);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderView = () => {
    switch (currentView) {
      case ModuleView.DASHBOARD:
        return <Dashboard setView={setCurrentView} />;
      case ModuleView.PROMPT_LAB:
        return <PromptLab />;
      case ModuleView.REAL_VS_FAKE:
        return <RealVsFake />;
      case ModuleView.CULTURE_GUARD:
        return <CultureGuard />;
      case ModuleView.ETHICAL_CREATOR:
        return <EthicalCreator />;
      case ModuleView.AI_ACADEMY:
        return <Academy />;
      case ModuleView.LIBRARY:
        return <Library />;
      case ModuleView.DIGITAL_CITIZEN:
        return <DigitalCitizenship />;
      default:
        return <Dashboard setView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f9ff] flex">
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden fixed top-4 right-4 z-50 bg-white p-2 rounded-lg shadow-lg text-2xl"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? '✕' : '🍔'}
      </button>

      {/* Sidebar - Desktop */}
      <Sidebar currentView={currentView} setView={setCurrentView} />

      {/* Sidebar - Mobile Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setMobileMenuOpen(false)}>
           <div className="w-64 h-full bg-white shadow-xl" onClick={e => e.stopPropagation()}>
             <Sidebar currentView={currentView} setView={(v) => { setCurrentView(v); setMobileMenuOpen(false); }} />
           </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 p-4 md:p-8 transition-all duration-300">
        <div className="max-w-7xl mx-auto mt-12 md:mt-0">
          {renderView()}
        </div>
      </main>
    </div>
  );
}

export default App;