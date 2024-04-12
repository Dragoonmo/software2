import './Details_animal_requts.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Details_animal_requts = (props) => {
    return (
        <>
            <div class="container" style={{ "margin-top": "10px", "margin-bottom": "20px" }}>
                <div class="title">Course details</div>
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
                    </form>
                </div>
            </div>
        </>
    )
}

export default Details_animal_requts
