const initialState = {
    email: ''
};

const emailReducer = (state = initialState, action) => {

    if(action.type === 'SET_EMAIL') {
        return { ...state, email: action.payload.email };
    }

    return state
}

export default emailReducer;