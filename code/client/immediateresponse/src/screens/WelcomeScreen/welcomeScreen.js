import red from '../../components/assets/red.png'
import redDark from '../../components/assets/redDark.png'
import whiteRec from '../../components/assets/whiteRec.png'
import logo from '../../components/assets/LoginLogo.png'
import text from '../../components/assets/text.png'
import textSmall from '../../components/assets/text2.png'
import redRec from '../../components/assets/redRec.png'
import {Link} from 'react-router-dom'
import './welcomeScreen.css'

export const WelcomeScreen = () => {

    const images = [{className: 'red-rec', img: redRec},
        {className: 'logo', img: logo},
        {className: 'red', img: red},
        {className: 'dark-red', img: redDark},
        {className: 'white-rec', img: whiteRec},
        {className: 'text', img: text},
        {className: 'text-small', img: textSmall},
    ]
    return (
        <Link to="/login">
            <section className="welcome-screen-container">
                {images.map(img => <img key={img.className} className={img.className} src={img.img}/>)}
            </section>
        </Link>
    )
}
