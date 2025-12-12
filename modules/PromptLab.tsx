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

// 10 Kelime Oyunu
const wordChallenges: WordGame[] = [
  { word: "Güzel", synonyms: ["Muazzam", "Büyüleyici", "Şahane", "Estetik"], options: ["Kötü", "Muazzam", "Çirkin", "Basit"] },
  { word: "Hızlı", synonyms: ["Süratli", "Çevik", "Atik", "Seri"], options: ["Yavaş", "Ağır", "Süratli", "Durgun"] },
  { word: "Büyük", synonyms: ["Devasa", "Muhteşem", "Heybetli", "Ulu"], options: ["Devasa", "Minik", "Ufak", "İnce"] },
  { word: "Kızgın", synonyms: ["Öfkeli", "Barut Gibi", "Sinirli"], options: ["Sakin", "Öfkeli", "Mutlu", "Neşeli"] },
  { word: "Mutlu", synonyms: ["Neşeli", "Sevinçli", "Huzurlu", "Keyifli"], options: ["Üzgün", "Kederli", "Neşeli", "Dertli"] },
  { word: "Korkak", synonyms: ["Ürkek", "Çekingen", "Endişeli"], options: ["Cesur", "Yiğit", "Ürkek", "Atılgan"] },
  { word: "Zeki", synonyms: ["Akıllı", "Kurnaz", "Bilge", "Zehir Gibi"], options: ["Akıllı", "Saf", "Dalgın", "Unutkan"] },
  { word: "Küçük", synonyms: ["Minik", "Ufak", "Minyatür", "Cüce"], options: ["Kocaman", "Minyatür", "Dev", "Geniş"] },
  { word: "Yaşlı", synonyms: ["İhtiyar", "Güngörmüş", "Tecrübeli"], options: ["Genç", "Toy", "İhtiyar", "Taze"] },
  { word: "Zor", synonyms: ["Çetin", "Güç", "Meşakkatli"], options: ["Kolay", "Basit", "Çetin", "Rahat"] },
];

// 10 Prompt Senaryosu
const scenarios: PromptScenario[] = [
  {
    id: 1,
    goal: "Yapay zekaya bir kedi resmi çizdirmek istiyorsun.",
    weakPrompt: "Kedi çiz.",
    strongPrompt: "Güneşli bir İstanbul sabahında, boğaz kenarındaki eski bir duvarda uyuklayan, turuncu tüylü sevimli bir tekir kedi çiz.",
    explanation: "Harika seçim! Detaylı, sıfatlarla dolu zengin bir Türkçe kullanırsan hayalindeki resme ulaşırsın."
  },
  {
    id: 2,
    goal: "Ödevin için Fatih Sultan Mehmet hakkında bilgi almak istiyorsun.",
    weakPrompt: "Fatih kimdir anlat.",
    strongPrompt: "Fatih Sultan Mehmet'in bilime ve sanata verdiği önemi anlatan, 5. sınıf seviyesinde, anlaşılır ve eğitici bir yazı hazırlar mısın?",
    explanation: "Süpersin! Hedef kitleyi (5. sınıf) ve konuyu (bilim/sanat) belirtmek cevabı mükemmelleştirir."
  },
  {
    id: 3,
    goal: "Arkadaşına doğum günü sürprizi planlamak istiyorsun.",
    weakPrompt: "Sürpriz fikir ver.",
    strongPrompt: "En yakın arkadaşım uzayı ve yıldızları çok seviyor. Onun için evde yapabileceğimiz, uzay temalı ve bütçesi uygun 3 yaratıcı doğum günü sürprizi önerir misin?",
    explanation: "Mükemmel! Duygularını ve kısıtlamaları (bütçe, ev ortamı) belirtmek işe yarar."
  },
  {
    id: 4,
    goal: "Bir hikaye yazdırmak istiyorsun.",
    weakPrompt: "Bana hikaye yaz.",
    strongPrompt: "Ana karakteri cesur bir karınca olan, ormandaki diğer böceklere yardımlaşmayı öğreten, sonu mutlu biten kısa bir fabl yazar mısın?",
    explanation: "Harika! Karakteri, konuyu ve hikaye türünü (fabl) seçmek YZ'ye rehberlik eder."
  },
  {
    id: 5,
    goal: "Kodlama öğrenirken takıldın.",
    weakPrompt: "Kodum çalışmıyor.",
    strongPrompt: "Python'da bir hesap makinesi yapmaya çalışıyorum ama 'SyntaxError' hatası alıyorum. İşte yazdığım kod aşağıda, hatamı bulup açıklar mısın?",
    explanation: "Çok iyi! Hatayı ve kodunu paylaşmak, sorunun çözümünü hızlandırır."
  },
  {
    id: 6,
    goal: "Sağlıklı beslenmek istiyorsun.",
    weakPrompt: "Ne yiyeyim?",
    strongPrompt: "Sabah kahvaltısı için yumurta ve peynir içeren, yapımı 10 dakikayı geçmeyen, okul öncesi yiyebileceğim enerjik ve sağlıklı bir tarif öner.",
    explanation: "Süper! Malzemeleri ve zamanı belirtmek sana en uygun cevabı getirir."
  },
  {
    id: 7,
    goal: "Bir şiir yazdırmak istiyorsun.",
    weakPrompt: "Şiir yaz.",
    strongPrompt: "23 Nisan coşkusunu anlatan, içinde 'bayrak', 'çocuk' ve 'gelecek' kelimeleri geçen, 4 kıtalık kafiyeli bir şiir yazar mısın?",
    explanation: "Harika! Temayı, anahtar kelimeleri ve uzunluğu belirttin."
  },
  {
    id: 8,
    goal: "İngilizce pratik yapmak istiyorsun.",
    weakPrompt: "İngilizce konuşalım.",
    strongPrompt: "Sen Londra'da bir turistsin, ben de sana yol tarifi veren bir polisim. Benimle A2 seviyesinde basit İngilizce ile diyalog kurar mısın?",
    explanation: "Mükemmel! YZ'ye bir 'rol' (persona) vermek diyaloğu çok daha gerçekçi yapar."
  },
  {
    id: 9,
    goal: "Resim dersi için fikir arıyorsun.",
    weakPrompt: "Ne çizeyim?",
    strongPrompt: "Sulu boya ile yapabileceğim, doğa temalı, içinde göl ve dağ olan, yeni başlayanlar için kolay ama etkileyici bir manzara resmi fikri ver.",
    explanation: "Harika! Malzemeyi (sulu boya) ve zorluk derecesini belirttin."
  },
  {
    id: 10,
    goal: "Kitap özeti istiyorsun.",
    weakPrompt: "Kitabı özetle.",
    strongPrompt: "Küçük Prens kitabının ana fikrini ve verdiği en önemli 3 dersi, maddeler halinde özetler misin?",
    explanation: "Süper! Sadece özet değil, 'dersleri' ve 'formatı' (madde madde) da istedin."
  }
];

const emojiChallenges = [
  { emojis: "🚀🌕👨‍🚀", prompt: "Bir astronotun aya roketle iniş yapması." },
  { emojis: "🏰🐉👸", prompt: "Prensesi koruyan ejderhanın olduğu eski bir kale." },
  { emojis: "🏖️🍦🦀", prompt: "Kumsalda dondurma yiyen bir yengeç." },
  { emojis: "🌲⛺🔥", prompt: "Ormanda kamp ateşi etrafında bir çadır." },
];

const PromptLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'VOCAB' | 'PROMPT' | 'EMOJI'>('VOCAB');
  const [vocabIndex, setVocabIndex] = useState(0);
  const [promptIndex, setPromptIndex] = useState(0);
  
  const [showFeedback, setShowFeedback] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  // EMOJI GAME STATE
  const [emojiIndex, setEmojiIndex] = useState(0);
  const [emojiInput, setEmojiInput] = useState('');

  // Vocab Logic
  const handleVocabChoice = (option: string) => {
    if (wordChallenges[vocabIndex].synonyms.includes(option)) {
      alert("Doğru! Kelime hazinen gelişiyor! 🎉");
      if (vocabIndex < wordChallenges.length - 1) {
        setVocabIndex(vocabIndex + 1);
      } else {
        alert("Kelime bölümü bitti! Diğer oyunlara geçebilirsin.");
        setActiveTab('PROMPT');
      }
    } else {
      alert("Tekrar dene! Daha güçlü bir kelime bulmalısın.");
    }
  };

  // Prompt Logic
  const handlePromptChoice = (isStrong: boolean, explanation: string) => {
    if (showFeedback) return;
    
    if (isStrong) {
      setShowFeedback(`✅ ${explanation}`);
      setScore(s => s + 1);
    } else {
      setShowFeedback("❌ Bu biraz zayıf kaldı. Diğeri daha detaylı.");
    }
  };

  const nextPrompt = () => {
    if (promptIndex < scenarios.length - 1) {
      setPromptIndex(c => c + 1);
      setShowFeedback(null);
    } else {
      alert(`Tebrikler! Puan: ${score}`);
      setPromptIndex(0);
      setShowFeedback(null);
      setScore(0);
    }
  };

  // Emoji Logic
  const checkEmojiAnswer = () => {
    // Simple mock check
    if (emojiInput.length > 5) {
      alert(`Harika betimleme! Doğru cevap: ${emojiChallenges[emojiIndex].prompt}`);
      if (emojiIndex < emojiChallenges.length - 1) {
        setEmojiIndex(emojiIndex + 1);
        setEmojiInput('');
      } else {
        alert("Emoji Tercümanı bitti! 🎨");
        setEmojiIndex(0);
      }
    } else {
      alert("Biraz daha detaylı yazmalısın.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      
      {/* Header Section */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-3 flex items-center gap-3">
            <span>✨</span> Kelime Sihirbazı Atölyesi
          </h2>
          <p className="text-pink-100 text-lg">
            Sadece prompt yazmak yetmez; kelimeleri, emojileri ve anlamları yönetmelisin. 3 farklı oyun seni bekliyor!
          </p>
        </div>
      </div>

      {/* TABS */}
      <div className="flex flex-wrap gap-4 justify-center">
        <button onClick={() => setActiveTab('VOCAB')} className={`px-6 py-3 rounded-full font-bold transition-all ${activeTab === 'VOCAB' ? 'bg-purple-600 text-white' : 'bg-white text-purple-600 hover:bg-purple-50'}`}>🕵️‍♀️ Kelime Avcısı</button>
        <button onClick={() => setActiveTab('PROMPT')} className={`px-6 py-3 rounded-full font-bold transition-all ${activeTab === 'PROMPT' ? 'bg-pink-600 text-white' : 'bg-white text-pink-600 hover:bg-pink-50'}`}>📝 Prompt Doktoru</button>
        <button onClick={() => setActiveTab('EMOJI')} className={`px-6 py-3 rounded-full font-bold transition-all ${activeTab === 'EMOJI' ? 'bg-yellow-500 text-white' : 'bg-white text-yellow-600 hover:bg-yellow-50'}`}>🤪 Emoji Tercümanı</button>
      </div>

      {/* GAME CONTENT */}
      <div className="bg-white rounded-3xl shadow-lg border-2 border-pink-100 p-8 min-h-[400px]">
        
        {/* --- GAME 1: VOCAB --- */}
        {activeTab === 'VOCAB' && (
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Kelime {vocabIndex + 1}: "{wordChallenges[vocabIndex].word}"</h3>
            <p className="mb-6 text-gray-500">Bu kelimenin yerine kullanılabilecek <span className="text-purple-600 font-bold">daha güçlü</span> kelimeyi bul.</p>
            <div className="grid grid-cols-2 gap-4">
               {wordChallenges[vocabIndex].options.map((opt) => (
                 <button key={opt} onClick={() => handleVocabChoice(opt)} className="p-4 bg-purple-50 hover:bg-purple-500 hover:text-white rounded-xl font-bold text-purple-900 transition-all">
                   {opt}
                 </button>
               ))}
            </div>
          </div>
        )}

        {/* --- GAME 2: PROMPT --- */}
        {activeTab === 'PROMPT' && (
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-4">
               <span className="font-bold text-pink-600">Senaryo {promptIndex + 1}/{scenarios.length}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">{scenarios[promptIndex].goal}</h3>
            <div className="space-y-4">
              <button onClick={() => handlePromptChoice(false, scenarios[promptIndex].explanation)} className={`w-full text-left p-4 rounded-xl border-2 transition-all ${showFeedback ? 'opacity-50' : 'hover:border-pink-400 hover:bg-pink-50'}`}>
                <span className="font-bold text-gray-400 mr-2">A)</span> {scenarios[promptIndex].weakPrompt}
              </button>
              <button onClick={() => handlePromptChoice(true, scenarios[promptIndex].explanation)} className={`w-full text-left p-4 rounded-xl border-2 transition-all ${showFeedback ? 'border-green-500 bg-green-50' : 'hover:border-pink-400 hover:bg-pink-50'}`}>
                <span className="font-bold text-pink-500 mr-2">B)</span> {scenarios[promptIndex].strongPrompt}
              </button>
            </div>
            {showFeedback && (
              <div className="mt-4 p-4 bg-green-100 rounded-xl text-green-800 animate-fade-in">
                {showFeedback}
                <button onClick={nextPrompt} className="block mt-2 bg-green-600 text-white px-4 py-2 rounded-lg font-bold">Sonraki</button>
              </div>
            )}
          </div>
        )}

        {/* --- GAME 3: EMOJI --- */}
        {activeTab === 'EMOJI' && (
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-2xl font-bold text-yellow-600 mb-2">Emoji Tercümanı</h3>
            <p className="text-gray-500 mb-8">Yapay zeka bu emojileri görse, ona nasıl bir prompt yazardın?</p>
            
            <div className="text-6xl mb-8 tracking-widest animate-bounce">
              {emojiChallenges[emojiIndex].emojis}
            </div>

            <textarea 
              value={emojiInput}
              onChange={(e) => setEmojiInput(e.target.value)}
              placeholder="Örn: Ormanda kamp ateşi yakan..."
              className="w-full p-4 border-2 border-yellow-200 rounded-xl focus:border-yellow-500 outline-none mb-4"
              rows={3}
            />
            
            <button onClick={checkEmojiAnswer} className="bg-yellow-500 text-white px-8 py-3 rounded-full font-bold hover:bg-yellow-600 shadow-lg">
              Kontrol Et 🕵️‍♂️
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default PromptLab;