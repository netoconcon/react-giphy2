import React, { Component } from 'react';
import Gif from './gif'

class GifList extends Component {
  render() {
    return (
      <div className="giflist">
        {this.props.gifs.map((gif) => { return <Gif id={gif.id} key={gif.id} />})}
      </div>
     
    );
  }
}

export default GifList;