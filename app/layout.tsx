import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'Натяжные потолки в Санкт-Петербурге — [ИМЯ МАСТЕРА]',description:'Частный мастер по натяжным потолкам в Санкт-Петербурге. Полотна, профили, карнизы и освещение. Без предоплаты: оплата после монтажа.',openGraph:{title:'Натяжные потолки в Санкт-Петербурге',description:'Натяжные потолки, карнизы и освещение. Частный мастер в Санкт-Петербурге. Полная постоплата.',locale:'ru_RU',type:'website'},icons:{icon:(process.env.NEXT_PUBLIC_BASE_PATH || '')+'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ru"><body>{children}</body></html>}
