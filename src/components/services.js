import i18n from '../i18n.json';
import features from '../img/features.png';

export default function Services() {

  const lang = localStorage.getItem('lang') || 'vi-VN';

  return (
    <section className="md:mb-20 mb-10 services" id="service">
      <div className="sub-title text-center">{i18n[lang].SERVICES}</div>
      <div className="title text-blue-900 mb-10">We provide best quality services to our Client</div>
      <div className="md:flex">
        <div className="md:w-1/2 p-4 md:p-0">
          <img src={features} alt="IMG" className="mb-10" />
        </div>
        <div className="md:w-1/2 p-4 md:p-0">
          <div className="grid md:grid-cols-2 gap-6">
            <Item text="Mobile Applications" />
            <Item text="Web Applications" />
            <Item text="IOS Applications" />
            <Item text="Hybrid Applications" />
            <Item text="Search Engine Optimization (SEO)" />
            <Item text="Product Hunting" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Item(props) {
  return (
    <div data-aos="zoom-out">
      <div className="item flex shadow">
        <div className="h-8 w-8 bg-blue-100 rounded hover:bg-blue-500 hover:text-white mr-4 flex justify-center items-center"><i className="ri-check-line text-xl"></i></div>
        <div className="text font-bold text-blue-900">{props.text}</div>
      </div>
    </div>
  )
}