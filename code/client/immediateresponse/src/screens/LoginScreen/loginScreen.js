import HeaderLogin from "../../components/HeaderLogin/HeaderLogin";
import UserDetails from "../../components/LoginScreenBody/UserDetails";
import ImmediateResponseImg from "../../components/ImmediateResponseImg/ImmediateResponseImg";
import LoginButton from "../../components/Button/button";

const LoginScreen = () => {
    return (
        <div>
            <HeaderLogin/>
            <UserDetails/>
            <LoginButton/>
            <img src={ImmediateResponseImg } alt="sosButton" className="center"></img>
        </div>
    )
}

export default LoginScreen