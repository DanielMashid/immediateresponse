import './modal.css'
import HomeIcon from '@mui/icons-material/Home';
import EventNoteIcon from '@mui/icons-material/EventNote';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar'


export const Modal = ({modalClassName, setModalClass}) => {


    return (
        <div className={modalClassName}>
            <div className="top">
                <div className="name-container">
                    <Avatar
                        src={'https://www.w3schools.com/howto/img_avatar.png'}
                        sx={{
                            width: 43,
                            height: 43
                        }}
                    >
                    </Avatar>
                    <p>דני דניאל</p>
                </div>
            </div>
            <div className="bottom">
                <div className="links-container">
                    <Link to="/sos">
                    <div onClick={() => {
                        setModalClass('modal-container')
                    }} className="link-container">
                        <p>מסך הבית</p>
                        <div className="icon-container">
                            <HomeIcon/>
                        </div>
                    </div>
                    </Link>
                    <div className="link-container">
                        <p>
                            אירועים שלי
                        </p>
                        <div className="icon-container">
                            <EventNoteIcon/>
                        </div>
                    </div>
                    <Link to="/">


                    <div onClick={()=> {
                        setModalClass('modal-container')

                    }} className="link-container">
                        <p>
                            התנתק
                        </p>
                        <div className="icon-container">
                            <LogoutIcon/>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>

        </div>
    )
}