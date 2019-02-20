const initialState = {
    missions: [],
    taskName: null
};

const todoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDMISSION':
            return {
                ...state,
                missions: [...state.missions, {name: action.newItem} ]
            };
        case 'SETTASKNAME' :
            return {
                ...state,
                taskName: action.data
            };
        default:
            return {
                ...state
            };
    }
}
export default todoListReducer;