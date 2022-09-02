import React from 'react'
class Bonus extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            salary: 10000
        }
    }
    bonusHandler = (offer) => {
        this.setState({
            salary: offer
        })
    }
    render() {
        return <div>
            <h1>Bonus Component</h1>
            
            <div className='container'>
            <div className='row'>
            <div className='col-md-8'>
            <div className='card-header'>
            <h2>Employee Salary: {this.state.salary}</h2>
            </div>
            <div className='card-body'>
            <button className='btn btn-info' onClick={this.bonusHandler.bind(this, 30000)}>Bonus 200 %</button><>&nbsp;&nbsp;&nbsp;</>
            <button className='btn btn-warning' onClick={this.bonusHandler.bind(this, 20000)}>Bonus 100 %</button><>&nbsp;&nbsp;&nbsp;</>
            <button className='btn btn-success' onClick={this.bonusHandler.bind(this, 5000)}>Bonus 50 %</button><>&nbsp;&nbsp;&nbsp;</>
            <button className='btn btn-danger' onClick={this.bonusHandler.bind(this, "Do Hardwork!")}>Bonus-Zero %</button>
            </div>
            </div>
            </div>
            </div>
        
        </div>
    }
}
export default Bonus