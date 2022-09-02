import axios from 'axios'

const REQ="REQ"
const SUCCESS="SUCCESS"
const FAIL="FAIL"

let user_req=()=>{return {type:REQ}}
let user_success=(user)=>{
    return{type:SUCCESS,payload:user}
}
let user_failure=()=>{
    return {type:FAIL}
}

let Action=()=>{
    return (dispatch)=>{
        dispatch(user_req())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((Response)=>{
            dispatch(user_success(Response.data))
        })
        .catch(()=>{
            dispatch(user_failure())
        })
    }
}
export {REQ,SUCCESS,FAIL,Action}


