const terms = [
  {
    term: "cognitive decline",
    zh: "認知功能退化／認知衰退",
    note: "描述認知能力相較過去下降的現象；可能與正常老化、疾病或其他因素有關，本身不是特定診斷。",
  },
  {
    term: "cognitive impairment",
    zh: "認知障礙／認知功能障礙",
    note: "泛指一項或多項認知功能低於預期或受損，程度與原因不一，不必然等同失智症。",
  },
  {
    term: "MCI",
    full: "Mild Cognitive Impairment",
    zh: "輕度認知障礙",
    note: "有客觀或主觀認知下降，但日常獨立功能大致保留；部分個案可能穩定、改善或進展，不能直接等同早期失智症。",
  },
  {
    term: "dementia",
    zh: "失智症／認知障礙症",
    note: "指認知下降已明顯影響日常獨立功能的臨床症候群。臺灣健康與公共溝通常用「失智症」；「認知障礙症」亦見於部分專業脈絡。",
  },
  {
    term: "Alzheimer’s disease",
    zh: "阿茲海默症",
    note: "一種特定神經退化性疾病，也是失智症常見病因之一；Alzheimer’s disease 與 dementia 不是完全相同的概念。",
  },
  {
    term: "ADRD",
    full: "Alzheimer’s Disease and Related Dementias",
    zh: "阿茲海默症及相關失智症",
    alt: "亦可依文脈譯為：阿茲海默症相關神經退化性疾病",
    note: "集合用語，涵蓋阿茲海默症及其他相關失智疾病；實際納入範圍應依研究或政策文件定義。",
  },
  {
    term: "PPA",
    full: "Primary Progressive Aphasia",
    zh: "原發性漸進性失語症",
    alt: "亦稱：原發性進行性失語症",
    note: "以語言能力逐漸退化為主要早期表現的臨床症候群，包含不同亞型；不能只憑一般找字困難判定。",
  },
];

const assessments = [
  {
    code: "MMSE",
    zh: "簡易心智量表",
    icon: "30",
    role: "整體認知篩檢",
    prompt: "整體認知表現是否需要進一步評估？",
    measures: ["定向感", "記憶", "注意與計算", "語言", "視空間"],
    reading: "總分 30 分；可用於初步篩檢與追蹤，但分數須依版本、年齡、教育、語言及文化背景解讀，不能用單一固定門檻直接診斷。",
    source: "https://www.parinc.com/docs/default-source/product-resources/fact-sheet-mmse-2_rev.pdf",
    sourceLabel: "MMSE-2 官方資料",
  },
  {
    code: "CDR",
    zh: "臨床失智評估量表",
    icon: "0–3",
    role: "嚴重度與日常功能分級",
    prompt: "認知變化已在多大程度影響生活？",
    measures: ["記憶", "定向", "判斷／解題", "社區事務", "居家／嗜好", "個人照顧"],
    reading: "Global CDR 為 0、0.5、1、2、3。評分需結合個案與可靠知情者的半結構訪談；CDR 0.5 表示極輕度受損，不應直接等同所有 MCI。",
    source: "https://knightadrc.wustl.edu/professionals-clinicians/cdr-dementia-staging-instrument/",
    sourceLabel: "CDR 官方說明",
  },
  {
    code: "COOKIE THEFT",
    zh: "偷餅乾圖描述測驗",
    icon: "話",
    role: "自發語言與敘事",
    prompt: "一段自然描述是否完整、連貫且有資訊？",
    measures: ["資訊量", "詞彙／語意", "句法", "流利度", "篇章連貫"],
    reading: "以圖畫引出自發描述，源自 Boston Diagnostic Aphasia Examination。宜分析內容單位、錯誤類型與話語組織，而非只看字數；正式刺激材料涉及版權，本站不重製圖版。",
    source: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6437702/",
    sourceLabel: "開放研究全文",
  },
  {
    code: "ANIMAL FLUENCY",
    zh: "動物流暢度測驗",
    icon: "60s",
    role: "語意搜尋與執行功能",
    prompt: "60 秒內能如何搜尋、群聚與切換語意類別？",
    measures: ["語意記憶", "詞彙提取", "處理速度", "群聚", "切換策略"],
    reading: "常見作法是 60 秒內說出盡可能多的動物名稱。總數、重複／侵入錯誤、群聚與切換皆可分析；沒有跨語言、跨族群通用的單一正常值。",
    source: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2783556/",
    sourceLabel: "常模研究",
  },
  {
    code: "BNT",
    zh: "波士頓命名測驗",
    icon: "名",
    role: "圖片命名與詞彙提取",
    prompt: "看見物件後，能否準確取得並說出名稱？",
    measures: ["對面命名", "語意知識", "詞彙提取", "提示反應", "錯誤類型"],
    reading: "以線描圖片評估命名，常用於失語症與神經退化疾病。應記錄語意、音韻及無反應等錯誤，並採用合適語言版本與在地常模；正式施測材料需依授權使用。",
    source: "https://www.pearsonassessments.com/content/dam/school/global/clinical/us/assets/telepractice/equivalence-evidence-for-remote-assessment.pdf",
    sourceLabel: "Pearson 測驗資料",
  },
];

export default function Glossary() {
  return <section className="glossary-view">
    <header className="glossary-hero">
      <div><div className="section-kicker">TERMINOLOGY · CLINICAL CONTEXT</div><h2>補充說明</h2></div>
      <div className="glossary-intro"><b>中英術語對照</b><p>同一中文詞在研究、臨床與公共溝通中可能有不同使用習慣。撰寫論文時，建議首次出現同時標示英文，並在全文維持一致。</p></div>
    </header>

    <div className="term-list">
      {terms.map((item, index) => <article key={item.term}>
        <div className="term-index">{String(index + 1).padStart(2, "0")}</div>
        <div className="term-en"><h3>{item.term}</h3>{item.full && <p>{item.full}</p>}</div>
        <div className="term-zh"><h4>{item.zh}</h4>{item.alt && <small>{item.alt}</small>}<p>{item.note}</p></div>
      </article>)}
    </div>

    <div className="term-map" aria-label="術語層級關係">
      <div><span>現象描述</span><b>cognitive decline</b><small>是否下降？</small></div>
      <i aria-hidden="true">→</i>
      <div><span>功能狀態</span><b>cognitive impairment</b><small>是否低於預期？</small></div>
      <i aria-hidden="true">→</i>
      <div><span>臨床分類</span><b>MCI / dementia</b><small>日常獨立功能是否受影響？</small></div>
      <i aria-hidden="true">→</i>
      <div><span>病因或症候群</span><b>AD / ADRD / PPA</b><small>由何種疾病或表現型造成？</small></div>
    </div>

    <aside className="glossary-note"><b>寫作提醒</b><p>避免將「認知衰退」直接寫成「失智症」，也不要把 MCI 視為必然進展至 dementia。涉及個案時，診斷名稱應依合格醫療專業人員的正式紀錄。</p></aside>

    <section className="assessment-section" aria-labelledby="assessment-title">
      <header className="assessment-heading">
        <div><div className="section-kicker">ASSESSMENT TOOLS · AT A GLANCE</div><h3 id="assessment-title">評估工具</h3></div>
        <p>用「看什麼、怎麼讀」辨識每項工具的角色。五項工具彼此互補，<b>不是一套可自行診斷失智症的固定測驗包</b>。</p>
      </header>

      <div className="assessment-cards">
        {assessments.map((tool, index) => <article key={tool.code} className={`assessment-card tool-${index + 1}`}>
          <header>
            <div className="assessment-icon" aria-hidden="true">{tool.icon}</div>
            <div><small>{tool.role}</small><h4>{tool.code}</h4><p>{tool.zh}</p></div>
          </header>
          <blockquote>{tool.prompt}</blockquote>
          <div className="measure-tags" aria-label={`${tool.zh}評估面向`}>
            {tool.measures.map(item => <span key={item}>{item}</span>)}
          </div>
          <p className="assessment-reading">{tool.reading}</p>
          <a href={tool.source} target="_blank" rel="noreferrer">{tool.sourceLabel}<span aria-hidden="true">↗</span></a>
        </article>)}
      </div>

      <div className="assessment-matrix" aria-label="評估工具功能矩陣">
        <header><div><small>FUNCTION MATRIX</small><h4>五項工具，各自回答什麼？</h4></div><p>● 主要焦點　○ 可提供輔助資訊</p></header>
        <div className="matrix-table" role="table">
          <div className="matrix-row matrix-head" role="row"><b role="columnheader">工具</b><span role="columnheader">整體認知</span><span role="columnheader">功能／分級</span><span role="columnheader">詞彙提取</span><span role="columnheader">語意／執行</span><span role="columnheader">自然敘事</span></div>
          {[
            ["MMSE", "●", "○", "○", "○", "—"],
            ["CDR", "○", "●", "○", "○", "○"],
            ["Cookie Theft", "—", "—", "○", "○", "●"],
            ["Animal Fluency", "—", "—", "●", "●", "—"],
            ["BNT", "—", "—", "●", "○", "—"],
          ].map(row => <div className="matrix-row" role="row" key={row[0]}>{row.map((cell, index) => index === 0 ? <b role="rowheader" key={cell}>{cell}</b> : <span role="cell" key={`${row[0]}-${index}`} className={cell === "●" ? "primary" : ""}>{cell}</span>)}</div>)}
        </div>
      </div>

      <div className="assessment-flow">
        <div className="assessment-flow-title"><small>COMBINED VIEW</small><h4>研究組合示例</h4><p>由廣到深，建立多來源證據；實際選用應由研究問題、受測語言與專業人員決定。</p></div>
        <div className="assessment-steps">
          {["MMSE｜整體篩檢", "CDR｜功能分級", "Animal Fluency｜語意搜尋", "BNT｜圖片命名", "Cookie Theft｜自然敘事"].map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, "0")}</span><b>{step}</b>{index < 4 && <i aria-hidden="true">→</i>}</div>)}
        </div>
      </div>

      <aside className="assessment-caution"><b>判讀安全線</b><p>篩檢結果是「需要進一步了解」的訊號，不是診斷。應整合病史、教育與語言背景、聽視覺狀況、情緒、日常功能、知情者訪談及其他神經心理／醫療評估；用於阿美族或其他多語社群時，更需在地語言版本、文化適切刺激與相符常模。</p></aside>
    </section>
  </section>;
}
