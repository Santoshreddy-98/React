//action type
const wish="wish"
const GA="GA"

//action
let greetAction = () => {
return {type:wish}
}
let greet2Action=()=>{
    return{type:GA}
}
export{wish,GA,greetAction,greet2Action}
//named export
