import  {React,useState} from "react";
 import "./Todotask.css"
 
 const Todotask = () => {
   const [data, SetData] = useState({
     Name: "",
     Age: "",
     Role: ""
   });

   const changeHandler = (e) => {
     SetData({ ...data, [e.target.name]: e.target.value });
    console.log( data)
   };
   const [store, SetStore] = useState([]);
   const handleSubmit = (e) => {
     e.preventDefault();
     const newData = {
       Name: data.Name,
       Age: data.Age,
       Role:data.Role
     };
 
     SetStore([...store, newData]);
     console.log(store);
     
   };
  
   return (
     <div>
       <h3>Player Details</h3>
       <div>
         <form onSubmit={handleSubmit}>
           <input placeholder="Name" name="Name" onChange={changeHandler} maxlength="20" value={store.Name}/>
           <br />
           <input placeholder="Age" name="Age" onChange={changeHandler}  maxlength="2"  value={store.Age}/>
          <br />
           <input placeholder="Role" name="Role" onChange={changeHandler}  maxlength="20" value={store.Role}/>
           <br />
           <button className="btn btn-secondary" onClick={handleSubmit} >Submit</button>
         </form>
       </div>
       <div>
         <table style={{ width: "60%" }}>
           <thead>
           <th>S.NO</th>
             <th>Name</th>
             <th>Age</th>
             <th>Role</th>
             <th>Edit/Delete</th>
           </thead>
           <tbody>
             {store.map((emp, id) => {
               return (
                 <tr key={id}>
                   <td>{id+1}</td>
                   <td>{emp.Name}</td>
                   <td>{emp.Age}</td>
                   <td>{emp.Role}</td>
                   <td><button className="btn btn-info ">edit</button><>&nbsp;&nbsp;</><button className="btn btn-danger">delete</button></td>
                 </tr>
               );
             })}
           </tbody>
         </table>
       </div>
     </div>
   );
 }
 
 export default Todotask;