import React, { useState } from 'react';
import { Book } from '../types';

const Library: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const books: Book[] = [
    {
      id: 1,
      title: "Küçük Prens",
      author: "Antoine de Saint-Exupéry",
      coverColor: "bg-indigo-400",
      category: "VOCABULARY",
      summary: "Bir çocuğun gözünden büyüklerin dünyasının ne kadar tuhaf olduğunu anlatan eşsiz bir eser.",
      aiConnection: "Bu kitap 'metafor' (mecaz) kullanımının harika bir örneğidir. Yapay zekaya duygusal ve soyut kavramları anlatırken Küçük Prens'teki gibi betimlemeler kullanmak, sonucun kalitesini artırır."
    },
    {
      id: 2,
      title: "Robotlar ve İmparatorluk",
      author: "Isaac Asimov",
      coverColor: "bg-slate-600",
      category: "FUTURE",
      summary: "Robotların insanlara zarar vermesini engelleyen '3 Robot Yasası'nı anlatan bilim kurgu klasiği.",
      aiConnection: "Bugün yapay zeka etiğini tartışırken hala Asimov'un yasalarından ilham alıyoruz. Etik bir kodlayıcı olmak için bu temelleri bilmek şart!"
    },
    {
      id: 3,
      title: "Nutuk",
      author: "Mustafa Kemal Atatürk",
      coverColor: "bg-red-600",
      category: "HISTORY",
      summary: "Türkiye Cumhuriyeti'nin kuruluş hikayesini birinci ağızdan anlatan tarihi belge.",
      aiConnection: "Yapay zeka bazen tarihi olayları karıştırabilir. Birincil kaynakları okumak, 'Haber Doğrulama' yeteneğini geliştirir ve seni bir 'Kültür Koruyucusu' yapar."
    },
    {
      id: 4,
      title: "Alice Harikalar Diyarında",
      author: "Lewis Carroll",
      coverColor: "bg-pink-400",
      category: "VOCABULARY",
      summary: "Mantığın sınırlarını zorlayan, kelime oyunlarıyla dolu bir macera.",
      aiConnection: "Yaratıcı istemler (prompt) yazmak için hayal gücünün sınırlarını zorlamalısın. Alice gibi düşünmek, YZ'den en yaratıcı resimleri almanıt sağlar."
    },
    {
      id: 5,
      title: "Safahat",
      author: "Mehmet Akif Ersoy",
      coverColor: "bg-emerald-600",
      category: "VOCABULARY",
      summary: "Toplumsal değerleri, ahlakı ve dili en üst seviyede kullanan şiirler.",
      aiConnection: "Zengin bir Türkçe kelime hazinesi, YZ ile iletişimde süper gücündür. Eski kelimelerin anlamlarını bilmek, ifade yeteneğini derinleştirir."
    },
    {
      id: 6,
      title: "Frankenstein",
      author: "Mary Shelley",
      coverColor: "bg-green-700",
      category: "FUTURE",
      summary: "Bir bilim insanının yarattığı canlının kontrolden çıkmasını anlatan, bilim etiği üzerine yazılmış ilk ve en önemli eserlerden biri.",
      aiConnection: "Yarattığımız teknolojilerin sorumluluğunu almalıyız. 'Etik Üretici' olmak, sonucunu düşünerek üretmek demektir."
    },
    {
      id: 7,
      title: "Charlie'nin Çikolata Fabrikası",
      author: "Roald Dahl",
      coverColor: "bg-yellow-500",
      category: "FUTURE",
      summary: "Fakir bir çocuk olan Charlie'nin, teknoloji harikası ve gizemli bir fabrikadaki macerası.",
      aiConnection: "Teknoloji harika olabilir ama 'açgözlülük' ve 'şımarıklık' kötü sonuçlar doğurur. Dijital Denge'yi korumak önemlidir."
    },
    {
      id: 8,
      title: "Harry Potter",
      author: "J.K. Rowling",
      coverColor: "bg-purple-600",
      category: "VOCABULARY",
      summary: "Genç bir büyücünün maceraları. Aslında büyü de bir tür 'kodlama' gibidir; doğru kelimeleri doğru sırayla söylersen sihir gerçekleşir.",
      aiConnection: "Kodlama ve Prompt yazmak modern çağın büyüsüdür. 'Wingardium Leviosa' demekle doğru prompt yazmak arasında çok benzerlik vardır!"
    },
    {
      id: 9,
      title: "Momo",
      author: "Michael Ende",
      coverColor: "bg-gray-500",
      category: "FUTURE",
      summary: "Zaman hırsızlarına karşı mücadele eden küçük bir kızın hikayesi. İnsanların birbirine ayırdığı zamanın değerini anlatır.",
      aiConnection: "Teknoloji ve ekranlar bazen zamanımızı çalabilir (Zaman Hırsızları). Momo gibi, teknolojiyi sevdiklerimize ayırdığımız zamandan çalmasına izin vermemeliyiz."
    },
    {
      id: 10,
      title: "Dede Korkut Hikayeleri",
      author: "Anonim",
      coverColor: "bg-orange-500",
      category: "HISTORY",
      summary: "Türk kültürünün en eski destansı hikayeleri. Kahramanlık, misafirperverlik ve doğruluk değerlerini işler.",
      aiConnection: "Kendi kültürünü bilmeyen, onu YZ'ye öğretemez. 'Kültür Koruyucusu' olmak için kendi hikayelerimizi çok iyi bilmeliyiz."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
       <div className="mb-8 text-center">
         <h2 className="text-4xl font-bold text-indigo-800 mb-2">📚 Sanal Kütüphane</h2>
         <p className="text-lg text-gray-600">
           İyi bir yapay zeka kullanıcısı olmak için en önemli kaynak: <b>Kitaplardır.</b>
           <br/>Kelime hazinen ne kadar genişse, YZ o kadar iyi anlar.
         </p>
       </div>

       {/* Bookshelf Visualization */}
       <div className="bg-[#8B4513] p-8 rounded-t-3xl shadow-2xl border-b-8 border-[#5D2E0C] relative">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-4 items-end min-h-64">
            {books.map((book) => (
              <div 
                key={book.id}
                onClick={() => setSelectedBook(book)}
                className={`
                  ${book.coverColor} 
                  h-48 md:h-56 w-full rounded-tr-lg rounded-br-lg rounded-tl-sm rounded-bl-sm 
                  shadow-lg cursor-pointer transform hover:-translate-y-4 transition-transform duration-300
                  relative flex items-center justify-center text-center p-2 border-l-4 border-white/20
                  group
                `}
              >
                <div className="text-white font-serif font-bold text-sm md:text-base drop-shadow-md line-clamp-3">
                  {book.title}
                </div>
                <div className="absolute bottom-2 text-[10px] text-white/80 uppercase tracking-widest truncate w-full px-2">{book.author}</div>
                {/* Spine Effect */}
                <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-white/10"></div>
              </div>
            ))}
          </div>
          {/* Shelf Shadow */}
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-black/20"></div>
       </div>

       {/* Book Detail Area */}
       <div className="bg-[#fdfbf7] p-8 min-h-[300px] border-x-2 border-b-2 border-gray-200 rounded-b-3xl shadow-xl">
         {selectedBook ? (
           <div className="animate-fade-in flex flex-col md:flex-row gap-8 items-start">
             <div className={`w-32 h-48 ${selectedBook.coverColor} rounded-lg shadow-lg flex-shrink-0 hidden md:block transition-all`}></div>
             <div>
                <span className="inline-block px-3 py-1 bg-gray-200 rounded-full text-xs font-bold text-gray-600 mb-2">
                  {selectedBook.category === 'VOCABULARY' ? 'Kelime Hazinesi' : selectedBook.category === 'HISTORY' ? 'Tarih Bilinci' : 'Gelecek Vizyonu'}
                </span>
                <h3 className="text-3xl font-bold text-gray-800 mb-1">{selectedBook.title}</h3>
                <p className="text-gray-500 italic mb-4">{selectedBook.author}</p>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">{selectedBook.summary}</p>
                
                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-xl">
                  <h4 className="font-bold text-indigo-900 flex items-center gap-2 mb-2">
                    <span>🤖</span> YZ İpucu:
                  </h4>
                  <p className="text-indigo-800 text-sm md:text-base">
                    {selectedBook.aiConnection}
                  </p>
                </div>
             </div>
           </div>
         ) : (
           <div className="text-center text-gray-400 py-12">
             <div className="text-6xl mb-4">👆</div>
             <p className="text-xl">İçeriğini ve YZ ile bağlantısını görmek için raftan bir kitap seç.</p>
           </div>
         )}
       </div>
    </div>
  );
};

export default Library;