import React, { Component } from 'react';
import axios from 'axios';
import MapContainer from '../../components/map/Map';
import AtmForm from '../atm-form/AtmForm';
import CustomModal from '../../components/custom-modal/CustomModal';
import { Row, Col } from 'react-bootstrap';
import styles from './HomeContainer.module.scss';

const LAT_DEFAULT= -34.5814551;
const LNG_DEFAULT= -58.4211107;
const BASE_URL_API= 'http://localhost:3000';

class HomeContainer extends Component {

    state = {
        data: {
            atm: 'BANELCO',
            latitude:"",
            longitude: ""
        },
        map: {
            center: {
                lat: LAT_DEFAULT,
                lng: LNG_DEFAULT
            },
            markers: [],
            info_window: {
                active_marker: undefined,
                visible: false,
                text:""
            },
            your_marker: {
                isSet: false,
                coord: {
                    lat: undefined,
                    lng: undefined
                }
            }
        },
        modal:{
            show: false,
            title: "",
            body: ""
        }
    }


    /////////////////////////
    ///// Form Methods//////
    /////////////////////////

    
    handleSubmit = (event) => {
        event.preventDefault();
        axios.get(BASE_URL_API + '/cajeros?red='+ this.state.data.atm + '&longitude='+ this.state.data.longitude + '&latitude=' + this.state.data.latitude).then( result =>  {
            if (result.data.res.length > 0){
                let new_map= {...this.state.map};
                new_map.markers= [...result.data.res];
                this.setState({map: new_map});
            } else {
                this.handleOpenModal("No hay cajeros","Para la ubicación seleccionada no existen cajeros automáticos cercanos");
            }
        }, error => {
                this.handleOpenModal("Error","No se pudo obtener los datos");
            }   
        )
    }

    //Update the form
    handleChangeInputs = (event) => {
        let new_data= {...this.state.data };
        new_data[event.target.name]=event.target.value;
        this.setState({data: new_data});
    }

    /////////////////////////
    ///// Maps Methods//////
    /////////////////////////

    
    //Get the current location and update the map 
    getCoord = (event) => {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition( position =>  {
                this.updatePosition({lat:position.coords.latitude,lng:position.coords.longitude},true);
            },
            error => {
                this.handleOpenModal("Error","No se ha podido obtener la ubicación");
            }
          );
    }

    /**
     * Complete the user position 
     * @param coords Object(lat:number,lng:number
     * @param center_map [boolean] conditional if update the center of the map
     */
    updatePosition = (coords,center_map=false) => {
        let new_position= {...coords};
        let new_state= {...this.state};
        new_state.data.latitude= new_position.lat;
        new_state.data.longitude= new_position.lng;
        new_state.map.your_marker.isSet= true;
        new_state.map.your_marker.coord= new_position;
        if (center_map ) new_state.map.center=new_position;
        this.setState(new_state);
        
    }
    
    //Change the user position in the map
    handleClickMap = (mapProps, map, clickEvent)  => {
        let coord= {
                    lat: clickEvent.latLng.lat(),
                    lng: clickEvent.latLng.lng()
                }
        this.updatePosition(coord);
    }



    //Show the marker info 
    handleClickMarker = (props, marker, e) => {
        let new_map= {...this.state.map};
        let new_info= {
            active_marker: marker,
            visible: true,
            text: props.title
        }
        new_map.info_window = new_info;
        this.setState({map:new_map});
    }
    
    /////////////////////////
    ///// Modal Methods//////
    /////////////////////////


    //Close the modal
    handleCloseModal = () => {
        let new_modal= {...this.state.model}
        new_modal= false;
        this.setState({modal: new_modal});
    }

    /**
     * Open the modal
     * @param title [string]
     * @param body [string]
     */
    handleOpenModal = (title,body) => {
        let new_modal= {show:true,title: title, body: body };
        this.setState({modal: new_modal});
    }

    render() {
        return (
            <Row className={styles.contentAtm}>
                <Col sn={12} md={6} className={styles.element}>
                    <AtmForm data={this.state.data} changeForm={this.handleChangeInputs} sendForm={this.handleSubmit} getCoord={this.getCoord} />
                </Col>
                <Col sn={12} md={6} className={styles.element}>
                    <MapContainer markerClicked={this.handleClickMarker} mapClicked={this.handleClickMap} map_data={this.state.map}/>
                </Col>
                <CustomModal handleClose={this.handleCloseModal} data={this.state.modal}></CustomModal>
            </Row>
        )
    }
}


export default HomeContainer;