import './Animal_info_id.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header, About_your_animal, Your_animal_vaccines } from '../../../Componets'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse, faMessage, faUserDoctor, faStethoscope } from '@fortawesome/free-solid-svg-icons'

const Animal_info_id = () => {
    const navigate = useNavigate()


    const [Name, setName] = useState('')
    const { id } = useParams()
    const [Info, setInfo] = useState([])
    const [Vacc, setVacc] = useState([])

    const [Age, setAge] = useState()



    useEffect(() => {

        axios.get(`http://localhost:3001/animal/show_animal_id/${id}`, { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    setInfo(res.data.result)
                    setVacc(res.data.result2)
                    setAge(res.data.age)
                }
                else if (res.data.value) {
                    navigate('/')
                }
                else {
                    navigate('/login')
                }
            })
            .catch(err => { console.log(err) })
    }, [])
    return (
        <>
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"FAQs"} href5={"/Add_Animal"} a5={<FontAwesomeIcon icon={faPlus} />} href6={"all_doc"} a6={<FontAwesomeIcon icon={faStethoscope} />} href3={"/Animal_infoo"} a3={"My Animals"} href4={"/All_problem"} a4={"Forum"} href7={"/chat"} a7={<FontAwesomeIcon icon={faMessage} />} href8={"/Notifications"} a8={<FontAwesomeIcon icon={faBell} />} href9={"/profile"} a9={<div id="login-btn" className="fas fa-user"></div>} href10={"/"} a10={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />
            <div style={{ "margin-top": "100px", "margin-bottom": "20px" }}>
                {Info.map((d, i) => {
                    return (
                        <div key={i}>
                            <About_your_animal name={d.name} age={Age} place={d.place} color={d.color} details={d.Additional_details}
                                type={d.type} gender={d.gender} weight={d.weight} height={d.high} health={d.health_stats} id2={d.animal_id} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Animal_info_id