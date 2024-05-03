import './Profile_id_vett.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header, Profilee_id } from '../../../../Componets'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse } from '@fortawesome/free-solid-svg-icons'

const Profile_id_vett = () => {
    const { id } = useParams()
    const [Info, setInfo] = useState([])
    const [Course, setCourse] = useState([])
    var a = []

    useEffect(() => {
        axios.get(`http://localhost:3001/chat/show_profile/${id}`, { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    setInfo(res.data.result)
                    setCourse(res.data.results)
                }
                else alert("err")
            })
            .catch(err => { alert(err) })
    }, [])

    Course.map((d, i) => {

        a.push(d.type + ",")

    })
    return (
        <>
            <Header href1={"/#"} a1={""} href2={"/common_vete"} a2={"FAQs"} href3={"/all_follow"} a3={"All Follow"} href4={"/Forum_vet"} a4={"Forum"} href6={"/#"} a6={""} href7={"/profile_vet"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"Home_vet"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            {Info.map((d, i) => {
                return (
                    <div key={i}>
                        <Profilee_id first_name={d.first_name} last_name={d.last_name} email={d.email} phone={d.phone} age={d.age} gender={d.gender} />
                    </div>
                )
            })}
        </>
    )
}

export default Profile_id_vett