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
  </section>;
}
