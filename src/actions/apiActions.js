export const setMainInfo = (mainInfo) => {
    return {
        type: 'SETMAININFO',
        payload: mainInfo
    };
};

export const setSearchCityName = (cityName) => {
    return {
        type: 'SETSEARCHCITYNAME',
        payload: cityName
    };
};