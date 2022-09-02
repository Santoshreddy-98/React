import {wish,GA} from "../../Redux2/Message/Message.action"
let initialState={
    message:"hello santosh"
}
let messagereducer=(state=initialState,action)=>{
   switch(action.type){
    case 'wish':
    return {message:"you are good at redux"};  
    case 'GA':
    return {message:"lets Work for the goal"};
    default:
        return state;
   }
}
export {messagereducer}