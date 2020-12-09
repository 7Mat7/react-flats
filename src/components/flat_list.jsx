import React, { Component } from 'react';
import flats from '../data/flats';
import Flat from './flat';

class FlatList extends Component {
  static defaultProps = {
    flatList: flats
  }

  render() {
    return (
      <div className="flat-list">
        {this.props.flatList.map((item) => {
          return <Flat
            item={item}
            key={item.lng}
            setMarker={this.props.setMarker}
            selected={item.lat === this.props.coord.lat}
          />;
        })}
      </div>
    );
  }
}

export default FlatList;
