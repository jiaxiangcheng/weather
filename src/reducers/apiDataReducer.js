const initialState = {
    basicTempInfo: null,
    searchCityName: null
};

const apiDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SETBASICINFO' : 
            return {
                basicTempInfo: action.payload
            };
        case 'SETSEARCHCITYNAME' :
            return {
                ...state,
                searchCityName: action.payload
            };
        default:
            return {
                ...state
            };
    }
}
export default apiDataReducer;