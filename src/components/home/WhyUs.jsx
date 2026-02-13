import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WHY_CHOOSE_US } from '../../utils/constants';

gsap.registerPlugin(ScrollTrigger);

function WhyUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Animate items on scroll - but don't reverse
    gsap.fromTo('.why-us-item',
      {
        opacity: 0,
        x: -30,
      },
      {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none', // Play once, never reverse
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-dark mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-neutral-medium max-w-2xl mx-auto">
            Your trusted partner for comprehensive pest control solutions
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Features List */}
          <div className="space-y-4">
            {WHY_CHOOSE_US.map((item, index) => (
              <div 
                key={index}
                className="why-us-item flex items-start gap-4 bg-neutral-light p-5 rounded-xl hover:bg-primary-light/10 hover:shadow-md transition-all duration-300 group"
              >
                {/* Animated Checkmark */}
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg 
                    className="w-5 h-5 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={3} 
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                
                <p className="text-neutral-dark font-medium leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Stats & Badges */}
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              <StatCard 
                number="5000+"
                label="Happy Clients"
                icon="😊"
                color="bg-green-500"
              />
              <StatCard 
                number="15+"
                label="Years Experience"
                icon="🏆"
                color="bg-blue-500"
              />
              <StatCard 
                number="100%"
                label="Eco-Friendly"
                icon="🌿"
                color="bg-emerald-500"
              />
              <StatCard 
                number="24/7"
                label="Emergency Service"
                icon="🚨"
                color="bg-red-500"
              />
            </div>

            {/* Trust Badges */}
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">🛡️</div>
                <div>
                  <h3 className="text-2xl font-bold">100% Warranty</h3>
                  <p className="text-white/80">Guaranteed Results</p>
                </div>
              </div>
              <p className="text-white/90 leading-relaxed">
                We stand behind our work with a comprehensive warranty. If pests return within the warranty period, we'll retreat at no additional cost.
              </p>
            </div>

            {/* Government Approved Badge */}
            <div className="bg-yellow-50 border-2 border-accent-yellow rounded-2xl p-6 flex items-center gap-4">
              <div className="text-4xl">✓</div>
              <div>
                <h4 className="text-lg font-bold text-neutral-dark">Government Approved</h4>
                <p className="text-neutral-medium">Certified & Licensed Pest Control Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ number, label, icon, color }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const element = cardRef.current.querySelector('.stat-number');
    const finalValue = parseInt(number);

    if (!isNaN(finalValue)) {
      gsap.to(element, {
        innerText: finalValue,
        duration: 2,
        ease: 'power1.out',
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
          once: true,
        },
      });
    }
  }, [number]);

  return (
    <div 
      ref={cardRef}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center group hover:-translate-y-1 transition-transform duration-300"
    >
      <div className={`${color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
        <span className="text-3xl">{icon}</span>
      </div>
      <div className="stat-number text-3xl font-bold text-neutral-dark mb-2">
        {number.includes('+') || number.includes('%') || number.includes('/') ? number : '0'}
      </div>
      <div className="text-neutral-medium font-medium">{label}</div>
    </div>
  );
}

export default WhyUs;