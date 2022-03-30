import Header from "./components/Header/Header";
//import Login from './screens/login'
//import Sos from './screens/sos'
//import Incidents from './screens/incidents'
//import Chat from './screens/chat'

import sosButton from "./components/SosButton/sosButton";
import {Box, CssBaseline} from '@mui/material';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import style from "./components/assets/Img.css"
import IncidentsScreen from "./screens/IncidentsScreen/IncidentsScreen";
import HeaderLogin from "./components/HeaderLogin/HeaderLogin";
import LoginScreen from "./screens/LoginScreen/loginScreen";


function App() {
    return (
        // <CssBaseline>
        //   <Header />
        //        <img src={sosButton} alt="sosButton" className="center"></img>
        // </CssBaseline>

        // <CssBaseline>
        //     <Header />
        //   <IncidentsScreen/>
        // </CssBaseline>

        <CssBaseline>
            <LoginScreen />
            <img src={sosButton} alt="sosButton" className="center"></img>
        </CssBaseline>
    );
}

//working on it
//   <Box>
//   <BrowserRouter>
//       {options && <Options setOptions={setOptions}></Options>}
//       <TopNav setOptions={setOptions}/>
//       <Routes>
//           <Route path="/login" element={<Login />}/>
//           <Route path='sos' element={<Sos />}/>
//           <Route path='/incidents' element={<Incidents />} />
//           <Route path="/chat" element={<Chat />}/>
//       </Routes>
//   </BrowserRouter>
// </Box>


export default App;
