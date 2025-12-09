import React, { useState } from 'react';

const CultureGuard: React.FC = () => {
  const [step, setStep] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);

  const scenario = {
    title: "Tarihi Figürler ve Yapay Zeka",
    desc: "Yapay zeka bazen tarihi karakterleri günümüz modasına göre giydirip eğlenceli resimler yapabiliyor. Ancak bu bazen tarihimize saygısızlık olabilir. Aşağıdaki durumu incele.",
    image: "https://picsum.photos/600/300?grayscale", // Grayscale for 'history' feel
    question: "Bir kullanıcı, Fatih Sultan Mehmet'i elinde modern bir akıllı telefonla ve güneş gözlüğüyle gösteren 'komik' bir resim yapıp 'Gerçek Fatih bu' diye paylaşmış. Bu neden yanlıştır?",
    options: [
      { id: 'a', text: "Yanlış değildir, çok komik olmuş.", type: 'wrong', msg: "Hayır, bu tarihsel gerçekliği bozar ve insanların yanlış öğrenmesine sebep olabilir." },
      { id: 'b', text: "Çünkü bu bir dezenformasyondur (yanlış bilgi) ve tarihi şahsiyetin ciddiyetine zarar verir.", type: 'correct', msg: "Harika! Turuncu renk kültürümüze sahip çıkmamızı temsil eder. Tarihi şahsiyetleri oldukları gibi, saygıyla öğrenmeliyiz." },
    ]
  };

  const handleOption = (type: string, msg: string) => {
    setFeedback(msg);
  };

  return (
    <div className="max-w-3xl mx-auto">
       <h2 className="text-3xl font-bold text-orange-600 mb-6 flex items-center gap-3">
        <span className="p-2 bg-orange-100 rounded-lg">🛡️</span> Kültür Koruyucusu
      </h2>

      <div className="bg-white rounded-3xl shadow-lg border-2 border-orange-100 overflow-hidden">
        <img src={scenario.image} alt="Historical context" className="w-full h-48 object-cover" />
        <div className="p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{scenario.title}</h3>
          <p className="text-gray-600 mb-6">{scenario.desc}</p>
          
          <div className="bg-orange-50 p-6 rounded-2xl border border-orange-200 mb-6">
            <p className="font-bold text-orange-900 text-lg">❓ {scenario.question}</p>
          </div>

          <div className="grid gap-4">
            {scenario.options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => handleOption(opt.type, opt.msg)}
                className="text-left p-4 rounded-xl border-2 border-gray-200 hover:border-orange-400 hover:bg-orange-50 transition-all font-medium"
              >
                {opt.text}
              </button>
            ))}
          </div>

          {feedback && (
            <div className="mt-6 p-6 bg-purple-50 rounded-2xl border-l-8 border-purple-500 animate-pulse">
              <h4 className="font-bold text-purple-800 mb-1">Bilge Baykuş Diyor ki:</h4>
              <p className="text-purple-700">{feedback}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CultureGuard;