import{REQ,SUCCESS,FAIL} from './User.action'
let initialstate={
    users:[],
    loading: true
}
//import action types;
let user_reducer=(state=initialstate,action)=>{
    switch(action.type){
        case 'REQ':
            return{loading:false}
            case 'SUCCESS':
                return{users:action.payload}
                case 'FAIL':
                    return{loading:false}
                    default:
                        return state
    }

}
export {user_reducer}