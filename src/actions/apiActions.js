export const setMainInfo = (mainInfo) => {
    return {
        type: 'setMainInfo',
        payload: mainInfo
    };
};

export const setSearchCityName = (cityName) => {
    return {
        type: 'setSearchCityName',
        payload: cityName
    };
};

export const setCurrentLocation = (location) => {
    return {
        type: 'setLocation',
        location: location
    };
};
