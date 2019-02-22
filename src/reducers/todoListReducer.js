const initialState = {
    missions: [],
    taskName: null
};

const todoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addTask':
            return {
                ...state,
                missions: [...state.missions, {name: action.newItem} ]
            };
        case 'setTasName' :
            return {
                ...state,
                taskName: action.data
            };
        case 'deleteTaskByIndex' :
            return {
                ...state,
                missions: [ ...state.missions.slice(0, action.index),
                            ...state.missions.slice(action.index + 1) ]
            };
        case 'editTaskByIndex' :
            return {
                ...state,
                missions: [ 
                    ...state.missions.slice(0, action.index), // everything before current index
                    {
                       ...state.missions[action.index], name: action.updatedTaskName
                    },
                    ...state.missions.slice(action.index + 1), // everything after current index 
                ]
            }
        default:
            return {
                ...state
            };
    }
}
export default todoListReducer;