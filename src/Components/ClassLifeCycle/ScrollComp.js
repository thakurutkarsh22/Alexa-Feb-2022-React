import React from "react";
import "./Style.css";
class ScrollComp extends React.Component {
  wrapperRef = React.createRef();

  getSnapshotBeforeUpdate() {
    const { scrollTop, scrollHeight, offsetHeight } = this.wrapperRef.current;

    if (scrollTop + offsetHeight > scrollHeight - 30) {
      return true;
    } else {
      return false;
    }
  }

  //    performance .....
  shouldComponentUpdate(nextProps, nextState) {
    console.log("oldProps", this.props);
    console.log("newProps", nextProps);
    if (this.props.data.length !== nextProps.data.length) {
      return true;
    }
    return false;
  }

  componentDidMount() {
    // api external logs will go here side effects ......
    console.log("component did mount ");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // component did update will only work with if youhave if cases ...
    // Typical usage (don't forget to compare props):
    // if (prevProps.country !== this.props.count) {
    //   console.log("hello comoponent did update");
    //   // this.setState({
    //   //   hello: "abc",
    //   // });
    // }

    //  real work
    if (snapshot)
      this.wrapperRef.current.scrollTop = this.wrapperRef.current.scrollHeight;
  }

  render() {
    return (
      <>
        <div className="scroller" ref={this.wrapperRef}>
          {this.props.data.map((item) => {
            return <p>{item.content}</p>;
          })}
        </div>
      </>
    );
  }
}

export default ScrollComp;
