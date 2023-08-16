

const initialState = []

const resumeJobExpList = (state=initialState, action) => {
    if (action.type === "ADD") {
        state.push(action.change)
        return state
    }
    else if (action.type === "DELETE") {
        return state.filter((elem, index) => index !== action.id)
    } 
    else {
        return state
    }
}

export default resumeJobExpList
