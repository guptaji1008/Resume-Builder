
const initialState = {
    firstName: "",
    lastName: "",
    givenEmail: "",
    mobileNo: null,
    address: "",
    city: "",
    stateName: "",
    postalCode: null,
    jobTitle: "",
    aboutMe: ""
}

const resumeFirstPageInfoGiver = (state=initialState, action) => {
    switch (action.type) {
        case "FIRST_NAME": return {...state, firstName: action.change}
        case "LAST_NAME": return {...state, lastName: action.change}
        case "EMAIL": return {...state, givenEmail: action.change}
        case "MOBILE_NO": return {...state, mobileNo: action.change}
        case "ADDRESS": return {...state, address: action.change}
        case "CITY": return {...state, city: action.change}
        case "STATE": return {...state, stateName: action.change}
        case "POSTAL_CODE": return {...state, postalCode: action.change}
        case "JOB_TITLE": return {...state, jobTitle: action.change}
        case "ABOUT_ME": return {...state, aboutMe: action.change}
        default: return state
    }
}

export default resumeFirstPageInfoGiver