import React, { Component} from "react";

class Heading extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "John"
        }
        this.handleonClick = this.handleonClick.bind(this)
    }
    handleonClick (){
        this.setState(
            {...this.state, name: "Oliver"}
        )
    }
    render() {
        return (
            <div>
            <h1>{this.state.name}</h1>
            <button onClick={this.handleonClick}>Click</button>
            </div>
            )
        }
    }
export default Heading 
