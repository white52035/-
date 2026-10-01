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

const sections = [
  { no: "01", en: "Overview", zh: "概述", core: "失智症是記憶或其他認知能力持續退化，且已干擾日常生活與獨立性的臨床症候群。MCI 的下降較輕，日常獨立性大致保留，也不必然進展為失智症。", clinical: "診斷由醫療團隊完成；語言治療師與聽力師提供認知溝通、語言、聽力及進食吞嚥證據。判讀時須先區分典型老化、譫妄與可逆或可治療因素。", amis: "建立阿美族高齡者資料時，應把母語使用、生活獨立性及家屬觀察一起納入，不能以單次華語測驗分數直接貼上失智標籤。" },
  { no: "02", en: "Incidence and Prevalence", zh: "發生率與盛行率", core: "發生率回答特定期間新增多少個案，盛行率回答某一時間點或期間共有多少個案；不同病因、年齡與混合型失智會使估計值不同。", clinical: "ASHA 彙整的全球與美國數據可用來理解疾病負擔，但不是臺灣、偏鄉或原住民族群的在地盛行率，且數字需連同資料年份與抽樣方法閱讀。", amis: "阿美族研究宜清楚記錄部落、年齡層、教育與語言背景，分開呈現篩檢陽性、臨床診斷與實際新發個案，避免把三者混稱為盛行率。" },
  { no: "03", en: "Signs and Symptoms", zh: "徵象與症狀", core: "可能涉及注意、記憶、執行功能、視空間、社會溝通、定向與語言。語言表現包括空洞言語、找詞困難、繞述、語意或語法錯誤、離題及理解多步驟指令困難。", clinical: "不同病因與階段的起始表現不一：PPA／部分額顳葉失智可先呈現語言主導缺損，阿茲海默症較常以記憶問題起始；行為改變也可能是未被滿足需求的表達。", amis: "多語者可能出現語言選擇、維持或轉換困難，亦可能較依賴第一語言。阿美語切換不能自動視為病理，應與個人原有語言史及縱向變化比較。" },
  { no: "04", en: "Causes", zh: "病因", core: "常見病因包括阿茲海默症、血管性失智、路易氏體失智、巴金森相關失智、額顳葉失智及混合型失智；其他神經、外傷或系統性狀況也可能造成進行性變化。", clinical: "風險因素包含可調整與不可調整面向。聽力損失與認知衰退具有關聯，但不能直接推論因果；社會決定因素與認知儲備也會影響風險及臨床表現。", amis: "分析部落長者時，宜同時記錄腦血管風險、聽力、教育、社會參與及醫療可近性，避免把結構性不利或感官障礙誤寫成族群本身的缺陷。" },
  { no: "05", en: "Roles and Responsibilities", zh: "專業角色與責任", core: "語言治療師負責認知溝通與吞嚥的篩檢、評估、介入、諮詢、照顧者訓練及追蹤；聽力師評估與處理聽覺問題，並協助認知篩檢與轉介。", clinical: "跨專業合作應連結醫師、護理、心理、職能治療、營養及社會照顧。SLP 的語言證據很重要，但不能單獨取代失智症的醫療診斷。", amis: "除專業人員外，可納入族語教師、部落長者、文化照顧人員與家屬，明確區分翻譯、文化協作、臨床判讀與醫療診斷的責任。" },
  { no: "06", en: "Assessment", zh: "評估", core: "篩檢不是一張量表。完整評估應整合病史、本人與照顧者訪談、認知溝通、語言樣本、日常參與、吞嚥、聽力及環境障礙。", clinical: "測驗前須考量聽力、視力、憂鬱、藥物、多重用藥與疲勞；若常模樣本不代表受測者的文化或語言背景，不應直接報告或過度解讀標準分數。", amis: "優先在個案實際使用的語言中評估，採母語敘事、圖片描述與自然情境觀察，並把結果與同儕相對比較及個人縱向資料交叉驗證。" },
  { no: "07", en: "Treatment", zh: "治療與支持", core: "介入目標會隨進行性病程調整；維持功能、補償與提升參與本身就是有效目標。策略包括外部記憶輔具、環境調整、間隔提取、回憶活動及溝通夥伴訓練。", clinical: "介入須以人為中心，涵蓋認知溝通、聽力、進食吞嚥、家屬支持與緩和照護；輔具宜及早導入、反覆練習並依個人生活客製化。", amis: "可將阿美語歌謠、口傳故事、家族照片、祭儀記憶與傳統工藝融入普及型認知促進及個別介入，使長者以文化傳承者而非被矯治者的身分參與。" },
  { no: "08", en: "Resources", zh: "資源", core: "此區是 ASHA 內部實務資源與外部組織的導航索引，涵蓋實證地圖、雙語與老化、文化回應、吞嚥檢查、跨專業合作及社會健康決定因素。", clinical: "資源清單提供下一步查找路徑，不等於每項資源具有相同證據等級；使用時仍須檢查版本、適用族群與原始研究。", amis: "可依『語言文化適切性—聽力與吞嚥—照顧者支持—在地轉介』建立阿美族專用資源地圖，再連結臺灣衛生、長照與原民體系。" },
  { no: "09", en: "References", zh: "參考文獻", core: "參考文獻支撐頁面中的定義、風險、評估與介入主張，包含指南、系統性回顧、研究論文與專業文件，可用來回溯特定敘述的證據來源。", clinical: "不應把完整書目視為同質證據；引用前須核對研究設計、樣本、語言與發表年份，重要臨床主張優先追溯指南或系統性回顧。", amis: "以 ASHA 書目作為國際證據種子，再與臺灣博碩士論文、原住民族語復振、阿美語及偏鄉照護研究交叉編目，標示可直接採用或需文化轉譯。" },
  { no: "10", en: "About This Content", zh: "內容來源與限制", core: "ASHA 說明此頁經完整內容發展流程、多輪專家意見與審查，並提供建議引用方式；同時提醒使用者仍須遵守所在地法規與專業要求。", clinical: "它是美國專業協會的實務入口，具有明確編製程序，但不是全球通用的單一診療規範；應透明揭露來源、更新狀態與適用限制。", amis: "平台引用時保留 ASHA 原始連結與 APA 7 書目，並另行說明臺灣法規、族語版本、文化安全與部落共同決策所需的在地調整。" },
];

const sectionDetails: Record<string, { points: string[]; question: string; caution: string }> = {
  "01": {
    points: [
      "失智症不是單一疾病，而是多種病因造成、足以影響獨立生活的認知功能下降。",
      "輕度認知障礙（MCI）代表客觀下降，但多數複雜日常活動仍可維持；它是風險狀態，不等同失智症。",
      "正常老化可能出現處理速度變慢或偶發找詞，但不應造成持續且進行性的功能喪失。",
      "突然發生或快速波動的混亂需先排除譫妄、感染、藥物、營養或代謝等可逆因素。",
    ],
    question: "個案的語言變化是否持續惡化，並已影響原本能獨立完成的生活活動？",
    caution: "語言篩檢只能提出風險訊號，不能單獨完成失智症診斷。",
  },
  "02": {
    points: [
      "發生率以『新個案／一段時間』為核心；盛行率則是『現有個案／特定人口』。",
      "年齡結構、存活時間、診斷可近性與研究定義，都會改變統計結果。",
      "早發型失智通常指 65 歲以前出現症狀，診斷歷程可能較複雜且容易延誤。",
      "混合型失智可能同時具有阿茲海默症與血管性等病理，分類不能只看單一表現。",
    ],
    question: "研究報告的是篩檢陽性率、臨床診斷率、盛行率，還是追蹤期間的新發率？",
    caution: "ASHA 所列國際與美國數字具有年份與地區限制，不可直接推估阿美族人口。",
  },
  "03": {
    points: [
      "認知溝通改變可見於注意、記憶、執行功能、視空間、定向感與社會溝通。",
      "語言訊號包括找詞困難、繞述、空洞言語、重複話語、離題、語意錯誤與理解複雜指令困難。",
      "PPA 或部分額顳葉失智可能先出現語言症狀；阿茲海默症常見記憶問題，但個別差異很大。",
      "吞嚥、進食、行為或心理變化也可能出現，行為有時是在傳達疼痛、焦慮或環境不適。",
      "多語者可能改變語言選擇、切換頻率或回到較熟悉的第一語言。",
    ],
    question: "異常是新近出現的個人內變化，還是原本就存在的雙語策略、方言特徵或說話習慣？",
    caution: "單一找詞失敗或語碼轉換不是疾病證據；需觀察頻率、錯誤類型、功能影響與縱向變化。",
  },
  "04": {
    points: [
      "主要病因包括阿茲海默症、血管性失智、路易氏體失智、額顳葉失智及其他神經退化疾病。",
      "不同病因傷及的腦部網絡不同，因此記憶、語言、行為、動作與視空間表現不會完全相同。",
      "年齡與遺傳屬較難改變的風險；心血管健康、活動、社會參與及部分生活因素可能具有調整空間。",
      "聽力下降會增加溝通負荷並與認知衰退相關，但『相關』不代表已證明單向因果。",
    ],
    question: "語言表現能否與病史、神經心理結果、感官狀況及醫療檢查形成一致的病因假設？",
    caution: "不可從某一種語言錯誤直接反推病因，更不能忽略腦血管、藥物與感官因素。",
  },
  "05": {
    points: [
      "語言治療師可執行溝通與吞嚥篩檢、完整評估、功能介入及照顧夥伴訓練。",
      "聽力師負責聽覺評估、輔具與聽覺溝通支持，並協助辨識是否需進一步認知轉介。",
      "醫師負責醫療診斷與病因鑑別；心理、護理、職能治療、營養與社工提供互補證據。",
      "專業責任也包含衛教、追蹤、倡議、研究，以及尊重個案與家屬的共同決策。",
    ],
    question: "目前缺少的是醫療診斷、語言功能描述、聽力排除、吞嚥安全，還是日常支持？應由誰接手？",
    caution: "族語協作者能提供語言文化知識，但不能被要求取代具資格專業人員的臨床責任。",
  },
  "06": {
    points: [
      "第一層先確認轉介原因、病史、教育、職業、語言史、藥物、情緒、視聽覺及生活功能。",
      "第二層整合本人與知情者訪談；兩者差異本身也可能是重要資訊。",
      "第三層評估注意、記憶、執行功能、語言、語用、讀寫與功能性溝通，而非只看總分。",
      "圖片描述、會話、生命故事及真實活動可補足標準化測驗欠缺的生態效度。",
      "若有嗆咳、體重下降或進食時間改變，需另做吞嚥風險評估與適當轉介。",
    ],
    question: "這個結果是否在不同任務、不同語言、不同知情者與不同時間點都能重現？",
    caution: "當常模不代表受測者的語言文化背景時，標準分數可能失真，應以描述性與多源證據補強。",
  },
  "07": {
    points: [
      "早期可共同設定目標、預先學習策略與導入記憶輔具；後期則提高環境與照顧者支持。",
      "外部輔具可包含行程表、標籤、照片、步驟卡與電子提醒，但必須貼近日常習慣。",
      "間隔提取、錯誤減少學習、回憶活動與認知刺激可支持特定功能或參與。",
      "溝通夥伴可透過短句、單一問題、視覺提示、等待時間與確認意思降低互動負荷。",
      "吞嚥與進食方案需平衡安全、營養、舒適、意願與生活品質。",
    ],
    question: "介入是否改善個案真正重視的活動與關係，而不只是讓測驗分數短暫提高？",
    caution: "進行性疾病中的『維持』與『減慢功能流失』也是合理成效，不應只以恢復正常作標準。",
  },
  "08": {
    points: [
      "ASHA Evidence Maps 可協助追查評估與介入議題的研究整理，但仍需閱讀原始來源。",
      "文化回應與雙語資源提醒評估者處理語言差異、翻譯、口譯及常模代表性。",
      "FEES、VFSS 等吞嚥資源屬特定專業檢查範圍，不能由一般認知篩檢取代。",
      "NIA、WHO、Alzheimer’s Association 等外部組織提供疾病、照顧與公共衛生資訊。",
    ],
    question: "這項資源是病人衛教、專業實務建議、研究證據摘要，還是正式規範？",
    caution: "外部連結是查找入口，不代表 ASHA 對所有內容、版本或證據強度作同等背書。",
  },
  "09": {
    points: [
      "先從頁面中的具體主張回溯相對應文獻，不宜只複製整份書目。",
      "指南、系統性回顧、隨機試驗、觀察研究與專家共識回答的問題不同，證據權重也不同。",
      "評估研究應檢查樣本語言、教育、診斷標準、盲測與效度；介入研究則需看比較組與功能結果。",
      "引用資料時記錄出版年份與來源類型，並確認頁面摘要沒有取代原文中的限制條件。",
    ],
    question: "這篇文獻直接支持目前的主張，還是只提供相近族群或間接機制的證據？",
    caution: "英語或美國樣本所得的敏感度、切截點與語言指標不可未經驗證直接移植至阿美語。",
  },
  "10": {
    points: [
      "Practice Portal 是專業實務入口，內容經主題專家、多輪意見與編輯審查。",
      "頁面提供建議引用格式，適合在網站、報告或研究整合包中透明標示來源。",
      "頁面內容是資訊與實務支援，不會取代個案化判斷，也不凌駕所在地法規。",
      "使用時應記錄查閱日期或定期檢查更新，因網頁內容與外部連結可能調整。",
    ],
    question: "讀者能否清楚辨認哪些內容來自 ASHA、哪些是本平台的分析，以及哪些是阿美族情境推論？",
    caution: "本平台新增的阿美族轉譯屬研究應用建議，不應誤標為 ASHA 的原文結論。",
  },
};

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

      <section className="asha-deep-dive" aria-labelledby="asha-deep-title">
        <div className="asha-deep-heading">
          <div><small>EXPAND ALL · 10 SECTIONS</small><h3 id="asha-deep-title">十個下拉區塊｜逐區深入分析</h3></div>
          <p>以下十區預設全部展開；可點選標題個別收合。每區均區分原頁核心、臨床研究判讀與阿美族／多語研究轉譯。</p>
        </div>
        <div className="asha-accordion">
          {sections.map(section => <details key={section.no} open>
            <summary>
              <span>{section.no}</span>
              <div><b>{section.en}</b><small>{section.zh}</small></div>
              <i aria-hidden="true">＋</i>
            </summary>
            <div className="asha-analysis-grid">
              <section><small>核心閱讀</small><p>{section.core}</p></section>
              <section><small>臨床／研究判讀</small><p>{section.clinical}</p></section>
              <section><small>連回阿美族／多語研究</small><p>{section.amis}</p></section>
            </div>
            <div className="asha-detail-body">
              <section>
                <small>重點拆解</small>
                <ul>{sectionDetails[section.no].points.map(point => <li key={point}>{point}</li>)}</ul>
              </section>
              <aside>
                <div><small>建議研究提問</small><p>{sectionDetails[section.no].question}</p></div>
                <div><small>判讀注意</small><p>{sectionDetails[section.no].caution}</p></div>
              </aside>
            </div>
          </details>)}
        </div>
        <div className="asha-citation">
          <small>APA 7 建議引用</small>
          <p>American Speech-Language-Hearing Association. (n.d.). <i>Dementia</i> [Practice portal]. https://www.asha.org/Practice-Portal/Clinical-Topics/Dementia/</p>
        </div>
      </section>

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
