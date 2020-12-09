import React, { Component } from 'react';

import SimpleMap from './map';
import FlatList from './flat_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      marker: {
        lat: null,
        lng: null
      }
    };
  }

  setMarker = (coord) => {
    this.setState({ marker: coord });
  }

  render() {
    return (
      <div>
        <FlatList setMarker={this.setMarker} />
        <div className="map-container">
          <SimpleMap center={this.state.center} coord={this.state.marker} />
        </div>
      </div>
    );
  }
}

export default App;
