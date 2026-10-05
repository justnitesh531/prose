import { Timeline } from '@/components';
import portfolioData from '@/data/portfolio.json';

export default function Home() {
  return (
    <div className="min-h-screen w-full font-sans">
      <Timeline data={portfolioData} />
    </div>
  );
}