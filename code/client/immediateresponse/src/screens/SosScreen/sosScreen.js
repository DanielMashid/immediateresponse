import React from 'react'
import Header from '../../components/Header/Header'
import { CssBaseline } from '@material-ui/core'
import sosButton from '../../components/SosButton/sosButton'
import SaveAndHoldButton from '../../components/SaveAndHoldButton/saveAndHoldPlaceHolder'
import { Link } from 'react-router-dom'

function sosScreen() {
  return (
        <CssBaseline>
          <Header />
          <div align="center" >
            <Link to="/incidents">
              <img src={sosButton} alt="sosButton"></img>
            </Link>
            <img src={SaveAndHoldButton} alt="SaveAndHoldButton"></img>
          </div>
               
        </CssBaseline>

  )
}

export default sosScreen