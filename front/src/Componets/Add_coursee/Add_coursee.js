import './Add_coursee.css'
import axios from 'axios'
import { useState } from 'react'
import { Header } from '..'
import { useNavigate } from 'react-router-dom'

const Add_coursee = () => {

  const navigate = useNavigate()

  const [Name, setName] = useState('')
  const [Age, setAge] = useState('')
  const [Animal_coler, setAnimal_coler] = useState('')
  const [Picture, setPicture] = useState()
  const [Animal_place, setAnimal_place] = useState('')
  const [Additional_details, setAdditional_details] = useState('')
  const [Gender, setGender] = useState('')
  const [Type, setType] = useState('')
  const [Weight, setWeight] = useState('')
  const [Height, setHeight] = useState('')
  const [Healthـstatus, setHealthـstatus] = useState('')
  const [Vaccines, setVaccines] = useState('')

  axios.defaults.withCredentials = true
  const handleSubmit = async (e) => {

    const formData = new FormData()

    formData.append('image', Picture)
    formData.append('name', Name)
    formData.append('age', Age)
    formData.append('animal_color', Animal_coler)
    formData.append('animal_place', Animal_place)
    formData.append('details', Additional_details)
    formData.append('type', Type)
    formData.append('gender', Gender)
    formData.append('weight', Weight)
    formData.append('height', Height)
    formData.append('health_Status', Healthـstatus)


    e.preventDefault()

    axios.post('http://localhost:3001/animal/add-animal', formData)
      .then(res => {
        if (res.data.valid) {
          if (Vaccines === "yes") {
            navigate(`/vaccines/${res.data.id}`)
          }
          else {
            navigate('/')
          }
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
            <input type="text" name='name' required onChange={e => setName(e.target.value)} />
          </div>
          <div class="input-box">
            <span class="details">years </span>
            <select name="type" idd="animal" required onChange={e => setType(e.target.value)}>
              <option value={"1"} >1</option>
              <option value={"2"} >2</option>
              <option value={"3"} >3</option>
              <option value={"4"} >4</option>
              <option value={"5"} >5</option>

            </select>
          </div>


          <div class="input-box">
            <span class="details">Additional details </span>
            <input type="text" name='details' onChange={e => setAdditional_details(e.target.value)} />
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
