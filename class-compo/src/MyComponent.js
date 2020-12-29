import React, { Component } from "react";

class MyComponent extends Component {
  state = {
    value: 0
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.value !== nextProps.value) {
      return {
        value: nextProps.value
      };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, prevState) {
    if (nextProps.value === 10) return false;
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.value !== prevProps.value) {
      console.log("value값 바뀜", this.props.value);
    }
  }

  componentWillUnMount() {
    console.log("Good Bye");
  }

  render() {
    return (
      <div>
        <p>props: {this.props.value}</p>
        <p>state: {this.state.value}</p>
      </div>
    );
  }
}

export default MyComponent;
