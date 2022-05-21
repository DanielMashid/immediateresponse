import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/LoginScreen/loginScreen";
import Sos from "./screens/SosScreen/sosScreen";
import Incidents from "./screens/IncidentsScreen/IncidentsScreen";
import { ChatDemo } from "./components/ChatDemo/ChatDemo";
import Chat from "./screens/ChatScreen/chatScreen";
import { WelcomeScreen } from "./screens/WelcomeScreen/welcomeScreen";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sos" element={<Sos />} />
          <Route path="/incidents" element={<Incidents />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/chat-demo" element={<ChatDemo />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
