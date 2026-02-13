import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SITE_CONFIG } from '../../utils/constants';

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    // Pest scatter animation - your signature!
    gsap.to('.pest-icon', {
      x: () => gsap.utils.random(-500, 500),
      y: () => gsap.utils.random(-500, 500),
      opacity: 0,
      scale: 0,
      rotation: () => gsap.utils.random(-360, 360),
      stagger: 0.08,
      duration: 1.5,
      ease: 'power2.in',
      delay: 2,
    });
  }, []);

  const handleCTAClick = (type) => {
    if (type === 'call') {
      window.location.href = `tel:${SITE_CONFIG.phone}`;
    } else if (type === 'whatsapp') {
      window.open(`https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}`, '_blank');
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://cdn.coverr.co/videos/coverr-a-clean-and-modern-home-interior-9336/1080p.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80&auto=format&fit=crop"
            alt="Modern home interior"
            className="w-full h-full object-cover"
          />
        </video>
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-primary-dark/50"></div>
      </div>

      {/* Pest Icons - SIGNATURE SCATTER EFFECT */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="pest-icon absolute top-20 left-20 text-7xl opacity-80 drop-shadow-2xl">🪳</div>
        <div className="pest-icon absolute top-40 right-32 text-6xl opacity-80 drop-shadow-2xl">🐜</div>
        <div className="pest-icon absolute bottom-32 left-40 text-7xl opacity-80 drop-shadow-2xl">🦟</div>
        <div className="pest-icon absolute bottom-20 right-20 text-6xl opacity-80 drop-shadow-2xl">🐀</div>
        <div className="pest-icon absolute top-1/2 left-1/4 text-5xl opacity-80 drop-shadow-2xl">🐛</div>
        <div className="pest-icon absolute top-1/3 right-1/4 text-6xl opacity-80 drop-shadow-2xl">🪲</div>
        <div className="pest-icon absolute top-60 left-60 text-5xl opacity-80 drop-shadow-2xl">🕷️</div>
        <div className="pest-icon absolute bottom-40 right-40 text-6xl opacity-80 drop-shadow-2xl">🦗</div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-xl px-8 py-4 rounded-full text-white mb-10 border border-white/30 shadow-2xl">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
          </span>
          <span className="font-bold text-sm md:text-base tracking-wide">GOVT APPROVED • 24/7 EMERGENCY SERVICE</span>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-heading font-black text-white mb-8 leading-tight drop-shadow-2xl">
          Mumbai's Premier<br />
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-accent-yellow via-accent-orange to-accent-yellow bg-clip-text text-transparent animate-pulse">
              Pest Management
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-3xl text-white/95 mb-14 max-w-4xl mx-auto font-light leading-relaxed drop-shadow-lg">
          Empowering homes with <span className="font-bold text-accent-yellow">smarter, safer solutions</span> that prevent pests and protect health
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <button
            onClick={() => handleCTAClick('call')}
            className="group relative bg-white text-primary hover:bg-accent-yellow hover:text-white px-10 py-6 rounded-2xl font-black text-xl transition-all duration-300 shadow-2xl hover:shadow-accent-yellow/50 flex items-center gap-4 hover:scale-105 transform overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-accent-yellow to-accent-orange opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="relative text-3xl">📞</span>
            <div className="relative text-left">
              <div className="text-xs opacity-70 font-normal uppercase tracking-wider">Emergency Hotline</div>
              <div className="text-lg md:text-xl font-black">{SITE_CONFIG.phone}</div>
            </div>
          </button>

          <button
            onClick={() => handleCTAClick('whatsapp')}
            className="group bg-green-500 hover:bg-green-600 text-white px-10 py-6 rounded-2xl font-black text-xl transition-all duration-300 shadow-2xl hover:shadow-green-500/50 flex items-center gap-4 hover:scale-105 transform"
          >
            <span className="text-3xl">💬</span>
            <span>WhatsApp Now</span>
          </button>

          <a
            href="#services"
            className="group bg-white/15 backdrop-blur-xl hover:bg-white/25 text-white border-2 border-white/40 px-10 py-6 rounded-2xl font-bold text-xl transition-all duration-300 flex items-center gap-3"
          >
            <span>View Services</span>
            <span className="group-hover:translate-y-1 transition-transform text-2xl">↓</span>
          </a>
        </div>

        {/* Trust Indicators - Glass Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { icon: '✓', number: '100%', label: 'Eco-Friendly', color: 'from-green-500 to-emerald-600' },
            { icon: '⭐', number: '5000+', label: 'Happy Clients', color: 'from-yellow-500 to-orange-600' },
            { icon: '🏆', number: '15+', label: 'Years Experience', color: 'from-blue-500 to-indigo-600' },
            { icon: '🛡️', number: '100%', label: 'Warranty', color: 'from-purple-500 to-pink-600' },
          ].map((item, index) => (
            <div 
              key={index}
              className="group bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-8 hover:bg-white/20 transition-all hover:scale-110 transform shadow-xl hover:shadow-2xl"
            >
              <div className={`text-5xl mb-4 bg-gradient-to-br ${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:rotate-12 transition-transform`}>
                <span className="drop-shadow-lg">{item.icon}</span>
              </div>
              <div className="text-white font-black text-3xl mb-2">{item.number}</div>
              <div className="text-white/90 text-sm font-semibold uppercase tracking-wider">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-3 text-white/80 animate-bounce">
          <span className="text-sm uppercase tracking-widest font-bold">Discover More</span>
          <div className="w-8 h-12 border-3 border-white/60 rounded-full flex items-start justify-center p-2">
            <div className="w-2 h-4 bg-white/60 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;