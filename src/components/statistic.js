import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Statistic() {

    const [totalProject, setTotalProject] = useState(0)

    useEffect(() => {
        axios.get(`https://api.github.com/orgs/def-zone`).then(response => {
            setTotalProject(response.data.public_repos)
        })
    }, [])

    return (
        <section className="statistic md:flex md:mb-20 mb-10">
            <Item icon="ri-user-smile-line text-yellow-500" text="Happy Clients" count="1000+" />
            <Item icon="ri-projector-line text-blue-500" text="Projects" count={totalProject} />
            <Item icon="ri-microscope-line text-red-500" text="Years of Experience" count={new Date().getFullYear() - 2018} />
            <Item icon="ri-parent-line text-green-500" text="Hard Workers" count="100+" />
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