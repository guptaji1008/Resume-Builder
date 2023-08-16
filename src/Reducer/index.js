import { combineReducers } from "redux";
import resumeFirstPageInfoGiver from "./resumeFirstPageInfoGiver";
import resumeSecondPageInfo from "./resumeSecondPageInfo";
import resumeJobExpList from "./resumeJobExpList";
import resumeEducationPage from "./resumeEducationPage";
import resumeFourthPage from "./resumeFourthPage";
import resumeSkillList from "./resumeSkillList";
import templateDecider from "./templateDecider";
import profilePictureUpdate from './profilePhoto'

const rootReducers = combineReducers({
    resumeFirstPageInfoGiver,
    resumeSecondPageInfo,
    resumeJobExpList,
    resumeEducationPage,
    resumeFourthPage,
    resumeSkillList,
    templateDecider,
    profilePictureUpdate
})

export default rootReducers

