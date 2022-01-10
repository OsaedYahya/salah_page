import React from "react";

import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Circle,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAZUJQ0hCJGybGO0ynGd88tqUS8--Ge8ME&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%`, top: 55 }} />,
    containerElement: <div style={{ height: `400px`, top: 55 }} />,
    mapElement: <div style={{ height: `100%`,top: 55 }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  const center = {
    lat: -3.745,
    lng: -38.523
  }
  const options = {
    strokeColor: 'rgb(252, 116, 58)',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: 'rgb(252, 116, 58)',
    fillOpacity: 0.1,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 1000,
    zIndex: 1
  }

  return (
    <GoogleMap defaultZoom={14} defaultCenter={center}>
        <Marker position={center}/>
      <Circle
        // required
        center={center}
        // required
        options={options}
      />
    </GoogleMap>
  )
});

export default MyMapComponent;
