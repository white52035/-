const imrad = [
  ["I", "Introduction｜前言", "從 PPA 以早期語言障礙為核心、AD 以記憶障礙為典型表現出發，指出兩者隨病程進展會重疊；希臘語 PPA 評估工具不足，是研究的語言與臨床缺口。", "比較希臘語 PPA 與 AD 的認知、語言及連貫話語表現，並探索執行功能與語言能力的關係。"],
  ["M", "Materials & Methods｜方法", "橫斷式三組比較，共 34 人：PPA 10 人、AD 9 人、神經典型對照 15 人。PPA 組含 lvPPA 6、svPPA 3、混合型 1，沒有 nfvPPA。", "以認知、語言、敘事、動作言語及照顧者量表組成廣泛測驗；使用 Kruskal-Wallis、Mann-Whitney、Welch ANOVA、Games-Howell 與相關分析。"],
  ["R", "Results｜結果", "PPA 相較 AD，在長且高頻句重複、圖片描述的敘事詞與相異詞數、故事復述平均句長／句子修飾指數，以及語音錯誤上表現較差。", "五項複合分數中，PPA 與 AD 只有語言分數達顯著差異；PPA 的執行與語言分數相關 r = .86，p = .001，AD 為 r = .47，p = .202。"],
  ["D", "Discussion & Conclusion｜討論結論", "句子重複、語音錯誤、平均句長與句子修飾指數，是本樣本中較具資訊性的候選鑑別指標；敘事分析增加了單一測驗看不到的話語層次證據。", "作者主張語言測驗應和其他神經心理評估並用；結果受小樣本、亞型不平衡、缺少 nfvPPA、年齡差異及多重比較限制，需審慎外推。"],
];

const comparison = [
  ["核心表現", "語言網絡與語言處理為突出困難；本樣本以 lvPPA 為主。", "情節記憶與執行功能較突出，亦有命名與高負荷語言困難。", "認知與語言表現整體最佳。"],
  ["重複與語音", "長且高頻句重複較差，語音錯誤較多。", "長無意義句等高負荷條件可能受損，但長高頻句相對 PPA 較佳。", "各類句子重複接近上限。"],
  ["連貫話語", "敘事詞與相異詞較少，句子較短、修飾較少。", "較多停頓、語意錯誤、高頻詞及未完成句，反映詞彙提取困難。", "詞彙較多，句法與敘事結構較完整。"],
  ["記憶", "部分總分受短期／工作記憶負荷影響；延遲條件相對保留。", "相較對照組，各項情節記憶指標較弱。", "延遲回憶表現最佳。"],
  ["不可過度推論", "PPA 亞型混合且無 nfvPPA，不能代表所有 PPA。", "AD 組內也不均質，且平均年齡較高。", "對照主要配對 PPA，並非完美配對 AD。"],
];

export default function PPAArticleAnalysis() {
  return <section className="paper-analysis" aria-labelledby="ppa-paper-title">
    <header className="paper-head">
      <div><span>FEATURED ARTICLE · IMRaD ANALYSIS</span><h3 id="ppa-paper-title">PPA、AD 與語言—認知輪廓</h3><p>Comparing Individuals With PPA to Individuals With AD: Cognitive and Linguistic Profiles</p></div>
      <a href="https://doi.org/10.3389/fcomm.2022.893471" target="_blank" rel="noreferrer"><b>DOI</b><span>10.3389/fcomm.2022.893471</span><i>↗</i></a>
    </header>

    <div className="apa-citation"><small>APA 7</small><p>Karpathiou, N., &amp; Kambanaros, M. (2022). Comparing individuals with PPA to individuals with AD: Cognitive and linguistic profiles. <i>Frontiers in Communication, 7</i>, Article 893471. <a href="https://doi.org/10.3389/fcomm.2022.893471" target="_blank" rel="noreferrer">https://doi.org/10.3389/fcomm.2022.893471</a></p></div>

    <div className="paper-section-title"><span>01</span><div><small>STRUCTURE</small><h4>IMRaD 結構與每節核心</h4></div></div>
    <div className="imrad-grid">{imrad.map((x)=><article key={x[0]}><span>{x[0]}</span><h5>{x[1]}</h5><p>{x[2]}</p><p>{x[3]}</p></article>)}</div>

    <div className="paper-section-title"><span>02</span><div><small>COMPARE</small><h4>統整、理解比對與重點</h4></div></div>
    <div className="study-snapshot"><div><strong>34</strong><span>總樣本</span></div><div><strong>10</strong><span>PPA</span></div><div><strong>9</strong><span>AD</span></div><div><strong>15</strong><span>對照組</span></div><div><strong>7</strong><span>期刊卷次</span></div></div>
    <div className="paper-compare" role="table" aria-label="PPA、AD 與神經典型組比較">
      <div className="paper-compare-row paper-compare-head" role="row"><b>評估面向</b><b>PPA</b><b>AD</b><b>神經典型對照</b></div>
      {comparison.map((r)=><div className="paper-compare-row" role="row" key={r[0]}><b>{r[0]}</b><p>{r[1]}</p><p>{r[2]}</p><p>{r[3]}</p></div>)}
    </div>

    <div className="evidence-audit"><b>證據校準</b><div><p><strong>研究直接支持：</strong>PPA 與 AD 在語言複合分數及若干語言／敘事指標呈現差異。</p><p><strong>不能直接宣稱：</strong>本文沒有證明普遍的「雙重解離」，也沒有驗證單一指標可獨立診斷 PPA 或 AD。</p><p><strong>合理但仍待驗證：</strong>PPA 中執行—語言相關可能反映測驗的語言負荷或執行資源補償；相關不等於神經機制因果證明。</p></div></div>

    <div className="paper-section-title"><span>03</span><div><small>RELATIONSHIP</small><h4>核心觀點與脈絡關聯圖</h4></div></div>
    <div className="relationship-map">
      <div className="map-root"><small>共同上位概念</small><b>神經退化性疾病</b><span>症狀隨病程進展而重疊</span></div>
      <div className="map-branches">
        <article><header><span>PPA</span><b>語言障礙突出</b></header><ul><li>句子重複困難</li><li>語音錯誤</li><li>句子短且修飾少</li><li>敘事詞與相異詞較少</li></ul><footer>執行 × 語言：r = .86*</footer></article>
        <article><header><span>AD</span><b>記憶障礙典型</b></header><ul><li>情節記憶受損</li><li>詞彙提取與語意錯誤</li><li>停頓與高頻詞增加</li><li>高負荷語言任務困難</li></ul><footer>執行 × 語言：r = .47，未顯著</footer></article>
      </div>
      <p>*PPA 相關結果為小樣本探索性證據，且執行測驗含語言負荷。</p>
    </div>

    <div className="paper-section-title"><span>04</span><div><small>TIMELINE</small><h4>發表時間與知識脈絡</h4></div></div>
    <div className="research-timeline">
      <article><time>2001</time><b>PPA 概念基礎</b><p>Mesulam 系統化描述 PPA，奠定以早期、漸進語言障礙為核心的臨床框架。</p></article>
      <article><time>2011</time><b>三亞型共識</b><p>Gorno-Tempini 等提出 lvPPA、nfvPPA、svPPA 的分類準則。</p></article>
      <article><time>2017–2021</time><b>跨語言評估缺口</b><p>評估工具回顧與非英語工具發展增加，但希臘語的完整 PPA 語言—認知工具仍有限。</p></article>
      <article className="timeline-focus"><time>2022</time><b>本研究</b><p>3 月 10 日收稿 → 6 月 16 日接受 → 7 月 8 日正式發表。</p></article>
      <article><time>後續</time><b>需要外部驗證</b><p>擴大樣本、平衡 PPA 亞型，加入 nfvPPA、縱向追蹤與跨語言／跨文化驗證。</p></article>
    </div>

    <div className="amis-translation"><small>連回阿美語 × 高齡研究</small><p>本研究顯示「自然敘事＋神經心理評估」比單一命名分數更能描繪語言—認知輪廓；但希臘語結果不能直接移植到阿美語。未來需先建立方言、雙語生命史、教育、識字與聽力基線，再驗證句子重複、語音錯誤、句長與修飾指標是否仍具區辨力。</p></div>
  </section>;
}
