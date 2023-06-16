import React, { useState } from "react";
import '../Admin/Admin.css';
import axios from "axios";

import { Link, Outlet, useNavigate } from "react-router-dom";
// import '../../node_modules/bootstrap/'

function AdminData() {
    return (
        <>
            <div className="container">
                <div className="main-admin">
                    <div className="menubars">

                        <div className="menu">
                            <h3 className="admintext">
                                dashbord
                            </h3>
                            <ul className="menu-text">
                                <Link to='/dashbord'>
                                    <li className="">Home</li>
                                </Link>

                                <Link to='/home2'>
                                    <li className="">home2</li>
                                </Link>
                            </ul>
                        </div>

                    </div>
                    <div className="dashbord">
                        <div className="dsahbordheading">
                            <h5 className="uploaddataAdmin">Domain upload data</h5>
                        </div>
                        <Outlet />
                    </div>

                </div>
            </div>
        </>
    )
}

export { AdminData }

function AdminForm() {

    const [adminData, setAdminData] = useState({
        email: "",
        password: ""
    })
    const HandleInput=(e)=>{
const {name,value}=e.target
setAdminData({...AdminData,[name]:value})
    }
    console.log(adminData)
 const submitAdmin=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:5000/app/login_admin',adminData).then(resp=>{
        console.log(resp)
    })
 
 }
    return (
        <div className="BannerContact">
            <div className="container">
                <div className="contactText">
                    <div className="text-Contact-us">
                        <h2 className="contact-us-heading">Admin</h2>
                        <p className="contact-paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore iusto maiores facere.
                            Commodi adipisci qui ipsum itaque sapiente, obcaecati consequatur, architecto,
                        </p>
                    </div>
                    <div className="form-text form-text2">
                        <form className="Contact-style">

                            <label htmlFor="email">Email Id</label>
                            <input type="text" 
                            onChange={HandleInput}
                            name="email" value={adminData.email} placeholder="Enter your Email" />

                            <label htmlFor="password">Password</label>
                        
                            <input type="password"
                                onChange={HandleInput}
                            name="password" value={adminData.password} placeholder="Enter your Email" />
                            <Link to='/dashbord'>
                                <button className="send" onClick={submitAdmin} >send</button>
                             
                            </Link>
                            <Link to='/create'>
                            <p className="admincrate" >create new admin account</p>
                             
                            </Link>

                        </form>

                    </div>

                </div>
            </div>
        </div>
    )
}
export { AdminForm }

//admin create
function AdminCreate() {
const navigate=useNavigate()
    const [adminData, setAdminData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const HandleInput=(e)=>{
const {name,value}=e.target
setAdminData({...AdminData,[name]:value})
    }
    console.log(adminData)
 const submitAdmin=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:5000/app/createAdmin',adminData).then(resp=>{
        console.log(resp)
        navigate('/admin')
    })
 
 }
    return (
        <div className="BannerContact">
            <div className="container">
                <div className="contactText">
                    <div className="text-Contact-us">
                        <h2 className="contact-us-heading">Admin</h2>
                        <p className="contact-paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore iusto maiores facere.
                            Commodi adipisci qui ipsum itaque sapiente, obcaecati consequatur, architecto,
                        </p>
                    </div>
                    <div className="form-text form-text2">
                        <form className="Contact-style">

                            <label htmlFor="name">name</label>
                            <input type="text" 
                            onChange={HandleInput}
                            name="name" value={adminData.name} placeholder="Enter your Email" />

                            <label htmlFor="email">Email Id</label>
                            <input type="text" 
                            onChange={HandleInput}
                            name="email" value={adminData.email} placeholder="Enter your Email" />

                            <label htmlFor="password">Password</label>
                        
                            <input type="password"
                                onChange={HandleInput}
                            name="password" value={adminData.password} placeholder="Enter your Email" />
                           
                                <button className="send" onClick={submitAdmin} >send</button>
                         

                        </form>

                    </div>

                </div>
            </div>
        </div>
    )
}
export { AdminCreate }