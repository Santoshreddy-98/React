import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { Action } from "../User/User.action";
const User=()=>{
    let users=useSelector((state)=>{
        return state.users

    })
    let x=useDispatch()
    let get_dataHandler=()=>{
        x(Action())
    }
    return(
        <div>
            <pre>{JSON.stringify(users)}</pre>
            <button className="btn btn-success"onClick={get_dataHandler} >PRESS HERE</button>
        </div>
    )
}
export default User