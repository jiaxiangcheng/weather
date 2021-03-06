export const setIndex = (index) => {
    return {
        type: 'setIndex',
        index: index
    };
};

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

export const editTaskByIndex = (index, updatedTaskName) => {
    return {
        type: 'editTaskByIndex',
        index: index,
        updatedTaskName: updatedTaskName
    };
};