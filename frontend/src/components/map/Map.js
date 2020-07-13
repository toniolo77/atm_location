import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import GreenIcon from '../../assets/images/green_icon.png';

const mapStyles = {
    width: '100%',
    height: '100%'
  };

  const containerStyle = {
    width: '100%',
    height: '400px'
  }

const MapContainer = (props) => {
    
    //List of markers 
    let listMarker= null;
    if (props.map_data.markers.length > 0) {
        listMarker = props.map_data.markers.map( m => (
                <Marker
                    title= {`${m.banco} - ${m.ubicacion} `}
                    name={m.banco}
                    position={{lat: parseFloat(m.lat.$numberDecimal), lng: parseFloat(m.long.$numberDecimal)}}
                    id={m.id_app}
                    key={m.id_app}
                    onClick={props.markerClicked}
                />
            )
        )
    }

    //Your Position
    let yourMarker= null;
    if (props.map_data.your_marker.isSet){
        yourMarker = <Marker
                    name= {'Tu posicion'}
                    position= {props.map_data.your_marker.coord}
                    icon={{
                        url: GreenIcon,
                        anchor: new props.google.maps.Point(24,24),
                        scaledSize: new props.google.maps.Size(48,48)
                      }}
                    />
    }

    //Marker details
    let infoWindow= null;
    if (props.map_data.info_window.visible) {
        infoWindow = <InfoWindow
                        marker={props.map_data.info_window.active_marker}
                        visible={props.map_data.info_window.visible}>
                        <div>
                            <h3>{props.map_data.info_window.text}</h3>
                        </div>
                    </InfoWindow>
    }


    return (
        <Map
            google={props.google}
            zoom={14}
            containerStyle={containerStyle}
            style={mapStyles}
            initialCenter={props.map_data.center}
            center={props.map_data.center}
            onClick={props.mapClicked} 
            
        >
            {yourMarker}
            {listMarker}
            {infoWindow}
        </Map>
    );
};

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_MAP_KEY
  })(MapContainer);