import Header from "./components/header";
//import Login from './screens/login'
//import Sos from './screens/sos'
//import Incidents from './screens/incidents'
//import Chat from './screens/chat'

import sosButton from "./components/sosButton";
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import style from "./components/componnetStyle.css"

function App() {
  return (
    <div>
      <Header />
           <img src={sosButton} alt="sosButton" className="center"></img>

    </div>
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
