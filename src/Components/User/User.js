import React, { Component } from "react";



//  props and state... // properties 
// lifecycle hooks methods and render method .... 
// this.setState().. // setting of the state 
// getting the state -> this.state
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0, name: "utkarsh"} // assignment
    }

    // for updating the rest of the state form anywhere else we need to do SetState... 
    updateCounter(number) {
        this.setState((oldState, oldProps) => ({
            ...oldState,
            counter: oldState.counter + number
        }))
    }

    render() {
        const {counter} = this.state;
        return (
            <>
                <div>This is a class method {counter}</div>
                <button onClick={() => this.updateCounter(2)}>Click in the User</button>
            </>
        )
    }
    
}

export default User;