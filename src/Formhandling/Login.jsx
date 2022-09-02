import React from "react";

class Login extends React.Component{
    state={
        User_Name:"",
        Password:""
    }

    usernameHandler = (event) =>{
        this.setState({User_Name:event.target.value})
    }
    passwordHandler = (event) =>{
        this.setState({Password:event.target.value})
    }
    submitHandler = (event) => {
            event.preventDefault()
            console.log(this.state)
       }
    render(){
        return <div className="container">
<div className="row">

<div className="col-md-6">

<div className="card">
<div className="card-header bg-info">
<h3>Login Here</h3>
</div>
<div className="card-body">
<form onSubmit={this.submitHandler}>
<div className="form-group">
    <input onChange={this.usernameHandler} className="form-control" type="text" placeholder="User Name"/>
</div>
<div className="form-group">
    <input onChange={this.passwordHandler} className="form-control" type="password" placeholder="Password"/>
</div>
<input type="submit" className="btn btn-info" value="Login"/>

</form>

</div>
</div>

</div>

</div>

        </div>
    }


}
export default Login