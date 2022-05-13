import React from 'react'
import Header from '../../components/Header/Header'
import {CssBaseline} from '@material-ui/core'
import {Link} from 'react-router-dom'
import {SosButton} from "../../components/SosButton/SosButton";
import './sosScreen.css'

const sosScreen = () => {
    return (
        <CssBaseline>
            <Header title="דף הבית"/>
            <div
                className="sos-page"
            >
                <Link to="/incidents">
                    <SosButton/>
                </Link>
            </div>
            <SosButton/>
        </CssBaseline>
    )
}

export default sosScreen;


