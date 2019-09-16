const timeSlotsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_TIME_SLOTS':
            return action.payload;
        default:
            return state;
    }
};

export default timeSlotsReducer;