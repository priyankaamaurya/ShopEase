import axios from 'axios'
import styles from "./Allproduct.module.css";
import React, { useEffect, useState } from 'react'

const Allproducts = () => {

  let [data, setData] = useState([])

  let userid = localStorage.getItem("userid");


  useEffect(() => {
    async function api() {
      let res = await axios.get("https://fakestoreapi.com/products")
      setData(res.data)
    }
    api()
  }, [])

  async function hanldeCart(cartData) {
    console.log(cartData)
    console.log(userid)

    let { data } = await axios.get(`https://shopease-backend-zpue.onrender.com/users/${userid}`)
    let updatedCart = data.cart ? [...data.cart] : []

    let existingPro = updatedCart.find((res) => res.id === cartData.id)

    if (existingPro) {
      existingPro.quantity += 1
    } else {
      updatedCart.push({ ...cartData, quantity: 1 })
    }
    await axios.patch(`https://shopease-backend-zpue.onrender.com/users/${userid}`, { cart: updatedCart })
    alert("Product Added")
  }
  return (
    <div id={styles.allproducts}>
      {data.map((ele) => {
        let { id, brand, color, title, image, price } = ele;

        return (
          <section key={id} className={styles.card}>
            <img src={image} alt={title} className={styles.image} height={50} width={100} />
            <div className={styles.details}>
              <p className={styles.title}>{title.slice(0, 40)}...</p>
              <h5 className={styles.price}>₹ {price}</h5>
              <p className={styles.brand}>Brand: {brand || "N/A"}</p>
              <p className={styles.color}>Color: {color || "N/A"}</p>
              <button
                onClick={() => hanldeCart(ele)}
                className={styles.cartBtn}
              >
                Add To Cart
              </button>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default Allproducts
