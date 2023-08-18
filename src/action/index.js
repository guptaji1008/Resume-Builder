
export const firstNameAdviser = (givenFirstName) => {
    return {
        type: "FIRST_NAME",
        change: givenFirstName
    }
} 
export const lastNameAdviser = (givenLastName) => {
    return {
        type: "LAST_NAME",
        change: givenLastName
    }
} 
export const emailAdviser = (givenEmail) => {
    return {
        type: "EMAIL",
        change: givenEmail
    }
} 
export const mobileNoAdviser = (givenMobileNo) => {
    return {
        type: "MOBILE_NO",
        change: givenMobileNo
    }
} 
export const addressAdviser = (givenAddress) => {
    return {
        type: "ADDRESS",
        change: givenAddress
    }
} 
export const cityAdviser = (givenCode) => {
    return {
        type: "CITY",
        change: givenCode
    }
} 
export const stateAdviser = (givenState) => {
    return {
        type: "STATE",
        change: givenState
    }
} 
export const postalCodeAdviser = (givenPostalCode) => {
    return {
        type: "POSTAL_CODE",
        change: givenPostalCode
    }
} 
export const jobTitleAdviser = (givenJobTitle) => {
    return {
        type: "JOB_TITLE",
        change: givenJobTitle
    }
} 
export const aboutMeAdviser = (givenAboutMe) => {
    return {
        type: "ABOUT_ME",
        change: givenAboutMe
    }
} 

export const jobPositionProvider = (givenJobPosition) => {
    return {
        type: "JOB_POSITION",
        change: givenJobPosition
    }
}
export const companyNameProvider = (givenCompanyName) => {
    return {
        type: "COMPANY_NAME",
        change: givenCompanyName
    }
}
export const startingYearProvider = (givenStartingYear) => {
    return {
        type: "STARTING_YEAR",
        change: givenStartingYear
    }
}
export const endingYearProvider = (givenEndingYear) => {
    return {
        type: "ENDING_YEAR",
        change: givenEndingYear
    }
}
export const jobDescriptionProvider = (givenJobDescription) => {
    return {
        type: "JOB_DESCRIPTION",
        change: givenJobDescription
    }
}

export const jobExperienceAdder = (givenJob) => {
    return {
        type: "ADD",
        change: givenJob
    }
}
export const jobExperienceReducer = (id) => {
    return {
        type: "DELETE",
        id: id
    }
}

export const qualificationAdviser = (givenQualification) => {
    return {
        type: "QUALIFICATION",
        change: givenQualification
    }
}

export const universityAdviser = (givenUniversity) => {
    return {
        type: "UNIVERSITY",
        change: givenUniversity
    }
}

export const collegeStartYearAdviser = (givenYear) => {
    return {
        type: "COLLEGE_START_YEAR",
        change: givenYear
    }
}
export const collegeEndYearAdviser = (givenYear) => {
    return {
        type: "COLLEGE_END_YEAR",
        change: givenYear
    }
}

export const skillAdviser = (givenSkill) => {
    return {
        type: "SKILL",
        change: givenSkill
    }
}
export const addSkillListAdviser = (addSkillList) => {
    return {
        type: "ADD_SKILL_LIST",
        change: addSkillList
    }
}
export const removeSkillListAdviser = (skillId) => {
    return {
        type: "REMOVE_SKILL_LIST",
        idNo: skillId
    }
}

export const templateSelector = (givenTemplate) => {
    return {
        type: "SELECTED_TEMPLATES",
        change: givenTemplate
    }
}

export const profilePhotoGiver = (givenProfilePhoto) => {
    return {
        type: "PROFILE_PHOTO",
        photo: givenProfilePhoto
    }
}
