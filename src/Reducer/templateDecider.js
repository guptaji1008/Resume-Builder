

const initialState = ""

const templateDecider = (state=initialState, action) => {
    switch (action.type) {
        case "SELECTED_TEMPLATES": return action.change
        default: return state
    }
}

export default templateDecider