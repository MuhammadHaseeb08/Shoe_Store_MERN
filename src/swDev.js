import React from 'react'

export default function swDev() {
  let swUrl= `${process.env.PUBLIC_URL}/sw.js`
  navigator.serviceWorker.register(swUrl).then((resp)=>{
console.log(resp);
  }).catch((e)=>{
console.log(e);
  })
}
