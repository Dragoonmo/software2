import './Common_users.css'
import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Button, Common_proplem, Header } from '../../../Componets/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Common_users = () => {
    const [Proplems, setProplems] = useState([])

    const navigate = useNavigate()

    useEffect(() => {

        axios.get('http://localhost:3001/co_problim/show_all_com', { withCredentials: true })
            .then(res => {
                setProplems(res.data)

            })
            .catch(err => { console.log(err) })
    },
        [])
    return (
        <>
            <Header href1={"/#"} a1={""} href2={"/common_users"} a2={"FAQs"} href5={"/#"} a5={""} href3={"/Course_infoo"} a3={"My Course"} href4={"/All_problem"} a4={"Forum"} href6={"/#"} a6={""} href7={"/profile"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"/"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />
            <section className="pricing" id="pricing" style={{ "margin-top":""}}>

                <h2 className="heading" style={{ "margin-left":"100px"}}>FAQs</h2>

                <div className="box-container" style={{ "width":"600px" }}>

                    {Proplems.map((i, d) => {
                        return (
                            <div key={d}>

                                <Common_proplem type={i.cours_type} name={i.title} detals={i.disc} />

                            </div>
                        )
                    })}
                </div>

            </section>

        </>
    )
}

export default Common_users
