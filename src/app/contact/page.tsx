'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend API
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

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
          <a href="/gifting" className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">
            Gifting
          </a>
          <a href="/contact" className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors">
            Contact
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Get In Touch</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            We'd love to hear from you. Whether you have a question about our café, gifting services, or just want to say hello, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
            <p className="text-gray-600 text-sm">
              Bangalore<br/>
              India
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
            <a href="mailto:hello@prose.co.in" className="text-gray-600 text-sm hover:text-gray-900">
              hello@prose.co.in
            </a>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
            <a href="tel:+91XXX" className="text-gray-600 text-sm hover:text-gray-900">
              +91 XXX XXX XXXX
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="border border-gray-200 rounded p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900"
                  placeholder="+91 XXX XXX XXXX"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900"
                  placeholder="How can we help?"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900"
                placeholder="Tell us what's on your mind..."
              />
            </div>

            <button
              type="submit"
              className="px-8 py-3 bg-gray-900 text-white font-semibold rounded hover:bg-gray-800 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h2>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">Instagram</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Twitter</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">LinkedIn</a>
          </div>
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
