
'use client'

import React, { useEffect, useState } from 'react'

const Home = () => {
  const [plus,setPlus] = useState(1)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
    
  },[plus])
  function increase() {
    setPlus(plus + 1)
  }
  function Decrease() {
    while(plus >= 2){
      setPlus(plus - 1 )   
      break
    }
    }

  return (
    <div className='w-[250px] bg-black text-white m-auto mt-[100px] p-5 rounded-md'>
    {/* <p className='text-center text-2xl mb-[10px]'>{price}</p> */}
  <div className='w-full flex justify-between'>
  <button className='bg-white text-black rounded-full py-2 px-4  text-xl' onClick={increase}>+</button>
  <p className='text-center text-2xl'>{plus}</p>
  <button className='bg-white text-black rounded-full py- px-4 text-xl' onClick={Decrease}>-</button>
  </div>
</div>
  )
}

export default Home
