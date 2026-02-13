function Process() {
  const steps = [
    {
      number: '01',
      title: 'Free Inspection',
      description: 'Our certified experts conduct a thorough inspection of your property to identify pest issues and entry points',
      icon: '🔍',
      color: 'from-blue-500 to-blue-600',
    },
    {
      number: '02',
      title: 'Custom Plan',
      description: 'We design a tailored treatment plan based on your specific pest problem, property type, and safety requirements',
      icon: '📋',
      color: 'from-green-500 to-green-600',
    },
    {
      number: '03',
      title: 'Safe Treatment',
      description: 'Using eco-friendly, government-approved methods, we eliminate pests while ensuring the safety of your family and pets',
      icon: '🛡️',
      color: 'from-purple-500 to-purple-600',
    },
    {
      number: '04',
      title: 'Follow-Up',
      description: 'We monitor results and provide ongoing support to ensure pests don\'t return, backed by our 100% warranty',
      icon: '✅',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-br from-neutral-dark via-primary-dark to-neutral-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-black uppercase tracking-widest border border-white/20">
              Our Process
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-heading font-black text-white mb-6 leading-tight">
            How We <span className="text-accent-yellow">Protect</span> Your Home
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A proven 4-step process that guarantees results
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-full w-full h-1 bg-gradient-to-r from-white/30 to-transparent -translate-x-4 z-0"></div>
              )}

              {/* Card */}
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105 transform group">
                {/* Number Badge */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-accent-yellow to-accent-orange rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:rotate-12 transition-transform">
                  <span className="text-2xl font-black text-white">{step.number}</span>
                </div>

                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-xl`}>
                  <span className="text-4xl">{step.icon}</span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-heading font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <a 
            href="#services"
            className="inline-flex items-center gap-4 bg-white hover:bg-accent-yellow text-primary hover:text-white px-12 py-6 rounded-2xl font-black text-xl transition-all duration-300 shadow-2xl hover:shadow-accent-yellow/50 hover:scale-105 transform"
          >
            <span>Start Your Free Inspection</span>
            <span className="text-2xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Process;