import './All_follow.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const All_follow = (props) => {

    const navigate = useNavigate()

    return (
        <>
            <div class="container" style={{ "margin-top": "10px", "margin-bottom": "20px" }}>
                <div class="title">Course Info</div>
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

export default All_follow
