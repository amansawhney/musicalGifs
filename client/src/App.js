import React, { Component } from 'react';
import Picker from 'react-giphy-picker';
import './App.css';
import SpotifyPlayer from 'react-spotify-player';

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
    const size = {
      width: '100%',
      height: 300,
    };
    const view = 'list'; // or 'coverart'
    const theme = 'black'; // or 'white'
    return (
      <div className="App">
        <SpotifyPlayer
          uri="spotify:album:1TIUsv8qmYLpBEhvmBmyBk"
          size={size}
          view={view}
          theme={theme}
        />
        <Picker onSelected={this.log.bind(this)} />
        <h1>
          {this.state.gifs.map(gif => <img src={gif} alt="gif" />
          )}
        </h1>
      </div>
    );
  }
}

export default App;
