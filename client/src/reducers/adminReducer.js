const adminReducer=function(state={analytics:{},questions:[],members:[]},action){
    switch(action.type){
        case "GET_ALL_ANALYTICS":
        return {...state,analytics:{...action.payload}}
        case "GET_ALL_QUESTIONS":
        return {...state,questions:[...action.payload]}
        case "GET_ALL_MEMBERS":
        return {...state,members:[...action.payload]}
        default:
        return state;
    }
}
export default adminReducer;