const authReducer=function(state={currentUser:{},allusers:[]},action){
    switch(action.type){
        case "GET_USER":
        return {...state,currentUser:{...action.payload}}
        case "GET_ALL_USER":
        return {...state,allusers:[...action.payload]}
        
        default:
        return state;
    }
}
export default authReducer;