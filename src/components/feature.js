export default function Feature() {
   return (
       <div className="md:flex flex-wrap p-4 md:p-0">
           <Item title="You Talk, We Listen"/>
           <Item title="We Value Integrity"/>
           <Item title="We Know SEO"/>
           <Item title="We Create Pro Designs"/>
           <Item title="We Quantify Our Success"/>
           <Item title="We Deliver On Time"/>
       </div>
   )
}

function Item(props) {
    return (
        <div className="flex md:w-1/2 mb-6" data-aos="fade-up">
            <div className="py-3">
                <i className="ri-line-chart-line text-lg text-blue-800 feature-icon"></i>
            </div>
            <div className="flex-grow px-4">
                <div className="feature-title text-lg font-bold mb-2 text-blue-900">{props.title}</div>
                <div className="feature-description text-gray-500">As a Software Development agency, we strive to understand our client’s business goals first.You talk, we listen… then we throw in lots of ideas for improvement.</div>
            </div>
        </div>
    )
}