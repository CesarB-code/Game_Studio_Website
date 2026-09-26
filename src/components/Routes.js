import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoHome from './pages/VideoHome/VideoHome.js';
import About from './pages/About/About.js';
import Events from './pages/Events/Events.js';
import Profile from './pages/Profile/Profile.js';
import TeamMembers from './pages/TeamMember/TeamMembers.js';
import Store from './pages/Store/Store.js';
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