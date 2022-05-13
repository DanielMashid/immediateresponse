import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import {Modal} from "../Modal/modal";
import './Header.css'

const Header = ({title}) => {

    const [modalClassName, setModalClass] = React.useState(false)

    return (
        <section className="app-header">
            <p className="header-title">{title}</p>
            <MenuIcon fontSize="large" className="hamburger" onClick={() => {
                setModalClass(!modalClassName)
            }}/>
            <Modal modalClassName={modalClassName} setModalClass={setModalClass}/>
        </section>
    );

};

export default Header