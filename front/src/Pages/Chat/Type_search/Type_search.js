import './Type_search.css'
import { Header, Choose_button } from '../../../Componets/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse } from '@fortawesome/free-solid-svg-icons'
const Type_search = () => {
    return (
        <>
            <Header href1={"/#"} a1={""} href2={"/common_users"} a2={"FAQs"} href3={"/Course_infoo"} a3={"My Course"} href4={"/All_problem"} a4={"Forum"} href6={"/#"} a6={""} href7={"/profile"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"/"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            <Choose_button title="Search type " href1="/Search_user" name1="Search Student" href2="/Search_teacher" name2="Teacher" />
        </>
    )
}

export default Type_search
