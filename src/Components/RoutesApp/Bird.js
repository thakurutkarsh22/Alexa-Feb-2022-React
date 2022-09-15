import { Link, NavLink, Outlet } from "react-router-dom";

function Bird() {
    return (
        <>
            <div>Bird List</div>
            <nav>
                <li><NavLink className={({isActive}) => {
                        return isActive ? 'active' : ''
                    }} to="/birds/parrot">Parrot</NavLink></li>
                <li><NavLink className={({isActive}) => {
                        return isActive ? 'active' : ''
                    }} to="/birds/edit">Edit</NavLink></li>
            </nav>
            <Outlet />
        </>
    )
}

export default Bird;