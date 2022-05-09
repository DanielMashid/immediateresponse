import './modal.css'
import HomeIcon from '@mui/icons-material/Home';
import EventNoteIcon from '@mui/icons-material/EventNote';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar'


export const Modal = ({modalClassName, setModalClass}) => {

    const modalClass = modalClassName ? 'modal-container open' : 'modal-container'

    return (
        <div className={modalClass}>
            <div className="top flex column">
                <div className="name-container">
                    <Avatar
                        src={'https://www.w3schools.com/howto/img_avatar.png'}
                        sx={{
                            width: 43,
                            height: 43
                        }}
                    >
                    </Avatar>
                </div>
                <p className="user-name">ליאור כהן</p>
                <p className="user-role">ממונה בטיחות, אינטל</p>
            </div>
            <div className="bottom">
                <div className="links-container">
                    <div className="link-container">
                        <p>
                            אירועים שלי
                        </p>

                    </div>
                    <div className="link-container">
                        <p>
                             משימות בחירום
                        </p>

                    </div>
                    <div className="link-container">
                        <p>
                             טלפונים חשובים
                        </p>

                    </div>
                    <div className="link-container">
                        <p>
                            Language
                        </p>

                    </div>
                    <Link to="/">

                    <div  onClick={() => {
                        setModalClass(!modalClassName)
                    }} className="link-container">
                        <p>התנתק</p>
                    </div>
                    </Link>

                </div>
            </div>

        </div>
    )
}