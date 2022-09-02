import React from "react";

class Registration extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Name:"",
            Email:"",
            Password:""
        }
    }
        apiHandler=(event)=>{
            this.setState({[event.target.name]:event.target.value})

        }
        onSubmitHandler=(event)=>{
            event.preventDefault()
            console.log(this.state)
        }


    render(){
        return <div className="container">
            <div className="row">
            <div className="col-md-5">
                <div className="card mt-5">
                    <div className="card-header bg-warning">
                    <h1>Register Here</h1>
                      </div>
                      <div className="card-body">
                        <form onSubmit={this.onSubmitHandler}>
                        <div className="form-group">
                        <input className="form-control" type="text" placeholder="Enter Your Name" onChange={this.apiHandler} name="Name"/>
                         </div>
                         <div className="form-group">
                            <input className="form-control" type="text" placeholder="Email" onChange={this.apiHandler} name="Email"/>
                         </div>
                         <div className="form-group">
                            <input className="form-control" type="password" placeholder="8 digit-password" onChange={this.apiHandler} name="Password"/>
                         </div>
                         <input className="btn btn-info" type="submit" placeholder="8 digit-password" value="Register" />
                            
                        </form>
                      </div>

                </div>
            </div>

            </div>
        </div>


    }
}
export default Registration