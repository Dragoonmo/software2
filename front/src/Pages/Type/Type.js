import './Type.css'
import { Header, Choose_button } from '../../Componets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
const Type = () => {
    return (
        <>
            <Header href1={"/#"} a1={""} href3={"#"} a3={""} log={'/login'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightToBracket} /></div>} />

            <Choose_button title="account type " href1="/Register_student" name1="Student" href2="/Register_teacher" name2="Teachers" />

        </>
    )
}

export default Type
