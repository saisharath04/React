import React, { Component } from "react";

class Parent extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   name: "sai",
    //   age: 23,
    // };
    console.log("Parent constructor");
  }

  static getDerivedStateFromProps() {
    console.log("Parent - getDerivedStatesFromProps");
    // this.setState = {
    //   name: props.name,
    //   age: props.age,
    // };
    return null
  }

  componentDidMount(){
    console.log("parent - componentDidMount");
  }

  render() {
    console.log("parent - render");
    return (
      <>
        <h1>Parent</h1>
      </>
    );
  }
}

export default Parent;
