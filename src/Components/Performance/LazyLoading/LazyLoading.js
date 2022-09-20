import { NavLink, Route, Routes } from "react-router-dom";
import Mermaid from "./Mermaid";
import NotFound from "./NotFound";
import Whale from "./Whale";
import './RoutesApp.css';
import React, { Suspense } from "react";


const Mermaidlazy = React.lazy(() => import('./Mermaid'));
const WhaleLazy = React.lazy(() => import('./Whale'));
const NotFoundLazy = React.lazy(() => import('./NotFound'));


function LazyLoading() {

    return(
        <>
            <h1>Main Page</h1>
            <nav>
                <ul>

                    <li><NavLink className={({isActive}) => {
                        return isActive ? 'active' : ''
                    }} to="/whale">Whale </NavLink></li>
                    <li><NavLink className={({isActive}) => {
                        return isActive ? 'active' : ''
                    }} to="/mermaid" >Mermaid </NavLink></li>


                </ul>
            </nav>

            <p>See all the components down there</p>
            <Suspense fallback={<h1>Loading .... / fetching ...... /</h1>}>
                <Routes>
                    <Route path="/" element={<h1>Welcome to routes</h1>}/>
                    <Route path="/whale" element={WhaleLazy}/>
                    <Route path="/mermaid" element={Mermaidlazy}/>
                    <Route path="*" element={NotFoundLazy}/>
                    
                </Routes>
            </Suspense>
        </>
    )
}

export default LazyLoading;