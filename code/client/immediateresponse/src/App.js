import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './screens/LoginScreen/loginScreen';
import Sos from './screens/SosScreen/sosScreen'
import Incidents from './screens/IncidentsScreen/IncidentsScreen'
import Chat from './screens/ChatScreen/chatScreen'

const App = () => {
    return (

        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/sos" element={<Sos/>}/>
                    <Route path="/incidents" element={<Incidents/>}/>
                    {/*<Route path="/chat" element={<Chat />}/>*/}
                </Routes>
            </Router>

        </div>

    );
}

export default App;
