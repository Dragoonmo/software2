import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Login2.css'
import React, { useState } from 'react'
import { Header } from '../../Componets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import hand from '../../../src/Assert/Images/hand.png'
import dog from '../../../src/Assert/Images/dog.png'



const Login = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/user/login', { email, password })
            .then(res => {
                if (!res.data.roleee) {
                    navigate('/')
                }
                else if (res.data.roleee) {
                    navigate('/Home_vet')
                }
                else {
                    alert('no record')
                }
            })
            .catch(err => { console.log(err) })
    }

    return (
        <>
            <Header href1={"/Animal"} a1={"About Pets"} href3={"#"} a3={"FAQs"} log={'/login'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightToBracket} /></div>} />

            {/* <div className="container">
                <div className="title">Login</div>
                <div className="content">
                    <form onSubmit={handleSubmit}>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Email *</span>
                                <input type="email" required value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className="input-box">
                                <span className="details">Password *</span>
                                <input type="password" required value={password} onChange={e => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="button">
                            <button >login</button>
                        </div>
                        <div className="button">
                            <a href="/TypeRegister">Sign up</a>
                        </div>
                    </form>
                </div>
            </div> */}
            {/* <div  style={{ width: '100%', height: '100%', backgroundColor: '#FFEFCD' }}>
                <div style={{ width: 484, height: 60, left: 973, top: 260, position: 'absolute', background: 'white', borderRadius: 10, border: '2px #FF9900 solid' }} />
                <div style={{ width: 484, height: 60, left: 973, top: 351, position: 'absolute', background: 'white', borderRadius: 10, border: '2px #FF9900 solid' }} />
                <div style={{ width: 172, height: 60, left: 1116, top: 457, position: 'absolute', background: '#FF9900', borderRadius: 10 }} />
                <div style={{ width: 172, height: 60, left: 1116, top: 536, position: 'absolute', background: '#FF9900', borderRadius: 10 }} />
                <div style={{ left: 1174, top: 473, position: 'absolute', color: 'black', fontSize: 22, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Login</div>
                <div style={{ left: 1160, top: 550, position: 'absolute', color: 'black', fontSize: 22, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Register</div>
                <div style={{ width: 953, height: 120.30, left: -312, top: 781.94, position: 'absolute', transform: 'rotate(-43deg)', transformOrigin: '0 0', background: '#ECBB36', borderRadius: 65 }} />
                <div style={{ width: 953, height: 120.30, left: -140, top: 766.94, position: 'absolute', transform: 'rotate(-43deg)', transformOrigin: '0 0', background: '#ECBB36', borderRadius: 65 }} />
                <div style={{ width: 953, height: 120.30, left: -176, top: 956.94, position: 'absolute', transform: 'rotate(-43deg)', transformOrigin: '0 0', background: '#ECBB36', borderRadius: 65 }} />
                <div style={{ width: 953, height: 120.30, left: -42, top: 972.94, position: 'absolute', transform: 'rotate(-43deg)', transformOrigin: '0 0', background: '#ECBB36', borderRadius: 65 }} />
                <div style={{ width: 953, height: 120.30, left: 132, top: 969.94, position: 'absolute', transform: 'rotate(-43deg)', transformOrigin: '0 0', background: '#ECBB36', borderRadius: 65 }} />
                <div style={{ width: 953, height: 120.30, left: -124, top: 1364.94, position: 'absolute', transform: 'rotate(-43deg)', transformOrigin: '0 0', background: '#ECBB36', borderRadius: 65 }} />
                <img style={{ width: 848, height: 1068, left: -101, top: 3, position: 'absolute' }} src={dog} />
                <div style={{ width: 461.31, height: 42.52, left: 371, top: 1138.61, position: 'absolute', transform: 'rotate(-43deg)', transformOrigin: '0 0', background: 'linear-gradient(270deg, #EF4D58 0%, white 100%)', borderRadius: 65 }} />
                <div style={{ width: 461.31, height: 42.52, left: 449, top: 1123.61, position: 'absolute', transform: 'rotate(-43deg)', transformOrigin: '0 0', background: 'linear-gradient(270deg, #EF4D58 0%, white 100%)', borderRadius: 65 }} />
                <div style={{ width: 461.31, height: 42.52, left: 408, top: 1218.61, position: 'absolute', transform: 'rotate(-43deg)', transformOrigin: '0 0', background: 'linear-gradient(270deg, #EF4D58 0%, white 100%)', borderRadius: 65 }} />
                <div style={{ width: 42, height: 42, left: 809.21, top: 729, position: 'absolute', transform: 'rotate(52.25deg)', transformOrigin: '0 0', background: 'linear-gradient(177deg, #F26852 46%, rgba(239, 77, 88, 0) 100%)', borderRadius: 9999 }} />
                <div style={{ width: 461.31, height: 58.68, left: 598.86, top: -165.45, position: 'absolute', transform: 'rotate(136deg)', transformOrigin: '0 0', background: 'linear-gradient(270deg, #EF4D58 0%, white 100%)', borderRadius: 65 }} />
                <div style={{ width: 461.31, height: 58.68, left: 1328.60, top: -216.79, position: 'absolute', transform: 'rotate(136deg)', transformOrigin: '0 0', background: 'linear-gradient(270deg, white 0%, #FFA003 100%)', borderRadius: 65 }} />
                <div style={{ width: 62.77, height: 58.68, left: 974.91, top: 142.33, position: 'absolute', transform: 'rotate(136deg)', transformOrigin: '0 0', background: 'linear-gradient(270deg, white 0%, #FFC96E 38%, #FFA003 100%)', borderRadius: 65 }} />
                <div style={{ width: 62.77, height: 58.68, left: 1300.91, top: 904.21, position: 'absolute', transform: 'rotate(136deg)', transformOrigin: '0 0', background: 'linear-gradient(270deg, white 0%, #FFC96E 38%, #FFA003 100%)', borderRadius: 65 }} />
                <div style={{ width: 461.31, height: 58.68, left: 1401.60, top: -216.79, position: 'absolute', transform: 'rotate(136deg)', transformOrigin: '0 0', background: 'linear-gradient(90deg, #FFA003 0%, white 34%)', borderRadius: 65 }} />
                <div style={{ width: 461.31, height: 58.68, left: 1660.60, top: 559.21, position: 'absolute', transform: 'rotate(136deg)', transformOrigin: '0 0', background: 'linear-gradient(90deg, #FFA003 0%, white 34%)', borderRadius: 65 }} />
                <img style={{ width: 76, height: 76, left: 872, top: 476, position: 'absolute' }} src={hand} />
                <img style={{ width: 194, height: 194, left: 1800, top: 250, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0' }} src={hand} />
                <img style={{ width: 76, height: 76, left: 1790, top: 980, position: 'absolute', transform: 'rotate(-65.83deg)', transformOrigin: '0 0' }} src={hand} />
                <div style={{ left: 1149, top: 167, position: 'absolute', color: '#B85B2C', fontSize: 48, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Login</div>
            </div> */}

            <div className="login-screen">
                <div className="div">
                <form onSubmit={handleSubmit}>

                    <div className="overlap">



                            <input className="rectangle" type="email" required placeholder='email' value={email} onChange={e => setEmail(e.target.value)} />
                            <input className="rectangle-2" type="password" placeholder='password' required value={password} onChange={e => setPassword(e.target.value)} />
                        <div className="overlap-group">
                            <div className="overlap-group-2">
                                <div className="rectangle-3" />
                                <div className="rectangle-4" />
                                <div className="rectangle-5" />
                                <div className="rectangle-6" />
                                <div className="rectangle-7" />
                                <img className="domestic-cute-dog" alt="Domestic cute dog" src={dog} />
                                <div className="rectangle-8" />
                                <div className="rectangle-9" />
                                <div className="ellipse" />
                            </div>
                            <div className="overlap-2">
                                {/* <div className="rectangle-10" /> */}
                                <div className="rectangle-11" />
                            </div>
                            <div className="rectangle-12" />
                            <img className="v-a" alt="V a" src={hand} />
                        </div>
                        <div className="overlap-3">
                            <div className="overlap-4">
                                <div className="rectangle-13" />
                                <div className="rectangle-14" />
                            </div>
                            <img className="img" alt="V a" src={hand} />
                        </div>
                    </div>
                    <div className="div-wrapper">
                        <button>login</button>
                    </div>
                    
                    <div className="overlap-5">
                    <a href="/TypeRegister">Sign up</a>

                        {/* <div className="text-wrapper-2">Register</div> */}
                    </div>
                    </form>

                    <div className="rectangle-15" />
                    <div className="rectangle-16" />
                    <div className="rectangle-17" />
                    <img className="v-a-2" alt="V a" src={hand} />
                    <div className="text-wrapper-3">Login</div>
                </div>
            </div>

        </>
    )
}

export default Login
