import React from 'react';
import { ModuleView } from '../types';

interface DashboardProps {
  setView: (view: ModuleView) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ setView }) => {
  
  const categories = [
    {
      title: "Dil & İletişim",
      items: [
        { title: "Doğru İstem (Prompt)", icon: "✨", desc: "YZ ile doğru konuşma sanatı", view: ModuleView.PROMPT_LAB, color: "bg-pink-100 border-pink-300 text-pink-800" },
        { title: "Kelime Hazinesi", icon: "📖", desc: "Güçlü kelimeler, güçlü zeka", view: ModuleView.PROMPT_LAB, color: "bg-purple-100 border-purple-300 text-purple-800" },
        { title: "Sanal Kütüphane", icon: "📚", desc: "Geleceğin okuma listesi", view: ModuleView.LIBRARY, color: "bg-indigo-100 border-indigo-300 text-indigo-800" },
        { title: "Haber Doğrulama", icon: "📰", desc: "Bilgi kirliliğini temizle", view: ModuleView.REAL_VS_FAKE, color: "bg-blue-100 border-blue-300 text-blue-800" },
      ]
    },
    {
      title: "Etik & Güvenlik",
      items: [
        { title: "Deepfake Dedektifi", icon: "🕵️‍♂️", desc: "Sahte videoları yakala", view: ModuleView.REAL_VS_FAKE, color: "bg-red-100 border-red-300 text-red-800" },
        { title: "Gizlilik Kalkanı", icon: "🔐", desc: "Verilerini korumayı öğren", view: ModuleView.DIGITAL_CITIZEN, color: "bg-slate-100 border-slate-300 text-slate-800" },
        { title: "Etik Sanatçı", icon: "🎨", desc: "Sorumlu üretim atölyesi", view: ModuleView.ETHICAL_CREATOR, color: "bg-green-100 border-green-300 text-green-800" },
        { title: "Dijital Denge", icon: "🧘", desc: "Ekran süresi ve sağlık", view: ModuleView.DIGITAL_CITIZEN, color: "bg-teal-100 border-teal-300 text-teal-800" },
      ]
    },
    {
      title: "Kültür & Teknoloji",
      items: [
        { title: "Kültür Koruyucusu", icon: "🛡️", desc: "Değerlerimizi YZ'ye öğret", view: ModuleView.CULTURE_GUARD, color: "bg-orange-100 border-orange-300 text-orange-800" },
        { title: "Tarih Gezgini", icon: "⏳", desc: "Geçmişi doğru anla", view: ModuleView.CULTURE_GUARD, color: "bg-amber-100 border-amber-300 text-amber-800" },
        { title: "YZ Akademisi", icon: "🧠", desc: "Teknolojinin alfabesi", view: ModuleView.AI_ACADEMY, color: "bg-cyan-100 border-cyan-300 text-cyan-800" },
        { title: "Algoritma Mantığı", icon: "⚙️", desc: "Sistem nasıl düşünüyor?", view: ModuleView.DIGITAL_CITIZEN, color: "bg-gray-100 border-gray-300 text-gray-800" },
      ]
    }
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden group">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">KültürSense Dünyasına Hoş Geldin! 🚀</h1>
          <p className="text-indigo-100 text-lg md:text-xl max-w-2xl leading-relaxed">
            Burada sadece teknolojiyi kullanmayı değil, onu **anlamayı**, **yönetmeyi** ve **kültürümüzle harmanlamayı** öğreniyoruz. 
            12 farklı görev seni bekliyor. Hazır mısın?
          </p>
          <div className="mt-8 flex gap-4">
             <button onClick={() => setView(ModuleView.PROMPT_LAB)} className="bg-white text-indigo-600 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105">
               ✨ Kelime Sihrine Başla
             </button>
             <button onClick={() => setView(ModuleView.LIBRARY)} className="bg-indigo-500 border-2 border-white/30 text-white px-6 py-3 rounded-full font-bold hover:bg-indigo-400 transition-colors">
               📚 Kütüphaneye Git
             </button>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 h-64 w-64 bg-white/10 rounded-full blur-3xl -mr-16 -mb-16"></div>
        <div className="absolute top-10 right-10 text-9xl opacity-20 animate-float">🧩</div>
      </div>

      {/* Grid Layout - 12 Items */}
      <div className="space-y-8">
        {categories.map((cat, idx) => (
          <div key={idx}>
            <h2 className="text-xl font-bold text-gray-700 mb-4 ml-2 flex items-center gap-2">
              <span className="w-2 h-8 bg-indigo-500 rounded-full inline-block"></span>
              {cat.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {cat.items.map((item, itemIdx) => (
                <div 
                  key={itemIdx}
                  onClick={() => setView(item.view)}
                  className={`p-6 rounded-2xl border-2 ${item.color} cursor-pointer hover:-translate-y-2 hover:shadow-lg transition-all duration-300 group`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                    <span className="bg-white/50 p-1 rounded-full text-xs font-bold px-2">Görev #{idx * 4 + itemIdx + 1}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm opacity-80 font-medium leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;