import React from 'react'
import '../css/Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-white mt-5">
    <div className="container">
      <div className="row">
        
        <div className="col-md-4">
        <Link to={"/about"}>
          <h5 className="mt-3" style={{textDecoration :"none"}}>About Us</h5>
          </Link>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        
        <div className="col-md-4">
          <h5 className="mt-3">Quick Links</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-white">Home</a></li>
            <li><a href="#" className="text-white">Services</a></li>
            <li><a href="#" className="text-white">About</a></li>
            <li><a href="#" className="text-white">Contact</a></li>
          </ul>
        </div>
        
        <div className="col-md-4">
          <h5 className="mt-3">Contact Us</h5>
          <ul className="list-unstyled">
            <li><i className="fa fa-map-marker"></i> 123 Street Name, City, Country</li>
            <li><i className="fa fa-phone"></i> +123 456 7890</li>
            <li><i className="fa fa-envelope"></i> info@company.com</li>
          </ul>
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-12 text-center">
          <a href="#" className="text-white"><i className="fa fa-facebook fa-2x mr-3"></i></a>
          <a href="#" className="text-white"><i className="fa fa-twitter fa-2x mr-3"></i></a>
          <a href="#" className="text-white"><i className="fa fa-linkedin fa-2x mr-3"></i></a>
          <a href="#" className="text-white"><i className="fa fa-instagram fa-2x mr-3"></i></a>
        </div>
      </div>
    </div>
    
    <div className="bg-light text-dark text-center py-3">
      <p className="mb-0">&copy; 2024 Ghosh Hotel and Banquet. All Rights Reserved.</p>
    </div>
  </footer>
    </div>
  )
}

export default Footer
