import logo from '../img/def-cms.png';
import i18n from '../i18n.json';
import { useEffect, useState } from 'react';
import AOS from 'aos';

export default function Header() {

    const [lang, setLang] = useState('en-US')
  
    useEffect(() => {
      let langStorage = sessionStorage.getItem('lang');
      if (langStorage) {
        setLang(langStorage)
      }
      AOS.init({
        duration : 2000
      });
    }, [])

    return (
        <header className="header flex justify-between p-4 md:p-6 md:px-0 items-center mb-10">
            <div className="logo flex items-center font-bold text-3xl text-blue-800">
                <img src={logo} alt="logo" className="h-14" />
            </div>
            <div className="menu hidden md:flex items-center">
                <ul className="list-none flex font-bold mr-3">
                    <li className="text-blue-600 px-4 cursor-pointer hover:text-blue-600">{i18n[lang].HOME}</li>
                    <li className="text-blue-800 px-4 cursor-pointer hover:text-blue-600">{i18n[lang].ABOUT}</li>
                    <li className="text-blue-800 px-4 cursor-pointer hover:text-blue-600">{i18n[lang].SERVICES}</li>
                    <li className="text-blue-800 px-4 cursor-pointer hover:text-blue-600">Portfolio</li>
                    <li className="text-blue-800 px-4 cursor-pointer hover:text-blue-600">{i18n[lang].CONTACT}</li>
                    <li className="text-blue-800 px-4 cursor-pointer hover:text-blue-600">Team</li>
                </ul>
                <button className="px-6 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700">Join as Team</button>
            </div>
            <button className="md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </header>
    )
}