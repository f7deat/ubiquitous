import logo from '../img/def-cms.png';
import i18n from '../i18n.json';
import { useEffect, useState } from 'react';
import AOS from 'aos';

export default function Header() {

    const [lang, setLang] = useState('en-US')
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        let langStorage = sessionStorage.getItem('lang');
        if (langStorage) {
            setLang(langStorage)
        }
        AOS.init({
            duration: 2000
        });
    }, [])

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset)
        }
    }, []);

    return (
        <header className={offset < 150 ? 'header p-4 md:px-0' : 'header header-scrolled fixed z-10 top-0 left-0 right-0 p-4 md:px-0'}>
            <div className="container mx-auto flex items-center justify-between">
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
                        <li className="text-blue-800 px-4 cursor-pointer hover:text-blue-600">
                            <a href="https://github.com/orgs/def-zone/people" rel="noreferrer" target="_blank">Team</a>
                        </li>
                    </ul>
                    <a className="px-6 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700" href="https://github.com/def-zone/get-started" target="_blank" rel="noreferrer">Join as Team</a>
                </div>
                <button className="md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    )
}