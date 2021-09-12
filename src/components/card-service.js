import values1 from '../img/values-1.png';
import values2 from '../img/values-2.png';
import values3 from '../img/values-3.png';

export default function CardService() {
    return (
        <div className="md:flex gap-6 justify-center p-4 md:p-0">
            <Item image={values1} />
            <Item image={values2} />
            <Item image={values3} />
        </div>
    )
}

function Item(prop) {
    return (
        <div className="md:w-1/4 flex flex-col mb-4">
            <div className="p-10 rounded-lg shadow bg-white card-item" data-aos="fade-up">
                <img src={prop.image} alt="IMG" />
                <div className="title">
                    Mobile & IOS App Developement
                </div>
                <div className="description text-gray-500 text-center">
                    We develope professional and fully functional moibile & IOS apps for your business according to your requirments
                </div>
            </div>
        </div>
    )
}