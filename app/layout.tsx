import type {Metadata} from 'next';import './globals.css';
export const metadata:Metadata={title:'《臨床社會語言學》閱讀平台',description:'21 章閱讀心得：從社會網絡、多語生命史與公平評估，走向高齡阿美語與神經認知研究。',openGraph:{title:'《臨床社會語言學》閱讀平台',description:'讀語言，也讀進一個人的生活裡。',type:'website',images:['/og.png']},twitter:{card:'summary_large_image',title:'《臨床社會語言學》閱讀平台',description:'讀語言，也讀進一個人的生活裡。',images:['/og.png']}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-Hant"><body>{children}</body></html>}
