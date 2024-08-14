import React from 'react'

export default function About() {
  return (
    <div>
<div className="bg-gray-100 py-10 md:py-20">
  <div className="container mx-auto px-4 md:px-8">
    <div className="flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/3 text-center md:text-left mb-10 md:mb-0">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          About Our Store
        </h2>
        <p className="text-gray-600 leading-relaxed">
          We are a shoe store that specializes in high-quality, stylish footwear
          for every occasion. Our mission is to provide our customers with the
          best possible shopping experience by offering a wide selection of
          shoes at affordable prices, backed by exceptional customer service.
        </p>
      </div>
      <div className="w-full md:w-2/3">
        <img
          src="./images/main.jpg"
          alt="Store interior"
          className="w-full h-auto"
        />
      </div>
    </div>
  </div>
</div>


    </div>
  )
}
