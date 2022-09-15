import { Link, NavLink, Route, Routes } from "react-router-dom";
import Animals from "./Animals";
import Bird from "./Bird";
import EditBirdPage from "./Birds/EditBirdPage";
import Parrot from "./Birds/Parrot";
import Mentor from "./Mentor";
import Mermaid from "./Mermaid";
import NotFound from "./NotFound";
import Whale from "./Whale";
import './RoutesApp.css';

function RoutesApp() {
    return(
        <>
            <h1>Main Page</h1>
            <nav>
                <ul>
                    <li><NavLink replace className={({isActive}) => {
                        return isActive ? 'active' : ''
                    }} to="/home">Home </NavLink></li>
                    {/* basic example */}
                    <li><NavLink className={({isActive}) => {
                        return isActive ? 'active' : ''
                    }} to="/whale">Whale </NavLink></li>
                    <li><NavLink className={({isActive}) => {
                        return isActive ? 'active' : ''
                    }} to="/mermaid" reloadDocument>Mermaid </NavLink></li>
                    <li><Link to="/mentor">Mentor </Link></li>
                    {/* <li><Link to="/animals">Animals </Link></li> */}
                    <li><Link to="/animals?type=dog">Animals Dog</Link></li>
                    <li><Link to="/animals?type=lion">Animals Lion</Link></li>
                    <li><NavLink end className={({isActive}) => {
                        return isActive ? 'active' : ''
                    }} to="/birds">Birds Collection</NavLink></li>
                    {/* query params */}


                </ul>
            </nav>

            <p>See all the components down there</p>

            {/* routes -> all the small route  */}
            {/* routes will me matched to the closest pattern  */}
            <Routes>
                
                {/* basic example */}
                
                <Route path="/" element={<h1>Welcome to routes</h1>}/>
                <Route path="/home" element={<h1>Welcome to Home</h1>}/>
                <Route path="/whale" element={<Whale />}/>
                <Route path="/mermaid" element={<Mermaid />}/>
                <Route path="/mentor" element={<Mentor />}/>
                <Route path="/animals" element={<Animals />}/>
                <Route path="/birds" element={<Bird />} >
                    <Route path=":birdId" element={<Parrot />}></Route>
                    <Route path="edit" element={<EditBirdPage />}></Route>
                </Route>

                {/* for path not matching */}
                <Route path="*" element={<NotFound />}/>
                
            </Routes>
        </>
    )
}

export default RoutesApp;