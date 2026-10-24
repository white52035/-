import { getMedicalTerm } from "./medicalTerms";

type Video = {
  id: string;
  title: string;
  channel: string;
  year: string;
  duration: string;
  url: string;
  focus: string;
  chapters?: string[];
  points: string[];
  termIds: string[];
  research: string;
  caution: string;
};

const videos: Video[] = [
  {
    id: "QuJFLr5Ib9k",
    title: "What is frontotemporal dementia?",
    channel: "Alzheimer’s Society",
    year: "2017",
    duration: "2:49",
    url: "https://www.youtube.com/watch?v=QuJFLr5Ib9k",
    focus: "以短篇方式說明額顳葉失智症的腦區、可能病因與早期表現，特別強調人格、行為、情緒反應與語言改變。",
    chapters: ["0:00｜FTD 是什麼", "0:54｜可能病因", "1:35｜常見症狀"],
    points: [
      "FTD 是一組以額葉與顳葉神經細胞受損為核心的疾病，而不是單一且完全一致的病型。",
      "額葉與行為控制、判斷、抑制及情緒反應密切相關；顳葉則參與語意、詞彙與人物／物件知識處理。",
      "症狀可能先表現為人格與行為改變，或出現找詞、理解及表達困難，不一定先以記憶喪失為主。",
      "FTD 相對少見，但比許多其他失智病因更可能影響 65 歲以下的較年輕成人。",
    ],
    termIds: ["ftd", "frontal-lobe", "temporal-lobe", "dementia", "neurodegeneration", "word-finding"],
    research: "研究阿美族高齡語言時，可比較自然敘事中的找詞、語意內容與語用行為是否出現『個人內的持續改變』，而非僅以華語命名測驗低分判定異常。",
    caution: "人格改變、找不到字或 65 歲以下發病都不能單獨診斷 FTD；仍需神經科、精神科、神經心理與語言評估共同鑑別。",
  },
  {
    id: "Tn6YlinSaBc",
    title: "Bruce Willis Has Frontotemporal Dementia — Early Signs Everyone Misses",
    channel: "Doctor KDM",
    year: "2026",
    duration: "2:29",
    url: "https://www.youtube.com/watch?v=Tn6YlinSaBc",
    focus: "從公開個案切入，提醒失智症不只是記憶喪失；FTD 可能先出現失語、說話問題、人格與行為改變，並連結可調整的腦健康風險。",
    points: [
      "影片以 Bruce Willis 的公開診斷為引子，說明 FTD 的早期表現可能被家人誤認為個性、壓力或一般老化。",
      "失語症是語言系統受損的表現，可涉及說、聽理解、命名、閱讀或書寫；它不等同智力消失。",
      "FTD 與阿茲海默症的典型起始輪廓不同：前者可先以行為或語言變化為主，後者較常以新近記憶問題受到注意。",
      "突然發作的說話困難、臉歪或單側無力需優先視為中風警訊；漸進性的語言改變則需接受完整神經評估。",
      "血壓、糖尿病、膽固醇、睡眠呼吸中止、身體活動與聽力均與整體腦健康有關，但風險降低策略不能保證預防特定失智症。",
    ],
    termIds: ["ftd", "aphasia", "ppa", "bvftd", "cognitive-decline", "stroke", "sleep-apnea", "modifiable-risk"],
    research: "可把『語言症狀先於記憶主訴』納入阿美族研究的轉介條件，並以族語與華語雙軌語料、家屬時間線及日常功能資料確認變化是否跨情境持續。",
    caution: "影片屬健康教育而非個案診斷工具；Bruce Willis 的公開資訊不代表所有失語症或 FTD 患者都具有相同病程。",
  },
];

export default function RelatedVideos() {
  return <section className="videos-view">
    <header className="videos-hero">
      <div><div className="section-kicker">VIDEO RESEARCH FOLDER · 01 CHANNEL + {videos.length.toString().padStart(2, "0")} VIDEOS</div><h2>相關影片</h2></div>
      <p>把影片當作學術導讀入口：先掌握核心主張，再核對醫療術語、縮寫與臨床限制。後續新增影片時，可沿用同一套整理架構。</p>
    </header>

    <div className="video-folder-bar">
      <div><span aria-hidden="true">▶</span><b>腦醫學、FTD、失語症與語言變化</b></div>
      <p><strong>1</strong> 個頻道 · <strong>{videos.length}</strong> 部影片 · 核心重點 · 術語辭典 · 阿美族研究連結</p>
    </div>

    <article className="channel-resource">
      <div className="channel-mark" aria-hidden="true"><span>PN</span><small>BRAIN<br/>MEDICINE</small></div>
      <div className="channel-content">
        <small>YOUTUBE CHANNEL · 持續更新來源</small>
        <h3>Dr. PN腦醫學</h3>
        <p>介紹神經醫學的近期發展，內容特別聚焦大腦老化、神經退化疾病的預防與治療知識。可作為追蹤新議題與建立醫療術語問題清單的導讀入口。</p>
        <div className="channel-topics"><span>大腦老化</span><span>神經退化</span><span>失智症</span><span>影像與生物標記</span><span>巴金森症</span></div>
      </div>
      <div className="channel-guide">
        <b>近期內容脈絡</b>
        <ul><li>類澱粉 PET 與 Centiloid 判讀</li><li>腦血管周圍間隙與清除系統</li><li>光遺傳學、失智與巴金森症</li></ul>
        <a href="https://www.youtube.com/@PNbrainmedicine" target="_blank" rel="noreferrer">前往頻道 <span aria-hidden="true">↗</span></a>
      </div>
      <aside><b>連回阿美族研究</b><p>可用來建立「神經醫學新知候選清單」，再逐題查核原始研究，評估哪些生物標記、風險因子或介入概念能與阿美語自然語料、文化活動及偏鄉轉介流程形成可檢驗的跨領域假設。</p><small>頻道影片是導讀材料；涉及診斷、治療或風險數值時，仍須回到同儕審查論文、臨床指引與專業評估。</small></aside>
    </article>

    <div className="video-library">
      {videos.map((video, index) => <article className="video-entry" key={video.id}>
        <div className="video-cover">
          <img src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`} alt={`${video.title} 影片縮圖`} />
          <a href={video.url} target="_blank" rel="noreferrer" aria-label={`在 YouTube 觀看 ${video.title}`}><span>▶</span><b>觀看影片</b></a>
          <small>{video.duration}</small>
        </div>
        <div className="video-heading">
          <span>VIDEO {String(index + 1).padStart(2, "0")}</span>
          <div><small>{video.channel} · {video.year}</small><h3>{video.title}</h3><p>{video.focus}</p></div>
        </div>

        {video.chapters && <div className="video-chapters">{video.chapters.map(chapter => <span key={chapter}>{chapter}</span>)}</div>}

        <details className="video-analysis" open>
          <summary><b>核心重點</b><span>逐點閱讀</span><i aria-hidden="true">＋</i></summary>
          <ol>{video.points.map(point => <li key={point}>{point}</li>)}</ol>
        </details>

        <details className="video-analysis" open>
          <summary><b>學術／醫療專有名詞</b><span>英文 · 縮寫 · 中文定義</span><i aria-hidden="true">＋</i></summary>
          <div className="term-cards">{video.termIds.map(getMedicalTerm).filter(Boolean).map(term => term && <section key={term.id}>
            <div><h4>{term.term}</h4>{term.abbr && <b>{term.abbr}</b>}</div>
            <strong>{term.zh}</strong><p>{term.definition}</p>
          </section>)}</div>
        </details>

        <div className="video-research-note">
          <section><small>連回阿美族／多語研究</small><p>{video.research}</p></section>
          <section><small>臨床判讀注意</small><p>{video.caution}</p></section>
        </div>
      </article>)}
    </div>

    <aside className="video-source-note">
      <b>資料範圍</b>
      <p>本頁依影片公開標題、說明欄與章節資訊整理；術語定義為平台補充的醫學導讀，不等同影片逐字稿，也不能取代專業診斷。影片內容與外部連結可能更新。</p>
    </aside>
  </section>;
}
