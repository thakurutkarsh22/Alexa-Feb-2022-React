export const ERROR_ACTION = (val) => {
    return {
        type: "ERROR",
        payload: val,
    }
}
export const LOADING_IN_PROGRESS_ACTION = (val) => {
    return {
        type: "LOADING_IN_PROGRESS",
        payload: val,
    }
}

export const LOADING_SUCCESS = (val) => {
    return {
        type: "LOADING_SUCCESS",
        payload: val,
    }
}

const FETCH_USERS_ACTION = (val) => {
    return {
        type: "FETCH_USERS",
        payload: val,
    }
}

export const CLEAR_ACTION = () => {
    return {
        type: "CLEAR",
    }
}


//  my action creator ..... 

export const FETCH_USERS = (userName = 'thakurutkarsh22') => {
    return (dispatch, state) => {
        dispatch(CLEAR_ACTION());
        dispatch(LOADING_IN_PROGRESS_ACTION(true));

        const url = `https://api.github.com/users/${userName}/repos`
        fetch(url).then(response => response.json()).then(data => {
            dispatch(LOADING_SUCCESS(false));
            dispatch(FETCH_USERS_ACTION(data))  
        }).catch(err => {
            dispatch(ERROR_ACTION(err))
        })

    }
}