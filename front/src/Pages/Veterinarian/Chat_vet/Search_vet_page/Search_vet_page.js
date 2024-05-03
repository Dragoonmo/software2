import './Search_vet_page.css'
import { Header, Profilee } from '../../../../Componets/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Search_vet_page = () => {
    const navigate = useNavigate()
    const [Name, setName] = useState('')

    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {
        // alert(Name)
        navigate(`/search_result/${Name}`)

    }
    return (
        <>
            <Header href1={"/#"} a1={""} href2={"/common_vete"} a2={"FAQs"} href3={"/all_follow"} a3={"All Follow"} href4={"/Forum_vet"} a4={"Forum"} href6={"/#"} a6={""} href7={"/profile_vet"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"Home_vet"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            <div class="container">
                <div class="title">Search</div>
                <div class="content" style={{ "width": "300px" }}>
                    <form onSubmit={handleSubmit}>
                        <div class="user-details">
                            <div class="input-box">
                                <span class="details">Name </span>
                                <input style={{ "width": "280px" }} type="text" required onChange={e => setName(e.target.value)} />
                            </div>
                        </div>
                        <div class="button">
                            <button>search</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Search_vet_page
