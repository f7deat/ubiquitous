import CardService from './components/card-service';
import Feature from './components/feature';
import Footer from './components/footer';
import Header from './components/header';
import Services from './components/services';
import Setting from './components/setting';
import Statistic from './components/statistic';
import Team from './components/team';
import heroImg from './img/hero-img.png';
import feature3 from './img/features-3.png';

function App() {
  return (
    <div>
      <Header />
      <main className="container mx-auto">
        <section>
          <div className="md:flex items-center md:py-40">
            <div className="md:w-1/2 md:px-20">
              <div className="font-bold text-center md:text-left text-blue-900 sologan" data-aos="fade-up">
                We offer modern solutions for growing your business
              </div>
              <div className="text-xl text-center md:text-left sub-sologan py-4" data-aos="fade-up">
                <div>We are team of talented designers and developers making mobile applications and websites for your business</div>
              </div>
              <div className="flex justify-center md:justify-start">
                <button className="bg-blue-600 hover:bg-blue-700 rounded py-3 px-10 text-white my-4 flex items-center font-bold shadow-blue" data-aos="fade-up">
                  <span className="mr-2">Get Started</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="md:w-1/2 p-10 md:px-20 text-center" data-aos="zoom-out">
              <img src={heroImg} alt="banner" />
            </div>
          </div>
        </section>
        <section className="md:mb-20 mb-10">
          <div className="title text-blue-900 mb-10">Why Choose Us</div>
          <div className="md:flex">
            <div className="md:w-1/3">
              <div className="flex justify-center items-center" data-aos="fade-right">
                <img src={feature3} alt="banner" className="p-10" />
              </div>
            </div>
            <div className="md:w-2/3 md:flex">
              <Feature/>
            </div>
          </div>
        </section>
        <section className="md:mb-20 mb-10">
          <div className="sub-title text-center">OUR SERVICES</div>
          <div className="title text-blue-900 mb-10">We are known for our quality work</div>
          <CardService />
        </section>
        <Statistic/>
        <Services/>
        <Team />
      </main>
      <Setting />
      <Footer/>
    </div>
  );
}

export default App;
