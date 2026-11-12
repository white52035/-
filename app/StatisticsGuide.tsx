"use client";

const concepts = [
  {
    no: "01",
    title: "集中趨勢",
    en: "CENTER",
    terms: "平均數 Mean · 中位數 Median · 眾數 Mode",
    explain: "平均數使用全部觀察值；中位數是排序後的中心；眾數是出現最多次的值，而且可能不只一個。三者回答的是『典型值在哪裡』，但對偏態與離群值的敏感度不同。",
    example: "講義例題 10, 7, 14, 23, 15, 7, 32：平均數約 15.43，中位數 14，眾數 7。",
    amis: "可比較阿美語敘事中的詞數、停頓時間或語意單位；分布偏斜時，中位數通常比平均數更能代表典型表現。",
  },
  {
    no: "02",
    title: "離散程度",
    en: "SPREAD",
    terms: "全距 Range · 四分位距 IQR",
    explain: "全距只看最大值與最小值，容易受極端值影響；IQR = Q3 - Q1，聚焦中間 50% 的資料，較能描述多數人的差異幅度。",
    example: "講義例題的最小值 7、最大值 32，因此全距為 25；IQR 則要先排序並找出 Q1 與 Q3。",
    amis: "同樣的平均停頓時間，可能伴隨完全不同的個體差異；研究報告至少要同時呈現中心與離散程度。",
  },
  {
    no: "03",
    title: "位置與異常值",
    en: "POSITION",
    terms: "Q1 · Q2 · Q3 · Outlier",
    explain: "Q2 就是中位數；Q1 與 Q3 把排序資料切成四段。常用的離群值界線是 Q1 - 1.5×IQR 與 Q3 + 1.5×IQR，但超出界線只表示值得檢查，不等於資料錯誤。",
    example: "講義示例 Q1=8、Q2=13、Q3=16，IQR=8；檢查界線為 -4 到 28。",
    amis: "極端低分可能來自認知變化，也可能是聽力、方言、教育、錄音品質或任務不熟悉；不可自動刪除或病理化。",
  },
  {
    no: "04",
    title: "分布形狀",
    en: "SHAPE",
    terms: "對稱 Symmetric · 右偏 Positive skew",
    explain: "對稱分布中平均數與中位數接近；右偏分布的長尾在右側，較大的少數值會把平均數往右拉，使平均數通常大於中位數。",
    example: "盒鬚圖能同時呈現中位數、四分位距、整體範圍與可能離群值；長鬚的一側提示尾部方向。",
    amis: "語言指標常不是常態分布，例如停頓時間與錯誤次數容易右偏；先看圖形，再決定摘要與後續模型。",
  },
  {
    no: "05",
    title: "資料呈現",
    en: "DISPLAY",
    terms: "點圖 · 次數表 · 直方圖",
    explain: "點圖保留每一個觀察值；次數表彙整每個值出現幾次；直方圖把連續資料分組，讀的是區間頻數，柱與柱通常相連。",
    example: "講義以成績區間 60–69、70–79、80–89、90–100 示範由次數分配表畫直方圖。",
    amis: "小樣本研究優先保留個別點，避免只有長條平均值而看不見部落、方言或個人的異質性。",
  },
  {
    no: "06",
    title: "比例與排序位置",
    en: "FREQUENCY",
    terms: "相對次數 RF · 累積相對次數 CRF · 百分位數",
    explain: "相對次數是某值次數除以總數；累積相對次數逐步加總至 1。百分位數說明一個值在整體排序中的相對位置，而不是答對百分比。",
    example: "20 筆資料中某值出現 7 次，RF=7/20=0.35；加上先前 0.10，CRF=0.45。",
    amis: "可說明某位長者的表現在在地同齡分布中的位置，但前提是參照群體經嚴謹篩選且文化、語言背景可比。",
  },
];

const workflow = [
  ["01", "確認單位", "一列是一位長者、一次任務，還是一個語句？先避免把重複觀察當成獨立樣本。"],
  ["02", "先畫分布", "小樣本用點圖；連續資料用直方圖；分組比較時保留個別資料點。"],
  ["03", "中心＋離散", "近似對稱可報平均數與標準差；偏態或有極端值時優先報中位數與 IQR。"],
  ["04", "追查離群值", "核對錄音、轉寫、聽力、方言、任務理解與臨床狀態，記錄處理理由。"],
  ["05", "再做推論", "描述統計只整理這批資料；要推廣到母群體，還需研究設計、抽樣、信賴區間、效應量與合適模型。"],
];

export default function StatisticsGuide() {
  return (
    <section className="statistics-view">
      <div className="statistics-hero">
        <div>
          <div className="section-kicker">STATISTICS LAB · WEEK 10</div>
          <h2>先看懂資料，<br /><em>再談顯著。</em></h2>
          <p>把 20 頁統計講義整理成一條可操作的閱讀路徑：中心、差異、位置、形狀、呈現與相對排序。</p>
        </div>
        <aside>
          <span>講義範圍</span>
          <strong>描述統計</strong>
          <p>本頁忠實整理講義涵蓋的 mean、median、mode、range、quartiles、IQR、outlier、distribution、frequency 與 percentile。</p>
          <a href="https://www.youtube.com/watch?v=XZo4xyJXCak" target="_blank" rel="noreferrer">開啟講義引用教學影片 ↗</a>
        </aside>
      </div>

      <div className="statistics-scope" role="note">
        <b>重要界線</b>
        <p>這份講義回答「資料長什麼樣」，尚未涵蓋抽樣分布、信賴區間、假設檢定、p 值或效應量。因此不能只憑平均數差異宣稱兩組有顯著差異，也不能把離群值直接判為疾病個案。</p>
      </div>

      <div className="statistics-heading">
        <div><div className="section-kicker">SIX READING LENSES</div><h3>六個統計閱讀鏡頭</h3></div>
        <p>每一項都同時回答：它是什麼、怎麼讀，以及如何用在阿美族高齡語言研究。</p>
      </div>
      <div className="statistics-concepts">
        {concepts.map((item) => (
          <details key={item.no} open={item.no === "01"}>
            <summary>
              <span>{item.no}</span>
              <div><small>{item.en}</small><h4>{item.title}</h4><p>{item.terms}</p></div>
              <b aria-hidden="true">＋</b>
            </summary>
            <div className="statistics-detail">
              <section><small>概念說明</small><p>{item.explain}</p></section>
              <section><small>講義例子</small><p>{item.example}</p></section>
              <aside><small>連回阿美族研究</small><p>{item.amis}</p></aside>
            </div>
          </details>
        ))}
      </div>

      <div className="statistics-example">
        <header><div className="section-kicker">WORKED EXAMPLE</div><h3>同一組數字，要一起看三件事</h3></header>
        <div className="statistics-example-grid">
          <div><small>原始資料</small><strong>10 · 7 · 14 · 23 · 15 · 7 · 32</strong><p>先排序：7, 7, 10, 14, 15, 23, 32</p></div>
          <div><span>中心</span><b>Mean ≈ 15.43</b><b>Median = 14</b><b>Mode = 7</b></div>
          <div><span>範圍</span><b>Range = 32 - 7</b><strong>25</strong></div>
          <aside><b>如何解讀？</b><p>平均數高於中位數，因為 32 把平均數往上拉。只報平均數會遮蔽資料形狀；應搭配排序、分布圖與離散指標。</p></aside>
        </div>
      </div>

      <div className="statistics-workflow">
        <div className="statistics-heading">
          <div><div className="section-kicker">RESEARCH WORKFLOW</div><h3>放進研究時的五步驟</h3></div>
          <p>從一張資料表走到可辯護的研究判讀。</p>
        </div>
        <ol>{workflow.map(([no, title, text]) => <li key={no}><span>{no}</span><div><b>{title}</b><p>{text}</p></div></li>)}</ol>
      </div>

      <div className="statistics-matrix">
        <header><div><div className="section-kicker">AMIS RESEARCH TRANSLATION</div><h3>阿美族研究的分析對照表</h3></div></header>
        <div className="statistics-table-wrap"><table>
          <thead><tr><th>研究資料</th><th>先畫什麼</th><th>優先摘要</th><th>不能直接下的結論</th></tr></thead>
          <tbody>
            <tr><td>敘事詞數、資訊單位</td><td>點圖／直方圖</td><td>平均＋SD 或中位數＋IQR</td><td>低於平均＝認知障礙</td></tr>
            <tr><td>停頓長度、找詞時間</td><td>直方圖＋個別點</td><td>中位數＋IQR</td><td>右偏＝病理</td></tr>
            <tr><td>錯誤類型、語碼轉換</td><td>次數／比例表</td><td>n 與百分比並列</td><td>切換多＝語言能力差</td></tr>
            <tr><td>同一人多次追蹤</td><td>個人折線圖</td><td>個人內變化與時間</td><td>把多次測量當多人樣本</td></tr>
            <tr><td>部落／方言分組</td><td>分層點圖</td><td>各組中心、離散與樣本數</td><td>整體平均可代表每一部落</td></tr>
          </tbody>
        </table></div>
      </div>

      <div className="statistics-gap">
        <small>研究缺口</small>
        <p>目前最需要的不是先找一個「顯著差異」，而是建立經臨床篩選、按年齡／教育／方言／語言使用史分層，且保留個人縱向變化的阿美族高齡語言描述基線。</p>
      </div>
      <div className="source-note">依據〈Introduction to Statistics／統計學簡介〉20 頁課程投影片逐頁整理；投影片取材自 The Organic Chemistry Tutor 教學影片。研究應用與阿美族研究連結為本平台的分析延伸，不是原講義的原文主張。</div>
    </section>
  );
}
