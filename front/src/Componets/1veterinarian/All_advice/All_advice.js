import './All_advice.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const All_advice = (props) => {
    return (
        <>
            <div class="container" style={{ "margin-top": "10px", "margin-bottom": "20px" }}>
                <div class="title">Advice</div>
                <div class="content">
                    <form action="#" >
                        <div class="user-details">
                            <div class="input-box" style={{ "width": "500px"}}>
                                <span class="details">Tip</span>
                                <p>{props.tip}</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default All_advice
