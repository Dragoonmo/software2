import './Type_search_vet.css'
import { Header, Choose_button } from '../../../../Componets/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse } from '@fortawesome/free-solid-svg-icons'

const Type_search_vet = () => {
    return (
        <>
            <Header href1={"/#"} a1={""} href2={"/common_vete"} a2={"FAQs"} href3={"/all_follow"} a3={"All Follow"} href4={"/Forum_vet"} a4={"Forum"} href6={"/#"} a6={""} href7={"/profile_vet"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"Home_vet"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            <Choose_button title="Search type " href1="/Search_user_vet" name1="Search Student" href2="Search_teacher_vet" name2="Teacher" />

        </>
    )
}

export default Type_search_vet
