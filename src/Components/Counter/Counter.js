import { Component, useState } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abc: "asdas",
    };
  }

  shouldComponentUpdate(nextProps) {
    console.log(nextProps, "nextProps");
    if (nextProps.score === 5) {
      throw Error("Hey Error");
    }
    return true;
  }

  render() {
    const { score, increment } = this.props;
    return (
      <div>
        <h1>Score: {score}</h1>
        <button onClick={increment}>button</button>
      </div>
    );
  }
}

export default Counter;
