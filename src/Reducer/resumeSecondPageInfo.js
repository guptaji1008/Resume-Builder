
const initialState = {
    jobPosition: "",
    companyName: "",
    startingYear: "",
    endingYear: "",
    jobDescription: ""
}

const resumeSecondPageInfo = (state=initialState, action) => {
    switch (action.type) {
        case "JOB_POSITION": return {...state, jobPosition: action.change}
        case "COMPANY_NAME": return {...state, companyName: action.change}
        case "STARTING_YEAR": return {...state, startingYear: action.change}
        case "ENDING_YEAR": return {...state, endingYear: action.change}
        case "JOB_DESCRIPTION": return {...state, jobDescription: action.change}
        default: return state
    }
}


export default resumeSecondPageInfo


