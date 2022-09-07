import { Component } from "react";

// this error boundary has to be a class and it should implement getDerivedStateFromError or componentDidCatch or both ...
class ErrorBoundadry extends Component {
  constructor(props) {
    // the necessary call
    super(props);
    this.state = { error: false, errorInfo: false };
  }

  static getDerivedStateFromError(error) {
    //  we do not do any side effects
    console.log("getDerivedStateFromError", error);
    return { error: true };
  }

  componentDidCatch() {
    // log: send analytics --> api
    // side effects
  }

  render() {
    if (this.state.error) {
      return (
        <>
          <h1>We Find an Error</h1>
          <p>Reaload the app</p>
        </>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundadry;
