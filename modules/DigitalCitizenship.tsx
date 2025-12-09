import React, { useState } from 'react';

const DigitalCitizenship: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Gizlilik Kalkanı",
      icon: "🔐",
      color: "bg-slate-100 border-slate-300",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Şifren Ne Kadar Güçlü?</h3>
          <p>Şifrelerini '123456' yaparsan, kapını açık bırakmış olursun. Güçlü bir şifre en az 8 karakterli, büyük harfli ve sembollü olmalıdır.</p>
          <div className="p-4 bg-white rounded-xl border border-gray-200">
            <p className="font-bold mb-2">Sence hangisi daha güvenli?</p>
            <div className="space-y-2">
               <button onClick={() => alert("Çok zayıf! ❌")} className="block w-full text-left p-2 hover:bg-red-50 rounded">A) mehmet1990</button>
               <button onClick={() => alert("Harika! ✅")} className="block w-full text-left p-2 hover:bg-green-50 rounded">B) M3hm@t!99_</button>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Dijital Denge",
      icon: "🧘",
      color: "bg-teal-100 border-teal-300",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Teknoloji Bir Araçtır</h3>
          <p>Tablet ve telefon bizi yönetmemeli, biz onları yönetmeliyiz. Günde kaç saat ekran başındasın?</p>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="p-4 bg-white rounded-xl">
               <div className="text-3xl">📱</div>
               <p className="font-bold text-red-500">Çok Fazla</p>
               <p className="text-xs">Dikkat dağınıklığı yapar.</p>
            </div>
            <div className="p-4 bg-white rounded-xl">
               <div className="text-3xl">⚽</div>
               <p className="font-bold text-green-500">Dengeli</p>
               <p className="text-xs">Oyun, kitap ve spor.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Algoritma Nedir?",
      icon: "⚙️",
      color: "bg-gray-100 border-gray-300",
      content: (
        <div className="space-y-4">
           <h3 className="text-xl font-bold">Seni Takip Eden Gölge</h3>
           <p>Algoritmalar senin neyi sevdiğini izler ve hep benzer şeyler önerir. Buna "Filtre Balonu" denir. Balonunu patlatmak için farklı konuları araştırmalısın!</p>
           <button className="bg-gray-800 text-white px-6 py-2 rounded-full w-full">Balonu Patlat! 🎈📌</button>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 flex items-center gap-3">
        <span className="p-2 bg-blue-100 rounded-lg">🌍</span> Dijital Vatandaşlık
      </h2>

      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`px-6 py-3 rounded-full font-bold whitespace-nowrap transition-all ${
              activeTab === idx 
              ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
              : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            {tab.icon} {tab.title}
          </button>
        ))}
      </div>

      <div className={`p-8 rounded-3xl border-4 ${tabs[activeTab].color} bg-white shadow-xl animate-fade-in`}>
        <div className="flex items-start gap-6">
           <div className="hidden md:block text-8xl opacity-20">{tabs[activeTab].icon}</div>
           <div className="flex-1">
             {tabs[activeTab].content}
           </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalCitizenship;