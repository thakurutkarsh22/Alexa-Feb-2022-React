import { useNavigate } from "react-router-dom";
function NotFound() {
    const navigate = useNavigate();
    return (
        <>
         <h1>Not found</h1>
         <button onClick={() => navigate('/')}>Go to the Dashboard</button>
        </>
    )
}

export default NotFound;