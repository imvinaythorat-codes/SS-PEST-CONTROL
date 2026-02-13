function About() {
  return (
    <div className="about-page bg-neutral-offwhite">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            About S.S. Pest Control
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Mumbai's Trusted Pest Control Experts Since 2008
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image/Icon */}
            <div className="bg-primary-light/10 rounded-2xl p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">🛡️</div>
                <h3 className="text-2xl font-heading font-bold text-primary">
                  Government Approved
                </h3>
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="text-4xl font-heading font-bold text-neutral-dark mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-neutral-medium text-lg leading-relaxed">
                <p>
                  <strong className="text-neutral-dark">S.S. Facility Management</strong> is a government-approved pest control company specializing in protecting your property before pests become a problem.
                </p>
                <p>
                  We are the first line of defense against pests for your home, society, or business. Our experienced team understands what our clients need and uses our expertise to deliver solutions as efficiently as possible.
                </p>
                <p>
                  Our pest control treatment and inspection services are performed with your satisfaction as our top priority. We provide you with all the facts upfront and customize a treatment program that works for you and your budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gradient-to-br from-primary to-primary-light text-white rounded-2xl p-8">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-3xl font-heading font-bold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed text-white/90">
                To provide safe, effective, and eco-friendly pest control solutions that protect homes and businesses across Mumbai while ensuring the health and safety of our clients and the environment.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-accent-orange to-accent-yellow text-white rounded-2xl p-8">
              <div className="text-5xl mb-4">👁️</div>
              <h3 className="text-3xl font-heading font-bold mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed text-white/90">
                To be Mumbai's most trusted and reliable pest control service provider, known for our professionalism, innovation, and commitment to customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-heading font-bold text-neutral-dark text-center mb-12">
            Our Track Record
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="15+" label="Years Experience" icon="📅" />
            <StatCard number="5000+" label="Happy Clients" icon="😊" />
            <StatCard number="100%" label="Eco-Friendly" icon="🌿" />
            <StatCard number="24/7" label="Support" icon="🚨" />
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-heading font-bold text-neutral-dark mb-12">
            Certified & Trusted
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-xl font-bold text-neutral-dark mb-2">Government Approved</h3>
              <p className="text-neutral-medium">Certified by local authorities</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-neutral-dark mb-2">Eco-Certified</h3>
              <p className="text-neutral-medium">Using only eco-friendly chemicals</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-neutral-dark mb-2">Industry Leader</h3>
              <p className="text-neutral-medium">Award-winning service quality</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatCard({ number, label, icon }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
      <div className="text-4xl mb-3">{icon}</div>
      <div className="text-3xl font-bold text-primary mb-2">{number}</div>
      <div className="text-neutral-medium font-medium">{label}</div>
    </div>
  );
}

export default About;