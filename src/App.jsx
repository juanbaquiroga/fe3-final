
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Home, Favs, Detail, Contact } from "./Routes"

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/favs" element={<Favs/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/detail/:id" element={<Detail/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
