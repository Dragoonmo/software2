import './Card.css'
import { Link } from 'react-router-dom'
import c from '../../Assert/Images/course.jpg'

const Card = (props) => {
    return (
        <>

            <div className="box-container">
                <div className="box">
                    <img src={c} alt="You don't have any course" />
                    <div className="content">
                        <h3>{props.name}</h3>
                        <a href={props.href} className="btn">{props.a} <Link style={{ "color": "white"}} to={props.href_link}>{props.link}</Link> </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
