import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'


export default function NavBar() {
  return (
    <div>
<nav className="bg-white shadow">
  <div className="container mx-auto px-4">
    <div className="flex justify-between items-center py-4 font-bold text-xl text-gray-800">
    <Link to="/">
           Shoe Store
            </Link>
      <ul className="flex space-x-4">
        <li className="text-gray-800 hover:text-gray-600">
         <Link to="/">
            Home
            </Link>
         
        </li>
        <li className="text-gray-800 hover:text-gray-600">
         <Link to="/men">
            Men
            </Link>
          
        </li>
        <li className="text-gray-800 hover:text-gray-600">
        <Link to="/women">
        Women
            </Link>
        </li>
        <li className="text-gray-800 hover:text-gray-600">
        <Link to="/cart">
        Cart
            </Link>
        </li>
        {/* <li>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            Contact
          </a>
        </li> */}
      </ul>
    </div>
  </div>
</nav>


    </div>
  )
}
