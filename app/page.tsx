"use client";
import { useEffect, useMemo, useState } from "react";

type Chapter = {
  n: number;
  title: string;
  group: string;
  status: "完整" | "待補";
  core: string;
  research: string;
  gap: string;
  tags: string[];
};
type ReferenceItem = {
  chapter: number;
  part: "Part I" | "Part II";
  authors: string;
  title: string;
  focus: string;
  doi: string;
};
type ThesisReference = { title: string; url: string; topic: string };
const raw = [
  [
    1,
    "Language, Communities, Networks and Practices",
    "社會脈絡",
    "完整",
    "語言表現必須放回共享規範、人際網絡與共同實踐中理解。",
    "把家庭、教會、部落拆成「誰和誰、在什麼活動中使用」。",
    "建立高齡者病前語言生態，區分使用減少與神經認知變化。",
    "社會網絡,實踐社群",
  ],
  [
    2,
    "Regional and Social Variation",
    "語群個案",
    "待補",
    "原始作業僅有未完成佔位文字。",
    "待回到原書整理區域與社會變異。",
    "補上非標準形式如何避免被臨床病理化。",
    "變異,待補",
  ],
  [
    3,
    "Language and Gender",
    "社會脈絡",
    "完整",
    "語言差異不能直接歸因於生理性別，須連同角色與文化情境解讀。",
    "把「男女是否不同」改問為差異在何種社會角色中出現。",
    "檢查病前基線與研究任務是否具有 gender bias。",
    "性別,偏誤",
  ],
  [
    4,
    "Bilingualism and Multilingualism",
    "多語生命史",
    "完整",
    "雙語能力動態、不對稱，會隨家庭、學校、工作與遷徙改變。",
    "用完整多語生命史理解世代語言分工。",
    "記錄習得年齡、使用史、優勢與生活功能。",
    "雙語,生命史",
  ],
  [
    5,
    "Code-Switching and Diglossia",
    "多語生命史",
    "完整",
    "語碼轉換是有功能的互動資源，不等於能力不足。",
    "觀察族語與華語在不同場域的分工。",
    "保留自然語料與切換目的，不以單語純度作為臨床指標。",
    "語碼轉換,語域",
  ],
  [
    6,
    "Language and Power",
    "社會脈絡",
    "完整",
    "權力存在於標準語、測驗、診斷與定義「正常」的過程。",
    "不可把教科書形式視為唯一正確的阿美語。",
    "讓參與者選擇資料使用範圍並參與結果解釋。",
    "權力,資料治理",
  ],
  [
    7,
    "Language and Culture",
    "社會脈絡",
    "完整",
    "文化適切不等於把測驗翻成阿美語或加入文化元素。",
    "文化脈絡要在設計早期進入。",
    "控制文化熟悉度，並處理共同設計與資料主權。",
    "文化,共同設計",
  ],
  [
    8,
    "African American English",
    "語群個案",
    "待補",
    "原始作業僅有未完成佔位文字。",
    "待整理非主流英語變體的臨床意義。",
    "補強「非標準不等於障礙」的個案證據。",
    "非主流方言,待補",
  ],
  [
    9,
    "Language Change",
    "社會脈絡",
    "完整",
    "語言不同不等於知道變化原因；必須定位變化者、時間與歷史條件。",
    "區分語言演變、接觸、轉移與個人能力改變。",
    "年齡不能取代語言世代、教育、遷徙等解釋。",
    "語言變遷,世代",
  ],
  [
    10,
    "Language Planning",
    "社會脈絡",
    "完整",
    "政策、教育、文字與標準化決定哪些形式被看見及評估。",
    "並看政策設計與地方實際使用。",
    "記錄受試者接觸過的文字、教育與標準語形式。",
    "語言規劃,標準化",
  ],
  [
    11,
    "Dialect Perception and Attitudes to Variation",
    "社會脈絡",
    "完整",
    "變異本身未必是問題，社會評價與刻板印象才會製造偏差。",
    "把 variation、attitude 與 identity 一起研究。",
    "先確認研究者的方言期待是否被打破。",
    "方言態度,身份",
  ],
  [
    12,
    "Acquisition of Sociolinguistic Variation",
    "識字與社會化",
    "完整",
    "兒童同時學會語法與「誰在什麼情境下怎麼說」。",
    "把族語傳承視為語言社會化。",
    "重建高齡者早期家庭、部落與世代語言環境。",
    "社會化,習得",
  ],
  [
    13,
    "Bi- and Multilingual Language Acquisition",
    "多語生命史",
    "完整",
    "多語習得是長期、動態且不平衡的生命歷程。",
    "把家庭、沉浸教育與復振放入多語資源配置。",
    "目前分數只是照片，需要重建一生的語言軌跡。",
    "多語習得,語言軌跡",
  ],
  [
    14,
    "Assessing Language in Children Who Speak a Nonmainstream Dialect of English",
    "臨床評估",
    "待補",
    "原始作業僅有未完成佔位文字。",
    "待整理非主流方言兒童的公平評估。",
    "優先補強 difference 與 disorder 的判讀邏輯。",
    "評估,待補",
  ],
  [
    15,
    "Childhood Bilingualism: Distinguishing Difference from Disorder",
    "臨床評估",
    "待補",
    "原始作業僅有未完成佔位文字。",
    "待整理雙語差異與障礙的區分。",
    "優先建立可轉用於高齡族語研究的對照框架。",
    "雙語評估,待補",
  ],
  [
    16,
    "Speech Perception, Hearing Impairment and Linguistic Variation",
    "臨床評估",
    "完整",
    "理解由聽力、訊號、方言與過去經驗共同形成。",
    "研究「誰在什麼條件下能聽懂」。",
    "不能把沒聽清楚直接當成認知或理解障礙。",
    "聽力,語音知覺",
  ],
  [
    17,
    "Aphasia in Multilingual Populations",
    "臨床評估",
    "完整",
    "多語失語評估須比較各語言的病前功能與損傷。",
    "理解整體多語系統，而非只製作族語版測驗。",
    "分開記錄病前雙語結構、病史、兩語表現與診斷。",
    "失語症,多語臨床",
  ],
  [
    18,
    "Designing Assessments for Multilingual Children",
    "臨床評估",
    "完整",
    "同一份測驗不必然公平；低分需要多重證據解釋。",
    "建立能合理解釋不同族語使用者表現的評估邏輯。",
    "驗證工具不會把語言差異誤判成認知障礙。",
    "公平評估,工具設計",
  ],
  [
    19,
    "Literacy as a Sociolinguistic Process for Clinical Purposes",
    "識字與社會化",
    "完整",
    "識字是社會文化中的生活實踐，不只是認字讀寫。",
    "研究文字系統、教材、教會與高齡者的實際運用。",
    "口語、羅馬字讀寫與教育程度不可混為一談。",
    "識字,文字實踐",
  ],
  [
    20,
    "The Sociolinguistics of Sign Languages",
    "識字與社會化",
    "待補",
    "原始作業僅有未完成佔位文字。",
    "待補手語的社群、變異與臨床分類。",
    "擴大對溝通模態的理解。",
    "手語,待補",
  ],
  [
    21,
    "Managing Linguistic Diversity in the Clinic",
    "臨床評估",
    "完整",
    "口譯員是互動參與者，不是透明的語言管道。",
    "翻譯應視為研究設計與資料品質的一部分。",
    "保留原始語料並記錄口譯者背景，控制 interpreter effect。",
    "口譯,協作者",
  ],
] as const;
const chapters: Chapter[] = raw.map((x) => ({
  n: x[0],
  title: x[1],
  group: x[2],
  status: x[3],
  core: x[4],
  research: x[5],
  gap: x[6],
  tags: x[7].split(","),
}));
const groups = [
  "全部",
  "社會脈絡",
  "多語生命史",
  "臨床評估",
  "識字與社會化",
  "語群個案",
];
const variables = [
  ["病前語言生態", "習得年齡、使用領域、優勢、方言、口語與文字經驗"],
  ["社會網絡", "互動對象、關係強度、頻率、語言選擇、網絡縮小事件"],
  ["共同實踐", "家庭、教會、農作、祭儀、工作與數位社群中的語言功能"],
  ["臨床與感官", "臨床分組、病史、用藥、聽力與視力"],
  ["評估公平性", "方言、文化熟悉度、教育、識字與任務偏誤"],
  ["口譯與治理", "協作者角色、提示紀錄、同意範圍、公開層級與撤回方式"],
];

const aiModules = [
  {
    id: "5-1",
    title: "穩健性",
    en: "ROBUSTNESS",
    question: "換一個部落、方言、設備或任務，模型還可靠嗎？",
    concepts: ["資料分布偏移", "對抗攻擊", "外部驗證", "聯邦學習"],
    amis:
      "阿美語語音模型不能只在單一部落或單一錄音條件下驗證；應以留一部落、留一方言、跨設備與縱貫資料測試。",
  },
  {
    id: "5-2",
    title: "可解釋性",
    en: "EXPLAINABILITY",
    question: "模型依據的是疾病訊號，還是社會語言特徵？",
    concepts: ["Grad-CAM", "LIME", "SHAP", "反事實解釋"],
    amis:
      "解釋必須納入病前語言基準，避免把口音、語碼轉換、教育與識字經驗誤當成神經認知病理。",
  },
  {
    id: "5-3",
    title: "公平性",
    en: "FAIRNESS",
    question: "整體準確率是否掩蓋特定群體承受的錯誤？",
    concepts: ["群體錯誤率", "代表性偏差", "捷徑學習", "去偏訓練"],
    amis:
      "應依部落、方言、年齡、性別、教育與語言優勢分層報告效能，並由社群共同界定何謂公平。",
  },
  {
    id: "5-4",
    title: "責任治理",
    en: "GOVERNANCE",
    question: "AI 出錯、被濫用或偽造時，誰負責、如何追溯？",
    concepts: ["人類監督", "Deepfake", "生命週期治理", "資料主權"],
    amis:
      "阿美語語音兼具身分與文化敏感性；同意、用途、保存、撤回與模型再利用都需要分層授權及社群治理。",
  },
];

const aiChapters = [
  {
    n: 1,
    title: "AI演進與造成改變的重要元素",
    label: "技術底座",
    units: ["AI歷史與發展", "神經科學與ANN", "機器學習", "No-Code AI", "CPU與GPU", "資料與資料庫"],
    core: "從規則式系統走向資料驅動學習；運算、特徵與資料治理共同決定模型能做什麼。",
    amis: "建立臨床認知軸與社會語言軸，檢驗加入病前語言生態後，模型是否更能區分語言差異、磨損與認知變化。",
    caution: "大型模型與更多運算不會自動改善研究品質；小樣本、標籤偏差和資料代表性仍是核心限制。",
  },
  {
    n: 2,
    title: "當AI成為醫師：邏輯思考與決策",
    label: "臨床決策",
    units: ["定義臨床問題", "資料取得與前處理", "決策樹與迴歸", "結果分析與驗證"],
    core: "把臨床需求轉成可驗證的目標、資料、時間點、使用者與可採取行動，而非只追求高準確率。",
    amis: "比較臨床資料、阿美語特徵與病前語言生態三層模型，並以敏感度、特異度、校準及錯誤代價評估。",
    caution: "低分、缺失值與離群值可能來自方言、聽力、教育或任務陌生，不應直接轉成病理標籤。",
  },
  {
    n: 3,
    title: "當AI成為駕駛員：影像辨識",
    label: "特徵辨識",
    units: ["道路環境辨識", "像素與特徵圖", "卷積神經網路", "限制、風險與責任"],
    core: "CNN能從局部模式建立分類，但真實世界的背景、設備與情境變動會暴露模型的脆弱性。",
    amis: "將影像特徵學習類比到語音頻譜，跨錄音設備、場域與部落驗證模型是否學到真正的語言或認知訊號。",
    caution: "答對不代表理由正確；模型可能依賴噪音、設備或場域標記等捷徑。",
  },
  {
    n: 4,
    title: "當AI成為個人助理：語意理解與文字生成",
    label: "語言模型",
    units: ["NLP與大型語言模型", "Token與詞向量", "Transformer、BERT與GPT"],
    core: "Tokenization、詞向量與Attention共同建立上下文表示；流暢生成仍不等於理解或事實正確。",
    amis: "比較字元、子詞與詞素切分，保留阿美語構詞、語碼轉換與完整敘事脈絡，分析詞彙、句法、語意及語用層次。",
    caution: "通用切詞器可能對低資源語言不公平；Attention呈現關聯，但不是完整因果解釋。",
  },
  {
    n: 5,
    title: "AI取代人類？探討AI的可信任性",
    label: "可信任治理",
    units: ["穩健性與聯邦學習", "可解釋性", "公平性與捷徑", "責任治理與Deepfake"],
    core: "可信任AI必須兼顧穩健、可解釋、公平、隱私、人類監督與責任追溯。",
    amis: "以跨部落／方言外部驗證、群體錯誤率、個案解釋、分層同意及社群治理建立完整生命週期。",
    caution: "第三方模型不能轉移研究責任；聯邦學習與解釋工具也不會自動消除隱私、偏見或因果誤讀。",
  },
];

const references: ReferenceItem[] = [
  [1,"Part I","Britain, D., & Matsumoto, K.","Language, communities, networks and practices","語言社群、社會網絡、實踐社群","10.1002/9780470754856.ch1"],
  [2,"Part I","Maclagan, M.","Regional and social variation","區域方言、社會變異、差異與障礙","10.1002/9780470754856.ch2"],
  [3,"Part I","Guendouzi, J.","Language and gender","性別、互動權力、臨床偏誤","10.1002/9780470754856.ch3"],
  [4,"Part I","Edwards, J.","Bilingualism and multilingualism","雙語連續體、語言維護、情境能力","10.1002/9780470754856.ch4"],
  [5,"Part I","Müller, N., & Ball, M. J.","Code-switching and diglossia","語碼轉換、雙層語言、溝通勝任力","10.1002/9780470754856.ch5"],
  [6,"Part I","Damico, J. S., Simmons-Mackie, N., & Hawley, H.","Language and power","臨床權力、話語控制、共同建構","10.1002/9780470754856.ch6"],
  [7,"Part I","Taylor, N., & Mendoza-Denton, N.","Language and culture","文化、身分、多模態社會意義","10.1002/9780470754856.ch7"],
  [8,"Part I","Wolfram, W.","African American English","非主流方言、語言正義、臨床誤判","10.1002/9780470754856.ch8"],
  [9,"Part I","Watt, D., & Smith, J.","Language change","語言變遷、年齡分級、創新與病理","10.1002/9780470754856.ch9"],
  [10,"Part I","Tonkin, H.","Language planning","語言政策、標準化、權利與市場","10.1002/9780470754856.ch10"],
  [11,"Part I","Preston, D. R., & Robinson, G. C.","Dialect perception and attitudes to variation","方言感知、態度、刻板印象","10.1002/9780470754856.ch11"],
  [12,"Part II","Roberts, J.","Acquisition of sociolinguistic variation","兒童習得、變異規則、語言社會化","10.1002/9780470754856.ch12"],
  [13,"Part II","Hua, Z., & Wei, L.","Bi- and multilingual language acquisition","多語習得、輸入品質、語碼混用","10.1002/9780470754856.ch13"],
  [14,"Part II","Oetting, J. B.","Assessing language in children who speak a nonmainstream dialect of English","公平評估、動態評量、非字重複","10.1002/9780470754856.ch14"],
  [15,"Part II","Wei, L., Miller, N., Dodd, B., & Hua, Z.","Childhood bilingualism: Distinguishing difference from disorder","雙語兒童、差異與障礙","10.1002/9780470754856.ch15"],
  [16,"Part II","Clopper, C. G., & Pisoni, D. B.","Speech perception, hearing impairment and linguistic variation","語音感知、聽障、說話者變異","10.1002/9780470754856.ch16"],
  [17,"Part II","Gitterman, M. R.","Aphasia in multilingual populations","多語失語症、復原模式、跨語言評估","10.1002/9780470754856.ch17"],
  [18,"Part II","Patterson, J. L., & Rodríguez, B. L.","Designing assessments for multilingual children","多語評估、個案史、脈絡一致性","10.1002/9780470754856.ch18"],
  [19,"Part II","Damico, J. S., Nelson, R. L., & Bryan, L.","Literacy as a sociolinguistic process for clinical purposes","讀寫實踐、失讀症、功能性介入","10.1002/9780470754856.ch19"],
  [20,"Part II","Lucas, C., Bayley, R., & Kelly, A. B.","The sociolinguistics of sign languages","手語變異、聾人社群、接觸簽署","10.1002/9780470754856.ch20"],
  [21,"Part II","Isaac, K. M.","Managing linguistic diversity in the clinic: Interpreters in speech-language pathology","口譯協作、跨文化溝通、臨床治理","10.1002/9780470754856.ch21"],
].map(([chapter,part,authors,title,focus,doi])=>({chapter,part,authors,title,focus,doi})) as ReferenceItem[];

// Researcher-supplied order: newest to oldest. Keep NDLTD Handle links canonical.
const thesisReferences: ThesisReference[] = [
  ["以生成式人工智慧建立稀少性語言之影片生成系統","https://hdl.handle.net/11296/d42g2a","生成式AI與低資源語言"],
  ["台語失語症病人詞彙理解之腦事件相關電位研究","https://hdl.handle.net/11296/j2s6t8","失語症與神經語言學"],
  ["阿美族語失語症患者評估測驗之初步發展","https://hdl.handle.net/11296/vs275u","阿美語與臨床評估"],
  ["左右腦腦傷患者語用測驗表現之研究","https://hdl.handle.net/11296/2h9m7y","腦傷與語用評估"],
  ["O Pangcah kami, misanoPangcah kami i loma': Misawaday a misanoholam a parod no Pangcah i Taywan 我們是Pangcah，我們在家講Pangcah：臺灣原住民族家庭語言去殖民化","https://hdl.handle.net/11296/7y8gqp","Pangcah與語言去殖民"],
  ["阿美語語言轉移與語言減退 —以花蓮縣豐濱鄉靜浦部落為例—","https://hdl.handle.net/11296/z2553h","阿美語維持與轉移"],
  ["花蓮地區阿美族語語言之調查：維持與轉移","https://hdl.handle.net/11296/f7p9hg","阿美語維持與轉移"],
  ["阿美族語的語言活力","https://hdl.handle.net/11296/z7y53e","阿美語活力"],
  ["原住民族語復振之研究：以臺東射馬干部落為例","https://hdl.handle.net/11296/e345g2","族語復振"],
  ["原住民族語復振之研究―以賽德克族眉溪部落為例","https://hdl.handle.net/11296/8hm8u8","族語復振"],
  ["原住民族語復振之研究","https://hdl.handle.net/11296/988976","族語復振"],
  ["花蓮太魯閣語語言轉移與減退－以支亞干部落為例－","https://hdl.handle.net/11296/b7z923","語言轉移與減退"],
  ["臺灣原住民族語政策之批判論述分析","https://hdl.handle.net/11296/rr6tz7","族語政策"],
  ["原住民族群主流化之研究：族語復振的政策與現況評估","https://hdl.handle.net/11296/3532x2","族語政策與復振"],
  ["台灣原住民族語言能力認證制度之評估","https://hdl.handle.net/11296/ksj3v2","族語認證與政策"],
  ["臺灣原住民族幼兒園實施沉浸式族語教學之研究","https://hdl.handle.net/11296/39d4b2","沉浸式族語教育"],
  ["'Mafana' Kaku!'：台灣原住民族語共學園中的兒童能動性及語言選擇","https://hdl.handle.net/11296/ebnt3u","兒童語言社會化"],
  ["Mipaselak to sowal no Pangcah: a digital ethnography of two open 'Amis/Pangcah language platforms, 'Amis MoeDict and 'Amis Wikipitiya","https://hdl.handle.net/11296/32zv6m","阿美語數位平台"],
  ["台北ina的族語日常","https://hdl.handle.net/11296/fd8y6s","都市族語實踐"],
  ["族群文化與親密關係:七位都市排灣族女性的觀點","https://hdl.handle.net/11296/x8ykx6","族群文化與性別"],
  ["'O pirayray no kiwkay to sowal no Pangcah': Entanglements of Pangcah Language Revitalization With(in) the Presbyterian Church of Taiwan","https://hdl.handle.net/11296/7stda5","Pangcah、教會與復振"],
  ["里慕伊．阿紀小說的鄉土與性別書寫","https://hdl.handle.net/11296/8cbxk7","原住民族文學與性別"],
  ["近代國家體制下學校教育對台東和平部落阿美族人語言使用變遷之研究","https://hdl.handle.net/11296/r8yfx3","阿美語、教育與變遷"],
  ["台灣原住民族政策的發展：透過身份、語言、生計的分析","https://hdl.handle.net/11296/hj5zt6","原住民族政策"],
  ["阿美族語戲劇對語言傳承與保護策略之初探","https://hdl.handle.net/11296/866qf4","阿美語傳承"],
  ["民俗文學分析在語言教學中的研究︰以花蓮縣太巴塱部落《創世神話》為例","https://hdl.handle.net/11296/tfy9xt","阿美語文學與教學"],
  ["成功阿美的教會活動及其教育意義","https://hdl.handle.net/11296/ss7m84","阿美族教會與教育"],
  ["台灣少數民族語言政策評估之研究－以花蓮縣轄內原住民族為例","https://hdl.handle.net/11296/4s74pj","族語政策評估"],
  ["台灣與紐西蘭原住民族語言政策之比較分析","https://hdl.handle.net/11296/tskv3z","族語政策比較"],
  ["從南投縣Toda（都達）母語實踐與傳承探討賽德克族的族群認同","https://hdl.handle.net/11296/sx92qb","母語傳承與認同"],
  ["卑南語學習的批評分析：法語與卑南語之語言教材比較","https://hdl.handle.net/11296/87vbv2","族語教材"],
  ["從沉浸式族語教學幼兒園到太魯閣族語復振-以花蓮太魯閣族原鄉地區為例","https://hdl.handle.net/11296/2ahnqq","沉浸教學與復振"],
  ["北部阿美語勺會厭肌塞音、喉塞音及滑音之音韻地位研究","https://hdl.handle.net/11296/est84r","阿美語音韻"],
  ["原住民族語言書寫系統符號教學研究─以Akiyo教師阿美族語教學為例","https://hdl.handle.net/11296/ttb246","阿美語書寫與教學"],
].map(([title,url,topic]) => ({title,url,topic})) as ThesisReference[];

export default function Home() {
  const [query, setQuery] = useState(""),
    [group, setGroup] = useState("全部"),
    [selected, setSelected] = useState(1),
    [tab, setTab] = useState("chapters"),
    [aiChapter, setAiChapter] = useState(1),
    [refQuery, setRefQuery] = useState(""),
    [refPart, setRefPart] = useState("全部"),
    [refCollection, setRefCollection] = useState<"chapters" | "theses">("theses"),
    [thesisOrder, setThesisOrder] = useState<"newest" | "oldest">("newest"),
    [read, setRead] = useState<number[]>([]);
  useEffect(() => {
    const s = localStorage.getItem("clinical-socio-read");
    if (s) setRead(JSON.parse(s));
  }, []);
  const filtered = useMemo(
    () =>
      chapters.filter(
        (c) =>
          (group === "全部" || c.group === group) &&
          `${c.n}${c.title}${c.core}${c.research}${c.gap}${c.tags}`
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [query, group],
  );
  const current = chapters[selected - 1];
  const currentAi = aiChapters[aiChapter - 1];
  const filteredReferences = useMemo(() => references.filter((r) =>
    (refPart === "全部" || r.part === refPart) &&
    `${r.chapter}${r.authors}${r.title}${r.focus}`.toLowerCase().includes(refQuery.toLowerCase())
  ), [refQuery, refPart]);
  const filteredTheses = useMemo(() => {
    const matches = thesisReferences.filter((r) =>
      `${r.title}${r.topic}${r.url}`.toLowerCase().includes(refQuery.toLowerCase())
    );
    return thesisOrder === "newest" ? matches : [...matches].reverse();
  }, [refQuery, thesisOrder]);
  const toggle = (n: number) => {
    const next = read.includes(n) ? read.filter((x) => x !== n) : [...read, n];
    setRead(next);
    localStorage.setItem("clinical-socio-read", JSON.stringify(next));
  };
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top">
          <span className="brand-mark">CS</span>
          <span>
            臨床社會語言學<small>READING FIELD NOTES</small>
          </span>
        </a>
        <nav>
          {[
            ["chapters", "章節閱讀"],
            ["research", "研究地圖"],
            ["ai", "人工智慧"],
            ["references", "文獻參考"],
            ["plan", "補件計畫"],
          ].map((x) => (
            <button
              key={x[0]}
              className={tab === x[0] ? "active" : ""}
              onClick={() => setTab(x[0])}
            >
              {x[1]}
            </button>
          ))}
        </nav>
        <a
          className="notion-link"
          href="https://app.notion.com/p/3c326041fe3781358b67eef7607d7298?pvs=204"
          target="_blank"
        >
          開啟 Notion ↗
        </a>
      </header>
      <section id="top" className="hero">
        <div className="eyebrow">MARTIN J. BALL, ED. · 2005</div>
        <h1>
          讀語言，也讀進
          <br />
          <em>一個人的生活裡。</em>
        </h1>
        <p>
          21
          章閱讀心得，從社會網絡、多語生命史與公平評估，走向高齡阿美語與神經認知研究的設計草圖。
        </p>
        <div className="hero-actions">
          <a
            className="download-pack"
          href="./clinical-sociolinguistics-apa7-research-pack.docx"
            download
            aria-label="下載APA 7 Word研究整合包"
          >
            <span className="download-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" role="img"><path d="M14 5h14l8 8v25a5 5 0 0 1-5 5H14a5 5 0 0 1-5-5V10a5 5 0 0 1 5-5Z"/><path d="M28 5v9h8M23 19v13m-5-5 5 5 5-5M16 37h14"/></svg>
            </span>
            <span className="download-copy"><b>下載APA 7 Word研究整合包</b><small>全部圖表數據 · 五章AI脈絡圖 · 研究缺口 · 阿美族研究連結</small></span>
            <span className="download-format">DOCX</span>
          </a>
        </div>
        <div className="hero-stats">
          {[
            ["21", "章節"],
            ["5", "主題群"],
            ["16", "已整理"],
            [String(read.length), "我的已讀"],
          ].map((x) => (
            <div key={x[1]}>
              <strong>{x[0]}</strong>
              <span>{x[1]}</span>
            </div>
          ))}
        </div>
      </section>
      {tab === "chapters" && (
        <section className="reading-shell">
          <aside className="chapter-index">
            <div className="section-kicker">CHAPTER INDEX</div>
            <label className="search">
              <span>⌕</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="搜尋概念、章節或關鍵詞"
              />
            </label>
            <div className="filters">
              {groups.map((g) => (
                <button
                  key={g}
                  className={group === g ? "active" : ""}
                  onClick={() => setGroup(g)}
                >
                  {g}
                </button>
              ))}
            </div>
            <div className="chapter-list">
              {filtered.map((c) => (
                <button
                  key={c.n}
                  className={selected === c.n ? "selected" : ""}
                  onClick={() => setSelected(c.n)}
                >
                  <span className="num">{String(c.n).padStart(2, "0")}</span>
                  <span>
                    <b>{c.title}</b>
                    <small>
                      {c.group} · {c.status}
                    </small>
                  </span>
                  <i>{read.includes(c.n) ? "●" : "○"}</i>
                </button>
              ))}
            </div>
          </aside>
          <article className="chapter-reader">
            <div className="reader-meta">
              <span>CHAPTER {String(current.n).padStart(2, "0")}</span>
              <span className={current.status === "待補" ? "pending" : ""}>
                {current.status}
              </span>
            </div>
            <h2>{current.title}</h2>
            <div className="tag-row">
              {current.tags.map((t) => (
                <span key={t}>#{t}</span>
              ))}
            </div>
            {[
              ["01", "本章核心", current.core],
              ["02", "對原住民族語研究", current.research],
              ["03", "未來研究與缺口", current.gap],
            ].map((x, i) => (
              <div className={"insight " + (i === 0 ? "lead" : "")} key={x[0]}>
                <div className="insight-no">{x[0]}</div>
                <div>
                  <h3>{x[1]}</h3>
                  <p>{x[2]}</p>
                </div>
              </div>
            ))}
            <blockquote>
              「與標準不同」不等於「錯誤」；「低分」也不等於「疾病」。
            </blockquote>
            <div className="reader-actions">
              <button onClick={() => toggle(current.n)}>
                {read.includes(current.n) ? "✓ 已完成閱讀" : "標記為已讀"}
              </button>
              <button
                disabled={current.n === 21}
                onClick={() => setSelected(Math.min(21, current.n + 1))}
              >
                下一章 →
              </button>
            </div>
          </article>
        </section>
      )}
      {tab === "research" && (
        <section className="research-view">
          <div className="section-kicker">RESEARCH MAP</div>
          <h2>從閱讀筆記，到可驗證的研究設計</h2>
          <div className="research-question">
            <small>暫定研究主問題</small>
            <p>
              如何區分高齡阿美語使用者的正常社會語言變化、語言使用減少／磨損，以及可能與神經認知變化相關的語言改變？
            </p>
          </div>
          <div className="path">
            {[
              "生命史與制度脈絡",
              "社會網絡與共同實踐",
              "語言使用量與優勢",
              "任務中的語言表現",
            ].map((x, i) => (
              <span key={x}>
                <b>0{i + 1}</b>
                {x}
                {i < 3 && <i>→</i>}
              </span>
            ))}
          </div>
          <div className="variable-grid">
            {variables.map((x, i) => (
              <article key={x[0]}>
                <span>0{i + 1}</span>
                <h3>{x[0]}</h3>
                <p>{x[1]}</p>
              </article>
            ))}
          </div>
          <div className="caution">
            這是由閱讀心得整合出的研究設計草圖，不是已驗證的因果模型；後續仍需以原書、實證文獻與指導意見修正。
          </div>
        </section>
      )}
      {tab === "ai" && (
        <section className="ai-view">
          <div className="ai-intro">
            <div>
              <div className="section-kicker">KEY TECHNOLOGY EXPLORATION · AI</div>
              <h2>關鍵科技探索<br /><em>人工智慧 × 臨床社會語言學</em></h2>
            </div>
            <div className="ai-summary">
              <span>TAICA MOOCs · 五章完整閱讀</span>
              <p>從AI演進、智慧醫療、影像辨識、語言模型到可信任治理，逐章轉譯為高齡阿美語與神經認知研究可使用的問題、方法與警示。</p>
              <a href="https://docs.google.com/document/d/1KKCX0UduewpLieoyoJ8fipFtP_fnh-uSaFzkj6QFT7o/edit" target="_blank" rel="noreferrer">閱讀五章完整課程整理 ↗</a>
            </div>
          </div>

          <div className="ai-course-stats">
            <div><strong>5</strong><span>完整章節</span></div>
            <div><strong>21</strong><span>主題單元</span></div>
            <div><strong>50</strong><span>練習題</span></div>
            <div><strong>1</strong><span>阿美族研究主軸</span></div>
          </div>

          <div className="ai-chapter-browser">
            <aside>
              <div className="section-kicker">FIVE-CHAPTER MAP</div>
              {aiChapters.map((c) => (
                <button key={c.n} className={aiChapter === c.n ? "active" : ""} onClick={() => setAiChapter(c.n)}>
                  <span>{String(c.n).padStart(2, "0")}</span><b>{c.label}</b><small>{c.title}</small>
                </button>
              ))}
            </aside>
            <article className="ai-chapter-detail">
              <header><span>CHAPTER {String(currentAi.n).padStart(2, "0")}</span><b>{currentAi.label}</b></header>
              <h3>{currentAi.title}</h3>
              <div className="ai-unit-list">{currentAi.units.map((u, i) => <span key={u}><b>{currentAi.n}-{i + 1}</b>{u}</span>)}</div>
              <div className="ai-reading-notes">
                <div><small>章節核心</small><p>{currentAi.core}</p></div>
                <div><small>連回阿美族研究</small><p>{currentAi.amis}</p></div>
                <div><small>研究警示</small><p>{currentAi.caution}</p></div>
              </div>
            </article>
          </div>

          <div className="ai-section-heading"><div className="section-kicker">CHAPTER 05 · TRUSTWORTHY AI</div><h3>可信任AI四個面向</h3></div>
          <div className="trust-loop" aria-label="可信任人工智慧四個核心面向">
            <div className="trust-center"><b>可信任 AI</b><small>不只看準確率</small></div>
            {aiModules.map((m, i) => (
              <article key={m.id}>
                <span>0{i + 1}</span><b>{m.title}</b><small>{m.en}</small>
              </article>
            ))}
          </div>

          <div className="ai-modules">
            {aiModules.map((m) => (
              <article key={m.id}>
                <header><span>{m.id}</span><small>{m.en}</small></header>
                <h3>{m.title}</h3>
                <p className="module-question">{m.question}</p>
                <div className="concepts">{m.concepts.map((c) => <span key={c}>{c}</span>)}</div>
                <div className="amis-link"><b>連回阿美族研究</b><p>{m.amis}</p></div>
              </article>
            ))}
          </div>

          <div className="ai-evaluation">
            <div>
              <div className="section-kicker">RESEARCH TRANSLATION</div>
              <h3>把可信任 AI 變成研究設計</h3>
              <p>每個模型結果都要回答三個問題：在哪些人身上有效、它依據什麼、出錯時如何處理。</p>
            </div>
            <ol>
              {[
                ["01", "建立病前基準", "語言生命史、部落／方言、教育、識字、聽力與社會網絡"],
                ["02", "設計外部驗證", "留一受試者、部落、方言、任務與設備之外的測試"],
                ["03", "分層檢查公平", "同時報告各群體錯誤率、校準與不確定性"],
                ["04", "解釋模型依據", "檢查聲學、詞彙句法、敘事語意與社會語言特徵"],
                ["05", "共同治理生命週期", "由研究者、臨床端與社群共同決定資料及模型用途"],
              ].map((x) => <li key={x[0]}><span>{x[0]}</span><b>{x[1]}</b><p>{x[2]}</p></li>)}
            </ol>
          </div>

          <div className="ai-gap">
            <small>博士研究缺口</small>
            <p>目前缺少能同時整合阿美語病前語言生態、跨部落／方言外部驗證、個案層次解釋、公平性評估與原住民族資料主權的高齡神經認知語音研究框架。</p>
          </div>
          <div className="source-note">本頁依據「TAICA MOOCs｜關鍵科技探索－人工智慧」第一至第五章完整課程整理，轉譯為阿美族臨床社會語言學研究的閱讀入口；屬研究設計草圖，非臨床診斷工具。</div>
        </section>
      )}
      {tab === "references" && (
        <section className="references-view">
          <div className="references-head">
            <div>
              <div className="section-kicker">REFERENCE LIBRARY · PERMANENT LINKS</div>
              <h2>文獻參考</h2>
              <p>整合《臨床社會語言學》章節原典與臺灣博碩士論文，保留研究焦點及可查證的永久連結。</p>
            </div>
            <div className="reference-count"><strong>{refCollection === "theses" ? filteredTheses.length : filteredReferences.length}</strong><span>／{refCollection === "theses" ? "34篇論文" : "21章文獻"}</span></div>
          </div>
          <div className="reference-collections" role="tablist" aria-label="文獻來源">
            <button className={refCollection === "theses" ? "active" : ""} onClick={() => setRefCollection("theses")}>臺灣博碩士論文知識加值系統 <b>34</b></button>
            <button className={refCollection === "chapters" ? "active" : ""} onClick={() => setRefCollection("chapters")}>書籍章節原典 <b>21</b></button>
          </div>
          <div className="reference-tools">
            <label className="reference-search"><span>⌕</span><input value={refQuery} onChange={(e)=>setRefQuery(e.target.value)} placeholder="搜尋題名、研究主題或永久識別碼" /></label>
            {refCollection === "chapters" ? <div className="reference-parts">{["全部","Part I","Part II"].map((p)=><button key={p} className={refPart===p?"active":""} onClick={()=>setRefPart(p)}>{p}</button>)}</div> : <button className="thesis-order" onClick={() => setThesisOrder(thesisOrder === "newest" ? "oldest" : "newest")} aria-label={`切換為${thesisOrder === "newest" ? "舊到新" : "新到舊"}排列`} title="切換排列順序"><span aria-hidden="true">⇅</span><b>{thesisOrder === "newest" ? "新 → 舊" : "舊 → 新"}</b></button>}
          </div>
          {refCollection === "chapters" ? <div className="reference-list">
            {filteredReferences.map((r)=><article key={r.chapter}>
              <div className="reference-number"><span>CH.</span><b>{String(r.chapter).padStart(2,"0")}</b></div>
              <div className="reference-entry">
                <div className="reference-meta"><span>{r.part}</span><small>{r.focus}</small></div>
                <p>{r.authors} (2005). {r.title}. In M. J. Ball (Ed.), <i>Clinical sociolinguistics</i>. Blackwell Publishing.</p>
                <a href={`https://doi.org/${r.doi}`} target="_blank" rel="noreferrer"><span>DOI</span>{r.doi}<b>↗</b></a>
              </div>
            </article>)}
          </div> : <div className="reference-list thesis-list">
            {filteredTheses.map((r, index)=><article key={r.url}>
              <div className="reference-number"><span>NO.</span><b>{String(index + 1).padStart(2,"0")}</b></div>
              <div className="reference-entry">
                <div className="reference-meta"><span>學位論文</span><small>{r.topic}</small></div>
                <p>{r.title}</p>
                <a href={r.url} target="_blank" rel="noreferrer"><span>NDLTD</span>{r.url.replace("https://", "")}<b>↗</b></a>
              </div>
            </article>)}
          </div>}
          <div className="reference-provenance"><b>來源與排序</b><p>{refCollection === "theses" ? "本清單收錄指定的34筆「臺灣博碩士論文知識加值系統」文獻，依研究者提供之新至舊順序呈現；每筆均連至國家圖書館Handle永久識別網址。國圖目錄可能要求驗證碼，本站不臆補未能可靠核對的年份或作者。" : "章名與作者依指定Google文件整理；DOI已逐章以Crossref書目資料核對。此區列出各章原典，不將閱讀心得中的未完整書目人名或案例自行擴充為正式引用。"}</p>{refCollection === "chapters" && <a href="https://docs.google.com/document/d/1J7xyJ0r_9L6q6xOnYD_RA8o9kN33zXWJYVBv7zsjHWQ/edit" target="_blank" rel="noreferrer">開啟原始整理文件 ↗</a>}</div>
        </section>
      )}
      {tab === "plan" && (
        <section className="plan-view">
          <div className="section-kicker">COMPLETION PLAN</div>
          <h2>五章待補，一套共同寫作框架</h2>
          <div className="priority-list">
            {[
              [
                "第一優先",
                "第 14、15 章",
                "補強 difference / disorder、公平評估與非主流方言、雙語兒童的判讀邏輯。",
              ],
              [
                "第二優先",
                "第 2、8 章",
                "補足區域／社會變異與 African American English，建立「非標準不等於障礙」的證據鏈。",
              ],
              [
                "第三優先",
                "第 20 章",
                "補足手語社會語言學，擴大對溝通模態、社群與臨床分類的理解。",
              ],
            ].map((x) => (
              <article key={x[0]}>
                <span>{x[0]}</span>
                <b>{x[1]}</b>
                <p>{x[2]}</p>
              </article>
            ))}
          </div>
          <div className="template">
            <h3>每章六步寫作模板</h3>
            <div>
              {[
                "核心論點與關鍵概念",
                "最容易造成臨床誤判的情境",
                "對臺灣原住民族語研究的可轉用觀點",
                "對阿美語 × 高齡／認知研究的啟示",
                "一項可驗證的假設或明確缺口",
                "原書頁碼、直接引用與延伸文獻",
              ].map((x, i) => (
                <p key={x}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {x}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}
      <footer>
        <div>
          <b>Clinical Sociolinguistics</b>
          <span>閱讀心得與研究設計備忘</span>
        </div>
        <p>
          內容同步自 Notion 整理頁 ·
          個人閱讀筆記，不應直接視為已驗證之外部事實。
        </p>
      </footer>
    </main>
  );
}
