export default function Cafe() {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex gap-8">
          <a href="/" className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">
            Home
          </a>
          <a href="/cafe" className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors">
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

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Café</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to Prose Café, where craftsmanship meets community. We believe in the power of a well-made cup of coffee and thoughtfully prepared food, served in a space that brings people together.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Prose Café was founded with a simple mission: to create a gathering space that celebrates the art of coffee and conversation. Every detail, from our single-origin beans to our hand-crafted pastries, reflects our commitment to quality.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Visit us to experience the warmth of our community and the excellence of our craft.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hours & Location</h2>
            <div className="text-gray-600 space-y-3">
              <div>
                <p className="font-semibold text-gray-900">Monday - Friday</p>
                <p>7:00 AM - 9:00 PM</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Saturday - Sunday</p>
                <p>8:00 AM - 10:00 PM</p>
              </div>
              <div className="pt-4">
                <p className="font-semibold text-gray-900">Location</p>
                <p>Bangalore, India</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Menu</h2>
          <p className="text-gray-600 mb-4">
            Our seasonal menus change throughout the year, celebrating local ingredients and culinary creativity. Check our timeline on the homepage for current offerings.
          </p>
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded hover:bg-gray-800 transition-colors"
          >
            View Timeline
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
