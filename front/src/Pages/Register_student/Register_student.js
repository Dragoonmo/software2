import './Register_student.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Header } from '../../Componets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRightToBracket } from '@fortawesome/free-solid-svg-icons'

const Register_student = () => {

    const navigate = useNavigate()

    const [First_name, setFirst_name] = useState('')
    const [Last_name, setLast_name] = useState('')
    const [Email, setEmail] = useState('')
    const [Phone, setPhone] = useState('')
    const [Password, setPassword] = useState('')
    const [Confirm, setConfirm] = useState('')
    const [Age, setAge] = useState('')
    const [Gender, setGender] = useState('')

    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {

        if (Password === Confirm) {
            e.preventDefault()

            axios.post('http://localhost:3001/user/signup_user', {First_name,Last_name,Email,Phone,Password,Age,Gender})
                .then(res => {
                    if (res.data.Login) {
                        navigate('/Add_course')
                    }
                    alert("good")
                }
                )
                .catch(err => alert(err))
        }
        else { alert("password not match") }
    }


    return (
        <div>
            <Header href1={"/#"} a1={""} href3={""} a3={""} log={'/login'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightToBracket} /></div>} />

            <div className="container">
                <div className="title">Registration Student</div>
                <div className="content">
                    <form onSubmit={handleSubmit}>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">First Name *</span>
                                <input type="text" name='first_name' required onChange={e => setFirst_name(e.target.value)} />
                            </div>
                            <div className="input-box">
                                <span className="details">Last Name *</span>
                                <input type="text" required onChange={e => setLast_name(e.target.value)} />
                            </div>
                            <div className="input-box">
                                <span className="details">Email *</span>
                                <input type="email" name='email' required onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className="input-box">
                                <span className="details">Age *</span>
                                <input type="date" required onChange={e => setAge(e.target.value)} />
                            </div>
                            <div className="input-box">
                                <span className="details">Phone Number *</span>
                                <input type="number" required onChange={e => setPhone(e.target.value)} />
                            </div>
                            <div className="input-box">
                                <span className="details">Password *</span>
                                <input type="password" name='password' required onChange={e => setPassword(e.target.value)} />
                            </div>
                            <div className="input-box">
                                <span className="details">Confirm Password *</span>
                                <input type="password" required onChange={e => setConfirm(e.target.value)} />
                            </div>
                            <div class="gender-details">
                                <input type="radio" name="gender" value="male" id="dot-1" onChange={e => setGender(e.target.value)} />
                                <input type="radio" name="gender" value="female" id="dot-2" onChange={e => setGender(e.target.value)} />
                                <span class="gender-title">Gender *</span>
                                <div class="category">
                                    <label for="dot-1">
                                        <span class="dot one"></span>
                                        <span class="gender" style={{ "color": "black" }}>Male</span>
                                    </label>
                                    <label for="dot-2">
                                        <span class="dot two"></span>
                                        <span class="gender" style={{ "color": "black" }}>Female</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="button">
                            <button>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register_student
