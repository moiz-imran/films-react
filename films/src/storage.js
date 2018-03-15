export const loadStateLocal = () => {
    try {
        const state = localStorage.getItem('tintash_user_token');
        if (state == null) {
            return undefined
        }
        return JSON.parse(state);
    } catch (err) {
        return undefined
    }
}

export const saveStateLocal = (state) => {
    try {
        localStorage.setItem('tintash_user_token', JSON.stringify(state));
    } catch (err) {
        console.log('Local Storage saving failed.');
    }
}

export const loadStateSession = () => {
    try {
        const state = sessionStorage.getItem('tintash_user_token');
        if (state == null) {
            return undefined
        }
        return JSON.parse(state);
    } catch (err) {
        return undefined
    }
}

export const saveStateSession = (state) => {
    try {
        sessionStorage.setItem('tintash_user_token', JSON.stringify(state));
    } catch (err) {
        console.log('Local Storage saving failed.');
    }
}
