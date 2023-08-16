
const initialState = []

const resumeSkillList = (state=initialState, action) => {
    switch (action.type) {
        case "ADD_SKILL_LIST": return [...state, action.change]
        case "REMOVE_SKILL_LIST": return state.filter((elem, index) => index !== action.idNo)
        default: return state
    }
}

export default resumeSkillList