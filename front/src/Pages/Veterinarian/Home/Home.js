import './Home.css'
import { useEffect, useState } from 'react'
import { Card, Bunner, Problems, Header, SectionHeader, Button, Add_proplem } from '../../../Componets/index'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNotesMedical, faRightFromBracket, faPlus, faHouse, faMessage, faLink, faSyringe } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const [name, setName] = useState('')
    const [Coursee_info, setCourse_info] = useState([])
    const [Problim_info, setProblim_info] = useState([])
    const [Events, setEvent] = useState([])
    const [Isnotefi, setIsnotefi] = useState('')


    const navigate = useNavigate()

    useEffect(() => {

        axios.get('http://localhost:3001/vet/home_vet', { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    setName(res.data.username)
                    setCourse_info(res.data.result)
                    setProblim_info(res.data.resultt)
                    setEvent(res.data.resulttt)
                    setIsnotefi(res.data.resultttt)
                }
                else {
                    navigate('/login')
                }
            })
            .catch(err => { console.log(err) })

    },
        [])
    return (
        <>

            <Header href1={"/#"} a1={""} href2={"/common_vete"} a2={"FAQs"} href5={"/requst"} a5={<FontAwesomeIcon icon={faLink} />} href6={"all_advice"} a6={<FontAwesomeIcon icon={faNotesMedical} />} href7={"add_course_teach"} a7={<FontAwesomeIcon icon={faPlus} />} href3={"all_follow"} a3={"All Follow"} href4={"/Forum_vet"} a4={"Forum"} href8={"/chat_vet"} a8={<FontAwesomeIcon icon={faMessage} />} href9={"/#"} a9={""} href10={"#"} a10={""} href11={"Home_vet"} a11={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            <section className="bbanner" style={{ "margin-top": "00px" }}>
                <div className="row">
                    <div style={{ "margin-top": "170px","margin-left":"260px" }} className="content">
                        <h3 style={{"color":"white" }}>{"Welcome   " + name}</h3>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className='nav'>

                            <h3 style={{ "margin-left": "10px","color":"white" }}>     New events</h3>

                            {Events.map((user, i) => {
                                return (
                                    <div style={{"color":"white" }} key={i}>
                                        <Bunner p1={user.one}
                                            p2={user.disc}
                                        // p3={user.gen_tip} 
                                        />
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                    <div className="image">
                    </div>
                </div>
            </section>


            <section className="animal" id="animal" >
                <SectionHeader>follow cases</SectionHeader>
                <div className="">
                    <div className="heading">
                    </div>
                </div>
                <div className="box-container">

                    {Coursee_info.map((user, i) => {
                        return (
                            <div key={i}>
                                <Card image={'http://localhost:3001/uploads/' + user.urlImage} name={user.name} href_link={`Course_follow_id/${user.id}`} link={"see details"} id={user.id} />
                            </div>
                        )
                    })}
                </div>
            </section>

            <Add_proplem href={"my_problem_vet"}/>

            <section className="pricing" id="pricing">
                <h2 className="heading">Forum</h2>

                <div className="box-container" >
                    {Problim_info.map((user, i) => {
                        return (
                            <div key={i}>
                                <Problems name={user.title} text={user.disc} type={user.type} hreflink={`Problem_id/${user.id}`} id1={user.id} />
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Home
