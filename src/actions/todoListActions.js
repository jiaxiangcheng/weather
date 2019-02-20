export const addMission = (newItem) => {
    return {
        type: 'ADDMISSION',
        newItem: newItem
    };
};

export const setTaskName = (taskName) => {
    return {
        type: 'SETTASKNAME',
        data: taskName
    };
};