import { SITE_CONFIG, SERVICES, NAVIGATION } from '../../utils/constants';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-neutral-dark via-primary-dark to-neutral-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                  <span className="text-3xl">🛡️</span>
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold">S.S. Pest Control</h3>
                  <p className="text-sm text-white/60">Govt Approved</p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
                Mumbai's trusted pest control experts. Professional, eco-friendly solutions since 2008.
              </p>
              {/* Social Links */}
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-white/10 hover:bg-accent-yellow rounded-full flex items-center justify-center transition-all hover:scale-110 transform">
                  <span className="text-2xl">📘</span>
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 hover:bg-accent-yellow rounded-full flex items-center justify-center transition-all hover:scale-110 transform">
                  <span className="text-2xl">📷</span>
                </a>
                <a 
                  href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-green-500 rounded-full flex items-center justify-center transition-all hover:scale-110 transform"
                >
                  <span className="text-2xl">💬</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-heading font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {NAVIGATION.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.path}
                      className="text-white/80 hover:text-accent-yellow transition-colors flex items-center gap-2 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-heading font-bold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {SERVICES.slice(0, 6).map((service) => (
                  <li key={service.id}>
                    <a 
                      href={`#${service.id}`}
                      className="text-white/80 hover:text-accent-yellow transition-colors flex items-center gap-2"
                    >
                      <span className="text-lg">{service.icon}</span>
                      <span className="text-sm">{service.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-heading font-bold mb-6">Get In Touch</h4>
              <div className="space-y-4">
                {/* Phone */}
                <a 
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-start gap-3 text-white/80 hover:text-accent-yellow transition-colors group"
                >
                  <span className="text-2xl mt-1">📞</span>
                  <div>
                    <div className="text-sm text-white/60 mb-1">24/7 Hotline</div>
                    <div className="font-bold group-hover:underline">{SITE_CONFIG.phone}</div>
                    <div className="text-sm">{SITE_CONFIG.whatsapp}</div>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start gap-3 text-white/80 hover:text-accent-yellow transition-colors group"
                >
                  <span className="text-2xl mt-1">✉️</span>
                  <div>
                    <div className="text-sm text-white/60 mb-1">Email Us</div>
                    <div className="font-bold group-hover:underline break-all">{SITE_CONFIG.email}</div>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-3 text-white/80">
                  <span className="text-2xl mt-1">📍</span>
                  <div>
                    <div className="text-sm text-white/60 mb-1">Office Location</div>
                    <div className="text-sm leading-relaxed">{SITE_CONFIG.address}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications & Trust Badges */}
          <div className="border-t border-white/10 pt-12 mb-12">
            <h4 className="text-center text-xl font-heading font-bold mb-8">Certified & Trusted</h4>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                <div className="text-sm font-semibold">✓ Govt Approved</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                <div className="text-sm font-semibold">🌿 Eco-Friendly</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                <div className="text-sm font-semibold">🛡️ 100% Warranty</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                <div className="text-sm font-semibold">⭐ 5000+ Clients</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
              <div>
                © {currentYear} S.S. Pest Control Service. All Rights Reserved.
              </div>
              <div className="flex gap-6">
                <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-all hover:scale-110 transform z-50 animate-bounce"
      >
        <span className="text-3xl">💬</span>
      </a>
    </footer>
  );
}

export default Footer;