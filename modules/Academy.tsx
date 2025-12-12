import React, { useState } from 'react';
import { Lesson } from '../types';

const Academy: React.FC = () => {
  const [activeLesson, setActiveLesson] = useState<number | null>(null);
  const [quizResult, setQuizResult] = useState<string | null>(null);

  const lessons: Lesson[] = [
    {
      id: 1,
      title: "Makine Öğrenimi Nedir?",
      content: "Bebeklerin yürümeyi düşe kalka öğrenmesi gibi, bilgisayarlar da verilerle deneme yanılma yaparak öğrenir. Buna 'Makine Öğrenimi' denir.",
      interactiveQuestion: "Sence bir makineye 'kedi'yi öğretmek için ona tek bir kedi resmi göstermek yeterli midir?",
      interactiveAnswer: false,
      explanation: "Hayır! Binlerce farklı kedi (siyah, beyaz, yavru, uyuyan) göstermelisin ki her türlü kediyi tanıyabilsin.",
      icon: "🤖",
      color: "border-blue-400 bg-blue-50 text-blue-900"
    },
    {
      id: 2,
      title: "Algoritmalar ve Yankı Odaları",
      content: "Algoritmalar, sen neyi seviyorsan sana SADECE onu gösterir. Bu seni bir 'yankı odasına' hapseder ve farklı fikirleri duymanı engeller.",
      interactiveQuestion: "Sürekli aynı tür videoları izlersem, karşıma yeni ve farklı şeyler çıkar mı?",
      interactiveAnswer: false,
      explanation: "Hayır. Algoritma seni mutlu etmek için hep aynısını gösterir. Bu yüzden arada farklı konuları da araştırmalısın!",
      icon: "📢",
      color: "border-purple-400 bg-purple-50 text-purple-900"
    },
    {
      id: 3,
      title: "Veri Mahremiyeti",
      content: "Yapay zeka modelleri eğitilirken internetteki verileri kullanır. Paylaştığın her fotoğraf, yazdığın her yorum bu eğitim setine girebilir.",
      interactiveQuestion: "Özel bir sırrını 'herkese açık' bir YZ sohbet botuna yazmak güvenli midir?",
      interactiveAnswer: false,
      explanation: "Kesinlikle değil! O bilgi sistemin bir parçası olabilir ve başkaları tarafından görülebilir.",
      icon: "🔒",
      color: "border-green-400 bg-green-50 text-green-900"
    },
    {
      id: 4,
      title: "Yaratıcı Yapay Zeka (GenAI)",
      content: "Yapay zeka sadece analiz etmez, artık resim çizebilir, şiir yazabilir. Ama bunu yaparken var olan eserlerden 'esinlenir'.",
      interactiveQuestion: "YZ'nin ürettiği her bilgi %100 doğru mudur?",
      interactiveAnswer: false,
      explanation: "Hayır! YZ bazen 'halüsinasyon' görür yani çok emin bir şekilde yalan uydurabilir. Her zaman kontrol etmelisin (Mavi Teyit!).",
      icon: "🎨",
      color: "border-orange-400 bg-orange-50 text-orange-900"
    },
    {
      id: 5,
      title: "Önyargı (Bias)",
      content: "Eğer YZ'ye sadece erkek doktor resimleri gösterirsen, 'doktor çiz' dediğinde hep erkek çizer. Buna 'Önyargı' denir.",
      interactiveQuestion: "YZ her zaman tarafsız ve adil midir?",
      interactiveAnswer: false,
      explanation: "Hayır, YZ insanlar tarafından eğitilir. Eğer verilerde önyargı varsa, YZ de önyargılı olur.",
      icon: "⚖️",
      color: "border-red-400 bg-red-50 text-red-900"
    },
    {
      id: 6,
      title: "Sinir Ağları",
      content: "YZ'nin beyni, insan beynindeki nöronlar gibi birbirine bağlı katmanlardan oluşur. Buna 'Yapay Sinir Ağı' denir.",
      interactiveQuestion: "YZ insan beyninin aynısı mıdır?",
      interactiveAnswer: false,
      explanation: "Benzese de aynısı değildir. İnsanlar duyguları ve bilinciyle düşünür, YZ ise matematikle hesap yapar.",
      icon: "🧠",
      color: "border-pink-400 bg-pink-50 text-pink-900"
    },
    {
      id: 7,
      title: "Robotik ve YZ",
      content: "Her robot yapay zekaya sahip değildir. Bazıları sadece kurmalı oyuncak gibidir. YZ olan robotlar çevrelerini görüp karar verebilir.",
      interactiveQuestion: "Uzaktan kumandalı araba bir Yapay Zeka mıdır?",
      interactiveAnswer: false,
      explanation: "Hayır, çünkü kararları sen veriyorsun. Kendi kendine giden (otonom) araba YZ'dir.",
      icon: "🦾",
      color: "border-slate-400 bg-slate-50 text-slate-900"
    },
    {
      id: 8,
      title: "Doğal Dil İşleme (NLP)",
      content: "Bilgisayarların insan dilini (Türkçe, İngilizce) anlamasına ve konuşmasına NLP denir. Çeviri programları buna örnektir.",
      interactiveQuestion: "Bilgisayar kelimelerin 'duygusunu' insan gibi hisseder mi?",
      interactiveAnswer: false,
      explanation: "Hayır, sadece kelimeleri istatistiksel olarak yan yana getirir. Üzüntüyü veya neşeyi gerçekten hissetmez.",
      icon: "🗣️",
      color: "border-teal-400 bg-teal-50 text-teal-900"
    },
    {
      id: 9,
      title: "YZ ve Çevre",
      content: "Büyük YZ modellerini eğitmek için devasa bilgisayarlar günlerce çalışır ve çok fazla elektrik harcar.",
      interactiveQuestion: "YZ kullanmanın çevreye bir maliyeti var mıdır?",
      interactiveAnswer: true,
      explanation: "Evet! Veri merkezleri çok enerji tüketir. Bu yüzden YZ'yi gereksiz yere değil, faydalı işler için kullanmalıyız.",
      icon: "🌱",
      color: "border-emerald-400 bg-emerald-50 text-emerald-900"
    },
    {
      id: 10,
      title: "Geleceğin Meslekleri",
      content: "YZ bazı işleri yapabilir ama 'empati', 'liderlik' ve 'yaratıcılık' gerektiren işlerde insana her zaman ihtiyaç vardır.",
      interactiveQuestion: "Gelecekte insanlar hiç çalışmayacak mı?",
      interactiveAnswer: false,
      explanation: "İnsanlar çalışmaya devam edecek ama işlerin şekli değişecek. YZ'yi yöneten ve denetleyen insanlar olacağız.",
      icon: "🚀",
      color: "border-indigo-400 bg-indigo-50 text-indigo-900"
    }
  ];

  const handleAnswer = (lesson: Lesson, answer: boolean) => {
    if (answer === lesson.interactiveAnswer) {
      setQuizResult(`✅ Doğru! ${lesson.explanation}`);
    } else {
      setQuizResult(`❌ Yanlış. ${lesson.explanation}`);
    }
  };

  return (
    <div className="max-w-6xl mx-auto pb-12">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center gap-3">
        <span className="p-2 bg-indigo-100 rounded-lg">🎓</span> YZ Akademisi
      </h2>
      <p className="text-gray-600 mb-8">
        Kartların üzerine tıkla, içindeki bilgiyi öğren ve mini testi çöz! Toplam {lessons.length} ders seni bekliyor.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <div key={lesson.id} className="relative group perspective">
            <div 
              onClick={() => { setActiveLesson(lesson.id); setQuizResult(null); }}
              className={`cursor-pointer p-6 rounded-3xl border-b-8 shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${lesson.color} h-full flex flex-col justify-between min-h-[300px]`}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-4xl bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-inner">{lesson.icon}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider opacity-60 bg-white px-2 py-1 rounded-lg">Ders {lesson.id}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{lesson.title}</h3>
                <p className="font-medium opacity-90 text-sm leading-relaxed">{lesson.content}</p>
              </div>
              
              <div className="mt-4 flex justify-end">
                 <span className="text-xs font-bold bg-white/30 px-3 py-1 rounded-full animate-pulse">Testi Çöz ➡️</span>
              </div>
            </div>

            {/* Modal / Overlay for Active Lesson */}
            {activeLesson === lesson.id && (
              <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={(e) => { e.stopPropagation(); setActiveLesson(null); }}>
                <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl animate-float" onClick={e => e.stopPropagation()}>
                  <div className="text-center mb-6">
                    <span className="text-6xl">{lesson.icon}</span>
                    <h3 className="text-2xl font-bold text-gray-800 mt-4">{lesson.title} - Mini Test</h3>
                  </div>
                  
                  {!quizResult ? (
                    <div className="space-y-6">
                      <p className="text-xl font-medium text-center text-gray-700">{lesson.interactiveQuestion}</p>
                      <div className="grid grid-cols-2 gap-4">
                        <button onClick={() => handleAnswer(lesson, true)} className="bg-green-100 hover:bg-green-200 text-green-800 py-4 rounded-xl font-bold text-lg transition-colors">Evet ✅</button>
                        <button onClick={() => handleAnswer(lesson, false)} className="bg-red-100 hover:bg-red-200 text-red-800 py-4 rounded-xl font-bold text-lg transition-colors">Hayır ❌</button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center space-y-4">
                      <div className={`p-4 rounded-xl text-lg font-medium ${quizResult.startsWith('✅') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {quizResult}
                      </div>
                      <button onClick={() => setActiveLesson(null)} className="bg-gray-800 text-white px-8 py-3 rounded-full font-bold hover:bg-gray-700">
                        Kapat ve Devam Et
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Academy;