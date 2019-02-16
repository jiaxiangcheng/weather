const initialState = {
    basicTempInfo: null,
    searchCityName: null,
    currentLocation: null
};

const apiDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SETMAININFO' : 
            return {
                ...state,
                basicTempInfo: action.payload
            };
        case 'SETSEARCHCITYNAME' :
            return {
                ...state,
                searchCityName: action.payload
            };
        case 'SETLOCATION' :
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