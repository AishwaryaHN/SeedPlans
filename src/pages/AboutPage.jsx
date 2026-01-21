import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Volunteers from '../components/Volunteers';
import StatsCounter from '../components/StatsCounter';
import AboutHero from '../components/AboutHero';

const AboutPage = () => {
  return (
    <main>
      <AboutHero/>
      <About />  {/* reused here */}
      <Volunteers/>
      <Testimonials/>
      <StatsCounter/>
    </main>
  );
};

export default AboutPage;
