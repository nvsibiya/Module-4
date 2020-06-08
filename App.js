import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Snippet.jsx';

//CONSTRUCTOR gets 
//RENDER
//COMPONENTDIDMOUNT
//COMPONENTDIDUPDATE
//COMPONENTWILLUNMOUNT

class App extends Component {

  state = {
    test:''
  }

  componentDidMount = async () => {
    console.log("COMPONENTDIDMOUNT METHOD") //PERFECT FOR ASYNC CALLS
  }

  buttonClick = () => {
    this.setState({
      test: "something",
      show: !this.state.show
    })
  }

  componentDidUpdate = () => {
    console.log("COMPONENTDIDUPDATE")
    if (this.state.test !=='something else'){
      this.setState({
        test: this.state.test + ' else'
      })
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button type="button" onClick={this.buttonClick}>PRESS ME</button>
          {this.state.show && <Snippet title="Hello" />}
        </header>
      </div>
    );
  }
}

export default App;
