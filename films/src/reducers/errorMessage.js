const errorMessage = (state = '', action) => {
    switch (action.type) {
        case 'ERROR':
            return action.msg;
        default:
            return state;
    }
}

export default errorMessage;