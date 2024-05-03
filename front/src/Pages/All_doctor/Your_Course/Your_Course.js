import './Your_Course.css'
import { Card, SectionHeader ,Header} from '../../../Componets/index'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse } from '@fortawesome/free-solid-svg-icons'
import c from '../../../Assert/Images/course.jpg'
const Your_Course = () => {

    const [Course_info, setCourse_info] = useState([])
    const { id } = useParams()

    const navigate = useNavigate()

    const AddRequst = async (id2) => {
        try {
            await axios.get(`http://localhost:3001/vet/addreq/${id}/${id2}`, { withCredentials: true })
            alert('The request has been sent successfully')
            navigate(-1)
        }
        catch (err) { console.log(err) }
    }

    useEffect(() => {
        axios.get('http://localhost:3001/animal/show_all_animal_ad', { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    setCourse_info(res.data.result)
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
        {/* <Header href1={"/#"} a1={""} href2={"/common_users"} a2={"FAQs"} href5={"/Add_Animal"} a5={<FontAwesomeIcon icon={faPlus} />} href3={"/Animal_infoo"} a3={"All Course"} href4={"/All_problem"} a4={"Ploblems"} href6={"/#"} a6={""} href7={"/profile"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"/"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} /> */}

            <section className="animal" id="animal">
                <SectionHeader>Chose from your Course </SectionHeader>
                <div className="">
                    <div className="heading">
                    </div>
                </div>
                <div className="box-container">
                    {Course_info.map((user, i) => {
                        return (
                            <div key={i}>
                                <div className="box-container">
                                    <div className="box">
                                        <img src={c} alt="You don't have any course" />
                                        <div className="content">
                                            <h3>{user.name}</h3>
                                            <button onClick={e => AddRequst(user.id)} className='btn'>Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Your_Course
