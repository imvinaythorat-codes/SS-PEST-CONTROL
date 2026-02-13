import { SERVICES } from '../../utils/constants';

// High-quality, accurate pest control images
const SERVICE_IMAGES = {
  'cockroaches-ants': 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&auto=format&fit=crop', // Kitchen cleaning
  'bed-bugs': 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop', // Bedroom
  'termite': 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop', // Wood/furniture
  'rodent': 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=800&auto=format&fit=crop', // Mouse/rodent
  'mosquitoes': 'https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?w=800&auto=format&fit=crop', // Mosquito
  'wood-borers': 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&auto=format&fit=crop', // Wooden furniture
  'bird-control': 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=800&auto=format&fit=crop', // Birds
};

function Services() {
  return (
    <section id="services" className="services-section py-28 bg-gradient-to-b from-white via-neutral-offwhite to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-yellow rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-full text-sm font-black uppercase tracking-widest shadow-lg">
              Our Expertise
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-heading font-black text-neutral-dark mb-8 leading-tight">
            Professional Pest <br />
            <span className="bg-gradient-to-r from-primary via-primary-light to-accent-yellow bg-clip-text text-transparent">
              Control Solutions
            </span>
          </h2>
          <p className="text-2xl text-neutral-medium max-w-4xl mx-auto leading-relaxed font-light">
            Comprehensive, eco-friendly solutions tailored to protect your home and business from all types of pests
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} image={SERVICE_IMAGES[service.id]} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-xl text-neutral-medium mb-6">Don't see your pest problem listed?</p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
          >
            <span>Get Free Consultation</span>
            <span className="text-2xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, image }) {
  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 border border-neutral-light">
      {/* Image Container */}
      <div className="relative h-72 overflow-hidden">
        <img 
          src={image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
        
        {/* Icon Badge - Floating */}
        <div className="absolute top-6 right-6 bg-white w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 z-10">
          <span className="text-5xl">{service.icon}</span>
        </div>

        {/* Service Title on Image */}
        <div className="absolute bottom-6 left-6 right-6 z-10">
          <h3 className="text-3xl font-heading font-black text-white drop-shadow-2xl mb-2">
            {service.title}
          </h3>
          <div className="h-1 w-20 bg-accent-yellow rounded-full group-hover:w-full transition-all duration-500"></div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <p className="text-neutral-medium leading-relaxed mb-8 text-lg">
          {service.description}
        </p>

        {/* Key Features */}
        <div className="space-y-3 mb-8">
          {[
            'Safe & eco-friendly methods',
            'Same-day service available',
            '100% satisfaction guaranteed'
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-neutral-dark font-medium">{feature}</span>
            </div>
          ))}
        </div>

        {/* Pricing Hint */}
        <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-5 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-neutral-medium font-semibold uppercase tracking-wide mb-1">Starting From</div>
              <div className="text-3xl font-black text-primary">₹999</div>
            </div>
            <div className="text-primary/20 text-5xl">💰</div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-black py-5 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-2xl group-hover:gap-5 text-lg">
          <span>Book Now</span>
          <span className="text-2xl transition-transform group-hover:translate-x-1">→</span>
        </button>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-4 border-primary opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
}

export default Services;