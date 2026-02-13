import { useState } from 'react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Are your pest control treatments safe for children and pets?',
      answer: 'Absolutely! We use only government-approved, eco-friendly chemicals that are safe for your family and pets. Our technicians are trained to apply treatments in a way that minimizes exposure while maximizing effectiveness. We also provide detailed safety guidelines for each treatment.',
    },
    {
      question: 'How long does a typical pest control treatment take?',
      answer: 'Treatment duration depends on the size of your property and the type of pest problem. Generally, a standard home treatment takes 1-2 hours. We always ensure thorough coverage and won\'t rush the process. Our team will provide an estimated timeline during the initial inspection.',
    },
    {
      question: 'Do you offer a warranty on your services?',
      answer: 'Yes! We provide a 100% satisfaction warranty on all our services. If pests return within the warranty period (varies by service), we\'ll retreat your property at no additional cost. Our goal is complete pest elimination, and we stand behind our work.',
    },
    {
      question: 'How soon can you come for an emergency service?',
      answer: 'We offer 24/7 emergency pest control services in Mumbai. For urgent situations like rodent or bee infestations, we can often provide same-day service. Call us anytime at +91 99679 48209, and we\'ll dispatch a team as quickly as possible.',
    },
    {
      question: 'What is the cost of pest control treatment?',
      answer: 'Costs vary based on the type of pest, severity of infestation, and property size. We offer competitive pricing starting from ₹999. We always provide a free inspection and detailed quote before starting any work. No hidden charges - the price we quote is the price you pay.',
    },
    {
      question: 'Do I need to leave my home during treatment?',
      answer: 'For most treatments, you don\'t need to vacate your home. However, for certain intensive treatments (like fumigation), we may recommend staying elsewhere for 4-6 hours. Our technicians will advise you based on the specific treatment method and provide clear instructions.',
    },
    {
      question: 'How can I prevent pests from returning?',
      answer: 'Prevention is key! We provide detailed post-treatment guidance including sealing entry points, proper food storage, regular cleaning, and moisture control. We also offer quarterly maintenance plans to ensure long-term protection. Our team will create a customized prevention plan for your property.',
    },
    {
      question: 'Are you licensed and insured?',
      answer: 'Yes, S.S. Pest Control is fully licensed by the government and carries comprehensive insurance. All our technicians are certified professionals with ongoing training in the latest pest control methods and safety protocols. We comply with all local regulations and industry standards.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 text-9xl">❓</div>
        <div className="absolute bottom-20 left-20 text-9xl">💡</div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-full text-sm font-black uppercase tracking-widest shadow-lg">
              FAQ
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-heading font-black text-neutral-dark mb-6 leading-tight">
            Frequently Asked <span className="bg-gradient-to-r from-primary to-accent-yellow bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-2xl text-neutral-medium max-w-3xl mx-auto">
            Everything you need to know about our pest control services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index 
                  ? 'border-primary shadow-2xl' 
                  : 'border-neutral-light shadow-md hover:border-primary/50'
              }`}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-8 flex items-center justify-between gap-6 hover:bg-neutral-light/30 transition-colors"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-black transition-all duration-300 ${
                    openIndex === index 
                      ? 'bg-primary text-white' 
                      : 'bg-primary/10 text-primary'
                  }`}>
                    {index + 1}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-neutral-dark pt-2">
                    {faq.question}
                  </h3>
                </div>
                <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <span className="text-2xl text-primary font-bold">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-8 pt-2">
                  <div className="pl-16">
                    <p className="text-lg text-neutral-medium leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-12">
          <h3 className="text-3xl font-heading font-bold text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-white/90 text-lg mb-8">
            Our team is here to help. Call us or send a message anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919967948209"
              className="inline-flex items-center gap-3 bg-white text-primary hover:bg-accent-yellow hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:scale-105 transform"
            >
              <span className="text-2xl">📞</span>
              <span>Call Now</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
            >
              <span className="text-2xl">💬</span>
              <span>Send Message</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;