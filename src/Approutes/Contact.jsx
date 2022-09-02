import React from 'react'
import { useHistory } from 'react-router-dom';

let Contact = () => {
  const history=useHistory()
  return (
    <div>
    <h3>contact us</h3>
    <button  onClick={()=>{history.push("/Todo")}}>Enter your data</button>
    </div>
  )
}

export default Contact