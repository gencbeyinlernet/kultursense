import React, { useState } from 'react';

interface PromptScenario {
  id: number;
  goal: string;
  weakPrompt: string;
  strongPrompt: string;
  explanation: string;
}

interface WordGame {
  word: string;
  synonyms: string[];
  options: string[];
}

const wordChallenges: WordGame[] = [
  { word: "Güzel", synonyms: ["Muazzam", "Büyüleyici", "Şahane"], options: ["Kötü", "Muazzam", "Çirkin", "Basit"] },
  { word: "Hızlı", synonyms: ["Süratli", "Çevik", "Atik"], options: ["Yavaş", "Ağır", "Süratli", "Durgun"] },
  { word: "Büyük", synonyms: ["Devasa", "Muhteşem", "Heybetli"], options: ["Devasa", "Minik", "Ufak", "İnce"] },
];

const scenarios: PromptScenario[] = [
  {
    id: 1,
    goal: "Yapay zekaya bir kedi resmi çizdirmek istiyorsun.",
    weakPrompt: "Kedi çiz.",
    strongPrompt: "Güneşli bir İstanbul sabahında, boğaz kenarındaki eski bir duvarda uyuklayan, turuncu tüylü sevimli bir tekir kedi çiz.",
    explanation: "Harika seçim! 'Kedi çiz' dersen yapay zeka ne çizeceğini bilemez. Ama detaylı, sıfatlarla dolu zengin bir Türkçe kullanırsan hayalindeki resme ulaşırsın. İşte kelimelerin gücü!"
  },
  {
    id: 2,
    goal: "Ödevin için Fatih Sultan Mehmet hakkında bilgi almak istiyorsun.",
    weakPrompt: "Fatih kimdir anlat.",
    strongPrompt: "Fatih Sultan Mehmet'in bilime ve sanata verdiği önemi anlatan, 5. sınıf seviyesinde, anlaşılır ve eğitici bir yazı hazırlar mısın?",
    explanation: "Süpersin! Yapay zeka seninle konuşan bir öğretmen gibidir. Ona ne kadar kibar ve net sorular sorarsan (doğru istem), o kadar güzel cevaplar alırsın."
  },
  {
    id: 3,
    goal: "Arkadaşına doğum günü sürprizi planlamak istiyorsun.",
    weakPrompt: "Sürpriz fikir ver.",
    strongPrompt: "En yakın arkadaşım uzayı ve yıldızları çok seviyor. Onun için evde yapabileceğimiz, uzay temalı ve bütçesi uygun 3 yaratıcı doğum günü sürprizi önerir misin?",
    explanation: "Mükemmel! Duygularını ve isteklerini doğru kelimelerle ifade etmek, sadece yapay zekayla değil, insanlarla iletişimini de güçlendirir."
  }
];

const PromptLab: React.FC = () => {
  const [mode, setMode] = useState<'VOCAB' | 'PROMPT'>('VOCAB');
  const [vocabIndex, setVocabIndex] = useState(0);
  
  const [currentStep, setCurrentStep] = useState(0);
  const [showFeedback, setShowFeedback] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  // Vocab Logic
  const handleVocabChoice = (option: string) => {
    if (wordChallenges[vocabIndex].synonyms.includes(option)) {
      alert("Doğru! Kelime hazinen gelişiyor! 🎉");
      if (vocabIndex < wordChallenges.length - 1) {
        setVocabIndex(vocabIndex + 1);
      } else {
        setMode('PROMPT');
      }
    } else {
      alert("Tekrar dene! Daha güçlü bir kelime bulmalısın.");
    }
  };

  // Prompt Logic
  const handleChoice = (isStrong: boolean, explanation: string) => {
    if (showFeedback) return;
    
    if (isStrong) {
      setShowFeedback(`✅ ${explanation}`);
      setScore(s => s + 1);
    } else {
      setShowFeedback("❌ Bu biraz zayıf kaldı. Diğeri daha çok detay ve güzel kelimeler içeriyor, değil mi? Zengin bir dil, anahtardır!");
    }
  };

  const nextStep = () => {
    if (currentStep < scenarios.length - 1) {
      setCurrentStep(c => c + 1);
      setShowFeedback(null);
    } else {
      alert("Tebrikler! Sen tam bir Kelime Sihirbazısın! 🎩✨");
      setCurrentStep(0);
      setShowFeedback(null);
      setScore(0);
      setMode('VOCAB'); // Reset
      setVocabIndex(0);
    }
  };

  const currentScenario = scenarios[currentStep];

  if (mode === 'VOCAB') {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <h2 className="text-3xl font-bold text-purple-700 mb-8">Aşama 1: Kelime Avcısı 🕵️‍♀️</h2>
        <div className="bg-white p-8 rounded-3xl shadow-xl border-4 border-purple-100">
           <p className="text-xl text-gray-600 mb-4">Prompt yazmadan önce kelimelerimizi güçlendirelim.</p>
           <h3 className="text-4xl font-bold mb-8 text-gray-800">"{wordChallenges[vocabIndex].word}"</h3>
           <p className="mb-6 text-gray-500">Kelimesi yerine kullanılabilecek <span className="text-purple-600 font-bold">daha güçlü</span> kelime hangisi?</p>
           
           <div className="grid grid-cols-2 gap-4">
             {wordChallenges[vocabIndex].options.map((opt) => (
               <button 
                 key={opt}
                 onClick={() => handleVocabChoice(opt)}
                 className="p-4 bg-purple-50 hover:bg-purple-500 hover:text-white rounded-xl font-bold text-purple-900 transition-all transform hover:scale-105"
               >
                 {opt}
               </button>
             ))}
           </div>
           <div className="mt-6 flex justify-center gap-2">
             {[...Array(wordChallenges.length)].map((_, i) => (
               <div key={i} className={`w-3 h-3 rounded-full ${i === vocabIndex ? 'bg-purple-600' : 'bg-gray-300'}`}></div>
             ))}
           </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      
      {/* Header Section */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-3 flex items-center gap-3">
            <span>✨</span> Kelime Sihirbazı: İstem (Prompt) Atölyesi
          </h2>
          <p className="text-pink-100 text-lg">
            Kelime hazineni güçlendirdin! Şimdi bu kelimeleri kullanarak yapay zekayı yönetme zamanı.
          </p>
        </div>
        <div className="absolute right-0 top-0 text-9xl opacity-10 rotate-12">📚</div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Main Game Area */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl shadow-lg border-2 border-pink-100 p-8">
            <div className="flex justify-between items-center mb-6">
              <span className="bg-pink-100 text-pink-600 px-4 py-1 rounded-full text-sm font-bold">
                Senaryo {currentStep + 1} / {scenarios.length}
              </span>
              <span className="text-gray-400 text-sm">Hedef: Doğru İletişim</span>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-4">{currentScenario.goal}</h3>
            <p className="text-gray-600 mb-6">Sence hangisini yazarsak yapay zeka bizi daha iyi anlar?</p>

            <div className="space-y-4">
              <button 
                onClick={() => handleChoice(false, currentScenario.explanation)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${showFeedback ? 'opacity-50' : 'hover:border-pink-400 hover:bg-pink-50 border-gray-200'}`}
              >
                <span className="font-bold text-gray-400 mr-2">A)</span> {currentScenario.weakPrompt}
              </button>
              
              <button 
                onClick={() => handleChoice(true, currentScenario.explanation)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${showFeedback ? 'border-green-500 bg-green-50' : 'hover:border-pink-400 hover:bg-pink-50 border-gray-200'}`}
              >
                <span className="font-bold text-pink-500 mr-2">B)</span> {currentScenario.strongPrompt}
              </button>
            </div>

            {showFeedback && (
              <div className="mt-6 animate-fade-in">
                <div className={`p-4 rounded-xl ${showFeedback.startsWith('✅') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {showFeedback}
                </div>
                <button 
                  onClick={nextStep}
                  className="mt-4 bg-pink-500 text-white px-8 py-2 rounded-full font-bold hover:bg-pink-600 transition-colors shadow-lg"
                >
                  Sonraki ➡️
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Info Sidebar */}
        <div className="space-y-6">
          {/* Reading Card */}
          <div className="bg-orange-50 p-6 rounded-3xl border border-orange-200">
            <div className="text-4xl mb-3">📖</div>
            <h3 className="font-bold text-orange-800 text-lg mb-2">Neden Kitap Okumalıyız?</h3>
            <p className="text-orange-700 text-sm leading-relaxed">
              Çok kitap okuyanlar daha fazla kelime bilir. Kelime hazinesi geniş olanlar, yapay zekaya (ve insanlara) dertlerini çok daha iyi anlatır. Güçlü bir "İstem" için güçlü bir Türkçe gerekir!
            </p>
          </div>

          {/* Family Card */}
          <div className="bg-blue-50 p-6 rounded-3xl border border-blue-200">
             <div className="text-4xl mb-3">👨‍👩‍👧‍👦</div>
             <h3 className="font-bold text-blue-800 text-lg mb-2">Ailemizle Sohbet</h3>
             <p className="text-blue-700 text-sm leading-relaxed">
               Güzel konuşmak ve kendini doğru ifade etmek, ailenle olan iletişimini de güçlendirir. Bugün ailene öğrendiğin yeni bir kelimeyi anlatmaya ne dersin?
             </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default PromptLab;