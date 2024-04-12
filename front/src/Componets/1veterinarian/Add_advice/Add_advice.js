import './Add_advice.css'
import axios from 'axios'
import { useState } from 'react'
import { Header } from '../..'
import { useNavigate } from 'react-router-dom'

const Add_advice = () => {

    const navigate = useNavigate()

    const [Tip, setTip] = useState('')

    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {

        e.preventDefault()

        axios.post('http://localhost:3001/vet/Add_advice', { Tip })
            .then(res => {
                if (res.data.valid) {
                    alert('The Advice was added successfully')
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
                    <div class="input-box"style={{ "width": "500px" }}>
                        <span class="details">Tip *</span>
                        <input type="text" required onChange={e => setTip(e.target.value)} />
                    </div>

                </div>
                <div class="button">
                    <button>Add</button>
                </div>
            </form>
        </>
    )
}

export default Add_advice
