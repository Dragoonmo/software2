import './Add_coursee.css'
import axios from 'axios'
import { useState } from 'react'
import { Header } from '..'
import { useNavigate } from 'react-router-dom'

const Add_coursee = () => {

  const navigate = useNavigate()

  const [Name, setName] = useState('')
  const [Years, setYears] = useState('')
  const [Additional_details, setAdditional_details] = useState('')


  axios.defaults.withCredentials = true
  const handleSubmit = async (e) => {

    const formData = new FormData()

    formData.append('name', Name)
    formData.append('Years', Years)
    formData.append('details', Additional_details)
    e.preventDefault()

    axios.post('http://localhost:3001/animal/add-animal', {Name,Years,Additional_details})
      .then(res => {
        if (res.data.valid) {
          navigate('/')
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
          <div class="input-box">
            <span class="details">name of the Course *</span>
            <input type="text" required onChange={e => setName(e.target.value)} />
          </div>
          <div class="input-box">
            <span class="details">years </span>
            <select style={{"width":"130px"}}   required onChange={e => setYears(e.target.value)}>
              <option value={"1"} >1</option>
              <option value={"2"} >2</option>
              <option value={"3"} >3</option>
              <option value={"4"} >4</option>
              <option value={"5"} >5</option>

            </select>
          </div>


          <div class="input-box">
            <span class="details">Additional details </span>
            <input type="text"  onChange={e => setAdditional_details(e.target.value)} />
          </div>
        </div>
        <div class="button">
          <button>Add</button>
        </div>
      </form>
    </>
  )
}

export default Add_coursee
