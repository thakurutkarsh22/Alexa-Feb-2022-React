const { Component } = require("react");

class ClockClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateTime: new Date().toLocaleString(),
    };
    this.intervalId = "";
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.intervalId = setInterval(() => {
      this.setState({ dateTime: new Date().toLocaleString() });
    }, 1000);
    console.log("creation of interval ID", this.intervalId);
    // this.setState({ dateTime: "heyUtkarsh" });
  }

  componentWillUnmount() {
    // all the suscription will be removed.....
    // can make obj null so that they can be garbage collected // may or may not have best effecct
    // clearing everything
    clearInterval(this.intervalId);
    console.log("unmounting", this.intervalId);
  }

  render() {
    console.log("render");
    return (
      <>
        <h1>Clock Class</h1>
        <div>{this.state.dateTime}</div>
      </>
    );
  }
}

export default ClockClass;
