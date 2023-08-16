import profile from '../components/NavbarContent/Images/profile.png';

const profilePictureUpdate = (state=profile, action) => {
    switch (action.type) {
        case "PROFILE_PHOTO": return URL.createObjectURL(action.photo)
        default: return state
    }
}

export default profilePictureUpdate

