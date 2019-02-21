export const addMission = (newItem) => {
    return {
        type: 'addTask',
        newItem: newItem
    };
};

export const setTaskName = (taskName) => {
    return {
        type: 'setTasName',
        data: taskName
    };
};

export const deleteTaskByIndex = (index) => {
    return {
        type: 'deleteTaskByIndex',
        index: index
    };
};