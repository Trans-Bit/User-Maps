import React from 'react';
import './App.css';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import UberMap from './uber'
import CityPin from './city-pin';
import CityInfo from './city-info';

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={11}
    defaultCenter={{ lat: 12.974922, lng: 77.57733 }}
  >
    {true && <Marker position={{ lat: 12.974922, lng: 77.57733 }} />}
  </GoogleMap>
))

function App(){
  return (
    <div>
  <UberMap/>
  </div>
  );
}

export default App;
