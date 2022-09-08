import React from "react";
import ScrollComp from "./ScrollComp";

class ClassLifeCycle extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          content: "rahul",
        },
        {
          id: 2,
          content: "rahul1",
        },
        {
          id: 3,
          content: "rahul2",
        },
      ],
    };
  }

  handleAdd() {
    console.log("hello");
    const random = Math.random();
    this.setState((prevState) => ({
      data: [
        ...prevState.data,
        {
          id: 5,
          content: random,
        },
      ],
    }));
  }

  render() {
    console.log("render");
    return (
      <>
        <div>Explanation of getSnapshot</div>
        <button onClick={() => this.handleAdd()}>Add</button>
        <ScrollComp data={this.state.data} />
      </>
    );
  }
}

export default ClassLifeCycle;
