import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../Card/Card";
import ProductSection from "../ProductSection/ProductSection";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Detail() {
  let [data, setData] = useState([]);
  let [cartdata, setcartData] = useState([]);

  let dt = useParams();
  let [total,setTotal]=useState(0)
  
  useEffect(() => {
    let fetchData = async () => {
      let resp = await axios.get("/getData");
      setData(resp.data.founded);
      let cartResp= await axios.get("/getCart")
      setcartData(cartResp.data.founded)
    };
    fetchData();
  }, [setData]);
  console.log(cartdata);
  let filterdData = data.filter((item) => {
    if (item._id == dt.any) {
      return true;
    }
  });
  // console.log(filterdData);
  return (
    <div>
      {filterdData.map((item) => {
        return (
          <div>
            <div className="container mx-auto my-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Shoe Image */}
                <div className="w-full md:w-1/2">
                  <img
                    src={item.imageName}
                    alt="Shoe Image"
                    className="w-full object-cover rounded-lg shadow-lg"
                  />
                </div>
                {/* Shoe Details */}
                <div className="w-full md:w-1/2">
                  <h1 className="text-3xl font-bold mb-2 text-white ">{item.name}</h1>
                  <p className="text-gray-600 mb-6">Men's Running Shoe</p>
                  <p className="text-lg font-bold mb-2 text-white">Rs.{item.price}</p>
                  <p className="text-gray-600 mb-6">Available Sizes: US 7-12</p>
                  <p className="text-gray-600 leading-loose mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin rhoncus felis et metus pharetra bibendum. Aenean nec
                    semper massa, eget
                  </p>
                  <h1 className="text-3xl font-bold mb-2 text-white">Quantity</h1>
                  <div className=" flex my-6 gap-x-7">

                    {item.qty>1? <div> <button
                      className="bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-200"
                      onClick={async () => {
                        item.qty= item.qty-1
                      let nqty=item.qty
                         let price= item.price
                         item.total= nqty*price
                         let total=item.total
                       let resp = await axios.put(`/editQty/${item._id}`, {nqty,total});
                        if (resp.data.success==true) {
                          setData([...data])
                        }
                        console.log(nqty,"--");
                      }}
                      
                    >
                      -
                    </button></div>: <p className="text-red-600 mb-6">Quantity cannot be decreased from 1</p>

                   
                   
                     }

                    <h1 className="text-2xl font-bold mb-2  text-white">
                      {item.qty}
                    </h1>
                    <button
                      className="bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-200"
                      onClick={async() => {
                 
                      item.qty= item.qty+1
                      let nqty=item.qty
                      let price= item.price
                      item.total= item.qty*price
                      let total=item.total

                        let resp= await axios.put(`/editQty/${item._id}`, {nqty,total});
                        console.log(nqty);
                        if (resp.data.success==true) {
                          setData([...data])
                        }
                      }}
                    >
                      +
                    </button>
                  </div>

                  <button className="bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-200" onClick={async()=>{
                   let choe= cartdata.find((cart)=>{
                              if (item._id==cart._id) {
                                return true
                              }
                    })
                    console.log(choe);
                    let resp= await axios.post("/addCart",item)
                    if (resp.data.success==true) {
                      setData([...data])
                      toast("Added to cart");
                    }else{
                      toast("product already exist")
                      // setData([...data])
                    }
                  }}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <ToastContainer />
          </div>
        );
      })}
    </div>
  );
}
