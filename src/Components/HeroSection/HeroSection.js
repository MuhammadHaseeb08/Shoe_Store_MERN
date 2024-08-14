import React from 'react'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
export default function HeroSection() {
  return (
    <div>
        <section className="bg-gray-800 text-white py-20">
  <div className="container mx-auto px-4">
    <div className="md:flex md:justify-between">
    
      <div className="md:w-1/2 mb-4 md:mb-0">
        <h2 className="text-4xl font-bold mb-4">
          Get your perfect pair of shoes today!
        </h2>
        <p className="text-xl mb-4">
          Explore our wide selection of shoes for men, women, and kids. From
          sneakers to boots, we have everything you need to step up your shoe
          game.
        </p>
        <Link
          to="/men"
          className="bg-white text-gray-800 py-2 px-4 rounded hover:bg-gray-300"
        >
          Shop Now
        </Link>
      </div>
      
      
      <div className="md:w-1/4">
        <img
          src="./images/logo.jpg"
          alt="Shoe Store"
          className="w-full rounded-lg shadow-md"
          
        />
      </div>
      
    </div>
  </div>
</section>

    </div>
  )
}
