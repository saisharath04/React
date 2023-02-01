import React,{Component} from "react";

class App extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
      count: 1
    }
  }

  clickHandler(){
    this.setState(prevState => ({
      count: prevState.count + 1
    }),() => {
      alert('state is updated')
    })
  }

  render(){
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.clickHandler()}>click me</button>
      </>
    );

  }
}
export default App;