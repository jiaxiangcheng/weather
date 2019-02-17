const initialState = {
    missions: []
};

const todoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addMission':
            return {
                ...state,
                missions: [...state.missions, action.newItem]
            };
        default:
            return {
                ...state
            };
    }
}
export default todoListReducer;