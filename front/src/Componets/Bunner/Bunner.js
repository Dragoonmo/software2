import './Bunner.css'

const Bunner = (props) => {
    return (
        <>
            <p style={{"color":"white" }}>{props.p1}</p>
            {/* <br /> */}
            <p>* {props.p2}</p>
            {/* <br /> */}
            <p>{props.p3}</p>
            {/* <br /> */}
        </>
    )
}

export default Bunner
