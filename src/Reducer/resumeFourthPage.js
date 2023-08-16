
const initialState = ''

const resumeFourthPage = (state=initialState, action) => {
    switch (action.type) {
        case "SKILL": return action.change
        default: return state
    }
}

export default resumeFourthPage