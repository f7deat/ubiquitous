import Feature from './components/feature';
import Header from './components/header';
import Setting from './components/setting';

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <main>
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
              <img src="https://www.laboontech.com/assets/img/hero-img.png" alt="banner" />
            </div>
          </div>
        </section>
        <section>
          <div className="title text-blue-900 mb-10">Why Choose Us</div>
          <div className="md:flex">
            <div className="w-1/3">
              <div className="flex justify-center items-center" data-aos="fade-right">
                <img src="https://www.laboontech.com/assets/img/features-3.png" alt="banner" style={{width: 350}} />
              </div>
            </div>
            <div className="w-2/3 flex">
              <Feature/>
            </div>
          </div>
        </section>
      </main>
      <Setting />
    </div>
  );
}

export default App;
