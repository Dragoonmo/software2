import './All_problem.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Problems, Header } from '../../Componets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBell, faRightFromBracket, faHouse } from '@fortawesome/free-solid-svg-icons'

const All_problem = () => {
    const [Problim_info, setProblim_info] = useState([])
    const navigate = useNavigate()


    useEffect(() => {

        axios.get('http://localhost:3001/problim/show_all_problem', { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    setProblim_info(res.data.result)
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
            <Header href1={"/#"} a1={""} href2={"/common_users"} a2={"FAQs"} href3={"/Course_infoo"} a3={"My Course"} href4={"/All_problem"} a4={"Forum"} href6={"/#"} a6={""} href7={"/profile"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"/"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            <section className="pricing" style={{ "margin-top":""}}>
                <h2 className="heading" style={{ marginLeft: "100px" }}>Forum</h2>

                <div className="box-container">
                    {Problim_info.map((user, i) => (
                        <div key={i}>
                            <Problems name={user.title} text={user.disc} hreflink={`Problem_id/${user.id}`} type={user.animal_type} id1={user.id} />
                        </div>
                    ))}
                </div>
            </section>

        </>
    )
}

export default All_problem
