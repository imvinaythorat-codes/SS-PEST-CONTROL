import { useState } from 'react';
import { SITE_CONFIG } from '../utils/constants';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the data
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  return (
    <div className="contact-page bg-neutral-offwhite">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Have a pest problem? We're here to help 24/7
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Contact Information */}
            <div>
              <h2 className="text-4xl font-heading font-bold text-neutral-dark mb-8">
                Contact Information
              </h2>

              {/* Phone */}
              <div className="mb-8 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-dark mb-2">Phone</h3>
                  <a href={`tel:${SITE_CONFIG.phone}`} className="text-lg text-primary hover:underline block">
                    {SITE_CONFIG.phone}
                  </a>
                  <a href={`tel:${SITE_CONFIG.whatsapp}`} className="text-lg text-primary hover:underline block">
                    {SITE_CONFIG.whatsapp}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="mb-8 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">✉️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-dark mb-2">Email</h3>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-lg text-primary hover:underline">
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="mb-8 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-dark mb-2">Address</h3>
                  <p className="text-lg text-neutral-medium leading-relaxed">
                    {SITE_CONFIG.address}
                  </p>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="mt-12 space-y-4">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="block w-full bg-primary hover:bg-primary-dark text-white text-center py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  📞 Call Now
                </a>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  💬 WhatsApp Us
                </a>
              </div>

              {/* Business Hours */}
              <div className="mt-12 bg-accent-yellow/10 border-2 border-accent-yellow rounded-xl p-6">
                <h3 className="text-xl font-bold text-neutral-dark mb-4 flex items-center gap-2">
                  <span>⏰</span> Business Hours
                </h3>
                <div className="space-y-2 text-neutral-dark">
                  <div className="flex justify-between">
                    <span className="font-medium">24/7 Emergency:</span>
                    <span className="text-primary font-bold">Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Saturday:</span>
                    <span>9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday:</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-heading font-bold text-neutral-dark mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-neutral-dark font-semibold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-neutral-light rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-neutral-dark font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-neutral-light rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-neutral-dark font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-neutral-light rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-neutral-dark font-semibold mb-2">
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-neutral-light rounded-lg focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="cockroaches-ants">Cockroaches & Ants</option>
                    <option value="bed-bugs">Bed Bugs</option>
                    <option value="termite">Termite Control</option>
                    <option value="rodent">Rodent Control</option>
                    <option value="mosquitoes">Mosquitoes</option>
                    <option value="wood-borers">Wood Borers</option>
                    <option value="bird-control">Bird Control</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-neutral-dark font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-neutral-light rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your pest problem..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>

              <p className="mt-6 text-sm text-neutral-medium text-center">
                We'll get back to you within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-heading font-bold text-neutral-dark text-center mb-12">
            Find Us
          </h2>
          <div className="bg-neutral-light rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📍</div>
              <p className="text-xl text-neutral-medium">Map integration coming soon</p>
              <p className="text-neutral-medium mt-2">{SITE_CONFIG.address}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;