import React, { Component } from 'react';

class Flat extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
      this.props.setMarker({ lat: this.props.item.lat, lng: this.props.item.lng });
  }

  render() {
    return (
      <div className="card" onClick={this.handleClick}>
        <img src={this.props.item.imageUrl} alt="" />
        <div className="card-category">
          {this.props.item.price} {this.props.item.priceCurrency}
        </div>
        <div className="card-description">
          <h2>{ this.props.item.name }</h2>
        </div>
        <div className="card-link"></div>
      </div>
    );
  }
}

export default Flat;
