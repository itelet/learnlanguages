const initState = {
    words: new Map()
}

const projectReducers = (state = initState, action) => {
    switch (action.type) {
        case 'GET_WORDS': 
            console.log('Get words', action.project)
            return state;
        case 'GET_WORDS_ERROR':
            console.log('Get words ERROR', action.err)
            return state;
        default:
            return state
    }
}

export default projectReducers;