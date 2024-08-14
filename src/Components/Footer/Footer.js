import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  let [email,setEmail]=useState("")
  let [name,setName]=useState("")

  return (
    <div>
        <footer className="bg-gray-900 py-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap -mx-4 justify-between">
      <div className="w-full lg:w-1/4 px-4 mb-8">
        <h2 className="text-white font-bold mb-4">Company</h2>
        <ul className="list-reset">
          <li>
            <a href="#"  className="text-gray-500 hover:text-white">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 hover:text-white">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 hover:text-white">
              FAQs
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full lg:w-1/4 px-4 mb-8">
        <h2 className="text-white font-bold mb-4">Categories</h2>
        <ul className="list-reset">
          <li  className="text-gray-500 hover:text-white">
          <Link to="/men">
              Men</Link>
            
          </li>
          <li  className="text-gray-500 hover:text-white">
          <Link to="/women">
              Women</Link>
           
          </li>
        
        </ul>
      </div>
      <div className="w-full lg:w-1/4 px-4 mb-8">
        <h2 className="text-white font-bold mb-4">Social</h2>
        <ul className="list-reset">
          <li>
            <a href="https://www.facebook.com/profile.php?id=100010635046738" target='_blank' className="text-gray-500 hover:text-white">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://twitter.com/haseebshabir31" target="_blank"className="text-gray-500 hover:text-white">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/haseebshabir31/" target="_blank" className="text-gray-500 hover:text-white">
              Instagram
            </a>
          </li>
        </ul>
      </div>
      {/* <div className="w-full lg:w-1/4 px-4 mb-8">
        <h2 className="text-white font-bold mb-4">Subscribe</h2>
        <p className="text-gray-500 mb-4">
          Sign up for our newsletter to get the latest news and updates.
        </p>
        <form className="mb-4">
          <div className=" flex items-center">
          
                 <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 text-gray-500 border border-gray-700 py-2 px-3 w-full rounded-l-md focus:outline-none focus:shadow-outline my-5"
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
            />
            <button
              type="submit"
              className="bg-indigo-500 text-white py-2 px-3 rounded-r-md focus:outline-none focus:shadow-outline"
              onClick={async(e)=>{
                e.preventDefault()
                let resp= await axios.post("/sendMail",{email})
                console.log(email);
              }}
            >
              Subscribe
            </button>
          </div>
        </form>
      </div> */}
    </div>
    <div className="border-t border-gray-800 pt-8 text-center">
      <p className="text-gray-500">
        Copyright © 2023 Shoe Store. All rights reserved.
      </p>
    </div>
  </div>
</footer>

    </div>
  )
}
