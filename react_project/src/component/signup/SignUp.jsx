import Styles from "./SignUp.module.css";
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    let [formData , setFormData] = useState({
        userName:"",
        email : "",
        password: ""
    });

    function handleChange(e){
        let {name , value } = e.target;
        setFormData ({...formData , [name]:value});
    }
    let navigate = useNavigate()

    async function formSubmit(e){
        e.preventDefault();
        console.log(formData);
        try{
            let resp = await axios.post("http://localhost:3030/users" , formData)
            // console.log(resp);
            alert("SignUP successfully");
            navigate("/login")

        } catch (error){
            console.log(error);
            console.log("error while sending data");
        }
        setFormData({
            userName:"",
            email : "",
            password: ""
        })
    }
    
    return(
        <div id={Styles.Login}>

        <div>
            <h2>Create New Account</h2>
            {/* <br/> */}
            <form onSubmit={formSubmit}>
                <input type="text" placeholder="Username" value={formData.userName} onChange={handleChange} name="userName"></input>

                <input type="text" placeholder="Email" value={formData.email} onChange={handleChange} name="email"></input>

                <input type="password" placeholder="Password" value={formData.password} onChange={handleChange} name="password"></input>
                <br/>
                <input id={Styles.btn} type="submit"></input>
            </form>
        </div>
        </div>
    )
}
export default Signup;