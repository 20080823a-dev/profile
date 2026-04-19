import Link from 'next/link';

export default function Certifications() {
  const items = [
    {
      id: 1,
      title: 'Microsoft Technology Associate (MTA) 微軟技術助理認證',
      desc: [
        'MTA 是微軟專為 IT 初學者設計的國際基礎技術認證，主要涵蓋三大核心技術領域，旨在證明您具備紮實的 IT 基礎知識與實務概念：',
        '基礎結構：適合有意在桌面基礎結構、伺服器基礎結構或私人雲端運算領域發展的專業人才。',
        '資料庫：專為想在資料平台管理或商業智慧領域建立事業基礎的個人所設計。',
        '開發人員：涵蓋軟體開發與核心程式設計概念。'
      ],
      tags: ['#微軟國際認證', '#IT技術基礎']
    },
    {
      id: 2,
      title: 'APCS 大學程式設計先修檢測',
      desc: [
        'APCS 為 Advanced Placement Computer Science 的縮寫，即大學程式設計先修檢測。',
        '藉由具公信力之檢測，讓具備程式設計能力之高中職學生檢驗學習成果，並供作大學選才的參考依據。',
        '測驗內容包含「程式識讀」（例如反覆測試是否能追蹤程式的執行流程）與「程式設計實作」。'
      ],
      tags: ['#APCS', '#大學先修', '#程式檢測']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 p-8 pt-20">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 mb-8 group">
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> 返回首頁
        </Link>
        <h2 className="text-4xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 flex items-center gap-3">
          📜 檢定證照
        </h2>
        <div className="grid gap-8">
          {items.map(item => (
            <div key={item.id} className="group bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-emerald-500 transition-colors">
                {item.title}
              </h3>
              
              {/* 將 desc 陣列轉化為多個段落 */}
              <div className="mb-6">
                {item.desc.map((paragraph, index) => (
                  <p key={index} className="text-slate-600 dark:text-slate-400 leading-relaxed mb-2">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="flex gap-3 text-sm font-semibold">
                {item.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}