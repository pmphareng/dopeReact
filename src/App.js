import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      name: "",
    }
    this.setName = this.setName.bind(this);
  }

  setName(e){
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <form>
          <div className="form-inline">
            <p>Enter Name: </p>
            <input type="text" id="name" onChange={this.setName} />
          </div>
        </form>
        <div style={{"margin":"20px"}}>
          Your name is: {this.state.name}
        </div>
      </div>
    );
  }
}

export default App;
