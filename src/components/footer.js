import logo from '../img/def-cms.png';

export default function Footer() {
    return (
        <footer className="border-t footer">
            <div className="container mx-auto px-10 md:px-0 py-12 md:flex gap-4">
                <div className="md:w-5/12 mb-4">
                    <img src={logo} alt="Logo Footer" className="w-56 mb-4" />
                    <div className="text-gray-500 text-sm">We offer modern solutions for growing your business We are a team of talented designers and developers making mobile applications and websites for your business</div>
                    <div className="social-links mt-3">
                        <a href="https://twitter.com/f7deat" target="_blank" rel="noreferrer" className="text-2xl opacity-50 hover:opacity-100 transition duartion-700 text-blue-900 mr-2"><i className="ri-twitter-fill"></i></a>
                        <a href="https://www.facebook.com/xamcc" target="_blank" rel="noreferrer" className="text-2xl opacity-50 hover:opacity-100 transition duartion-700 text-blue-900 mr-2"><i className="ri-facebook-circle-fill"></i></a>
                        <a href="https://www.instagram.com/f7deat/" target="_blank" rel="noreferrer" className="text-2xl opacity-50 hover:opacity-100 transition duartion-700 text-blue-900 mr-2"><i className="ri-instagram-fill"></i></a>
                        <a href="https://www.linkedin.com/company/defzone/" target="_blank" rel="noreferrer" className="text-2xl opacity-50 hover:opacity-100 transition duartion-700 text-blue-900 mr-2"><i className="ri-linkedin-box-fill"></i></a>
                    </div>
                </div>
                <div className="md:w-2/12 mb-4">
                    <div className="title">USEFUL LINKS</div>
                    <ul>
                        <li><i className="ri-arrow-drop-right-line text-blue-300"></i> <a className="text-blue-900" href="home">Home</a></li>
                        <li><i className="ri-arrow-drop-right-line text-blue-300"></i> <a className="text-blue-900" href="about-us">About us</a></li>
                        <li><i className="ri-arrow-drop-right-line text-blue-300"></i> <a className="text-blue-900" href="services">Services</a></li>
                        <li><i className="ri-arrow-drop-right-line text-blue-300"></i> <a className="text-blue-900" href="#term">Terms of service</a></li>
                        <li><i className="ri-arrow-drop-right-line text-blue-300"></i> <a className="text-blue-900" href="#privacy">Privacy policy</a></li>
                    </ul>
                </div>
                <div className="md:w-2/12 mb-4">
                    <div className="title">Our Services</div>
                    <ul>
                        <li><i className="ri-arrow-drop-right-line text-blue-300"></i> <a className="text-blue-900" href="services">Web App Design</a></li>
                        <li><i className="ri-arrow-drop-right-line text-blue-300"></i> <a className="text-blue-900" href="services">Android App Develop</a></li>
                        <li><i className="ri-arrow-drop-right-line text-blue-300"></i> <a className="text-blue-900" href="services">Product Management</a></li>
                        <li><i className="ri-arrow-drop-right-line text-blue-300"></i> <a className="text-blue-900" href="services">Marketing (SEO)</a></li>
                        <li><i className="ri-arrow-drop-right-line text-blue-300"></i> <a className="text-blue-900" href="services">IOS App Development</a></li>
                    </ul>
                </div>
                <div className="md:w-3/12 text-sm">
                    <div className="title">Contact Us</div>
                    <div className="py-4">
                        <div className="mb-2">Thien Huong, Thuy Nguyen, Hai Phong</div>
                        <div className="mb-2"><b className="mr-2">Phone:</b><a href="telto:84762559696">(+84) 762.559.696</a></div>
                        <div className="mb-2"><b className="mr-2">E-Mail:</b><a href="mailto:f7deat@gmail.com">f7deat@gmail.com</a></div>
                    </div>
                </div>
            </div>
            <div className="copyright bg-gray-100 p-6 text-blue-900 text-center">
                © Copyright {new Date().getFullYear()} <strong>DefCMS</strong>. All Rights Reserved
            </div>
        </footer>
    )
}