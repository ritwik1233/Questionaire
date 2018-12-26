import axios from 'axios';

export function registerUser(data) {
    return function(dispatch){
    axios.post('/api/register',data).then(res=>{
        dispatch({
            type:"REGISTER_USER",
            payload:res.data})
    }
    )}
};

export function fetchUser() {
    return function(dispatch){
    axios.get('/api/current_user')
    .then(res=>{
        dispatch({
            type:"GET_USER",
            payload:res.data})
    }
    )}
};
export function fetchAllUser() {
    return function(dispatch){
    axios.get('/api/get_all_user')
    .then(res=>{
        dispatch({
            type:"GET_ALL_USER",
            payload:res.data})
    }
    )}
};
export function logoutUser() {
    return function(dispatch){
    axios.get('/api/logout')
    .then(res=>{
        dispatch({
            type:"LOGOUT_USER",
            payload:res.data})
    }
    )}
};
export function getAllQuestions() {
    return function(dispatch){
    axios.get('/api/getAllQuestions')
    .then(res=>{
        dispatch({
            type:"GET_ALL_QUESTIONS",
            payload:res.data})
    }
    )}
};
export function getAnalytics() {
    return function(dispatch){
    axios.get('/api/getAnalytics')
    .then(res=>{
        dispatch({
            type:"GET_ANALYTICS",
            payload:res.data})
    }
    )}
};
export function getAnsweredQuestions() {
    return function(dispatch){
    axios.get('/api/getAnsweredQuestions')
    .then(res=>{
        dispatch({
            type:"GET_ANSWERED_QUESTIONS",
            payload:res.data})
    }
    )}
};
export function getMemberAnalytics() {
    return function(dispatch){
    axios.get('/api/getMemberAnalytics')
    .then(res=>{
        dispatch({
            type:"GET_MEMBER_ANALYTICS",
            payload:res.data})
    }
    )}
};
export function getUnanswered() {
    return function(dispatch){
    axios.get('/api/getUnanswered')
    .then(res=>{
        dispatch({
            type:"GET_UNANSWERED_QUESTIONS",
            payload:res.data})
    }
    )}
};

export function getQuestions() {
    return function(dispatch){
    axios.get('/api/getQuestions')
    .then(res=>{
        dispatch({
            type:"GET_ALL_QUESTIONS",
            payload:res.data})
    }
    )}
};
export function getAllAnalytics() {
    return function(dispatch){
    axios.get('/api/getAllAnalytics')
    .then(res=>{
        dispatch({
            type:"GET_ALL_ANALYTICS",
            payload:res.data})
    }
    )}
};
export function getMembers() {
    return function(dispatch){
    axios.get('/api/getMembers')
    .then(res=>{
        dispatch({
            type:"GET_ALL_MEMBERS",
            payload:res.data})
    }
    )}
};