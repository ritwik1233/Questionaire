const leaderReducer=function(state={analytics:{},questions:[]},action){
    switch(action.type){
        case "GET_ANALYTICS":
        return {...state,analytics:{...action.payload}}
        case "GET_ALL_QUESTIONS":
        return {...state,questions:[...action.payload]}
        
        default:
        return state;
    }
}
export default leaderReducer;