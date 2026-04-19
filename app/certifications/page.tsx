import Link from 'next/link';

export default function Certifications() {
  const items = [
    {
      id: 1,
      title: 'Microsoft Technology Associate (MTA) 微軟技術助理認證',
      desc: [
        '在國中建立資訊科技與網路架構的基礎知識，培養了邏輯思維與對電腦科學的啟蒙興趣，為日後的進階學習打下穩固根基。'
      ],
      tags: ['#微軟國際認證', '#IT技術基礎']
    },
    {
      id: 2,
      title: 'APCS 大學程式設計先修檢測',
      desc: [
        '從國中考取MTA證照提早建立邏輯理解力與資訊基礎，到高中參加APCS獲得「觀念4級、實作2級」，這段歷程完整記錄了我的學習軌跡。觀念4級肯定了我紮實的程式碼閱讀學理，但實作2級讓我深刻反思測驗與實務的差異。這使我體會到「系統開發」與APCS高度聚焦的「演算法競技」截然不同。要在實作題取得高分往往需要密集的演算法刷題訓練與時間累積，而大學端也會將這些成績排名作為實力的參考依據。這次經歷不僅讓我能自信展現解決實務問題的專案能力，更精準定位了自身在進階資料結構與解題速度上的不足，成為我未來持續精進、將扎實觀念轉化為高效實作的重要契機。'
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
