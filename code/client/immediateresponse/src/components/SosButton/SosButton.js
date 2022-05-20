import "./SosButton.css"
import SosButtonImg from "../assets/SosButton.png"
import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";

export const SosButton = () => {
    const [sosClass, setSosClass] = useState('sos-container')
    const navigation = useNavigate();
    let counter = 4;
    let fixedinterval = useRef(null)

    const [ms, setMs] = useState(counter);

    useEffect(() => {
        if (ms === 0) {
            clearInterval(fixedinterval.current);
            setMs(0)
            timer(false);
            navigation('/incidents')
        }
    }, [ms])

    const timer = (start) => {
        console.log('tick took');
        console.log(start);
        if (start === true && counter <= 4 && ms > 0) {
            fixedinterval.current = setInterval(() => {
                setMs(counter); // When I remove this, the infinite loop disappears.
                counter -= 1;
                //@ts-ignore
            }, [1000]);
        } else {
            setMs(0);
        }
    };

    const pressingDown = (e) => {
        if (e.changedTouches.length > 1) e.preventDefault();
        setSosClass('sos-container pressed')
        counter = 4;
        timer(true);
    };

    const notPressingDown = (e) => {
         e.preventDefault();
        console.log('stop');
        setSosClass('sos-container')
        timer(false);
        setMs(4);
        clearInterval(fixedinterval.current);
    };

    return (
        <div
            className={sosClass}
            onMouseDown={pressingDown}
            onMouseUp={notPressingDown}
            onTouchStart={pressingDown}
            onTouchEnd={notPressingDown}
        >
            <p className='timer'>00:0{ms}</p>
            <img className="sos-img" src={SosButtonImg}/>
        </div>
    )
}