import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import CharitySees from '../components/CharitySees';
import Volunteers from '../components/Volunteers';
import ClientSays from '../components/Testimonials';
import NewsEvents from '../components/NewsEvents';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />   {/* reused here */}
      <CharitySees />
      <Volunteers />
      <ClientSays />
      <NewsEvents />
    </>
  );
};

export default Home;
