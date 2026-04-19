import Link from 'next/link';

export default function Competitions() {
  const items = [
    { 
      id: 1, 
      title: '113年陽光盃3*3籃球賽', 
      desc: '參與113年第四屆陽光少年盃3對3籃球鬥牛賽，在賽場上發揮日常訓練成果，展現運動家精神與團隊合作默契。', 
      tags: ['#體育競技', '#籃球'] 
    },
    { 
      id: 2, 
      title: '國際運算思維挑戰賽', 
      desc: '運用邏輯與資訊科學核心概念進行解題，將複雜問題拆解並找出最佳解法，強化運算思維與問題解決能力。', 
      tags: ['#運算思維', '#邏輯分析'] 
    },
    { 
      id: 3, 
      title: '2025臺北市中等學校3對3籃球賽', 
      desc: '和朋友一同參賽，與臺北市各高中好手切磋球技，在高壓賽事中累積實戰經驗與抗壓性。', 
      tags: ['#體育競技', '#籃球'] 
    },
    { 
      id: 4, 
      title: '高三班際籃球賽', 
      desc: '與同學同場競技，將長期的努力化為賽場實力，在緊張刺激的氛圍中，深刻體會團隊合作的力量。', 
      tags: ['#校際賽事', '#籃球'] 
    },
    { 
      id: 5, 
      title: '113學年運動會-高男長距離5.6公里', 
      desc: '堅持跑完全程，體會運動的成就感與快樂。', 
      tags: ['#校際賽事', '#運動'] 
    },
    { 
      id: 6, 
      title: '114學年運動會-高男長距離5.6公里', 
      desc: '堅持跑完全程，體會運動的成就感與快樂。', 
      tags: ['#校際賽事', '#運動'] 
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 p-8 pt-20">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-500 mb-8 transition-colors group">
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> 返回首頁
        </Link>
        <h2 className="text-4xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
          🏆 競賽表現
        </h2>
        <div className="grid gap-8">
          {items.map(item => (
            <div key={item.id} className="group bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-800 transition-all duration-300">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-orange-500 transition-colors">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{item.desc}</p>
              <div className="flex gap-3 text-sm font-semibold">
                {item.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-lg">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}