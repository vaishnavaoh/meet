// src/App.js

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
  data: []
  }
  
  componentWillMount(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response=>response.json())
    .then(response=>{ console.log(response) 
      this.setState({data: response}); })
    .catch(err=>console.log(err))  
  }
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;