import React from 'react';
import {Route,Switch,Link} from 'react-router-dom';
import AdminMembers from './AdminMembers';
import Profile from '../Profile';
import AdminQuestions from './AdminQuestions'
import {connect} from 'react-redux';
import {fetchUser} from '../../actions/index'
import AssignLeader from './AssignLeader';
import EditProfile from '../EditProfile';

const AdminHome =(props)=>{
props.dispatch(fetchUser());
 return(
    <div>
    <br/>
    <nav className="teal lighten-2">
       <div className="nav-wrapper">
       <ul id="nav-mobile" className="left hide-on-med-and-down">
           <li><Link to={`${props.match.url}`}>View Members</Link></li>
           <li><Link to={`${props.match.url}/ViewQuestions`}>View Questions</Link></li>
           <li><Link to={`${props.match.url}/AssignLeader`}>Assign Leader</Link></li>
           <li><Link to={`${props.match.url}/Profile`}>Profile</Link></li>
       </ul>
       </div>
   </nav>
       
    <div className="col s12">
    <div className="card">
        <div className="card-content">
    <Switch>
     <Route exact path={`${props.match.url}`} component={AdminMembers} />
     <Route exact path={`${props.match.url}/ViewQuestions`} component={AdminQuestions}/>
     <Route exact path={`${props.match.url}/AssignLeader`} component={AssignLeader} />
     <Route exact path={`${props.match.url}/Profile`} component={Profile} />
     <Route  exact path={`${props.match.url}/Profile/EditProfile`}  component={EditProfile} />
     
     </Switch>
       </div>
   </div>
   </div>
    </div>
    )
    }

export default connect(null)(AdminHome);