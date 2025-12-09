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
      content: "Sosyal medya algoritmaları, sen neyi seviyorsan sana SADECE onu gösterir. Bu seni bir 'yankı odasına' hapseder ve farklı fikirleri duymanı engeller.",
      interactiveQuestion: "Sürekli sadece kendi takımının videolarını izlersen algoritma sana rakip takımın videolarını önerir mi?",
      interactiveAnswer: false,
      explanation: "Genellikle hayır. Algoritma senin o takımı sevdiğini düşünür ve seni mutlu etmek için hep aynısını gösterir. Bu yüzden farklı şeyler aratmak önemlidir!",
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
    <div className="max-w-5xl mx-auto pb-12">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center gap-3">
        <span className="p-2 bg-indigo-100 rounded-lg">🎓</span> YZ Akademisi
      </h2>
      <p className="text-gray-600 mb-8">
        Kartların üzerine tıkla, içindeki bilgiyi öğren ve mini testi çöz!
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        {lessons.map((lesson) => (
          <div key={lesson.id} className="relative group perspective">
            <div 
              onClick={() => { setActiveLesson(lesson.id); setQuizResult(null); }}
              className={`cursor-pointer p-6 rounded-3xl border-b-8 shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${lesson.color} h-full flex flex-col justify-between`}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-5xl bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-inner">{lesson.icon}</span>
                  <span className="text-xs font-bold uppercase tracking-wider opacity-60 bg-white px-2 py-1 rounded-lg">Ders {lesson.id}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{lesson.title}</h3>
                <p className="font-medium opacity-90 leading-relaxed text-lg">{lesson.content}</p>
              </div>
              
              <div className="mt-6 flex justify-end">
                 <span className="text-sm font-bold bg-white/30 px-4 py-2 rounded-full animate-pulse">🖱️ Testi Çözmek İçin Tıkla</span>
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