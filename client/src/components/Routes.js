import React from 'react';
import Header from './Header';
import Login from './Login';
import Register from './Register';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import AdminHome from './AdminComponents/AdminHome';
import LeaderHome from './LeaderComponent/LeaderHome';
import MemberHome from './MemberComponent/MemberHome';

const Routes=()=>{
    return(
        <BrowserRouter>
        <div>
        <Header />
            <div className="container">
            <Switch>
            <Route  exact path="/" component={Login}/>
            <Route   path="/MemberHome" component={MemberHome}/>
            <Route   path="/AdminHome" component={AdminHome}/>
            <Route   path="/LeaderHome" component={LeaderHome}/>
            <Route   path="/Register" component={Register}/>
            
          </Switch>
        </div>
        </div>
        </BrowserRouter>
        )
}
export default Routes