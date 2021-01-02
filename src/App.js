import React, { Component } from 'react';
import './App.css';
import SearchBar from "./components/search_bar"
import Gif from "./components/gif"

class App extends Component {
	render(){
    return (
      <div>
        <div className="left-scene">
					<SearchBar />
          <div className="selected-gif">
						<Gif id="l0amJzVHIAfl7jMDos"/>
          </div>
        </div>
        <div className="right-scene">
        </div>
      </div>
    );
	}
}

export default App;