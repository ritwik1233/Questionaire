import React from 'react';
import {Route,Switch,Link} from 'react-router-dom';
import LeaderDashBoard from './LeaderDashBoard';
import LeaderQuestions from './LeaderQuestions';
import Profile from '../Profile';
import {fetchUser} from '../../actions/index'
import {connect} from 'react-redux';
import EditProfile from '../EditProfile';
const LeaderHome =(props)=>{
props.dispatch(fetchUser());
 return(
    <div>
    <br/>
    <nav className="teal lighten-2">
       <div className="nav-wrapper">
       <ul id="nav-mobile" className="left hide-on-med-and-down">
           <li><Link to={`${props.match.url}`}>Leader DashBoard</Link></li>
           <li><Link to={`${props.match.url}/LeaderQuestions`}>Create Questions</Link></li>
           <li><Link to={`${props.match.url}/Profile`}>Profile</Link></li>
           
       </ul>
       </div>
   </nav>
       
    <div className="col s12">
    <div className="card">
        <div className="card-content">
    <Switch>
     <Route exact path={`${props.match.url}`} component={LeaderDashBoard} />
     <Route exact path={`${props.match.url}/LeaderQuestions`} component={LeaderQuestions} />
     <Route exact path={`${props.match.url}/Profile`} component={Profile}  />
     <Route  exact path={`${props.match.url}/Profile/EditProfile`}  component={EditProfile} />
     </Switch>
       </div>
   </div>
   </div>
    </div>
    )
    }
   
export default connect(null)(LeaderHome);