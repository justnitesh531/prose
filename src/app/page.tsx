import { Timeline } from '@/components';
import timelineData from '@/data/timeline.json';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Hero Section */}
      <header className="relative border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-24 sm:py-32">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-gray-900 rounded-full" />
              <span className="text-sm uppercase tracking-widest text-gray-600 font-semibold">
                PROSE CAFÉ
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Where craftsmanship meets community
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Explore our café's journey throughout the year. Seasonal menus, special events, and collaborations that elevate your day.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#JAN_25"
                className="inline-flex items-center justify-center px-8 py-3 bg-gray-900 text-white font-semibold rounded hover:bg-gray-800 transition-colors"
              >
                START SCROLLING
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-gray-900 font-semibold rounded hover:bg-gray-50 transition-colors"
              >
                GET IN TOUCH
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Links */}
      <nav className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex gap-8">
          <a href="/" className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors">
            Home
          </a>
          <a href="/cafe" className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">
            Café
          </a>
          <a href="/gifting" className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">
            Gifting
          </a>
          <a href="/contact" className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">
            Contact
          </a>
        </div>
      </nav>

      {/* Timeline */}
      <main>
        <Timeline data={timelineData} />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">PROSE</h3>
              <p className="text-sm text-gray-600">Where craftsmanship meets community.</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">LINKS</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="/cafe" className="hover:text-gray-900">Café</a></li>
                <li><a href="/gifting" className="hover:text-gray-900">Gifting</a></li>
                <li><a href="/contact" className="hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">FOLLOW</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Instagram</a></li>
                <li><a href="#" className="hover:text-gray-900">Twitter</a></li>
                <li><a href="#" className="hover:text-gray-900">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
            <p>&copy; 2025 Prose Café. All rights reserved.</p>
            <p>Built with Next.js & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
