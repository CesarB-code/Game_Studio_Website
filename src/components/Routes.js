import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoHome from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/VideoHome/VideoHome.js';
import About from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/About/About.js';
import Events from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/Events/Events.js';
import Profile from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/Profile/Profile.js';
import TeamMembers from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/TeamMember/TeamMembers.js';
import Store from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/Store/Store.js';
function AppRoutes() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<VideoHome />} />
                <Route path="about" element={<About />} />
                <Route path="home" element={<VideoHome />} />
                <Route path="teamMembers" element={<TeamMembers />} />
                <Route path="profile" element={<Profile />} />
                <Route path="events" element={<Events />} />
                <Route path="store" element={<Store />} />



            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;