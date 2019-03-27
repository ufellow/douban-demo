import * as actionType from './actionTypes';
const defaultState = {
    name:'hello',
    hotsMovies:[],
    totalCount:0,
    tagMovies:[]
}

const reducer = (state = defaultState, action) => {
    if(action.type == actionType.GET_ALL_HOTSMOVIES){
        const newState = JSON.parse(JSON.stringify(state));
        newState.hotsMovies = action.hotsMovies;
        newState.totalCount = action.totalCount;
        return newState;
    }
    if(action.type === actionType.GET_TAG_MOVIES){
        console.log(action)
        const newState = JSON.parse(JSON.stringify(state));
        newState.tagMovies = action.tagMovies;
        return newState;
    }
    return state;
}
export default reducer;