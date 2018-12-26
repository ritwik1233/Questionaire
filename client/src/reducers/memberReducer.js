const memberReducer=function(state={analytics:{},questions:[],unansweredQuestion:[]},action){
    switch(action.type){
        case "GET_MEMBER_ANALYTICS":
        return {...state,analytics:{...action.payload}}
        case "GET_ANSWERED_QUESTIONS":
        return {...state,questions:[...action.payload]}
        case "GET_UNANSWERED_QUESTIONS":
        return {...state,unansweredQuestion:[...action.payload]}
        
        default:
        return state;
    }
}
export default memberReducer;