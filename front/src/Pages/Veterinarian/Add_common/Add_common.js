import './Add_common.css'
import { Header, Profilee } from '../../../Componets/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBell, faRightFromBracket, faHouse } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Add_common = () => {

    const navigate = useNavigate()
    const [Title, setTitle] = useState('')
    const [Details, setDetails] = useState('')




    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {
        e.preventDefault()

        axios.post('http://localhost:3001/co_problim/add_common', { Title, Details })
            .then(res => {
                if (res.data.valid) {
                    alert('Added successfully')
                    navigate('/common_vete')
                }
                else {
                    navigate('/login')
                }
            })
            .catch(err => alert(err))

    }

    return (
        <>
            <Header href1={"/#"} a1={""} href2={"/common_vete"} a2={"FAQs"} href3={"/all_follow"} a3={"All Follow"} href4={"/Forum_vet"} a4={"Forum"} href6={"/#"} a6={""} href7={"/profile_vet"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"Home_vet"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            <div class="container">
                <div class="title">Add</div>
                <div class="content" style={{ "width": "450px" }}>
                    <form onSubmit={handleSubmit}>
                        <div class="user-details">
                            <div class="input-box">
                                <span class="details">Title </span>
                                <input type="text" required onChange={e => setTitle(e.target.value)} />
                            </div>
                            <div class="input-box">
                                <span class="details">Details </span>
                                <input style={{ "width": "220px" }} type="text" required onChange={e => setDetails(e.target.value)} />
                            </div>
                        </div>
                        <div class="button">
                            <button>Add</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Add_common
