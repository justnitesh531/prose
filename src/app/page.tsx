import { Timeline } from '@/components';
import timelineData from '@/data/timeline.json';

export default function Home() {
  return (
    <div className="min-h-screen w-full font-sans">
      {/* Main timeline */}
      <Timeline data={timelineData} />
    </div>
  );
}
