import  { useState, Fragment } from "react";
import styles from "./Navbar.module.css";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { IoIosLogIn } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import axios from "axios";

const Navbar = () => {
  // getting the userId from the local storage
  let user_id = localStorage.getItem("userid");
  // console.log(user_id);

  let navigate = useNavigate()

  function handleLogout() {
    localStorage.removeItem("userid")
    navigate("/")
    alert("User Logged Out Successfully")
  }
  
  async function handleDeleteProfile() {
    let res = confirm("Do you wants to delete profile")
    if(res) {
      let res = await axios.delete(`http://localhost:3030/users/${user_id}`)
      if (res) {
        alert("Profile Deleted")
        localStorage.removeItem("userid")
        navigate("/")
      }else{
        alert("Something went wrong...")
      }
    }
  }

  const [dropdownVisible, setDropdownVisible] = useState(false);
  return (
    <div>
    <nav id={styles.navbar}>
      <figure>
        <h3>Login</h3>
        <font>
          <IoIosLogIn />
        </font>
      </figure>

      <ul>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/">
            Home
          </NavLink>
        </li>
        {user_id ? (
          //! if user is already logged in then this fragmenent will display
          <Fragment>
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>
            <li>
              <NavLink to="/allproducts">All Products</NavLink>
            </li>


            <li className={styles.dropdownContainer} onMouseEnter={() => setDropdownVisible(true)} onMouseLeave={() => setDropdownVisible(false)}>
              <BsThreeDotsVertical id={styles.dots} />
              {/* Dropdown Menu */}
              {dropdownVisible && (
                <ul className={styles.dropdownMenu}>
                  <li>
                    <NavLink to="/editProfile" className={styles.navDropdown}>Edit Profile</NavLink>
                  </li>
                  <li>
                    <button onClick={handleDeleteProfile} className={styles.navDropdown}>Delete Account</button>
                  </li>
                  <li>
                    <button onClick={handleLogout} className={styles.navDropdown}>Logout</button>
                  </li>
                </ul>
              )}
            </li>
          </Fragment>
        ) : (
          //! if user is not logged in then this fragment will display
          <Fragment>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
          </Fragment>
        )}
      </ul>
      
    </nav>
    <Outlet/>
    </div>

  );
};

export default Navbar;
