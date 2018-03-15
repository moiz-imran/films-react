const storageState = (state = 'session', action) => {
    switch (action.type) {
        case 'SET_STORAGE':
            return action.state;
        default:
            return state;
    }
}

export default storageState;