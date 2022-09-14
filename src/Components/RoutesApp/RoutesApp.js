import { Link, Route, Routes } from "react-router-dom";
import Animals from "./Animals";
import Mentor from "./Mentor";
import Mermaid from "./Mermaid";
import NotFound from "./NotFound";
import Whale from "./Whale";

function RoutesApp() {
    return(
        <>
            <h1>Main Page</h1>
            <nav>
                <ul>
                    {/* basic example */}
                    <li><Link to="/whale">Whale </Link></li>
                    <li><Link to="/mermaid">Mermaid </Link></li>
                    <li><Link to="/mentor">Mentor </Link></li>
                    {/* <li><Link to="/animals">Animals </Link></li> */}
                    <li><Link to="/animals?type=dog">Animals Dog</Link></li>
                    <li><Link to="/animals?type=lion">Animals Lion</Link></li>
                    {/* query params */}


                </ul>
            </nav>

            <p>See all the components down there</p>

            {/* routes -> all the small route  */}
            {/* routes will me matched to the closest pattern  */}
            <Routes>
                {/* basic example */}
                
                <Route path="/" element={<h1>Welcome to routes</h1>}/>
                <Route path="/whale" element={<Whale />}/>
                <Route path="/mermaid" element={<Mermaid />}/>
                <Route path="/mentor" element={<Mentor />}/>
                <Route path="/animals" element={<Animals />}/>


                {/* for path not matching */}
                <Route path="*" element={<NotFound />}/>
                
            </Routes>
        </>
    )
}

export default RoutesApp;