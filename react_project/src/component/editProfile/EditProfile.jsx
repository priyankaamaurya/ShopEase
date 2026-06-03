import React, { useEffect, useState } from "react";
import Styles from "./EditProfile.module.css";
import {Navigate, useNavigate, useParams} from "react-router-dom"
import axios from "axios";

const EditProfile = () => {

  let [editUser , setEditUser] = useState({
    userName : "",
    email : "",
    password : ""
  });
   let userid = localStorage.getItem("userid");

  useEffect(() => {
    async function getEditUser() {
      let {data} = await axios.get(`https://shopease-backend-zpue.onrender.com/users/${userid}`);
      // console.log(data);
      setEditUser(data);
    }
    getEditUser();
  },[]);

  let naviagate = useNavigate("/")
  let handleEditUser = (e) => {
    let {name, value} = e.target;
    setEditUser({...editUser , [name]: value});
  }
  let formSubmit = async (e) => {
    // console.log("Submitting")
    e.preventDefault();
    let res = confirm("Submit ?")
   if(res){
     try{
      await axios.patch(`https://shopease-backend-zpue.onrender.com/users/${userid}`, editUser)
      localStorage.removeItem("userid")
      naviagate("/")
    }catch (error){
      console.log("Error while edit user" , error);
    }
   }
  }

  return (
    <div id={Styles.editProfile}>
      <div>
        <h2>Edit Profile</h2>
        <br/>
        <form onSubmit={formSubmit}>
          <input type="text" placeholder="Username" name="userName" value={editUser.userName} onChange={handleEditUser}></input>
          <input type="text" placeholder="Email" name="email" value={editUser.email} onChange={handleEditUser}></input>
          <input type="password" placeholder="Password" name="password" value={editUser.password} onChange={handleEditUser}></input>
          <br />
          <input id={Styles.btn} type="submit"></input>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
