import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'  // <-- import your Tailwind/global styles
import './components/LoginSignup/LoginSignup.css'
//import App from './App'
import LoginSignup from './components/LoginSignup/LoginSignup'
import Profile from './components/Pages/ProfilePage/Profile'
import Main from './App'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SteamSuccess from "./components/Pages/SteamSuccess";
import Logout from './components/LoginSignup/Logout'

createRoot(document.getElementById('root')!).render(

<BrowserRouter>
    <Routes>
        <Route path="" element={<Main/>}/>
        <Route path="/auth/LoginSignup" element={<LoginSignup/>}/>
        <Route path="/auth/steam/success" element={<SteamSuccess />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/profile/logout" element={<Logout/>} />
    </Routes>
</BrowserRouter>
)
