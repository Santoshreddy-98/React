import { useState } from "react";
import React from "react";
import "./Form.css"

const Form=()=>{
    const initialvalues={
    Name:"",
    Email:'',
    Password:""};
    const [data,setdata]=useState(initialvalues) ;
    const [store,Setstore]=useState([])   

const dataChangeHandler=(event)=>{
    setdata({...data,[event.target.name]:event.target.value})
    // console.log(data)
}

const submitHandler=(e)=>{
e.preventDefault();
const newData={
    Name:data.Name,
    Email:data.Email,
    Password:data.Password
};
Setstore([...store,newData])
console.log(store)
}

// // Delete Button FUNCTION
// const deleteHandler = (IndexValue) => {
//     const FilteredTodo = store.filter((emp, index) => index !== IndexValue);
//     Setstore(FilteredTodo);
//   };
//   // Edit Button function
//   const editHandler = (editIndexValue) => {
//     const FilteredTodo = store.filter(
//       (emp, index) => index !== editIndexValue
//     );
//     Setstore(FilteredTodo);
//     const editSelector = store.find((elem, id) => id === editIndexValue);
//     setdata({
//       Name: editSelector.Name,
//       Email: editSelector.Email,
//       Password: editSelector.Password,
     
//     });
//   };


    return <div>
    <h5 className="heading">Here Is My Todo</h5>
    <form onSubmit={submitHandler}>
        <input type="text" placeholder="User Name" maxLength="10" name="Name" value={data.Name} onChange={dataChangeHandler} className="Input"/>
        <input type="text" placeholder="Email" maxLength={15} name="Email" value={data.Email} onChange={dataChangeHandler} className="Input"/>
        <input type="password" placeholder="6-digit password" maxLength={6} name="Password" value={data.Password} onChange={dataChangeHandler} className="Input"/> <br/>
        <button className="Button">Register</button>
        </form>
        <div>
            <table >
                <thead>
                <th>Sl.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Edit/Delete</th>
                </thead>
                <tbody>
                {store.map((emp,index)=>{
                    return (
                        <tr key={index}>                        
                        <td>{index+1}</td>
                     <td>{emp.Name}</td>
                     <td>{emp.Email}</td>
                     <td>{emp.Password}</td>
                     <td><button className=" Button BuutonEdit" >Edit</button> <button className=" Button ButtonDelete">Delete</button></td>
                     </tr>
                    )
                })}</tbody>
            </table>
        </div>
    </div>
}
export default Form;