import './modal.css'
import HomeIcon from '@mui/icons-material/Home';
import EventNoteIcon from '@mui/icons-material/EventNote';
import LogoutIcon from '@mui/icons-material/Logout';


export const Modal = ({modalClassName, setModalClass}) => {

    const goTo = link => {
        console.log(`going to ${link}`)
        setModalClass('modal-container')
    }

    return (
        <div className={modalClassName}>
            <div className="top">
                <div className="name-container">
                    <p>דני דניאל</p>
                </div>
            </div>
            <div className="bottom">
                <div className="links-container">
                    <div onClick={() => goTo('home')} className="link-container">
                        <p>
                            מסך הבית
                        </p>
                        <div className="icon-container">
                            <HomeIcon/>
                        </div>
                    </div>
                    <div className="link-container">
                        <p>
                            אירועים שלי
                        </p>
                        <div className="icon-container">
                            <EventNoteIcon/>
                        </div>
                    </div>
                    <div className="link-container">
                        <p>
                            התנתק
                        </p>
                        <div className="icon-container">
                            <LogoutIcon/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}