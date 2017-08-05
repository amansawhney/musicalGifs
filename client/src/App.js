import React, { Component } from 'react';
import Picker from 'react-giphy-picker';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
    };
  }
  log(gif) {
    console.log(gif.fixed_width.url);
    var gifArray = this.state.gifs;
    gifArray.push(gif.fixed_width.url);
    this.setState({ gifs: gifArray });
  }

  render() {
    return (
      <div className="App">
        <Picker onSelected={this.log.bind(this)} />
        <h1>
          {this.state.gifs}
        </h1>
      </div>
    );
  }
}

export default App;
