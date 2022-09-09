import { useEffect, useState } from "react";

function Movie() {

    const [searchItem ,setSearchItem] = useState("");
    const [showList, setShowList] = useState([]);
    const [loading, setLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        const val = e.target.elements.searchBox.value;
        console.log("value", val, e);
        setSearchItem(val)
    }

    // fake the mock API
    // sleep 
    function sleep(time) {
        const promise = new Promise((res, rej) => {
            setTimeout(() => res(), time)
        })
        return promise;
    } 
    async function getTheMovies(searchTerm) {
        await sleep(3000);
        const url = `https://api.tvmaze.com/search/shows?q=${searchTerm}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data, "data");
        setShowList(data);
    }

    useEffect(() => {
        
        (async () => {
            setLoading(true)
            await getTheMovies(searchItem) // 3 seconds
            setLoading(false)
        })();

    }, [searchItem]);

    function displayShowUi() {
        return showList && showList?.map(showObj => {
            return (
                <>
                    <div>Name: {showObj.show.name}</div>
                    <div>Runtime: {showObj.show.runtime}</div>
                </>
            )
        })
    }

    return (
        <>
            <h1>Enter the TV show name</h1>

            <form onSubmit={handleSubmit}>
                <input name="searchBox" type={"text"} placeholder="ENTER THE MOVIE NAME"/>
                <button type="submit">Submit</button>
            </form>

            {/* result list */}
            {!loading &&<div>{displayShowUi().length ? displayShowUi() : <>No results found</>}</div>}
            {loading && <div>Loading .... . .... .... .... </div>}
        </>
    );
}

export default Movie;