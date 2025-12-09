import React, { useState } from 'react';
import { QuizQuestion } from '../types';

const questions: QuizQuestion[] = [
  {
    id: 1,
    image: 'https://picsum.photos/400/300?random=1', // Placeholder for concept
    text: "Bu videoda ünlü bir kişi hiç söylemediği şeyleri söylüyor gibi görünüyor. Sence bu nedir?",
    options: [
      { id: 'a', text: 'Bu kesinlikle gerçektir.', isCorrect: false },
      { id: 'b', text: 'Bu bir Deepfake (Sahte) videodur.', isCorrect: true },
      { id: 'c', text: 'Kamera bozulmuştur.', isCorrect: false }
    ],
    explanation: "Deepfake teknolojisi, insanların yüzünü veya sesini taklit ederek onlara söylemedikleri şeyleri söyletmek için kullanılır. Bu etik değildir!"
  },
  {
    id: 2,
    image: 'https://picsum.photos/400/300?random=2',
    text: "Sosyal medyada gördüğün şok edici bir haberin kaynağı belli değil. Ne yapmalısın?",
    options: [
      { id: 'a', text: 'Hemen arkadaşlarımla paylaşırım.', isCorrect: false },
      { id: 'b', text: 'Doğruluğunu güvenilir kaynaklardan araştırırım (Mavi Renk).', isCorrect: true },
      { id: 'c', text: 'Görmezden gelirim.', isCorrect: false }
    ],
    explanation: "İnternetteki her bilgi doğru değildir. Mavi renk bize araştırmayı ve doğruluğu hatırlatır. Paylaşmadan önce mutlaka teyit et!"
  }
];

const RealVsFake: React.FC = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelect = (id: string) => {
    if (showResult) return;
    setSelected(id);
    setShowResult(true);
    const correct = questions[currentQ].options.find(o => o.id === id)?.isCorrect;
    if (correct) setScore(s => s + 10);
  };

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      alert(`Tebrikler! Toplam Puanın: ${score}`);
      setCurrentQ(0);
      setSelected(null);
      setShowResult(false);
      setScore(0);
    }
  };

  const question = questions[currentQ];

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-red-600 mb-6 flex items-center gap-3">
        <span className="p-2 bg-red-100 rounded-lg">🕵️‍♂️</span> Gerçek mi Sahte mi?
      </h2>
      
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-red-50">
        <div className="bg-red-500 h-2" style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}></div>
        
        <div className="p-8">
          <div className="mb-6 relative group">
             <img src={question.image} alt="Quiz visual" className="w-full h-64 object-cover rounded-2xl mb-4 group-hover:opacity-90 transition-opacity" />
             <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm">
               Soru {currentQ + 1}/{questions.length}
             </div>
          </div>
          
          <h3 className="text-xl font-bold text-gray-800 mb-6">{question.text}</h3>

          <div className="space-y-3">
            {question.options.map(opt => {
              let btnClass = "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 font-medium ";
              if (showResult) {
                if (opt.isCorrect) btnClass += "border-green-500 bg-green-50 text-green-700";
                else if (selected === opt.id) btnClass += "border-red-500 bg-red-50 text-red-700";
                else btnClass += "border-gray-200 opacity-50";
              } else {
                btnClass += "border-gray-200 hover:border-red-300 hover:bg-red-50";
              }

              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelect(opt.id)}
                  className={btnClass}
                >
                  {opt.text}
                  {showResult && opt.isCorrect && <span className="float-right">✅</span>}
                  {showResult && !opt.isCorrect && selected === opt.id && <span className="float-right">❌</span>}
                </button>
              );
            })}
          </div>

          {showResult && (
            <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100 animate-fade-in">
              <h4 className="font-bold text-blue-800 mb-1">💡 Dedektif Notu:</h4>
              <p className="text-blue-700">{question.explanation}</p>
              <button 
                onClick={nextQuestion}
                className="mt-4 bg-red-600 text-white px-6 py-2 rounded-full font-bold hover:bg-red-700 transition-colors w-full md:w-auto"
              >
                Sonraki Soru ➡️
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RealVsFake;