import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'Натяжные потолки в Санкт-Петербурге — [НАЗВАНИЕ КОМПАНИИ]',description:'Современные натяжные потолки в Санкт-Петербурге и Ленинградской области. Прозрачная смета, продуманное освещение и аккуратный монтаж за 1–2 дня.',openGraph:{title:'Натяжные потолки в Санкт-Петербурге',description:'Современные решения с прозрачной сметой. Санкт-Петербург и Ленинградская область.',locale:'ru_RU',type:'website'},icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ru"><body>{children}</body></html>}
