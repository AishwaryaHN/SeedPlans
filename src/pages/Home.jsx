import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Causes from '../components/Causes';
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
      {/* <Causes /> */}
      <CharitySees />
      <Volunteers />
      <ClientSays />
      <NewsEvents />
    </>
  );
};

export default Home;
