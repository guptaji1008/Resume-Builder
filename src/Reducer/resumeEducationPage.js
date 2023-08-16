
const initialState = {
    qualification: "",
    university: "",
    collegeStartYear: "",
    collegeEndYear: ""
}

const resumeEducationPage = (state=initialState, action) => {
    switch (action.type) {
        case "QUALIFICATION": return {...state, qualification: action.change}
        case "UNIVERSITY": return {...state, university: action.change}
        case "COLLEGE_START_YEAR": return {...state, collegeStartYear: action.change}
        case "COLLEGE_END_YEAR": return {...state, collegeEndYear: action.change}
        default: return state
    }
}

export default resumeEducationPage