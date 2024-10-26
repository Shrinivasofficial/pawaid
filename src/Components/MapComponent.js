import { GoogleMap } from '@react-google-maps/api'
import React from 'react'
//
import {Map, GoogleApiWrapper} from '@react-google-maps/api'
import { MapContainer } from 'react-leaflet'

export const MapComponent = () => {
  return (
    <div>
        <Map
            google = {this.props.google}
            style = {{width: "100%", height: "100%"}}
            zoom = {10}
            initialCenter = {
                {
                    lat: 9.9252,
                    long: 78.1198
                }
            }
            />
    </div>
  )
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyA-v9nZREgHNwfRInZbDMBrk-cQMx0TRpc"
}) (MapContainer);
