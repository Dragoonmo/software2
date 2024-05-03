import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Header } from '../..'
import { useNavigate } from 'react-router-dom'

const Componets_Add_course_teach = () => {

    const navigate = useNavigate()

    const [Course, setCourse] = useState('')

    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {

        e.preventDefault()

        axios.post('http://localhost:3001/vet/#', { Course })
            .then(res => {
                if (res.data.valid) {
                    alert('The Course was added successfully')
                    navigate(-1)
                }
                else {
                    alert('EROR')
                }
            })
            .catch(err => alert(err))
    }
    return (

        <>
            <form action="#" onSubmit={handleSubmit} enctype="multipart/form-data">
                <div class="user-details">
                    <div class="input-box" style={{ "width": "500px" }}>
                        <span class="details">Course Name *</span>
                        <input type="text" required onChange={e => setCourse(e.target.value)} />
                    </div>

                </div>
                <div class="button">
                    <button>Add</button>
                </div>
            </form>
        </>
    )
}

export default Componets_Add_course_teach