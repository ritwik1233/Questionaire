import React from 'react';
import {Route,Switch,Link} from 'react-router-dom';
import MemberDashBoard from './MemberDashBoard';
import MemberQuestions from './MemberQuestions';
import Profile from '../Profile';
import {fetchUser} from '../../actions/index';
import {connect} from 'react-redux';
import EditProfile from '../EditProfile';
const MemberHome =(props)=>{
props.dispatch(fetchUser());
 return(
 <div>
     <br/>
     <nav className="teal lighten-2">
        <div className="nav-wrapper">
        <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><Link to={`${props.match.url}`}>MemberDashBoard</Link></li>
            <li><Link to={`${props.match.url}/MemberQuestions`}>MemberQuestions</Link></li>
            <li><Link to={`${props.match.url}/Profile`}>Profile</Link></li>
        </ul>
        </div>
    </nav>
        
     <div className="col s12">
     <div className="card">
         <div className="card-content">
     <Switch>
      <Route exact path={`${props.match.url}`} component={MemberDashBoard} />
      <Route exact path={`${props.match.url}/MemberQuestions`} component={MemberQuestions} />
      <Route  exact path={`${props.match.url}/Profile`} component={Profile} />
      <Route  exact path={`${props.match.url}/Profile/EditProfile`}  component={EditProfile} />
      </Switch>
        </div>
    </div>
    </div>
     </div>
    )
    }
export default connect(null)(MemberHome);