import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout';



export default function Cart() {
    let [data,setData]=useState([])
    let [total,setTotal]=useState(0)
    let onToken=(token)=>{
      console.log(token);
    }
    useEffect(() => {
      
    
        let fetchData= async() => {
          let resp= await axios.get("/getCart")
          setData(resp.data.founded)

        
        }
        fetchData()

       
      }, [total])
    //   console.log(data);

    useEffect(()=>{
      let tr=0
      data.forEach(di => {
         tr+=di.total
         setTotal(tr)
        //  console.log("Done1")
         if (data.length==undefined) {
          setTotal(0)
          // console.log("Done2")
         }
      });
    },[data])
     
  return (
    <div>

<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <h1 className="text-3xl font-bold mb-8 text-white text-center">Your Cart</h1>
  {/* Cart items */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Item 1 */}

    {
       data? data.map((item)=>{
            return(
                <div>
                     <div className="bg-white rounded-lg shadow-lg">
      <img
       src={item.imageName}
        alt="Shoe"
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="p-6">
        <h2 className="text-lg font-bold mb-2">{item.name}</h2>
        <p className="text-gray-600 mb-4">{item.price}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
          
            <span className="text-lg font-bold mr-2"> Quantity:{item.qty}</span>
            <span className="text-lg font-bold mr-2"> total:{item.total}</span>
          
          </div>
          <button className="text-red-600 font-bold hover:underline" onClick={async()=>{
            await axios.delete(`/delete/${item._id}`)
            setTotal(total-item.price*item.qty)
          }}>
            Remove
          </button>
        </div>
      </div>
    </div>
                    </div>
            )
        }):<div className='text-center text-white text-2xl'>Loading...</div>
    }
   
    
  </div>

</div >
  <div className="text-2xl font-bold mb-8 text-center justify-center text-white  my-3">Your Total:{total}</div>
<div className='text-center my-2'>
<StripeCheckout
        token={onToken}
        stripeKey="pk_test_51MkJquKxunhLpIDBKmyGWdbT9msgIBIBFupJ6OPqV7w1qphYCkdXT3Fmy12bjgJOuu1nh89PMVRZT33C9vfulSPy00G6MquLdv"
        amount={total *100}
        currency="PKR"
      />
      </div>

    </div>
  )
}
