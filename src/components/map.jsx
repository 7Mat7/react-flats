import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = () => <div className="marker"></div>;

class SimpleMap extends Component {
  static defaultProps = {
    zoom: 11,
    center: {
        lat: 48.8534,
        lng: 2.3488
      }
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBlwYQ4L3Ncvx3WjKN_o-49WWd_eFQNdFs' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.coord.lat}
            lng={this.props.coord.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
