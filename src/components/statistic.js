export default function Statistic() {
    return (
        <section className="statistic md:flex md:mb-20 mb-10">
            <Item icon="ri-user-smile-line text-yellow-500" text="Happy Clients" count="2" />
            <Item icon="ri-projector-line text-blue-500" text="Projects" count="2" />
            <Item icon="ri-microscope-line text-red-500" text="Years of Experience" count={new Date().getFullYear() - 2018} />
            <Item icon="ri-parent-line text-green-500" text="Hard Workers" count="1" />
        </section>
    )
}

function Item(props) {
    return (
        <div className="md:w-1/4 counts mb-4 px-4">
            <div className="count-box shadow flex" data-aos="fade-up">
                <i className={props.icon}></i>
                <div>
                    <span className="purecounter">{props.count}</span>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )
}