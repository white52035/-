type Props = { onNavigate: (tab: string) => void };

const folders = [
  { no: "01", title: "核心命題與研究問題", meta: "研究主軸", tab: "research", text: "集中研究目的、核心假設、概念模型與研究缺口，作為所有資料的判斷基準。", items: ["正常老化、語言使用減少與病理退化的區辨", "阿美語 × 華語雙語生命史", "偏鄉高齡語言的文化公平評估"] },
  { no: "02", title: "章節理論與閱讀證據", meta: "書籍筆記", tab: "chapters", text: "把各章的社會語言學概念轉譯成可操作的阿美族研究變項與五分鐘口頭報告。", items: ["社會網絡與實踐社群", "多語、語碼轉換與語言權力", "臨床評估與語言差異"] },
  { no: "03", title: "臨床問題與社區實務", meta: "問題庫", tab: "qa", text: "整理正常老化、失智風險、健康常模、偏鄉轉介及文化活動等核心臨床問題。", items: ["正常老化 vs. 失智症", "無失智長者篩選", "社區預防與轉介閉環"] },
  { no: "04", title: "術語與評估工具", meta: "學習索引", tab: "glossary", text: "統一英文全名、縮寫、中文譯名與判讀限制；影片術語會同步收錄於此。", items: ["FTD、PPA、aphasia、ADRD", "MMSE、CDR、BNT", "語言文化適切性與常模限制"] },
  { no: "05", title: "文獻與研究缺口", meta: "證據庫", tab: "references", text: "集中期刊、博碩士論文、PPA／AD 研究與 APA 7 書目，追蹤哪些主張已有證據。", items: ["臺灣博碩士論文", "國際臨床研究", "阿美族與族語復振研究"] },
  { no: "06", title: "外部網站與影片", meta: "持續更新", tab: "videos", text: "收錄可追溯的專業網站與影音來源，整理核心重點、術語與研究轉譯。", items: ["ASHA Dementia Practice Portal", "FTD 與失語症影片", "來源、年份與適用限制"] },
];

const questions = [
  "高齡阿美族人的語言變化，哪些來自正常老化、語言轉移或使用頻率下降？",
  "哪些語言指標在控制教育、聽力、雙語背景與社會網絡後，仍能預測認知風險？",
  "如何建立具阿美語文化與語言適切性的語料、常模與轉介流程？",
  "母語與文化活動如何同時支持健康促進、自然觀察與早期風險辨識？",
];

const updates = [
  { date: "2026.10.24", title: "影片—術語同步架構", detail: "新增相關影片資料夾，並將 FTD、aphasia、PPA、bvFTD 等詞彙同步至補充說明。" },
  { date: "2026.10.24", title: "術語學習 UX", detail: "補充說明新增搜尋、分類篩選、下拉定義與影片來源追蹤。" },
  { date: "2026.10.01", title: "ASHA 十區深入分析", detail: "完成 Dementia Practice Portal 十個區塊的臨床判讀與阿美族研究轉譯。" },
];

export default function AmisResearchHub({ onNavigate }: Props) {
  return <section className="amis-hub">
    <header className="amis-hub-hero">
      <div><div className="section-kicker">MY RESEARCH CORE · LIVING FOLDER</div><h2>阿美族研究核心</h2></div>
      <div className="amis-thesis"><small>研究總命題</small><p>建立以阿美語生命史、社會網絡與自然語料為基礎的文化公平評估，區分正常老化、語言使用減少與神經認知疾病相關的語言變化。</p></div>
    </header>

    <div className="amis-dashboard">
      <section className="amis-question-panel">
        <header><small>CORE QUESTIONS</small><h3>四個核心研究問題</h3></header>
        <ol>{questions.map((question, index) => <li key={question}><span>{String(index + 1).padStart(2, "0")}</span><p>{question}</p></li>)}</ol>
      </section>
      <aside className="amis-principles">
        <small>判讀原則</small>
        <blockquote>「與標準不同」不等於錯誤；「低分」也不等於疾病。</blockquote>
        <div><b>個人縱向</b><span>優先比較同一人的變化</span></div>
        <div><b>多源證據</b><span>語料、功能、家屬與醫療共同判讀</span></div>
        <div><b>文化安全</b><span>由部落與族語協作者共同設計</span></div>
      </aside>
    </div>

    <section className="amis-folder-section">
      <header><div><small>CONNECTED FOLDERS</small><h3>研究資料總目錄</h3></div><p>由此進入平台既有內容；每個資料夾都回到同一個阿美族研究主軸。</p></header>
      <div className="amis-folder-grid">{folders.map(folder => <article key={folder.no}>
        <div className="amis-folder-tab"><span>{folder.no}</span><small>{folder.meta}</small></div>
        <h4>{folder.title}</h4><p>{folder.text}</p>
        <ul>{folder.items.map(item => <li key={item}>{item}</li>)}</ul>
        <button onClick={() => onNavigate(folder.tab)}>開啟資料夾</button>
      </article>)}</div>
    </section>

    <section className="amis-update-log">
      <header><small>UPDATE LOG</small><h3>陸續更新紀錄</h3><p>保留內容加入與方法調整的時間線，方便回顧研究如何形成。</p></header>
      <div>{updates.map(update => <article key={`${update.date}-${update.title}`}><time>{update.date}</time><section><h4>{update.title}</h4><p>{update.detail}</p></section></article>)}</div>
    </section>

    <aside className="amis-next-note"><b>後續資料歸檔原則</b><p>新資料先判斷屬於「理論、臨床問題、術語工具、文獻證據、外部來源」哪一類，再從此核心頁建立入口；避免相同內容散落而無法追蹤。</p></aside>
  </section>;
}
