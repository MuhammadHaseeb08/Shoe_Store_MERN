import React from 'react'

export default function Card() {
  return (
    <div>
       <section className="bg-gray-100 py-16">
  <div className="container px-4 mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center" >Our Shoes</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src="https://via.placeholder.com/640x480.png?text=Product+Image"
          alt="Product Image"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-lg font-bold mb-2">Product Name</h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg">$50</span>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src="https://via.placeholder.com/640x480.png?text=Product+Image"
          alt="Product Image"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-lg font-bold mb-2">Product Name</h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg">$60</span>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src="https://via.placeholder.com/640x480.png?text=Product+Image"
          alt="Product Image"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-lg font-bold mb-2">Product Name</h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg">$70</span>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
