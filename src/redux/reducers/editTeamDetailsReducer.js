const editTeamDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'TEAM_DETAILS_TO_EDIT':
            return action.payload;
        case 'EDIT_DETAIL_CONTACT':
            return action.payload;
        default:
            return state;
    }
};
//CREATE CASE FOR EACH ITEM

// user will be on the redux state at:
// state.user
export default editTeamDetailsReducer;