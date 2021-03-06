import React, { Component } from "react";
import { connect } from "react-redux";
import "./GoogleMap.css";

import { authorize } from "passport";

class GoogleMap extends Component {
  render() {
    let googlekey = process.env.REACT_APP_GOOGLE_MAPS_NOT_STATIC_API_KEY;
    let mapToSearch = this.props.state.mapToSearch;
    let searchTerm = this.props.state.searchTerm;
    let host = this.props.state.mapToSearch.hosts;
    let street = this.props.state.mapToSearch.street;
    let zipcode = this.props.state.mapToSearch.zipcode;
    let mapSource = `https://www.google.com/maps/embed/v1/place?key=${googlekey}
    &q=${street}+${zipcode}&zoom=14`;
    let homeBase = `https://www.google.com/maps/embed/v1/place?key=${googlekey}
    &q=Gifts for Seniors 2300 Kennedy Street NE Suite 40 Mpls MN 55413&zoom=10`;
    switch (mapToSearch.street) {
      case "2300 Kennedy Street":
        return (
          // RENDER A DEFAULT MAP WITH GIFTS FOR SENIORS LOCATION
          <div ref={this.props.mapRef} className="map">
            <iframe
              className="maperoo"
              width="auto"
              height="400"
              zoom="2"
              frameborder="0"
              style={{ border: 0, margin: "auto" }}
              src={homeBase}
              allowfullscreen
            ></iframe>
          </div>
        );
      default:
        return (
          // RENDER A MAP WITH EITHER THE FIRST MAP IN SEARCH-QUERY OR FROM BarrelClient Barrel CLICK
          <div ref={this.props.mapRef} className="map">
            <iframe
              className="maperoo"
              width="auto"
              height="400"
              zoom="2"
              frameborder="0"
              style={{ border: 0, margin: "auto" }}
              src={mapSource}
              allowfullscreen
            ></iframe>
          </div>
        );
    }
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(GoogleMap);
