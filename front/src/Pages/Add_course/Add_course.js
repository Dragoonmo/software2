import './Add_course.css'
// import axios from 'axios'
// import { useState } from 'react'
import { Header, Add_coursee } from '../../Componets'
// import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBell, faRightFromBracket, faHouse } from '@fortawesome/free-solid-svg-icons'


const Add_course = () => {


  return (
    <>
      <Header href1={"/#"} a1={""} href2={"/common_users"} a2={"FAQs"} href3={"/Course_infoo"} a3={"My Course"} href4={"/All_problem"} a4={"Forum"} href6={"/#"} a6={""} href7={"/profile"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"/"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

      <div>
        <div class="container" style={{ "margin-top": "120px", "margin-bottom": "70px" }}>
          <div class="title">Add Course</div>
          <div class="content">
            <Add_coursee />
          </div>
        </div>
      </div>
    </>
  )
}

export default Add_course
