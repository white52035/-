const comparison = [
  ["詞彙提取", "偶發舌尖現象；提示後常能想起，概念仍完整。", "可能出現持續命名困難、語意替代或概念知識受損；表現依病因與病程而異。"],
  ["語法與句型", "因處理速度或工作記憶而簡化，但多半仍合乎原有語法。", "某些疾病或亞型可能出現失語法、句法理解或句序組織異常。"],
  ["流利度與話語", "語速較慢、搜尋詞彙的停頓增加，主題通常仍可維持。", "可能出現空洞言語、模糊指稱、離題或資訊密度下降。"],
  ["理解能力", "長句、噪音或高負荷情境下處理較慢。", "可能有詞義、句義或篇章整合困難，且不只由速度變慢解釋。"],
];

const screening = [
  ["01", "認知與臨床", "採用具在地語言、教育與年齡依據的認知工具；結合 CDR、IADL／FAQ、情緒量表與臨床訪談。MoCA 等切點不可脫離版本與常模直接套用。"],
  ["02", "醫療與神經史", "記錄中風、TIA、腦傷、帕金森症、代謝與心血管疾病控制、感染與可能影響中樞神經的藥物。由合格醫療人員判斷排除條件。"],
  ["03", "感官與言語動作", "完成聽力、視力、構音與口腔動作基線，區分聽覺接取、發音動作與語言認知來源。輔具使用也要記錄。"],
  ["04", "語言與文化背景", "記錄母語、方言、雙語生命史、語碼轉換、教育、識字、職業與文化活動；按年齡與背景分層，而非用單一平均值代表所有長者。"],
];

const pathway = [
  ["先複核", "重測或補充語言樣本，搭配 AD8／IQCODE 等知情者資料，排查聽力、假牙、睡眠、感染、藥物與譫妄等暫時因素。"],
  ["再轉介", "由衛生所、家庭醫師、神經科／精神科或記憶門診進行標準評估；偏鄉可整合巡迴醫療、遠距會診及交通協助。"],
  ["同步支持", "在等待評估期間提供友善溝通、照顧者資訊、社區參與和安全支持；急性意識改變、突然語言障礙或疑似中風應立即就醫。"],
  ["追蹤回饋", "在知情同意與資料治理下追蹤 6–12 個月的臨床結果，以校正篩檢閾值；模型輸出不得取代診斷，也不應自動產生可識別的高風險名單。"],
];

const activities = [
  ["主題式母語回憶", "以老照片、農具或傳統物件引導長者分享生活經驗。", "自傳式記憶、語意提取、社會連結"],
  ["口傳故事與接龍", "分享部落傳說、童謠與俗諺，讓不同世代共同接續。", "工作記憶、句法組織、敘事連貫"],
  ["母語歌唱與律動", "熟悉歌謠結合節奏、打擊樂與安全的身體活動。", "韻律、聽覺注意、動作與情緒"],
  ["傳統工藝與敘事", "邊操作編織、料理或農事步驟，邊說明程序與經驗。", "執行功能、程序記憶、動作協調"],
];

export default function QAColumn() {
  return <section className="qa-view">
    <header className="qa-hero">
      <div><div className="section-kicker">QUESTIONS · EVIDENCE · ACTION</div><h2>Q&amp;A 專欄</h2></div>
      <p>從正常老化、失智風險與健康常模，走到偏鄉篩檢、轉介及母語文化活動。以下內容供研究設計與健康教育使用，不構成個別診斷。</p>
    </header>

    <article className="qa-card qa-feature">
      <div className="qa-number">Q1</div>
      <div className="qa-body"><h3>dementia 的語言表現，是否只是正常老化的「量更多一點」？</h3>
        <p className="qa-answer"><b>不宜只理解為嚴重程度不同。</b>兩者表面上都可能有找字停頓，但正常老化常見的是速度與資源限制；神經認知疾病則可能改變語意、句法或篇章組織的性質。實際表現受疾病類型、病程、教育、雙語背景與感官狀態影響，不能用單一徵象判定。</p>
        <div className="qa-table" role="table" aria-label="正常老化與失智症語言表現比較">
          <div className="qa-tr qa-th" role="row"><span>評估維度</span><span>正常老化常見表現</span><span>神經認知疾病可能表現</span></div>
          {comparison.map((r)=><div className="qa-tr" role="row" key={r[0]}><b>{r[0]}</b><span>{r[1]}</span><span>{r[2]}</span></div>)}
        </div>
        <aside><b>判讀重點</b>要看錯誤類型、提示效果、功能影響與個人縱向變化，而不只是停頓或錯誤出現幾次。N400、語料指標或影像等研究工具可補充機制證據，但不能單獨完成臨床診斷。</aside>
      </div>
    </article>

    <article className="qa-card">
      <div className="qa-number">Q2</div>
      <div className="qa-body"><h3>家人沒有感覺明顯變化，就能當作同齡「無失智常模」嗎？</h3>
        <p className="qa-answer"><b>不能直接當作常模。</b>「家屬無感」只是初步招募線索。固定、情境化的日常對話可能掩蓋高負荷任務中的困難；家屬也可能逐漸適應變化。MCI、前臨床病理、認知儲備與代償都可能使外觀看似正常。</p>
        <div className="qa-points"><div><b>可能造成的偏差</b><p>把未辨識的認知下降納入健康組，會拉低參照分布，降低早期篩檢敏感度。</p></div><div><b>正確定位</b><p>家屬觀察應和客觀認知、功能、情緒、醫療史、聽視力與語言背景共同判讀。</p></div><div><b>常模不是診斷</b><p>即使多重篩選通過，也只能稱為「研究定義下的認知未受損組」，不能保證不存在所有前臨床病理。</p></div></div>
      </div>
    </article>

    <article className="qa-card">
      <div className="qa-number">Q3</div>
      <div className="qa-body"><h3>如何篩選「無失智」長者來收集語料？</h3>
        <p className="qa-answer">採用<b>多階段篩選與縱向確認</b>，並在研究計畫中預先定義納入、排除與轉介規則。任何單一量表都不足以證明真正「無失智」。</p>
        <div className="screening-grid">{screening.map((s)=><div key={s[0]}><span>{s[0]}</span><h4>{s[1]}</h4><p>{s[2]}</p></div>)}</div>
        <aside><b>偏鄉可行方案</b>若缺少完整生物標記，可採同儕分層比較、個人縱向追蹤及在地知情者資料，並清楚標示證據層級。生物標記只適用於有資源、倫理與臨床支持的研究，不是一般語料招募的必要條件。</aside>
      </div>
    </article>

    <article className="qa-card">
      <div className="qa-number">Q4</div>
      <div className="qa-body"><h3>語言偵測出偏鄉長者可能有失智風險後，下一步怎麼做？</h3>
        <p className="qa-answer">語言分析只能發出<b>風險訊號</b>，下一步應是複核、專業轉介與支持，而不是直接貼上診斷標籤。</p>
        <ol className="care-path">{pathway.map((p,i)=><li key={p[0]}><span>{String(i+1).padStart(2,"0")}</span><div><h4>{p[0]}</h4><p>{p[1]}</p></div></li>)}</ol>
      </div>
    </article>

    <article className="qa-card qa-community">
      <div className="qa-number">Q5</div>
      <div className="qa-body"><h3>母語與文化認知活動，是否不必等到偵測出失智才開始？</h3>
        <p className="qa-answer"><b>是，可以作為全民／普及型健康促進。</b>以文化傳承、社交與生活樂趣為核心，比「失智訓練」更去標籤，也可能支持社會參與、情緒與認知儲備。不過「延緩失智」的效果大小仍需依活動設計與研究證據謹慎表述。</p>
        <div className="activity-table">{activities.map((a)=><div key={a[0]}><h4>{a[0]}</h4><p>{a[1]}</p><small>{a[2]}</small></div>)}</div>
        <aside><b>生態觀察的倫理界線</b>社區活動可以協助看見長期變化，但工作人員應接受觀察與轉介訓練；紀錄、分享或研究使用語言資料前，必須取得知情同意並避免公開貼標籤。</aside>
      </div>
    </article>

    <div className="qa-safety"><b>重要提醒</b><p>突然出現口齒不清、單側無力、理解或說話困難、意識改變，應立即依疑似中風或急症處理。慢性疑慮則請由合格醫療專業人員進行完整評估。</p></div>
  </section>;
}
