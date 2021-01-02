import React, { Component } from 'react';
import './App.css';
import SearchBar from "./components/search_bar";
import Gif from "./components/gif";
import GifList from './components/git_list';

class App extends Component {
	render(){

    const gifs = [
      { id: "l0amJzVHIAfl7jMDos" },
      { id: "l0amJzVHIAfl7jMDos" }
    ];
  

    return (
      <div>
        <div className="left-scene">
					<SearchBar />
          <div className="selected-gif">
						<Gif id="l0amJzVHIAfl7jMDos"/>
          </div>
        </div>
        <div className="right-scene">
					<GifList gifs={gifs} />
        </div>
      </div>
    );
	}
}

export default App;