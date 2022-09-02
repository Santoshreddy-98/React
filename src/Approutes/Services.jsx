import React,{useState} from 'react';


 const Services = () => {
  
  
  let [increment,setincrement]=useState(1)
  
    return <div>
<h1>counter:{increment}</h1>
        <button onClick={()=>{setincrement(increment+1)}}>Add</button><>&nbsp;&nbsp;&nbsp;</>
      <button onClick={()=>{setincrement(increment=0)}}>Cancel</button>
    </div>
   
  
}

export default Services