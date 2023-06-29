import React, {Component} from "react";
import "./index.css";

class RandomNumber extends Component {
    state = {count: 0}
    generate = () => {
        const sai = Math.floor(Math.random() * 100) + 1;
        this.setState({count: sai})
    }
    render(){
        const {count} = this.state
        return(
            <div className="page">
                <div className="">
                 <h1>Random Number</h1>
                 <p>Generate random number in range 0 to  100</p>
                 <div className="button">
                 <button className="btn btn-primary" onClick={this.generate}>Generate</button>
                 </div>
                 <p className="number text-center">{count}</p>
                 </div>   
            </div>
        )
    }
}

export default RandomNumber;