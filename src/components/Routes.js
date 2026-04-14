import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoHome from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/VideoHome/VideoHome.js';
import { Link } from "react-router-dom";



function About() {
    return <h1>About</h1>;
}

function AppRoutes() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<VideoHome />} />
                <Route path="#about" element={<About />} />
                <Route path="home" element={<VideoHome />} />
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;