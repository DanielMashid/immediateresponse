import React, {useState} from 'react'
import Header from '../../components/Header/Header'
import {CssBaseline} from '@material-ui/core'
import sosButton from '../../components/SosButton/sosButton'
import SaveAndHoldButton from '../../components/SaveAndHoldButton/saveAndHoldPlaceHolder'
import {Link} from 'react-router-dom'


    // $('location-button').click(function () {
    //     if(navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(function (position) {
    //             console.log(position);
    //             $.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude+"," + position.coords.longitude + "&sensor=false", function (data) {
    //                 console.log(data);
    //             })
    //             let img = new Image();
    //             img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + position.coords.latitude+"," + position.coords.longitude + "&zoom=13&size=800x400&sensor=false";
    //             $('output').html(img);
    //         });
    //     }
    //
    // });
        
    



const sosScreen = () => {
    return (
        <CssBaseline>
            <Header/>
            <div align="center">
                <Link to="/incidents">
                    <img src={sosButton} alt="sosButton"></img>
                </Link>
                <img src={SaveAndHoldButton} alt="SaveAndHoldButton"></img>
            </div>

        </CssBaseline>

    )
}

export default sosScreen