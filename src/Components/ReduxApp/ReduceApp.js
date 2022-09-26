import { Component } from "react";
import { connect } from "react-redux";
import TOGGLE from "./actions/action";

class ReduceApp extends Component {
    
    render() {
        console.log("hey there props", this.props);
        return(
            <div>
                hello {this.props.toggleValue ? "ON": "OFF"}
                <button onClick={() => this.props.changeTheText()}>Click me</button>
            </div>
        );
    }

}


const mapStateToProps = (state) => {
    return {
        toggleValue: state.value
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        changeTheText: (payload) => dispatch(TOGGLE(false)),
    }
} 



export default connect(mapStateToProps, mapDispatchToProps)(ReduceApp);