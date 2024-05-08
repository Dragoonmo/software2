import './About_your_course.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const About_your_course = (props) => {

    const navigate = useNavigate()

    const handleDelete = async (id) => {
        try {
            await axios.post('http://localhost:3001/courses/delete/'+id)
            alert('deleted succsesfly')
            navigate(-1)
        }
        catch (err) { console.log(err) }
    }

    return (
        <>
            {/* <div> */}
                <div class="container" style={{ "margin-top": "10px", "margin-bottom": "20px" }}>
                    <div class="title">Courses Info</div>
                    <div class="content">
                        <form action="#" >
                            <div class="user-details">
                                <div class="input-box">
                                    <span class="details">name Course</span>
                                    <p>{props.name}</p>
                                </div>
                                <div class="input-box">
                                    <span class="details">Years</span>
                                    <p>{props.age}</p>
                                </div>
                                <div class="input-box">
                                    <span class="details">Additional details </span>
                                    <p>{props.details}</p>
                                </div>

                            </div>
                            <div class="button">
                                <button onClick={() => handleDelete(props.id)}>Deleet</button>
                            </div>


                        </form>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}

export default About_your_course
