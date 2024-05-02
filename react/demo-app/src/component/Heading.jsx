import React, {Component} from "react";

class Heading extends Component{

    constructor(props){
        super(props) 
        this.state = {
            name:"Sachin"
        }
    }

    handleOnClick = () => {
        this.setState({name:"Akshay"});
    }

    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.handleOnClick}>Click</button>
            </div>
        )
    }
}

export default Heading