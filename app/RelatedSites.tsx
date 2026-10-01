const resource = {
  name: "ASHA Practice Portal",
  title: "Dementia",
  organization: "American Speech-Language-Hearing Association",
  url: "https://www.asha.org/practice-portal/clinical-topics/dementia/",
  updated: "臨床實務入口",
};

const topics = [
  { no: "01", title: "失智症與 MCI", text: "辨識失智症、輕度認知障礙與典型老化的概念界線，並連結早發型及不同病因。" },
  { no: "02", title: "認知溝通與語言", text: "整理注意、記憶、執行功能、社會溝通、定向感與語言表現可能出現的變化。" },
  { no: "03", title: "評估與鑑別", text: "強調篩檢不等於單一工具；評估需考量文化、語言、環境、聽力及日常功能。" },
  { no: "04", title: "介入與照顧支持", text: "涵蓋認知溝通、吞嚥、環境調整，以及個案、家屬與照顧夥伴的支持策略。" },
];

export default function RelatedSites() {
  return <section className="sites-view">
    <header className="sites-hero">
      <div><div className="section-kicker">CURATED WEB RESOURCES</div><h2>相關網站</h2></div>
      <p>收錄可查證的專業機構資源，並標示它能回答的問題、研究用途與使用限制，方便從閱讀筆記直接連回臨床實務。</p>
    </header>

    <article className="site-feature">
      <div className="site-identity">
        <div className="site-monogram" aria-hidden="true">A</div>
        <div><small>{resource.organization}</small><h3>{resource.name}</h3><p>{resource.title}</p></div>
        <span>{resource.updated}</span>
      </div>

      <div className="site-summary">
        <div>
          <span>為什麼收錄</span>
          <p>這個主題頁將失智症的認知、溝通、語言、聽力與吞嚥放在跨專業照護脈絡中，適合用來核對研究術語、評估原則及語言治療師的角色。</p>
        </div>
        <a href={resource.url} target="_blank" rel="noreferrer" aria-label="前往 ASHA Dementia Practice Portal">
          <b>前往網站</b><small>ASHA · Dementia</small>
        </a>
      </div>

      <div className="site-topic-grid">
        {topics.map(topic => <section key={topic.no}>
          <span>{topic.no}</span><h4>{topic.title}</h4><p>{topic.text}</p>
        </section>)}
      </div>

      <div className="site-research-link">
        <div><small>連回本研究</small><h4>阿美族高齡語言評估的三個檢核點</h4></div>
        <ol>
          <li><b>語言適切</b><span>應在個案實際使用的語言中評估，不能只把華語分數直接套用。</span></li>
          <li><b>感官排除</b><span>認知評估前應留意聽力，避免把聽取困難誤判為理解或認知障礙。</span></li>
          <li><b>多源證據</b><span>整合生活功能、知情者資料、語言樣本及跨專業評估，不以單一篩檢工具下診斷。</span></li>
        </ol>
      </div>
    </article>

    <aside className="site-use-note"><b>使用提醒</b><p>ASHA Practice Portal 提供專業實務資訊，但內容以美國專業制度與英語研究為主要背景。應轉譯為臺灣與阿美族語情境，並搭配在地法規、文化脈絡、語言版本及合格專業人員判斷。</p></aside>

    <nav className="site-sync-links" aria-label="內容同步入口">
      <div><small>CONTENT SYNC</small><b>延伸閱讀與版本來源</b></div>
      <a href="https://app.notion.com/p/3c326041fe3781358b67eef7607d7298?pvs=204" target="_blank" rel="noreferrer"><span>研究整理</span><b>Notion</b></a>
      <a href="https://github.com/white52035/-" target="_blank" rel="noreferrer"><span>原始碼與版本</span><b>GitHub</b></a>
      <a href="https://www.asha.org/practice-portal/clinical-topics/dementia/" target="_blank" rel="noreferrer"><span>臨床實務原典</span><b>ASHA</b></a>
    </nav>
  </section>;
}
