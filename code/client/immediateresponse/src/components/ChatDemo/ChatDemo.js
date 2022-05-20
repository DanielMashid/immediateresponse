import Header from "../../components/Header/Header";
import Avatar from "@material-ui/core/Avatar";
import {Link} from "react-router-dom";


import './ChatDemo.css'
import React from "react";

export const ChatDemo = () => {
    const user = {fullName: "דניאל משהיד"}
    const getInitials = str => {
        let [firstname, lastname] = str.split(' ')
        return `${firstname.charAt(0)}.${lastname.charAt(0)}`
    }

    const initials = getInitials(user.fullName)
    console.log(user)
    console.log(initials)


    return (
        <section className="chat-screen-container">
            <Header title={"צא'ט אונליין"}/>
            <div className="btn-end-container">
                <Link to="/sos">
                    <button className="end-btn">סיום אירוע</button>
                </Link>
            </div>
            <div className="container">
                <div className="chat-container">
                    <p> צ’אט זה נועד לניהול אירועי חירום.
                        נא לשלוח הודעות קצרות וממוקדות
                        על מנת שנוכל להימנע משיח מיותר.</p>
                </div>
                <div className="chat-content">
                    <div className="msg msg-receive">
                        <Avatar
                            className='avatar-chat'
                        >{initials}</Avatar>
                        <div className="content-container">
                            <p className="content">
                                צוות החירום קיבל את הקריאה שלך, ליאור
                                אנחנו יוצאים לטפל בתקלה.
                                כולם להתרחק מהאזור.
                            </p>
                        </div>

                    </div>
                    <div className="msg msg-send">
                        <Avatar
                            className='avatar-chat'
                        >{initials}</Avatar>
                        <div className="content-container">
                            <p className="content">
                                צוות החירום קיבל את הקריאה שלך, ליאור
                                אנחנו יוצאים לטפל בתקלה.
                                כולם להתרחק מהאזור.
                            </p>
                        </div>

                    </div>

                </div>
                <div className="chat-bar">
                    <Link to="/chat">

                        <button className="btn-link">
                            <h1>Go To Chat</h1>
                        </button>
                    </Link>

                </div>
            </div>

        </section>
    )
}
