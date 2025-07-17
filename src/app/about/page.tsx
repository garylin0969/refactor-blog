import NextImage from 'next/image';
import SectionTitle from '@/components/atoms/section-title';
import AuthorCard from '@/components/molecules/author-card';
import IntroCard from '@/components/molecules/intro-card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/utils/shadcn';

const EXPERIENCE_LIST = [
    {
        id: 'anue',
        image: '/company-logo/anue.png',
        company: 'Anue 鉅亨網',
        title: 'Frontend Developer',
        startDate: '2024.03',
        endDate: 'Now',
        details: [
            '參與 Scrum 開發流程，運用 Jira、Slack 與 Confluence 促進跨部門協作及專案管理。',
            '負責外匯及新聞領域專案的開發，涵蓋約 10 項專案的功能維護與新增需求。',
            '採用 Docker 將網站封裝為映像檔，結合 GitLab CI/CD 部署至 GitLab Container Registry。',
            '利用 Highcharts 與 TradingView 開發動態視覺化圖表，提供精確數據呈現。',
            '透過 Google Analytics (GA4) 收集並分析用戶行為數據，生成深度洞察報告。',
            '結合 Next.js、伺服端渲染 (SSR) 及 Metadata 優化，有效提升網站 SEO 表現。',
            '實現 Lazy Load 機制，顯著優化網頁效能與載入速度。',
            '採用 React Query 與快取技術，降低 API 呼叫次數並提升前端運行效率。',
            '運用 React.js、TypeScript、Tailwind CSS 及 Vite 開發 B2B 專案平台。',
            '公司技術涵蓋（但不限於） Next.js、TypeScript、Tailwind CSS、React Query、Jest、Storybook、Google Analytics 及 TradingView。',
        ],
    },
    {
        id: 'uec',
        image: '/company-logo/uec.jpg',
        company: 'Universal EC Inc.',
        title: 'Frontend Developer',
        startDate: '2022.10',
        endDate: '2024.02',
        details: [
            '參與 Scrum 敏捷開發流程，運用 Mantis 與 Asana 進行跨部門協作及專案管理。',
            '重構系統架構，導入 Prettier、JWT 與 Jest 等技術，以顯著提升程式碼品質與系統效能。',
            '深入研究 Next.js 技術，應用於前台系統的升級及新功能開發，推動技術革新。',
            '優化既有專案架構，實現元件化設計，有效降低重工成本並增強程式維護性。',
            '建構 GitLab CI/CD 自動化部署流程。',
            '支援電子發票加值中心專案的全周期開發與維護工作。',
            '主導模板專案系統架構的重構與優化，提升整體系統穩定性。',
            '參與財團法人純青社會福利基金會學堂管理系統的開發與運營維護。',
            '領導簽審通關共同作業平台前後台系統的整合開發，確保系統協同運作。',
            '參與第一社會福利基金會捐款管理系統的設計與開發，優化捐款流程。',
            '利用 React Bootstrap 完成前端 UI 樣式的設計與實現，確保視覺一致性。',
            '通過 Sourcetree、GitLab 與 Apache 有效管理版本控制及部署流程。',
            '採用 Spring Boot 開發後端系統，並使用 MS SQL 與 Oracle 進行資料庫管理。',
            '使用 React.js 、Next.js、TypeScript、React Hook Form、Redux、Axios 與 Jest 實現前端開發。',
        ],
    },
    {
        id: 'ispan',
        image: '/company-logo/ispan.png',
        company: 'iSpan International Inc.',
        title: 'Frontend Class Trainee',
        startDate: '2022.03',
        endDate: '2022.08',
        details: [
            '實施 JSON Web Token (JWT) 與 Google OAuth 認證機制。',
            '開發會員中心及收藏功能，提供完善的用戶資料管理與個性化服務，優化用戶體驗。',
            '整合 Socket.IO 架構聊天室，實現用戶間即時的通訊互動。',
            '採用 Chart.js 構建數據可視化報表，提升資料呈現效果並增強數據分析能力。',
            '基於 React.js 搭配 Axios 進行 API 整合，運用 Bootstrap 與 MUI 完成前端設計，並結合 GSAP 強化頁面動畫效果，打造流暢互動介面。',
            '採用 Express 框架搭建後端伺服器，並以 MySQL 作為資料庫管理系統。',
        ],
    },
];

const ExperienceCard = ({ experience }: { experience: (typeof EXPERIENCE_LIST)[0] }) => (
    <Card className="gap-y-2 p-2.5">
        <CardHeader className="flex items-center gap-x-2 p-0">
            <NextImage className="rounded-md" src={experience.image} alt={experience.company} width={64} height={64} />
            <div className="space-y-1">
                <CardTitle>{experience.title}</CardTitle>
                <CardDescription>{experience.company}</CardDescription>
                <CardDescription>
                    {experience.startDate} - {experience.endDate}
                </CardDescription>
            </div>
        </CardHeader>
        <CardContent className="p-0">
            <Accordion type="single" collapsible>
                <AccordionItem value={experience.id}>
                    <AccordionTrigger asChild>
                        <Button className="w-full">View Details</Button>
                    </AccordionTrigger>
                    <AccordionContent className="p-0">
                        <ul className="list-inside list-disc space-y-2 p-3 text-base">
                            {experience.details.map((detail, detailIndex) => (
                                <li key={detailIndex}>{detail}</li>
                            ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </CardContent>
    </Card>
);

const AboutPage = () => {
    return (
        <div className="my-8 space-y-8">
            <section className="mx-auto space-y-8">
                <AuthorCard className="mx-auto" />
                <IntroCard className="mx-auto max-w-3xl" />
            </section>
            <section className="mx-auto max-w-6xl space-y-8">
                <SectionTitle className="text-center">Experience</SectionTitle>
                {/* 時間軸容器 */}
                <div className="relative">
                    {/* 中間的時間軸線 - 手機版隱藏 */}
                    <div className="bg-primary absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 transform md:block"></div>

                    {/* 時間軸項目 */}
                    <div className="space-y-6 md:space-y-12">
                        {EXPERIENCE_LIST.map((experience, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={experience.id} className="flex flex-col items-center md:flex-row">
                                    {/* 左側內容 - 偶數索引 */}
                                    <div
                                        className={cn('w-full pr-0 md:w-1/2 md:pr-8', !isEven ? 'hidden md:block' : '')}
                                    >
                                        {isEven && <ExperienceCard experience={experience} />}
                                    </div>

                                    {/* 中間的圓點 - 手機版隱藏 */}
                                    <div className="bg-primary z-10 hidden h-4 w-4 rounded-full border-4 md:block"></div>

                                    {/* 右側內容 - 奇數索引 */}
                                    <div
                                        className={cn(
                                            'w-full pl-0 md:w-1/2 md:pl-8',
                                            isEven ? 'hidden md:block' : 'order-first md:order-none'
                                        )}
                                    >
                                        {!isEven && <ExperienceCard experience={experience} />}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
