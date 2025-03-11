import React from 'react'
import Props from './component/props'
// import Products from './component/products'

const Home = () => {
  return (
    <div>
      {/* <Products/> */}
      <Props name ='usama' age={23}/>
      <Props name ='Ahmed' age={29}/>
    </div>
  )
}

export default Home
