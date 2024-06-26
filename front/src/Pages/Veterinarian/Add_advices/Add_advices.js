import './Add_advices.css'
// import axios from 'axios'
// import { useState } from 'react'
import { Header, Add_advice } from '../../../Componets'
// import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBell, faRightFromBracket, faHouse } from '@fortawesome/free-solid-svg-icons'

const Add_advices = () => {
    return (
        <>
            <Header href1={"/#"} a1={""} href2={"/common_vete"} a2={"FAQs"} href3={"/all_follow"} a3={"All Follow"} href4={"/Forum_vet"} a4={"Forum"} href6={"/#"} a6={""} href7={"/profile_vet"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"Home_vet"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            <div>
                <div class="container" style={{ "margin-top": "120px", "margin-bottom": "70px" }}>
                    <div class="title">Add advice</div>
                    <div class="content">
                        <Add_advice />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Add_advices
