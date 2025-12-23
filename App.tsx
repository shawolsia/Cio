
import React, { useState } from 'react';
import { 
  Database, 
  Share2, 
  Users, 
  Zap, 
  Layers, 
  BookOpen, 
  ShieldCheck,
  TrendingUp,
  Fingerprint,
  RefreshCw,
  Search,
  Link,
  Code,
  ShieldAlert
} from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'philosophy' | 'data' | 'crawler' | 'logic' | 'mvp'>('philosophy');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-200">C</div>
            <h1 className="text-xl font-bold tracking-tight">Cio <span className="text-slate-400 font-normal">| 技术合伙人方案</span></h1>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-500">
            <button onClick={() => setActiveSection('philosophy')} className={activeSection === 'philosophy' ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' : 'hover:text-slate-900'}>产品哲学</button>
            <button onClick={() => setActiveSection('data')} className={activeSection === 'data' ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' : 'hover:text-slate-900'}>数据模型</button>
            <button onClick={() => setActiveSection('crawler')} className={activeSection === 'crawler' ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' : 'hover:text-slate-900'}>采集与同步</button>
            <button onClick={() => setActiveSection('logic')} className={activeSection === 'logic' ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' : 'hover:text-slate-900'}>推荐算法</button>
            <button onClick={() => setActiveSection('mvp')} className={activeSection === 'mvp' ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' : 'hover:text-slate-900'}>MVP 路径</button>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto w-full p-6 space-y-12 mb-20">
        
        {/* Section 1: Philosophy */}
        {activeSection === 'philosophy' && (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-8">
              <h2 className="text-3xl font-extrabold mb-4 text-slate-900">核心思想：建立“味道”映射</h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
                Cio 的目标不是评估作品的“绝对分值”，而是刻画用户的“品味坐标”。
                我们通过选择（LOVE/NOT FOR ME）将用户和作品拉入同一个高维空间。
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Fingerprint className="text-rose-600" />, title: "品味指纹", desc: "选择构成的非线性向量，比评分更能刻画'我是谁'。" },
                { icon: <Share2 className="text-indigo-600" />, title: "信任传播", desc: "基于口味相似度的加权，实现'我信的人'的精准推荐。" },
                { icon: <Zap className="text-amber-600" />, title: "低熵决策", desc: "极简四档位选择，消除评分纠结，大幅提升互动率。" }
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 2: Data Model */}
        {activeSection === 'data' && (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-extrabold mb-8 flex items-center gap-3">
              <Database className="text-indigo-600" /> 数据 Schema 与去重
            </h2>
            <div className="bg-slate-900 rounded-2xl p-6 text-indigo-300 font-mono text-xs overflow-x-auto shadow-2xl border border-slate-700">
              <pre>{`
{
  "novel_id": "cio_u892",
  "title": "诡秘之主",
  "author": "爱潜水的乌贼",
  "canonical_hash": "e10adc3949ba59abbe56e057f20f883e", // md5(normalized_title + author)
  "sources": [
    { "platform": "qidian", "ext_id": "1010868267", "url": "..." },
    { "platform": "jjwxc", "ext_id": "...", "url": "..." }
  ],
  "tags": ["克苏鲁", "蒸汽朋克", "序列晋升"],
  "cio_index": 0.89,  // 动态加权后的味道分
  "last_sync": 1715432000
}`}</pre>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-white rounded-xl border border-slate-200">
                <h4 className="font-bold flex items-center gap-2 mb-3"><ShieldAlert size={18} className="text-amber-500" /> 去重合并规则</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  <strong>冲突处理：</strong> 当发生 Hash 冲突时，系统优先保留源平台权重高（如起点、晋江）的元数据，并将新平台 ID 追加入 `sources` 数组。这样即便同一本书在多地发布，用户评分也会指向同一个 Canonical ID。
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl border border-slate-200">
                <h4 className="font-bold flex items-center gap-2 mb-3"><RefreshCw size={18} className="text-indigo-500" /> 增量同步逻辑</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  <strong>按热度更新：</strong> 用户“LOVE”选择越多、近期访问越频繁的小说，元数据同步频率越高（如每日）；冷门小说仅在元数据缺失时手动同步。
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Section 3: Crawler & Import */}
        {activeSection === 'crawler' && (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-extrabold mb-8 flex items-center gap-3">
              <Layers className="text-indigo-600" /> 采集与导入系统架构
            </h2>
            <div className="space-y-8">
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { icon: <Link />, title: "1. Resolver", desc: "解析用户粘贴的 URL，提取平台原始 ID。" },
                  { icon: <Search />, title: "2. Scraper", desc: "针对原始 ID 异步请求元数据（简介、标签）。" },
                  { icon: <Code />, title: "3. Normalizer", desc: "标题清洗，繁简转换，计算 Canonical Hash。" },
                  { icon: <Database />, title: "4. Importer", desc: "写入数据库，建立多平台映射关系。" }
                ].map((s, i) => (
                  <div key={i} className="p-4 bg-indigo-50 rounded-xl border border-indigo-100 flex flex-col items-center text-center">
                    <div className="mb-2 text-indigo-600">{s.icon}</div>
                    <div className="font-bold text-sm mb-1">{s.title}</div>
                    <div className="text-xs text-slate-500">{s.desc}</div>
                  </div>
                ))}
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h4 className="font-bold mb-6 flex items-center gap-2">数据来源优先级</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <span className="text-sm font-medium">1. 用户手动添加 (Link Resolver)</span>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-md font-bold">最高优先级 (JIT)</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <span className="text-sm font-medium">2. 各平台榜单定时抓取 (Monthly Top 500)</span>
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-md font-bold">批量导入</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <span className="text-sm font-medium">3. 后台管理员 CSV 批量录入</span>
                    <span className="text-xs px-2 py-1 bg-slate-200 text-slate-600 rounded-md font-bold">辅助工具</span>
                  </div>
                </div>
                <div className="mt-6 p-4 border-l-4 border-amber-400 bg-amber-50 text-xs text-amber-900 italic">
                  合规提示：我们仅存储标题、作者、标签和 URL 指向，坚决不抓取任何章节正文，从源头规避法律风险。
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section 4 & 5... similar pattern for Logic and MVP */}
        {activeSection === 'logic' && (
           <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
             <h2 className="text-3xl font-extrabold mb-8 flex items-center gap-3">
               <TrendingUp className="text-indigo-600" /> 推荐：品味部落算法
             </h2>
             <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
                <div className="flex gap-4">
                   <div className="w-1 h-auto bg-indigo-600 rounded-full"></div>
                   <div>
                      <h4 className="font-bold">协同过滤的 Cio 变体</h4>
                      <p className="text-sm text-slate-600">
                        传统推荐算“分数相关”，我们算“品味重合”。<br/>
                        相似度(A, B) = (A∩B 的 LOVE 权重) - (A∩B 的口味背离权)。
                      </p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="w-1 h-auto bg-indigo-600 rounded-full"></div>
                   <div>
                      <h4 className="font-bold">KOL 节点影响力</h4>
                      <p className="text-sm text-slate-600">
                        KOL 不是粉丝多，而是“有效评价多”。系统会识别出在特定流派（如：无限流）中评价最准确的一群人，赋予其更高的 Cio Index 权重。
                      </p>
                   </div>
                </div>
             </div>
           </section>
        )}

        {activeSection === 'mvp' && (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-extrabold mb-8 flex items-center gap-3">
              <BookOpen className="text-indigo-600" /> MVP 阶段执行优先级
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-white border-2 border-indigo-600 rounded-2xl shadow-xl">
                <h4 className="font-extrabold text-indigo-600 mb-4 uppercase tracking-widest text-xs">P0: 必须先做</h4>
                <ul className="space-y-3 text-sm font-medium">
                  <li className="flex items-center gap-2"><CheckSquare /> 核心四档位选择交互</li>
                  <li className="flex items-center gap-2"><CheckSquare /> 晋江/起点/番茄 链接解析器</li>
                  <li className="flex items-center gap-2"><CheckSquare /> 基于 md5 的简单去重逻辑</li>
                  <li className="flex items-center gap-2"><CheckSquare /> 个人“LOVE”书单公开页面</li>
                </ul>
              </div>
              <div className="p-6 bg-white border border-slate-200 rounded-2xl opacity-60">
                <h4 className="font-extrabold text-slate-400 mb-4 uppercase tracking-widest text-xs">P1: 暂缓实施</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">全网小说全量爬取</li>
                  <li className="flex items-center gap-2">深度神经网络推荐模型</li>
                  <li className="flex items-center gap-2">多端实时数据同步</li>
                  <li className="flex items-center gap-2">自动化的版权比对系统</li>
                </ul>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Persistent Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-slate-200 py-4 z-50">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
           <p className="text-xs text-slate-500 font-medium">技术合伙人建议：单人开发应聚焦于“链接解析”而非“全网爬虫”</p>
           <button className="bg-indigo-600 text-white text-xs px-4 py-2 rounded-lg font-bold hover:bg-indigo-700 transition-colors">
              确认方案并开始原型构建
           </button>
        </div>
      </div>
    </div>
  );
};

const CheckSquare = () => <div className="w-4 h-4 bg-indigo-100 rounded text-indigo-600 flex items-center justify-center">✓</div>;

export default App;
