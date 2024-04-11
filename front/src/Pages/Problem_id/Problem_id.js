import './Problem_id.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header, Problems, Comments } from '../../Componets'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse, faMessage, faUserDoctor, faStethoscope } from '@fortawesome/free-solid-svg-icons'


const Problem_id = (props) => {

    const [Problim_info, setProblim_info] = useState([])
    const [Comment, setComments] = useState([])
    const navigate = useNavigate()

    const { id } = useParams()

    useEffect(() => {

        axios.get(`http://localhost:3001/problim/show_problem/${id}`, { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    setProblim_info(res.data.result)
                    setComments(res.data.resultt)
                }
                else navigate('/login')

            })
            .catch(err => { console.log(err) })
    }, [])


    return (
        <>
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"FAQs"} href5={"/Add_Animal"} a5={<FontAwesomeIcon icon={faPlus} />} href6={"all_doc"} a6={<FontAwesomeIcon icon={faStethoscope} />} href3={"/Animal_infoo"} a3={"My Animals"} href4={"/All_problem"} a4={"Forum"} href7={"/chat"} a7={<FontAwesomeIcon icon={faMessage} />} href8={"/Notifications"} a8={<FontAwesomeIcon icon={faBell} />} href9={"/profile"} a9={<div id="login-btn" className="fas fa-user"></div>} href10={"/"} a10={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            <section className="pricing" id="pricing" style={{ "margin-top": "350px" }}>
                <h2 className="heading">Forum</h2>

                <div className="box-container">
                    {Problim_info.map((user, i) => {
                        return (
                            <div key={i}>
                                <Problems name={user.title} text={user.disc} type={user.animal_type} id1={id} id2={user.id} hreflink={""} />
                            </div>
                        )
                    })}
                </div>
            </section>

            <div>
                <div className="container" style={{ "margin-top": "50px", "margin-bottom": "70px", "margin-left": "90px" }}>
                    <div className="title">Comments</div>
                    <div className="content">
                        <form action="#" >
                            <div className="user-details">
                                {Comment.map((user, i) => {
                                    return (
                                        <div key={i}>
                                            <Comments name={user.publisher_ans} text={user.answer} />
                                        </div>
                                    )
                                })}
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Problem_id
