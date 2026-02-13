import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Hero Animation Timeline
export const heroAnimation = (scope) => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.from('.hero-badge', {
    opacity: 0,
    y: -20,
    duration: 0.6,
  })
  .from('.hero-title', {
    opacity: 0,
    y: 60,
    duration: 1,
  }, '-=0.3')
  .from('.hero-subtitle', {
    opacity: 0,
    y: 30,
    duration: 0.8,
  }, '-=0.5')
  .from('.hero-cta', {
    opacity: 0,
    scale: 0.9,
    stagger: 0.15,
    duration: 0.5,
  }, '-=0.4')
  .from('.pest-icon', {
    opacity: 0,
    scale: 0,
    stagger: 0.1,
    duration: 0.4,
  }, '-=0.3');

  return tl;
};

// Pest Scatter Animation (cool effect when pests run away)
export const pestScatterAnimation = () => {
  const icons = gsap.utils.toArray('.pest-icon');
  
  gsap.to(icons, {
    x: () => gsap.utils.random(-300, 300),
    y: () => gsap.utils.random(-300, 300),
    opacity: 0,
    scale: 0,
    stagger: 0.08,
    duration: 1.2,
    ease: 'power2.in',
    delay: 2, // Start after 2 seconds
  });
};

// Service Cards Scroll Animation
export const serviceCardsAnimation = () => {
  gsap.from('.service-card', {
    scrollTrigger: {
      trigger: '.services-section',
      start: 'top 75%',
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    y: 80,
    stagger: 0.15,
    duration: 0.8,
    ease: 'power3.out',
  });
};

// Counter Animation (for stats)
export const counterAnimation = (element, target) => {
  gsap.to(element, {
    innerText: target,
    duration: 2,
    ease: 'power1.out',
    snap: { innerText: 1 },
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      once: true,
    },
  });
};

// Fade In Up Animation (reusable)
export const fadeInUp = (selector, options = {}) => {
  const defaults = {
    opacity: 0,
    y: 60,
    duration: 0.8,
    ease: 'power3.out',
  };

  return gsap.from(selector, { ...defaults, ...options });
};

// Stagger Fade In
export const staggerFadeIn = (selector, options = {}) => {
  const defaults = {
    opacity: 0,
    y: 40,
    stagger: 0.15,
    duration: 0.7,
    ease: 'power2.out',
  };

  return gsap.from(selector, { ...defaults, ...options });
};

// Magnetic Button Effect
export const magneticButton = (button) => {
  const handleMouseMove = (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(button, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)',
    });
  };

  button.addEventListener('mousemove', handleMouseMove);
  button.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    button.removeEventListener('mousemove', handleMouseMove);
    button.removeEventListener('mouseleave', handleMouseLeave);
  };
};

// Smooth Scroll to Section
export const scrollToSection = (target) => {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: target, offsetY: 80 },
    ease: 'power3.inOut',
  });
};

// Page Transition
export const pageTransition = () => {
  const tl = gsap.timeline();
  
  tl.fromTo('.page-content',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
  );
  
  return tl;
};