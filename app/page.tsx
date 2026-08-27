'use client';
import {useEffect,useMemo,useState} from 'react';

type Chapter={n:number;title:string;group:string;status:'完整'|'待補';core:string;research:string;gap:string;tags:string[]};
const raw=[
[1,'Language, Communities, Networks and Practices','社會脈絡','完整','語言表現必須放回共享規範、人際網絡與共同實踐中理解。','把家庭、教會、部落拆成「誰和誰、在什麼活動中使用」。','建立高齡者病前語言生態，區分使用減少與神經認知變化。','社會網絡,實踐社群'],
[2,'Regional and Social Variation','語群個案','待補','原始作業僅有未完成佔位文字。','待回到原書整理區域與社會變異。','補上非標準形式如何避免被臨床病理化。','變異,待補'],
[3,'Language and Gender','社會脈絡','完整','語言差異不能直接歸因於生理性別，須連同角色與文化情境解讀。','把「男女是否不同」改問為差異在何種社會角色中出現。','檢查病前基線與研究任務是否具有 gender bias。','性別,偏誤'],
[4,'Bilingualism and Multilingualism','多語生命史','完整','雙語能力動態、不對稱，會隨家庭、學校、工作與遷徙改變。','用完整多語生命史理解世代語言分工。','記錄習得年齡、使用史、優勢與生活功能。','雙語,生命史'],
[5,'Code-Switching and Diglossia','多語生命史','完整','語碼轉換是有功能的互動資源，不等於能力不足。','觀察族語與華語在不同場域的分工。','保留自然語料與切換目的，不以單語純度作為臨床指標。','語碼轉換,語域'],
[6,'Language and Power','社會脈絡','完整','權力存在於標準語、測驗、診斷與定義「正常」的過程。','不可把教科書形式視為唯一正確的阿美語。','讓參與者選擇資料使用範圍並參與結果解釋。','權力,資料治理'],
[7,'Language and Culture','社會脈絡','完整','文化適切不等於把測驗翻成阿美語或加入文化元素。','文化脈絡要在設計早期進入。','控制文化熟悉度，並處理共同設計與資料主權。','文化,共同設計'],
[8,'African American English','語群個案','待補','原始作業僅有未完成佔位文字。','待整理非主流英語變體的臨床意義。','補強「非標準不等於障礙」的個案證據。','非主流方言,待補'],
[9,'Language Change','社會脈絡','完整','語言不同不等於知道變化原因；必須定位變化者、時間與歷史條件。','區分語言演變、接觸、轉移與個人能力改變。','年齡不能取代語言世代、教育、遷徙等解釋。','語言變遷,世代'],
[10,'Language Planning','社會脈絡','完整','政策、教育、文字與標準化決定哪些形式被看見及評估。','並看政策設計與地方實際使用。','記錄受試者接觸過的文字、教育與標準語形式。','語言規劃,標準化'],
[11,'Dialect Perception and Attitudes to Variation','社會脈絡','完整','變異本身未必是問題，社會評價與刻板印象才會製造偏差。','把 variation、attitude 與 identity 一起研究。','先確認研究者的方言期待是否被打破。','方言態度,身份'],
[12,'Acquisition of Sociolinguistic Variation','識字與社會化','完整','兒童同時學會語法與「誰在什麼情境下怎麼說」。','把族語傳承視為語言社會化。','重建高齡者早期家庭、部落與世代語言環境。','社會化,習得'],
[13,'Bi- and Multilingual Language Acquisition','多語生命史','完整','多語習得是長期、動態且不平衡的生命歷程。','把家庭、沉浸教育與復振放入多語資源配置。','目前分數只是照片，需要重建一生的語言軌跡。','多語習得,語言軌跡'],
[14,'Assessing Language in Children Who Speak a Nonmainstream Dialect of English','臨床評估','待補','原始作業僅有未完成佔位文字。','待整理非主流方言兒童的公平評估。','優先補強 difference 與 disorder 的判讀邏輯。','評估,待補'],
[15,'Childhood Bilingualism: Distinguishing Difference from Disorder','臨床評估','待補','原始作業僅有未完成佔位文字。','待整理雙語差異與障礙的區分。','優先建立可轉用於高齡族語研究的對照框架。','雙語評估,待補'],
[16,'Speech Perception, Hearing Impairment and Linguistic Variation','臨床評估','完整','理解由聽力、訊號、方言與過去經驗共同形成。','研究「誰在什麼條件下能聽懂」。','不能把沒聽清楚直接當成認知或理解障礙。','聽力,語音知覺'],
[17,'Aphasia in Multilingual Populations','臨床評估','完整','多語失語評估須比較各語言的病前功能與損傷。','理解整體多語系統，而非只製作族語版測驗。','分開記錄病前雙語結構、病史、兩語表現與診斷。','失語症,多語臨床'],
[18,'Designing Assessments for Multilingual Children','臨床評估','完整','同一份測驗不必然公平；低分需要多重證據解釋。','建立能合理解釋不同族語使用者表現的評估邏輯。','驗證工具不會把語言差異誤判成認知障礙。','公平評估,工具設計'],
[19,'Literacy as a Sociolinguistic Process for Clinical Purposes','識字與社會化','完整','識字是社會文化中的生活實踐，不只是認字讀寫。','研究文字系統、教材、教會與高齡者的實際運用。','口語、羅馬字讀寫與教育程度不可混為一談。','識字,文字實踐'],
[20,'The Sociolinguistics of Sign Languages','識字與社會化','待補','原始作業僅有未完成佔位文字。','待補手語的社群、變異與臨床分類。','擴大對溝通模態的理解。','手語,待補'],
[21,'Managing Linguistic Diversity in the Clinic','臨床評估','完整','口譯員是互動參與者，不是透明的語言管道。','翻譯應視為研究設計與資料品質的一部分。','保留原始語料並記錄口譯者背景，控制 interpreter effect。','口譯,協作者']
] as const;
const chapters:Chapter[]=raw.map(x=>({n:x[0],title:x[1],group:x[2],status:x[3],core:x[4],research:x[5],gap:x[6],tags:x[7].split(',')}));
const groups=['全部','社會脈絡','多語生命史','臨床評估','識字與社會化','語群個案'];
const variables=[['病前語言生態','習得年齡、使用領域、優勢、方言、口語與文字經驗'],['社會網絡','互動對象、關係強度、頻率、語言選擇、網絡縮小事件'],['共同實踐','家庭、教會、農作、祭儀、工作與數位社群中的語言功能'],['臨床與感官','臨床分組、病史、用藥、聽力與視力'],['評估公平性','方言、文化熟悉度、教育、識字與任務偏誤'],['口譯與治理','協作者角色、提示紀錄、同意範圍、公開層級與撤回方式']];

export default function Home(){
 const [query,setQuery]=useState(''),[group,setGroup]=useState('全部'),[selected,setSelected]=useState(1),[tab,setTab]=useState('chapters'),[read,setRead]=useState<number[]>([]);
 useEffect(()=>{const s=localStorage.getItem('clinical-socio-read');if(s)setRead(JSON.parse(s));},[]);
 const filtered=useMemo(()=>chapters.filter(c=>(group==='全部'||c.group===group)&&`${c.n}${c.title}${c.core}${c.research}${c.gap}${c.tags}`.toLowerCase().includes(query.toLowerCase())),[query,group]);
 const current=chapters[selected-1]; const toggle=(n:number)=>{const next=read.includes(n)?read.filter(x=>x!==n):[...read,n];setRead(next);localStorage.setItem('clinical-socio-read',JSON.stringify(next));};
 return <main>
  <header className="topbar"><a className="brand" href="#top"><span className="brand-mark">CS</span><span>臨床社會語言學<small>READING FIELD NOTES</small></span></a><nav>{[['chapters','章節閱讀'],['research','研究地圖'],['plan','補件計畫']].map(x=><button key={x[0]} className={tab===x[0]?'active':''} onClick={()=>setTab(x[0])}>{x[1]}</button>)}</nav><a className="notion-link" href="https://app.notion.com/p/3c326041fe3781358b67eef7607d7298?pvs=204" target="_blank">開啟 Notion ↗</a></header>
  <section id="top" className="hero"><div className="eyebrow">MARTIN J. BALL, ED. · 2005</div><h1>讀語言，也讀進<br/><em>一個人的生活裡。</em></h1><p>21 章閱讀心得，從社會網絡、多語生命史與公平評估，走向高齡阿美語與神經認知研究的設計草圖。</p><div className="hero-stats">{[['21','章節'],['5','主題群'],['16','已整理'],[String(read.length),'我的已讀']].map(x=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</div></section>
  {tab==='chapters'&&<section className="reading-shell"><aside className="chapter-index"><div className="section-kicker">CHAPTER INDEX</div><label className="search"><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="搜尋概念、章節或關鍵詞"/></label><div className="filters">{groups.map(g=><button key={g} className={group===g?'active':''} onClick={()=>setGroup(g)}>{g}</button>)}</div><div className="chapter-list">{filtered.map(c=><button key={c.n} className={selected===c.n?'selected':''} onClick={()=>setSelected(c.n)}><span className="num">{String(c.n).padStart(2,'0')}</span><span><b>{c.title}</b><small>{c.group} · {c.status}</small></span><i>{read.includes(c.n)?'●':'○'}</i></button>)}</div></aside><article className="chapter-reader"><div className="reader-meta"><span>CHAPTER {String(current.n).padStart(2,'0')}</span><span className={current.status==='待補'?'pending':''}>{current.status}</span></div><h2>{current.title}</h2><div className="tag-row">{current.tags.map(t=><span key={t}>#{t}</span>)}</div>{[['01','本章核心',current.core],['02','對原住民族語研究',current.research],['03','未來研究與缺口',current.gap]].map((x,i)=><div className={'insight '+(i===0?'lead':'')} key={x[0]}><div className="insight-no">{x[0]}</div><div><h3>{x[1]}</h3><p>{x[2]}</p></div></div>)}<blockquote>「與標準不同」不等於「錯誤」；「低分」也不等於「疾病」。</blockquote><div className="reader-actions"><button onClick={()=>toggle(current.n)}>{read.includes(current.n)?'✓ 已完成閱讀':'標記為已讀'}</button><button disabled={current.n===21} onClick={()=>setSelected(Math.min(21,current.n+1))}>下一章 →</button></div></article></section>}
  {tab==='research'&&<section className="research-view"><div className="section-kicker">RESEARCH MAP</div><h2>從閱讀筆記，到可驗證的研究設計</h2><div className="research-question"><small>暫定研究主問題</small><p>如何區分高齡阿美語使用者的正常社會語言變化、語言使用減少／磨損，以及可能與神經認知變化相關的語言改變？</p></div><div className="path">{['生命史與制度脈絡','社會網絡與共同實踐','語言使用量與優勢','任務中的語言表現'].map((x,i)=><span key={x}><b>0{i+1}</b>{x}{i<3&&<i>→</i>}</span>)}</div><div className="variable-grid">{variables.map((x,i)=><article key={x[0]}><span>0{i+1}</span><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div><div className="caution">這是由閱讀心得整合出的研究設計草圖，不是已驗證的因果模型；後續仍需以原書、實證文獻與指導意見修正。</div></section>}
  {tab==='plan'&&<section className="plan-view"><div className="section-kicker">COMPLETION PLAN</div><h2>五章待補，一套共同寫作框架</h2><div className="priority-list">{[['第一優先','第 14、15 章','補強 difference / disorder、公平評估與非主流方言、雙語兒童的判讀邏輯。'],['第二優先','第 2、8 章','補足區域／社會變異與 African American English，建立「非標準不等於障礙」的證據鏈。'],['第三優先','第 20 章','補足手語社會語言學，擴大對溝通模態、社群與臨床分類的理解。']].map(x=><article key={x[0]}><span>{x[0]}</span><b>{x[1]}</b><p>{x[2]}</p></article>)}</div><div className="template"><h3>每章六步寫作模板</h3><div>{['核心論點與關鍵概念','最容易造成臨床誤判的情境','對臺灣原住民族語研究的可轉用觀點','對阿美語 × 高齡／認知研究的啟示','一項可驗證的假設或明確缺口','原書頁碼、直接引用與延伸文獻'].map((x,i)=><p key={x}><span>{String(i+1).padStart(2,'0')}</span>{x}</p>)}</div></div></section>}
  <footer><div><b>Clinical Sociolinguistics</b><span>閱讀心得與研究設計備忘</span></div><p>內容同步自 Notion 整理頁 · 個人閱讀筆記，不應直接視為已驗證之外部事實。</p></footer>
 </main>;
}
