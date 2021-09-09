import { useEffect, useState } from 'react';
import Setting from './components/setting';
import i18n from './i18n.json'

function App() {

  const [lang, setLang] = useState('vi-VN')

  useEffect(() => {
    let langStorage = sessionStorage.getItem('lang');
    if(langStorage) {
      setLang(langStorage)
    }
  }, [])
  return (
    <div className="container mx-auto">
      <header className="header flex justify-between p-6 md:px-0 items-center">
        <div className="logo flex items-center font-bold text-3xl text-blue-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
          </svg>
          <span className="ml-4">DefCMS</span>
        </div>
        <div className="menu hidden md:flex items-center">
          <ul className="list-none flex font-bold mr-3">
            <li className="text-blue-600 px-4 cursor-pointer hover:text-blue-600">{i18n[lang].HOME}</li>
            <li className="text-blue-800 px-4 cursor-pointer hover:text-blue-600">{i18n[lang].ABOUT}</li>
            <li className="text-blue-800 px-4 cursor-pointer hover:text-blue-600">Services</li>
            <li className="text-blue-800 px-4 cursor-pointer hover:text-blue-600">Portfolio</li>
            <li className="text-blue-800 px-4 cursor-pointer hover:text-blue-600">Contact</li>
            <li className="text-blue-800 px-4 cursor-pointer hover:text-blue-600">Team</li>
          </ul>
          <button className="px-6 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700">Join as Team</button>
        </div>
      </header>
      <main>
        <div className="md:flex items-center md:py-48">
          <div className="md:w-1/2 md:px-20">
            <div className="font-bold text-blue-900 animate__animated animate__slideInUp sologan" style={{ lineHeight: '57px' }}>
              We offer modern solutions for growing your business
            </div>
            <div className="text-xl py-4 animate__animated animate__slideInUp">
              We are team of talented designers and developers making mobile applications and websites for your business
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 rounded py-3 px-6 text-white shadow-lg my-4 flex items-center font-bold animate__animated animate__slideInUp"><span className="mr-2">Get Started</span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg></button>
          </div>
          <div className="md:w-1/2 p-10 md:px-20 text-center animate__animated animate__slow animate__zoomIn">
            <img src="https://www.laboontech.com/assets/img/hero-img.png" alt="banner" />
          </div>
        </div>
      </main>
      <Setting/>
    </div>
  );
}

export default App;
