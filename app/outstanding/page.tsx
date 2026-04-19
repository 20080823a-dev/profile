import Link from 'next/link';

export default function Outstanding() {
  const items = [
    { id: 1, title: 'Python 程式語言學習證書', desc: '完成Python程式設計課程，獲得官方認證，表現出對程式設計的熱情與能力。', tags: ['#Python', '#程式設計'] },
    { id: 2, title: '公司實習經驗', desc: '在公司中幫助網路問題排除與多項整理工作。', tags: ['#實習', '#網路管理'] }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 p-8 pt-20">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-500 mb-8 transition-colors group">
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> 返回首頁
        </Link>
        <h2 className="text-4xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-500">
          🌟 特殊優良表現
        </h2>
        <div className="grid gap-8">
          {items.map(item => (
            <div key={item.id} className="group bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-800 transition-all duration-300">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-yellow-500 transition-colors">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{item.desc}</p>
              <div className="flex gap-3 text-sm font-semibold">
                {item.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-yellow-50 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-lg">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}