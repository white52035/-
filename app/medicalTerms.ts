export type MedicalTerm = {
  id: string;
  term: string;
  abbr?: string;
  full?: string;
  zh: string;
  alt?: string;
  definition: string;
  category: "核心概念" | "疾病／症候群" | "語言溝通" | "腦區／機制" | "風險／鑑別";
  videoIds?: string[];
};

export const videoSources: Record<string, { label: string; url: string }> = {
  QuJFLr5Ib9k: { label: "影片 01", url: "https://www.youtube.com/watch?v=QuJFLr5Ib9k" },
  Tn6YlinSaBc: { label: "影片 02", url: "https://www.youtube.com/watch?v=Tn6YlinSaBc" },
};

export const glossaryTerms: MedicalTerm[] = [
  { id: "cognitive-decline", term: "Cognitive Decline", zh: "認知功能退化／認知衰退", definition: "描述記憶、注意、語言、執行功能或其他認知能力相較過去下降的現象；可能與正常老化、疾病或其他因素有關，本身不是特定診斷。", category: "核心概念", videoIds: ["Tn6YlinSaBc"] },
  { id: "cognitive-impairment", term: "Cognitive Impairment", zh: "認知障礙／認知功能障礙", definition: "泛指一項或多項認知功能低於預期或受損，程度與原因不一，不必然等同失智症。", category: "核心概念" },
  { id: "mci", term: "Mild Cognitive Impairment", abbr: "MCI", zh: "輕度認知障礙", definition: "有主觀或客觀認知下降，但日常獨立功能大致保留；部分個案可能穩定、改善或進展，不能直接等同早期失智症。", category: "疾病／症候群" },
  { id: "dementia", term: "Dementia", zh: "失智症／認知障礙症", definition: "多種腦部疾病造成的臨床症候群；認知下降已明顯干擾日常功能與獨立生活。", category: "疾病／症候群", videoIds: ["QuJFLr5Ib9k", "Tn6YlinSaBc"] },
  { id: "alzheimers", term: "Alzheimer’s Disease", abbr: "AD", zh: "阿茲海默症", definition: "一種特定神經退化性疾病，也是失智症常見病因之一；Alzheimer’s disease 與 dementia 不是完全相同的概念。", category: "疾病／症候群" },
  { id: "adrd", term: "Alzheimer’s Disease and Related Dementias", abbr: "ADRD", zh: "阿茲海默症及相關失智症", alt: "亦可依文脈譯為：阿茲海默症相關神經退化性疾病", definition: "集合用語，涵蓋阿茲海默症及其他相關失智疾病；實際納入範圍應依研究或政策文件定義。", category: "疾病／症候群" },
  { id: "ftd", term: "Frontotemporal Dementia", abbr: "FTD", zh: "額顳葉失智症", definition: "一組主要影響大腦額葉與顳葉的進行性神經退化疾病，可先出現行為、人格、執行功能或語言變化。", category: "疾病／症候群", videoIds: ["QuJFLr5Ib9k", "Tn6YlinSaBc"] },
  { id: "ppa", term: "Primary Progressive Aphasia", abbr: "PPA", zh: "原發性漸進性失語症", alt: "亦稱：原發性進行性失語症", definition: "以語言能力漸進退化為主要早期表現的神經退化症候群，包含不同亞型；不能只憑一般找字困難判定。", category: "語言溝通", videoIds: ["Tn6YlinSaBc"] },
  { id: "bvftd", term: "Behavioural Variant Frontotemporal Dementia", abbr: "bvFTD", zh: "行為型額顳葉失智症", definition: "以社會行為、人格、同理心、抑制或執行功能改變為主要早期表現的 FTD 類型。", category: "疾病／症候群", videoIds: ["Tn6YlinSaBc"] },
  { id: "aphasia", term: "Aphasia", zh: "失語症", definition: "因腦部損傷或疾病造成的後天語言障礙，可影響口語表達、理解、命名、閱讀與書寫；不等同智力消失。", category: "語言溝通", videoIds: ["Tn6YlinSaBc"] },
  { id: "word-finding", term: "Word-finding Difficulty", zh: "找詞困難", definition: "知道想表達的概念，卻一時無法提取適當詞彙；需依頻率、錯誤類型、功能影響與變化軌跡判斷是否異常。", category: "語言溝通", videoIds: ["QuJFLr5Ib9k"] },
  { id: "frontal-lobe", term: "Frontal Lobe", zh: "額葉", definition: "參與計畫、判斷、抑制控制、社會行為、情緒調節及語言產出等功能的腦區。", category: "腦區／機制", videoIds: ["QuJFLr5Ib9k"] },
  { id: "temporal-lobe", term: "Temporal Lobe", zh: "顳葉", definition: "參與聽覺處理、語言理解、語意記憶及人物與物件辨識的腦區。", category: "腦區／機制", videoIds: ["QuJFLr5Ib9k"] },
  { id: "neurodegeneration", term: "Neurodegeneration", zh: "神經退化", definition: "神經元或神經網絡逐漸受損並失去功能的病理過程，通常具有進行性。", category: "腦區／機制", videoIds: ["QuJFLr5Ib9k"] },
  { id: "stroke", term: "Stroke", zh: "中風／腦血管意外", definition: "腦部血流阻塞或出血造成的急性腦損傷；若語言症狀突然出現，需立即接受緊急醫療評估。", category: "風險／鑑別", videoIds: ["Tn6YlinSaBc"] },
  { id: "sleep-apnea", term: "Sleep Apnea", zh: "睡眠呼吸中止症", definition: "睡眠時反覆呼吸停止或減弱，可能造成缺氧與睡眠破碎，並與心血管及認知風險相關。", category: "風險／鑑別", videoIds: ["Tn6YlinSaBc"] },
  { id: "modifiable-risk", term: "Modifiable Risk Factor", zh: "可調整風險因子", definition: "可透過治療或生活介入改善的風險面向，例如血壓、活動量、聽力照護與部分代謝問題；降低風險不等於保證不發病。", category: "風險／鑑別", videoIds: ["Tn6YlinSaBc"] },
];

export function getMedicalTerm(id: string) {
  return glossaryTerms.find(item => item.id === id);
}
