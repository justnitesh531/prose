export default function Gifting() {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex gap-8">
          <a href="/" className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">
            Home
          </a>
          <a href="/cafe" className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">
            Café
          </a>
          <a href="/gifting" className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors">
            Gifting
          </a>
          <a href="/contact" className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">
            Contact
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Corporate Gifting</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Give the gift of exceptional coffee and thoughtful hospitality. Our corporate gifting services are designed to delight your clients, partners, and employees.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
          <div className="border border-gray-200 rounded p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Coffee Subscriptions</h3>
            <p className="text-gray-600 mb-4">
              Curated monthly deliveries of our finest single-origin beans, perfect for coffee enthusiasts.
            </p>
            <p className="font-semibold text-gray-900">Starting at ₹1,500/month</p>
          </div>
          <div className="border border-gray-200 rounded p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Gift Boxes</h3>
            <p className="text-gray-600 mb-4">
              Beautifully packaged selections of our premium coffee, pastries, and artisanal treats.
            </p>
            <p className="font-semibold text-gray-900">Starting at ₹2,000</p>
          </div>
          <div className="border border-gray-200 rounded p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Packages</h3>
            <p className="text-gray-600 mb-4">
              Tailored corporate gifts with your branding, perfect for large orders and special occasions.
            </p>
            <p className="font-semibold text-gray-900">Custom pricing</p>
          </div>
          <div className="border border-gray-200 rounded p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Catering</h3>
            <p className="text-gray-600 mb-4">
              Bring the Prose experience to your office or event with professional catering services.
            </p>
            <p className="font-semibold text-gray-900">Bulk quotes available</p>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded p-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Gift Prose?</h2>
          <p className="text-gray-600 mb-6">
            Contact us to discuss your corporate gifting needs.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-gray-900 text-white font-semibold rounded hover:bg-gray-800 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12 text-sm text-gray-600 text-center">
          &copy; 2025 Prose Café. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
