import React, { Component } from 'react';
import './App.css';
import SearchBar from "./components/search_bar";
import Gif from "./components/gif";
import GifList from './components/git_list';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gifs: [],
      selectedGif: "l0amJzVHIAfl7jMDos",

    }
  }

  search = (query) => {

  }

	render(){
    return (
      <div>
        <div className="left-scene">
					<SearchBar />
          <div className="selected-gif">
						<Gif id={this.state.selectedGif}/>
          </div>
        </div>
        <div className="right-scene">
					<GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
	}
}

export default App;