import React from 'react';
import { ModuleView } from '../types';

interface SidebarProps {
  currentView: ModuleView;
  setView: (view: ModuleView) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setView }) => {
  const menuItems = [
    { id: ModuleView.DASHBOARD, label: 'Ana Sayfa', icon: '🏠', color: 'bg-indigo-500' },
    { id: ModuleView.PROMPT_LAB, label: 'Kelime Sihirbazı', icon: '✨', color: 'bg-pink-500' },
    { id: ModuleView.AI_ACADEMY, label: 'YZ Akademisi', icon: '🎓', color: 'bg-purple-500' },
    { id: ModuleView.LIBRARY, label: 'Kütüphane', icon: '📚', color: 'bg-emerald-500' },
    { id: ModuleView.ETHICAL_CREATOR, label: 'Etik Üretici', icon: '🎨', color: 'bg-green-500' },
    { id: ModuleView.REAL_VS_FAKE, label: 'Gerçeklik Dedektifi', icon: '🕵️‍♂️', color: 'bg-red-500' },
    { id: ModuleView.CULTURE_GUARD, label: 'Kültür Koruyucusu', icon: '🛡️', color: 'bg-orange-500' },
    { id: ModuleView.DIGITAL_CITIZEN, label: 'Dijital Vatandaş', icon: '🌍', color: 'bg-blue-500' },
  ];

  return (
    <div className="w-64 bg-white h-screen shadow-lg fixed left-0 top-0 flex flex-col z-10 hidden md:flex">
      <div className="p-6 border-b border-gray-100 bg-indigo-50">
        <h1 className="text-2xl font-bold text-indigo-900 flex items-center gap-2">
          <span className="text-3xl">🧬</span> KültürSense
        </h1>
        <p className="text-xs text-indigo-500 mt-2 font-medium">Geleceğin Yetkinlikleri</p>
      </div>
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setView(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              currentView === item.id
                ? `${item.color} text-white shadow-md transform scale-105`
                : 'text-gray-600 hover:bg-gray-100 hover:pl-6'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
      
      {/* Renk Lejandı */}
      <div className="p-4 bg-gray-50 m-4 rounded-xl border border-gray-100">
        <h3 className="text-xs font-bold text-gray-400 uppercase mb-2">Sense Durumu</h3>
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-500"></div> Bilgi</div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-green-500"></div> Etik</div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-pink-500"></div> Dil & İfade</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;