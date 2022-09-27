import { useDispatch, useSelector } from "react-redux";
import { FETCH_USERS } from "./actions/githubAction";

function GithubApp() {

    const uers = useSelector(state => state.users);
    const loading = useSelector(state => state.loading);
    console.log("USERS", uers);
    const dispatch = useDispatch();

    return (
        <>
            <button onClick={() => dispatch(FETCH_USERS("thakurutkarsh22"))}>Click me</button>
            {loading ? "LOADING ......." : ""}

        </>
    )
}

export default GithubApp;