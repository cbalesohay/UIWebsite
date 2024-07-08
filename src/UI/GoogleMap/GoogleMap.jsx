import React from 'react'
import {APIProvider, Map} from '@vis.gl/react-google-maps'
import './googlemap.css'

export const GoogleMap = () => {
  return (
    <>
        {/* Need to switch Google Maps API over to U of I and they need to set up billing (even when free) to get rid of the the tag "For development purpose only" */}
        <APIProvider apiKey={'AIzaSyB2r3mbOX_N88Wp8fvkv_2qMbIHPBhWbBY'}>
            <Map
                style={{width: '400px', height: '400px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '5px'}}
                defaultCenter={{lat: 47.675460, lng: -116.795880}}
                defaultZoom={15}
                gestureHandling={'greedy'}
                disableDefaultUI={false}
            />
        </APIProvider>
    </>
  )
}
