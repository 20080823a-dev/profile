import Link from 'next/link';

export default function Projects() {
  const items = [
    { id: 1, title: '區域網路 WOL 遠端喚醒配置', desc: '建置並調校區域網路環境，透過 Magic Packet 實現遠端開機與系統管理，克服跨網段喚醒的技術挑戰。', tags: ['#網路架構', '#WOL'] },
    { id: 2, title: '個人電腦效能極限優化', desc: '針對 Intel i7 處理器與記憶體進行效能調校，在散熱與供電限制下，找出能順暢運行高負載應用的最佳參數。', tags: ['#硬體調校', '#系統優化'] },
    { id: 3, title: '網路設備調校', desc: '通過port forwarding進行固定IP進入伺服器配置。', tags: ['#網路架構', '#系統優化'] },
    { id: 4, title: '網站架設', desc: '為家人建立公司交通炭排放計算網站，提升工作效率。', tags: ['#網頁設計', '#前端開發'] },
    { id: 5, title: 'discord機器人控制伺服器', desc: '為提升操作效率，通過Python製作一個discord機器人來控制遊戲伺服器。', tags: ['#Python', '#機器人'] },
    { id: 6, title: '架設家庭虛擬網路', desc: '使用NAS架設VPN建立安全的家庭虛擬網路環境和減少在外的操作侷限性。', tags: ['#網路架構', '#安全性'] },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 p-8 pt-20 selection:bg-blue-500 selection:text-white">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-500 mb-8 transition-colors group">
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> 返回首頁
        </Link>
        <h2 className="text-4xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
          💻 專案實作
        </h2>
        <div className="grid gap-8">
          {items.map(item => (
            <div key={item.id} className="group bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-800 transition-all duration-300">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-purple-500 transition-colors">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{item.desc}</p>
              <div className="flex gap-3 text-sm font-semibold">
                {item.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}