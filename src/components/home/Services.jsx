import { SERVICES } from '../../utils/constants';

// High-quality, accurate pest control images
const SERVICE_IMAGES = {
  'cockroaches-ants': 'https://imgs.search.brave.com/yH-ZTUxjlWXmPWQTUTSViBttAagBcBqXtH0uy3uOCrI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDMv/NjA3LzM3Mi9zbWFs/bC9kZWFkLWNvY2ty/b2FjaC1vbi1mbG9v/ci1waG90by5qcGc', // Kitchen cleaning
  'bed-bugs': 'https://imgs.search.brave.com/krMgiHUv6Qw8X6jGDT-NKi8U83txzMjj0VkDVQegE-w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzUx/YjViZmJlZTRiMDlm/MjBhYjdhODM2OS8x/Mzc2MDkwMjY5MjE1/LVAxNkxZQ0xRSTdN/TDNCTDlPSTlPL0xT/K2JiK2hpZGluZytp/bitydWJiZXIrbW9s/ZGluZy5qcGc', // Bedroom
  'termite': 'https://imgs.search.brave.com/GEFffFmAwt72BOJ5rxwe-9jUYV3AZ28_T-BWj9POgDc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50Z3JpZC5ob21l/ZGVwb3Qtc3RhdGlj/LmNvbS9oZHVzL2Vu/X1VTL0RUQ0NPTU5F/Vy9BcnRpY2xlcy9o/b3ctdG8tZ2V0LXJp/ZC1vZi10ZXJtaXRl/cy1zdGVwLTIuanBn', // Wood/furniture
  'rodent': 'https://imgs.search.brave.com/in-9niMMZrzh6sw75oHuAhZsNIQMUXYEwPHJUy1tAUE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9yYXQtd2FzLWNh/Z2UtY2F0Y2hpbmct/cmF0LXJhdC1oYXMt/Y29udGFnaW9uLWRp/c2Vhc2UtaHVtYW5z/LXN1Y2gtYXMtcGxh/Z3VlXzQxNjg5LTY4/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDAmcT04MA', // Mouse/rodent
  'mosquitoes': 'https://imgs.search.brave.com/PbCEMfv08mP7r5EyJH0lcWaZmZXyrG4Bo_uu8gAfALA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTAv/ODQ1LzQ3OC9zbWFs/bC9hLWxhcmdlLW51/bWJlci1vZi1kZWFk/LW1vc3F1aXRvZXMt/b24tYS13aGl0ZS1i/YWNrZ3JvdW5kLXBo/b3RvLmpwZw', // Mosquito
  'wood-borers': 'https://imgs.search.brave.com/XH_6vvtn-YeUFGak54FcGDtCKUtcLYy8jPaN7DnesSU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDky/NTgwOTMwL3Bob3Rv/L2JvcmVycy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9aWNN/YnAzN1dmbUI0RlJu/SHREUTVOa3I0MDFP/YTk1OTBqZjl2aUdF/YTU4TT0', // Wooden furniture
  'bird-control': 'https://imgs.search.brave.com/DIdfJtZ-6T2smfBWE08tQ5p7OdCtTAsyoTYsMpErN4k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ub21v/cmViaXJkcy5jb20u/YXUvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDMvRG91eW91/aGF2ZS5qcGc', // Birds
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