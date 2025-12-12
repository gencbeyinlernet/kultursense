import React, { useState } from 'react';
import { QuizQuestion } from '../types';

const questions: QuizQuestion[] = [
  {
    id: 1,
    image: 'https://picsum.photos/400/300?random=1',
    text: "Bu videoda ünlü bir kişi hiç söylemediği şeyleri söylüyor gibi görünüyor. Dudak hareketleri biraz kaymış. Sence bu nedir?",
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
    text: "Sosyal medyada 'Tıkla ve iPhone Kazan!' diye bir mesaj gördün. Link çok garip harflerle dolu. Ne yaparsın?",
    options: [
      { id: 'a', text: 'Hemen tıklarım, bedava telefon!', isCorrect: false },
      { id: 'b', text: 'Bu bir Oltalama (Phishing) tuzağıdır, tıklamam.', isCorrect: true },
      { id: 'c', text: 'Arkadaşlarıma gönderirim.', isCorrect: false }
    ],
    explanation: "İnternette kimse durduk yere bedava pahalı hediye vermez. Bu tuzaklar şifreni çalmak içindir."
  },
  {
    id: 3,
    image: 'https://picsum.photos/400/300?random=3',
    text: "Yapay zeka ile üretilmiş bir resimde, insanın elinde 6 parmak var. Bu bize neyi gösterir?",
    options: [
      { id: 'a', text: 'Bu kişinin uzaylı olduğunu.', isCorrect: false },
      { id: 'b', text: 'Yapay zekanın bazen hata yapabildiğini (Halüsinasyon).', isCorrect: true },
      { id: 'c', text: 'Fotoğrafın çok kaliteli olduğunu.', isCorrect: false }
    ],
    explanation: "Yapay zeka modelleri bazen elleri, yazıları veya fizik kurallarını karıştırabilir. Detaylara dikkat et!"
  },
  {
    id: 4,
    image: 'https://picsum.photos/400/300?random=4',
    text: "Bir haber sitesinde 'Uzaylılar İstanbul'a İndi!' başlığı var ama başka hiçbir sitede bu haber yok. Bu nedir?",
    options: [
      { id: 'a', text: 'Gizli bilgidir.', isCorrect: false },
      { id: 'b', text: 'Dezenformasyon (Yalan Haber).', isCorrect: true },
      { id: 'c', text: 'Kesin doğrudur.', isCorrect: false }
    ],
    explanation: "Önemli bir haber sadece tek bir kaynakta varsa ve çok abartılıysa, genellikle sahtedir. Mavi Teyit yapmalısın!"
  },
  {
    id: 5,
    image: 'https://picsum.photos/400/300?random=5',
    text: "Arkadaşının sesiyle seni arayan biri acil para istiyor ama konuşma tarzı biraz robotik. Ne yapmalısın?",
    options: [
      { id: 'a', text: 'Hemen parayı gönderirim.', isCorrect: false },
      { id: 'b', text: 'Yüzüne kapatıp arkadaşımı kendi numarasından ararım.', isCorrect: true },
      { id: 'c', text: 'Sesi benziyorsa kesin odur.', isCorrect: false }
    ],
    explanation: "Yapay zeka artık sesleri de taklit edebilir (Voice Cloning). Şüpheli durumlarda mutlaka geri arayarak teyit et."
  },
  {
    id: 6,
    image: 'https://picsum.photos/400/300?random=6',
    text: "İnternette gördüğün bir fotoğrafta gökyüzü yeşil, deniz pembe. Altında 'Doğanın mucizesi' yazıyor.",
    options: [
      { id: 'a', text: 'Çok güzel, hemen beğenirim.', isCorrect: false },
      { id: 'b', text: 'Bunun bir filtre veya düzenleme olduğunu anlarım.', isCorrect: true },
      { id: 'c', text: 'Oraya gitmek için bilet bakarım.', isCorrect: false }
    ],
    explanation: "Dijital dünyada renkler ve şekiller kolayca değiştirilebilir. Gördüğün her görsel gerçekliği yansıtmayabilir."
  },
  {
    id: 7,
    image: 'https://picsum.photos/400/300?random=7',
    text: "Bir oyun sitesi senden 'Yaşını doğrulamak için' T.C. kimlik numaranı istiyor.",
    options: [
      { id: 'a', text: 'Veririm, oyun oynamak istiyorum.', isCorrect: false },
      { id: 'b', text: 'Asla vermem, bu kişisel bir veridir.', isCorrect: true },
      { id: 'c', text: 'Annemin numarasını veririm.', isCorrect: false }
    ],
    explanation: "T.C. kimlik numarası, ev adresi gibi bilgiler 'Kişisel Veri'dir. Güvenmediğin sitelerle asla paylaşma."
  },
  {
    id: 8,
    image: 'https://picsum.photos/400/300?random=8',
    text: "YouTube'da 'Bu videoyu izleyen herkese 1000 Robux bedava!' diyen bir video gördün.",
    options: [
      { id: 'a', text: 'Bu bir Tık Tuzağıdır (Clickbait).', isCorrect: true },
      { id: 'b', text: 'Gerçektir, hemen izlerim.', isCorrect: false },
      { id: 'c', text: 'Arkadaşlarıma haber veririm.', isCorrect: false }
    ],
    explanation: "Tık tuzakları, seni heyecanlandırıp videoyu izletmek için yalan söyler. Genellikle vadettikleri şeyi vermezler."
  },
  {
    id: 9,
    image: 'https://picsum.photos/400/300?random=9',
    text: "Sohbet botu (Chatbot) sana tarihi bir olayla ilgili çok emin konuştuğu bir bilgi verdi. Ne yapmalısın?",
    options: [
      { id: 'a', text: 'Kitaplardan veya güvenilir sitelerden kontrol ederim.', isCorrect: true },
      { id: 'b', text: 'YZ yalan söylemez, doğrudur.', isCorrect: false },
      { id: 'c', text: 'Ödevime direkt yazarım.', isCorrect: false }
    ],
    explanation: "Yapay zeka bazen çok emin bir dille yanlış bilgi uydurabilir. Her zaman ikinci bir kaynaktan kontrol et."
  },
  {
    id: 10,
    image: 'https://picsum.photos/400/300?random=10',
    text: "Birisi sosyal medyada senin fotoğrafını alıp komik ama seni üzen bir yazı ekleyerek paylaşmış.",
    options: [
      { id: 'a', text: 'Ben de onun fotoğrafını paylaşırım.', isCorrect: false },
      { id: 'b', text: 'Bu siber zorbalıktır. Aileme söyler ve şikayet ederim.', isCorrect: true },
      { id: 'c', text: 'Hiçbir şey yapmam.', isCorrect: false }
    ],
    explanation: "Başkalarının fotoğraflarını izinsiz kullanmak ve onlarla dalga geçmek siber zorbalıktır. Buna sessiz kalma!"
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
      alert(`Tebrikler! Toplam Puanın: ${score} / 100`);
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
        <div className="bg-red-500 h-2 transition-all duration-500" style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}></div>
        
        <div className="p-8">
          <div className="mb-6 relative group">
             <div className="w-full h-64 bg-gray-200 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                <span className="text-6xl animate-pulse">🖼️</span> 
                {/* Gerçek resimler yerine placeholder kullanıyoruz ama görsel algıyı simüle ediyoruz */}
             </div>
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
                {currentQ < questions.length - 1 ? "Sonraki Soru ➡️" : "Testi Bitir 🏁"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RealVsFake;