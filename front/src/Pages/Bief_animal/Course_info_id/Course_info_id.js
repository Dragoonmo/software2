import './Course_info_id.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header, About_your_course } from '../../../Componets'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse, faMessage, faUserDoctor, faStethoscope } from '@fortawesome/free-solid-svg-icons'

const Course_info_id = () => {

    const navigate = useNavigate()
    const { id } = useParams()
    const [Info, setInfo] = useState([])

    const [Age, setAge] = useState()

    useEffect(() => {

        axios.get(`http://localhost:3001/courses/show_courses_id/${id}`, { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    setInfo(res.data.result)
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
            <Header href1={"/#"} a1={""} href2={"/common_users"} a2={"FAQs"} href3={"/Course_infoo"} a3={"My Course"} href4={"/All_problem"} a4={"Forum"} href6={"/#"} a6={""} href7={"/profile"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"/"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />
            <div style={{ "margin-top": "100px", "margin-bottom": "20px" }}>
                {Info.map((d, i) => {
                    return (
                        <div key={i}>
                            <About_your_course name={d.name} age={Age} details={d.Additional_details}
                                id2={d.type} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Course_info_id
