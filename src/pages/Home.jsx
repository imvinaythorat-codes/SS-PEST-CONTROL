import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Process from '../components/home/Process';
import WhyUs from '../components/home/WhyUs';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Services />
      <Process />
      <WhyUs />
      <Testimonials />
      <FAQ />
    </div>
  );
}

export default Home;