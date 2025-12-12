import React, { useState } from 'react';
import { analyzeEthicalContent } from '../services/geminiService';
import { AnalysisResult, AnalysisColor } from '../types';

const EthicalCreator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const exampleScenarios = [
    "Atatürk'ü bir Marvel süper kahramanı kostümüyle çiz.",
    "Arkadaşımın yüzünü komik bir videoya yapıştır (Deepfake).",
    "Mars'ta yaşayan ve futbol oynayan kediler çiz.",
    "Tarihi bir savaşta askerlerin eline lazer silahı ver.",
    "Ödevim için öğretmenin sesini taklit eden bir ses kaydı yap.",
    "Okul kantininde bedava çikolata dağıtıldığını söyleyen yalan bir haber yaz.",
    "Fatih Sultan Mehmet'i İstanbul'u fethederken çiz.",
    "Van Gogh tarzında modern bir İstanbul manzarası çiz."
  ];

  const handleCheck = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResult(null);
    
    const analysis = await analyzeEthicalContent(prompt);
    setResult(analysis);
    setLoading(false);
  };

  const getColorStyles = (color: AnalysisColor) => {
    switch (color) {
      case AnalysisColor.GREEN:
        return { bg: 'bg-green-50', border: 'border-green-500', text: 'text-green-800', icon: '✅' };
      case AnalysisColor.YELLOW:
        return { bg: 'bg-yellow-50', border: 'border-yellow-500', text: 'text-yellow-800', icon: '⚠️' };
      case AnalysisColor.RED:
        return { bg: 'bg-red-50', border: 'border-red-500', text: 'text-red-800', icon: '🛑' };
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-green-700 mb-2 flex items-center gap-2">
          <span className="p-2 bg-green-100 rounded-lg">🎨</span> Etik İçerik Üreticisi
        </h2>
        <p className="text-gray-600">
          Yapay zeka ile bir resim veya yazı oluşturmadan önce, fikrinin etik olup olmadığını kontrol edelim. 
          Unutma, teknoloji iyilik için kullanılmalı!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Sol Panel: Girdi */}
        <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
          <label className="block text-gray-700 font-bold mb-3">Ne üretmek istiyorsun?</label>
          <textarea
            className="w-full h-32 p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-0 transition-colors resize-none mb-4"
            placeholder="Kendi fikrini yaz veya aşağıdan seç..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          ></textarea>
          
          <div className="mb-4">
            <p className="text-xs font-bold text-gray-400 uppercase mb-2">Örnek Senaryoları Dene:</p>
            <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto">
              {exampleScenarios.map((ex, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setPrompt(ex)}
                  className="text-xs bg-gray-100 hover:bg-green-100 text-gray-600 hover:text-green-700 px-3 py-2 rounded-lg text-left transition-colors"
                >
                  {ex}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleCheck}
            disabled={loading || !prompt}
            className={`w-full py-4 rounded-xl font-bold text-lg text-white transition-all transform hover:-translate-y-1 ${
              loading ? 'bg-gray-400 cursor-wait' : 'bg-green-600 hover:bg-green-700 shadow-green-200 shadow-lg'
            }`}
          >
            {loading ? 'Yapay Zeka Öğretmeni Düşünüyor...' : 'Etik Kontrolü Yap ✨'}
          </button>
        </div>

        {/* Sağ Panel: Çıktı */}
        <div className="flex flex-col justify-center">
          {!result && !loading && (
            <div className="text-center text-gray-400 p-8 border-2 border-dashed border-gray-200 rounded-3xl">
              <div className="text-6xl mb-4">🤖</div>
              <p>Fikrini yaz ve kontrol et butonuna bas.</p>
            </div>
          )}

          {loading && (
            <div className="text-center p-8 animate-pulse">
              <div className="w-16 h-16 bg-green-200 rounded-full mx-auto mb-4 animate-bounce"></div>
              <p className="text-green-700 font-medium">Analiz ediliyor...</p>
            </div>
          )}

          {result && (
            <div className={`p-8 rounded-3xl border-4 shadow-xl transition-all duration-500 transform scale-100 ${getColorStyles(result.color).bg} ${getColorStyles(result.color).border}`}>
              <div className="text-5xl mb-4 text-center">{getColorStyles(result.color).icon}</div>
              <h3 className={`text-2xl font-bold mb-2 text-center ${getColorStyles(result.color).text}`}>
                {result.title}
              </h3>
              <p className={`text-lg text-center font-medium opacity-90 ${getColorStyles(result.color).text}`}>
                {result.explanation}
              </p>
              
              <div className="mt-6 pt-6 border-t border-black/10">
                <p className="text-xs text-center font-bold uppercase tracking-widest opacity-60">
                  YZ Etik Karnesi
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EthicalCreator;