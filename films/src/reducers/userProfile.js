const userProfile = (state = {}, action) => {
    switch (action.type) {
        case 'GET_PROFILE':
            return action.profile;
        case 'LOGOUT_USER':
            console.log('logout')
            return {};
        default:
            return state;
    }
}

export default userProfile;