import HeaderLogin from "../../components/HeaderLogin/HeaderLogin";
import UserDetails from "../../components/LoginScreenBody/UserDetails";
import ImmediateResponseImg from "../../components/ImmediateResponseImg/ImmediateResponseImg";
import LoginButton from "../../components/Button/button";
import {CssBaseline} from "@mui/material";
import {Link} from "react-router-dom";

const LoginScreen = () => {
    return (
        <CssBaseline>
            <HeaderLogin/>
            <UserDetails/>

            <Link to="/sos">

                <LoginButton/>

            </Link>

            <ImmediateResponseImg/>
        </CssBaseline>
    )
}

export default LoginScreen