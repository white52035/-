type Term = { term: string; abbr?: string; zh: string; definition: string };

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
  terms: Term[];
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
    terms: [
      { term: "Frontotemporal Dementia", abbr: "FTD", zh: "額顳葉失智症", definition: "一組主要影響大腦額葉與顳葉的進行性神經退化疾病，可先出現行為、人格、執行功能或語言變化。" },
      { term: "Frontal Lobe", zh: "額葉", definition: "參與計畫、判斷、抑制控制、社會行為、情緒調節及語言產出等功能的腦區。" },
      { term: "Temporal Lobe", zh: "顳葉", definition: "參與聽覺處理、語言理解、語意記憶及人物與物件辨識的腦區。" },
      { term: "Dementia", zh: "失智症／認知障礙", definition: "多種腦部疾病造成的臨床症候群；認知下降已明顯干擾日常功能與獨立生活。" },
      { term: "Neurodegeneration", zh: "神經退化", definition: "神經元或神經網絡逐漸受損、失去功能的病理過程，通常具有進行性。" },
      { term: "Word-finding Difficulty", zh: "找詞困難", definition: "知道想表達的概念，卻一時無法提取適當詞彙；需再判斷是偶發正常現象或持續病理變化。" },
    ],
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
    terms: [
      { term: "Frontotemporal Dementia", abbr: "FTD", zh: "額顳葉失智症", definition: "以額葉及／或顳葉退化為主的疾病群，常見行為型與語言型表現。" },
      { term: "Aphasia", zh: "失語症", definition: "因腦部損傷或疾病造成的後天語言障礙，可影響口語表達、理解、命名、閱讀與書寫。" },
      { term: "Primary Progressive Aphasia", abbr: "PPA", zh: "原發性漸進性失語症", definition: "以語言能力漸進退化為早期主要症狀的神經退化症候群，可分為不同語言表現亞型。" },
      { term: "Behavioural Variant FTD", abbr: "bvFTD", zh: "行為型額顳葉失智症", definition: "以社會行為、人格、同理心、抑制或執行功能改變為主要早期表現的 FTD 類型。" },
      { term: "Cognitive Decline", zh: "認知功能衰退", definition: "記憶、注意、語言、執行功能或其他認知能力較過去下降；此描述本身尚不是病因診斷。" },
      { term: "Stroke", zh: "中風／腦血管意外", definition: "腦部血流阻塞或出血造成的急性腦損傷；若語言症狀突然出現，需立即接受緊急醫療評估。" },
      { term: "Sleep Apnea", zh: "睡眠呼吸中止症", definition: "睡眠時反覆呼吸停止或減弱，可能造成缺氧與睡眠破碎，並與心血管及認知風險相關。" },
      { term: "Modifiable Risk Factor", zh: "可調整風險因子", definition: "可透過治療或生活介入改善的風險面向，例如血壓、活動量、聽力照護與部分代謝問題。" },
    ],
    research: "可把『語言症狀先於記憶主訴』納入阿美族研究的轉介條件，並以族語與華語雙軌語料、家屬時間線及日常功能資料確認變化是否跨情境持續。",
    caution: "影片屬健康教育而非個案診斷工具；Bruce Willis 的公開資訊不代表所有失語症或 FTD 患者都具有相同病程。",
  },
];

export default function RelatedVideos() {
  return <section className="videos-view">
    <header className="videos-hero">
      <div><div className="section-kicker">VIDEO RESEARCH FOLDER · {videos.length.toString().padStart(2, "0")}</div><h2>相關影片</h2></div>
      <p>把影片當作學術導讀入口：先掌握核心主張，再核對醫療術語、縮寫與臨床限制。後續新增影片時，可沿用同一套整理架構。</p>
    </header>

    <div className="video-folder-bar">
      <div><span aria-hidden="true">▶</span><b>FTD、失語症與語言變化</b></div>
      <p><strong>{videos.length}</strong> 部影片 · 核心重點 · 術語辭典 · 阿美族研究連結</p>
    </div>

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
          <div className="term-cards">{video.terms.map(term => <section key={term.term}>
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
