import axios from "axios";
import { useEffect, useState } from "react"

export default function Team() {

    const [members, setMembers] = useState([])

    useEffect(() => {
        axios.get('https://api.github.com/orgs/def-zone/members').then(response => {
            setMembers(response.data)
        })
    }, [])

    return (
        <section className="team md:mb-20 mb-10 p-4 md:p-0">
            <div className="sub-title text-center">TEAM</div>
            <div className="title text-blue-900 mb-10">Our hard working team</div>
            <div className="flex flex-wrap">
                {
                    members && members.map(member => <Item key={member.id} member={member}/>)
                }
            </div>
        </section>
    )
}

function Item(props) {
    return (
        <div className="w-1/2 md:w-2/12 transition duration-700 mb-4 md:px-4 px-2" data-aos="fade-up">
            <div className="bg-white rounded shadow">
            <img src={props.member.avatar_url} alt="Avatar" className="rounded md:p-4" />
            <div className="text-center p-2 font-bold">
                <a href={props.member.html_url} target="_blank" rel="noreferrer" className="hover:text-blue-500 text-blue-900">{props.member.login}</a>
            </div>
            </div>
        </div>
    )
}