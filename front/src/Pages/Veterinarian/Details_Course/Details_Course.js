import './Details_Course.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header, Details_course_requts } from '../../../Componets'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBell, faRightFromBracket, faHouse } from '@fortawesome/free-solid-svg-icons'
const Details_Course = () => {

    const navigate = useNavigate()


    const [Name, setName] = useState('')
    const { id } = useParams()
    const [Info, setInfo] = useState([])
    const [Vacc, setVacc] = useState([])

    const [Age, setAge] = useState()

    useEffect(() => {

        axios.get(`http://localhost:3001/courses/show_courses_id/${id}`, { withCredentials: true })
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
            <Header href1={"/#"} a1={""} href2={"/common_vete"} a2={"FAQs"} href3={"/all_follow"} a3={"All Follow"} href4={"/Forum_vet"} a4={"Forum"} href6={"/#"} a6={""} href7={"/profile_vet"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"Home_vet"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />
            <div style={{ "margin-top": "100px", "margin-bottom": "20px" }}>
                {Info.map((d, i) => {
                    return (
                        <div key={i}>
                            <Details_course_requts name={d.name} age={Age} place={d.place} color={d.color} details={d.Additional_details}
                                type={d.type} gender={d.gender} weight={d.weight} height={d.high} health={d.health_stats} id2={d.id} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Details_Course
