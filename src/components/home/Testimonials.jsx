import { useState } from 'react';

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Andheri West, Mumbai',
      rating: 5,
      text: 'Excellent service! They got rid of our cockroach problem in just one treatment. Very professional and the products they used were completely odorless. Highly recommended!',
      image: '👨‍💼',
      service: 'Cockroach Control',
    },
    {
      name: 'Priya Sharma',
      location: 'Bandra, Mumbai',
      rating: 5,
      text: 'We had a severe bed bug infestation. S.S. Pest Control team was very thorough and explained everything clearly. No bed bugs for 6 months now! Worth every rupee.',
      image: '👩‍💻',
      service: 'Bed Bug Treatment',
    },
    {
      name: 'Amit Patel',
      location: 'Thane, Mumbai',
      rating: 5,
      text: 'Best termite treatment in Mumbai! They did pre-construction treatment for my new home. Very systematic approach and gave us a 5-year warranty. Great team!',
      image: '👨‍🔧',
      service: 'Termite Control',
    },
    {
      name: 'Sneha Desai',
      location: 'Powai, Mumbai',
      rating: 5,
      text: '24/7 service is really helpful. Called them at 10 PM for rat problem and they came the next morning. Very responsive and effective solution. Happy customer!',
      image: '👩‍🏫',
      service: 'Rodent Control',
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-28 bg-gradient-to-b from-white to-neutral-offwhite relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-yellow rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-full text-sm font-black uppercase tracking-widest shadow-lg">
              Testimonials
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-heading font-black text-neutral-dark mb-6 leading-tight">
            What Our <span className="bg-gradient-to-r from-primary to-accent-yellow bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-2xl text-neutral-medium max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16 border-2 border-primary/10">
            {/* Stars */}
            <div className="flex gap-2 mb-8 justify-center">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <span key={i} className="text-4xl text-accent-yellow">⭐</span>
              ))}
            </div>

            {/* Quote */}
            <div className="text-neutral-dark text-2xl md:text-3xl font-light leading-relaxed text-center mb-12 italic">
              "{testimonials[activeIndex].text}"
            </div>

            {/* Author Info */}
            <div className="flex items-center justify-center gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-5xl shadow-xl">
                {testimonials[activeIndex].image}
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-neutral-dark">
                  {testimonials[activeIndex].name}
                </div>
                <div className="text-neutral-medium font-medium">
                  {testimonials[activeIndex].location}
                </div>
                <div className="inline-block mt-2 bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold">
                  {testimonials[activeIndex].service}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-16 h-16 bg-white hover:bg-primary text-primary hover:text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center text-3xl font-bold hover:scale-110 transform"
          >
            ←
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-16 h-16 bg-white hover:bg-primary text-primary hover:text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center text-3xl font-bold hover:scale-110 transform"
          >
            →
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-3 justify-center mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-primary w-12' 
                    : 'bg-neutral-light hover:bg-neutral-medium'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-5xl font-black text-primary mb-2">5000+</div>
            <div className="text-neutral-medium font-semibold">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-black text-primary mb-2">4.9/5</div>
            <div className="text-neutral-medium font-semibold">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-black text-primary mb-2">98%</div>
            <div className="text-neutral-medium font-semibold">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-black text-primary mb-2">15+</div>
            <div className="text-neutral-medium font-semibold">Years in Business</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;