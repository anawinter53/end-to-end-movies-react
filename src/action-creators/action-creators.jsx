export const manageInput = (e) => {
    return(dispatch) => {
        dispatch({
            type: "setInputValue",
            payload: e.target.value
        })
    }
}

export const manageSubmit = (e) => {
    e.preventDefault()
    return(dispatch) => {
        dispatch({
            type: "setSearchString",
            payload: inputValue
        })
    }
    setInputValue('')
}

export async function useAPI() {
    return(dispatch) => {
        dispatch({
            type: "setShows",
            payload: data
        })
    }
}


