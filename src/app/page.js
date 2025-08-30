import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Insurance from './components/Insurance';
import Contact from './components/Contact';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="speciallægeerklæringer">
        <Insurance />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
