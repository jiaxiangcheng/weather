const initialState = {
    basicTempInfo: null,
    searchCityName: null,
    currentLocation: null
};

const apiDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'setMainInfo' : 
            return {
                ...state,
                basicTempInfo: action.payload
            };
        case 'setSearchCityName' :
            return {
                ...state,
                searchCityName: action.payload
            };
        case 'setLocation' :
            return {
                ...state,
                currentLocation: action.location
            };
        default:
            return {
                ...state
            };
    }
}
export default apiDataReducer;