import {BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Contact from "./components/ContactUs/Contact";






function PageRoutes()
{
    return(
<BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/contactus" element={<Contact/>}/>
        </Routes>
    </BrowserRouter>
    )
    
}

export default PageRoutes;