
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb" 
          alt="Azhizen Media photography hero" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="hero-content">
        <div className="animate-fade-in max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-allison-light font-playfair font-semibold mb-8 leading-tight">
            Azhizen Media
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-allison-light max-w-2xl mx-auto mb-16 animate-fade-in-up">
            Elevating brands through captivating visuals and compelling storytelling
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => {
                const portfolioSection = document.getElementById('portfolio');
                if (portfolioSection) {
                  portfolioSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-transparent hover:bg-allison-light text-allison-light hover:text-allison-dark border-2 border-allison-light px-8 py-4 text-lg transition-colors duration-300 animate-fade-in-up"
            >
              View Our Work
            </button>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-allison-light text-allison-dark hover:bg-transparent hover:text-allison-light border-2 border-allison-light px-8 py-4 text-lg transition-colors duration-300 animate-fade-in-up"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      <button onClick={scrollToAbout} className="scroll-down" aria-label="Scroll to About section">
        <ArrowDown className="text-white animate-bounce mt-6" />
      </button>
    </section>
  );
};

export default HeroSection;
