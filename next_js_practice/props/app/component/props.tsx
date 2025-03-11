import React from 'react'

const Props = ({name,age}:{name:string,age:number}) => {
  return (
    <div>
      <p>{`Hello ${name} your age is ${age}`}</p>
    </div>
  )
}

export default Props
