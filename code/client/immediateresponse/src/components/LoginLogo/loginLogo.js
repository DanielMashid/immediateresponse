import logo from "../assets/LoginLogo.png"

export const LoginLogo = () => {
    return (
        <div className="img-container">

            <img className="login-logo-img" src={logo}/>
            <h1>תגובה מיידית</h1>
            <p>הזן את מספר הארגון ואת מספר הזהות שלך</p>
        </div>

    )
}