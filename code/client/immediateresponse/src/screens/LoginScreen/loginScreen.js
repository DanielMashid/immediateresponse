import './loginScreen.css'
import UserDetails from "../../components/LoginScreenBody/UserDetails";
import LoginButton from "../../components/Button/button";
import {CssBaseline} from "@mui/material";
import {Link} from "react-router-dom";
import {LoginLogo} from "../../components/LoginLogo/loginLogo";

const LoginScreen = () => {

    return (
        <CssBaseline>
            <div className="login-screen-container">
                <LoginLogo/>
                <UserDetails/>
                <Link to="/sos">
                    <LoginButton/>
                </Link>
            </div>
        </CssBaseline>
    );
};

export default LoginScreen;
