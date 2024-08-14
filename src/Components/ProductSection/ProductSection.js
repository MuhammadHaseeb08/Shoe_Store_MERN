import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from '../Card/Card'
import ProductSection from '../ProductSection/ProductSection'
import Spinner from 'react-spinner'

export default function () {
    let [data,setData]=useState([])
    let [loading,setLoading]=useState(false)
    let dt=useParams()
    useEffect(() => {
      
    
      let fetchData= async() => {
        let resp= await axios.get("/getData")
        setData(resp.data.founded)
        setLoading(true)
      }
      fetchData()
    }, [])
    // console.log(data);
   let filterdData= data.filter((item)=>{
if (item.price>=2000 && item.price<=3000) {
    return true
}
})
// console.log(dt);
// console.log(filterdData);
    
  return (
    <div>
       <section className="bg-gray-100 py-16">
  <div className="container px-4 mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center" >Our Shoes</h2>
    { loading?
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
     {
         filterdData.map((item)=>{
                 return(
                     <div>
<div className="bg-white rounded-lg shadow-lg overflow-hidden">
     <img
       src={item.imageName}
       alt="Product Image"
       className="w-full h-48 object-cover"
     />
     <div className="p-6">
       <h3 className="text-lg font-bold mb-2">{item.name}</h3>
       <p className="text-gray-600 mb-4">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       </p>
       <div className="flex justify-between items-center">
         <span className="font-bold text-lg"> Rs.{item.price}</span>
         <Link to={`/detail/${item._id}`}>
         <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full" >
           View Detail
         </button>
         </Link>
       </div>
     </div>
   </div>
                     </div>
                 )
         })
     }

   
  
   
 </div>:<Spinner/>
    

    }
   
  </div>
</section>
    </div>
  )
}