'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

export default function UltimateResume() {
  const skills = ['Next.js / React', '網路架構與 WOL', 'PC 硬體調校', '資訊安全', 'Python', 'C++'];
  const traits = ['熱愛挑戰', '自主學習', '邏輯思維'];
  const interests = ['軟體開發', '資安研究', '系統優化', '運動', '籃球']; 
  
  const images = ['IMG_5587.JPG', 'IMG_5730.JPG', 'IMG_7281.JPG','IMG_9806.JPG', 'IMG_9828.JPG','IMG_9829.JPG'];
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentImg((prev) => (prev + 1) % images.length), 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  const education = [
    { stage: '高中', school: '臺北市立育成高中', url: 'https://mars.yucsh.tp.edu.tw/home' },
    { stage: '國中', school: '東湖國民中學', url: 'https://www.dhjh.tp.edu.tw/' },
    { stage: '國小', school: '金龍國民小學', url: 'https://www.gdps.ntpc.edu.tw/' }
  ];

  const sections = [
    { id: 'competitions', title: '🏆 競賽表現', desc: '實戰解題與團隊合作' },
    { id: 'certifications', title: '📜 檢定證照', desc: '專業技術證明' },
    { id: 'projects', title: '💻 專案實作', desc: '系統開發歷程' },
    { id: 'outstanding', title: '🌟 特殊優良表現', desc: '各項殊榮與肯定' }
  ];

  const skillData = [
    { subject: '硬體調校', level: 55 }, { subject: 'Python', level:70 },
    { subject: 'C++', level: 50 }, { subject: '網路架構', level: 70 },
    { subject: '網頁開發', level: 60 }
  ];

  // 互動式終端機狀態管理
  const [cmdInput, setCmdInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState([
    { type: 'system', text: 'Welcome to DevOS v1.0.0' },
    { type: 'system', text: 'Type "help" to see available commands.' }
  ]);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // 自動捲動到最新指令
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [cmdHistory]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const cmd = cmdInput.trim().toLowerCase();
      let output = '';
      
      if (cmd === 'help') output = 'Commands: help, whoami, skills, clear';
      else if (cmd === 'whoami') output = '蕭珘紘 - A passionate developer!';
      else if (cmd === 'skills') output = skills.join(', ');
      else if (cmd === 'clear') { 
        setCmdHistory([]); 
        setCmdInput(''); 
        return; 
      }
      else if (cmd === '') {
        setCmdInput('');
        return;
      }
      else output = `Command not found: ${cmd}`;

      setCmdHistory([...cmdHistory, { type: 'user', text: `$ ${cmd}` }, { type: 'system', text: output }]);
      setCmdInput('');
    }
  };

  return (
    <div className="min-h-screen md:h-screen flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 md:overflow-hidden">
      <nav className="p-4 border-b border-slate-200 dark:border-slate-800 shrink-0">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-xl font-black">蕭珘紘<span className="text-blue-500">個人檔案</span></span>
        </div>
      </nav>

      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-6 min-h-0 md:overflow-y-auto">
        
        {/* 左欄：個人簡介與填滿空間的輪播圖 */}
        <section className="flex flex-col md:h-full gap-4 min-h-0">
          <div className="flex flex-col items-center md:items-start gap-4 shrink-0 text-center md:text-left">
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-white dark:border-slate-800 bg-slate-200">
              <img src="/IMG_9834.JPG" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-400">熱愛程式與籃球的高中生</h1>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              致力於資訊領域，對資訊安全與底層運作邏輯充滿熱忱。具備網頁開發、網路設備調校及虛擬網路架設等實務經驗。我已取得APCS與MTA國際認證，並能流暢配置WOL與RDP環境。
              <br/>除了軟體開發，我也嘗試進行硬體效能調校，致力於在資源限制下找出能順跑遊戲與高負載應用的最佳參數。
            </p>
            <div className="flex flex-wrap gap-1 justify-center md:justify-start">
              {skills.map(s => <span key={s} className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-[10px] font-semibold rounded">{s}</span>)}
            </div>
          </div>
          <div className="relative flex-1 rounded-2xl overflow-hidden shadow-inner bg-slate-200 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 mt-2 min-h-[250px] md:min-h-[150px]">
            {images.map((img, idx) => (
              <img key={idx} src={img} alt="Gallery" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === currentImg ? 'opacity-100' : 'opacity-0'}`} />
            ))}
          </div>
        </section>

        {/* 中欄：特質、興趣、學校、聯絡資訊與技術能力雷達圖 */}
        <section className="flex flex-col justify-start gap-4 p-4">
          <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col gap-3">
            <h2 className="font-bold text-lg">就讀學校</h2>
            <div className="flex flex-col gap-2">
              {education.map(edu => (
                <div key={edu.stage} className="flex items-center gap-3">
                  <span className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-2 py-1 rounded font-bold shrink-0">{edu.stage}</span>
                  <a href={edu.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-blue-500 hover:underline transition-colors truncate">{edu.school}</a>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <h2 className="font-bold mb-3 text-lg">個人特質 & 興趣</h2>
            <div className="flex flex-wrap gap-2 mb-3">
              {traits.map(t => <span key={t} className="text-sm bg-slate-50 dark:bg-slate-700 px-2 py-1 rounded-md">✨ {t}</span>)}
            </div>
            <div className="flex flex-wrap gap-2">
              {interests.map(i => <span key={i} className="text-sm bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 px-2 py-1 rounded-md">🎯 {i}</span>)}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <h2 className="font-bold mb-3 text-lg">聯絡資訊</h2>
            <p className="text-sm mb-2">📧 <a href="mailto:20080823a@gmail.com" className="hover:text-blue-500 transition-colors">20080823a@gmail.com</a></p>
            <p className="text-sm">📱 0958-202-895</p>
          </div>

          {/* 技術能力雷達圖 */}
          <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex-1 min-h-[250px] flex flex-col">
            <h2 className="font-bold mb-1 text-lg shrink-0">技術能力雷達</h2>
            <div className="w-full flex-1 min-h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillData}>
                  <PolarGrid stroke="#e2e8f0" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12 }} />
                  <Radar name="Skills" dataKey="level" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.5} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* 右欄：經歷入口與互動式終端機 */}
        <section className="flex flex-col justify-start gap-4 p-4">
          <h2 className="text-xl font-bold mb-2">探索專業軌跡</h2>
          <div className="flex flex-col gap-4">
            {sections.map(sec => (
              <Link key={sec.id} href={`/${sec.id}`} className="group bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md hover:-translate-y-1 transition-all">
                <h3 className="font-bold text-lg mb-1 group-hover:text-blue-500 transition-colors">{sec.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{sec.desc}</p>
              </Link>
            ))}
          </div>

          {/* 互動式終端機區塊 */}
          <div className="bg-[#1e1e1e] rounded-2xl shadow-sm border border-slate-700 p-4 font-mono text-sm h-64 flex flex-col mt-2">
            <div className="flex items-center gap-2 mb-2 shrink-0">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-slate-400 text-xs ml-2">guest@portfolio ~</span>
            </div>
            <div className="flex-1 overflow-y-auto text-emerald-400 space-y-1 text-xs">
              {cmdHistory.map((line, i) => (
                <div key={i} className={line.type === 'user' ? 'text-white' : 'text-emerald-400'}>
                  {line.text}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>
            <div className="flex mt-2 text-white text-xs shrink-0">
              <span className="mr-2 text-emerald-500">$</span>
              <input
                type="text"
                value={cmdInput}
                onChange={(e) => setCmdInput(e.target.value)}
                onKeyDown={handleCommand}
                className="bg-transparent outline-none flex-1"
                spellCheck={false}
                placeholder="Try 'help'..."
              />
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
