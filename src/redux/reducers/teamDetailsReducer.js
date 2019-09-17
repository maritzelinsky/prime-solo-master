const teamDetailsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        // case 'UPDATE_DETAILS':
        //     return {
        //         ...state,
        //         [action.payload.key]: action.payload.newDetails
        //     }
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default teamDetailsReducer;