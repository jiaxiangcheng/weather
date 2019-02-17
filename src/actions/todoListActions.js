export const addMission = (newItem) => {
    return {
        type: 'addMission',
        newItem: newItem
    };
};