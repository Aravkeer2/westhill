import React from "react"
import "./style.css"
import logo from '../../components/assets/images/logo.svg'
const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box_img'>
            <img src={logo}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>Kodaikanal </li>
              <li>Email: westhillsshopping@gmail.com</li>
              <li>Phone: +91 91283 94585</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
