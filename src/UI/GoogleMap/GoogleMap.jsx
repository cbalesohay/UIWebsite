import React from 'react'
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps'
import './googlemap.css'

export const GoogleMap = () => {
  const apiMapStyle = {
    maxWidth: '400px',
    height: '500px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '10px'
  }
  const apiPosition = {
    lat: 47.675460,
    lng: -116.795880
  }
  return (
    <>
      {/* Need to switch Google Maps API over to U of I and they need to set up billing (even when free) to get rid of the the tag "For development purpose only" */}
      <APIProvider apiKey={'AIzaSyB2r3mbOX_N88Wp8fvkv_2qMbIHPBhWbBY'}>
          <Map
              style={apiMapStyle}
              defaultCenter={apiPosition}
              defaultZoom={15}
              gestureHandling={'greedy'}
              disableDefaultUI={false}
              responsive
          />
          <Marker position={apiPosition}/>
      </APIProvider>
    </>
  )
}



