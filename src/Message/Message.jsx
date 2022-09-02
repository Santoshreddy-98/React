import React from "react";
import {greetAction,greet2Action} from '../Redux2/Message/Message.action'
import {useDispatch,useSelector} from 'react-redux'

let Message=()=>{
    let sel=useSelector((state)=>{
        return state.message
    })
    let dispatch=useDispatch()

    let gmHandler=()=>{
        
        dispatch(greetAction())

    }
    return<>
        <div className="container mt-5">
            <div className="row">
            <div className="col-md-4">
            <div className="card">
                <div className="card-header"><h1>{sel}</h1></div>
                <div className="card-body">
                    <button className="btn btn-info" onClick={gmHandler}>click</button>&nbsp;
                    <button className="btn btn-info" onClick={()=>{dispatch(greet2Action())}}>click</button>
                </div>
            </div>

            </div>

            </div>
        </div>
    </>
}
export default Message