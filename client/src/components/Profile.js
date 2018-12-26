import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from './../actions/index';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
class Profile extends React.Component{

componentDidUpdate()
{
  this.props.fetchUser()
}

  
    render()
    {
      return(
          <div className="row">
          <br/>
          <br/>
          <div className="col s12">
            <div className="card ">
              <div className="card-content ">
                  <h4>Profile</h4>
                  <ul className="collection">
                    <li className="collection-item">Email     :    {this.props.currentUser.email}</li>
                    <li className="collection-item">First Name:    {this.props.currentUser.fname}</li>
                    <li className="collection-item">Last Name :    {this.props.currentUser.lname}</li>
                    <li className="collection-item">User Type :    {this.props.currentUser.userType}</li>
                    <li className="collection-item">Reward :    {this.props.currentUser.reward}</li>
                    <Link to={`${this.props.match.url}/EditProfile`} className="waves-effect waves-light btn col s12" >Edit Profile</Link>
                  </ul>
                  </div>
              </div>
          </div>
        </div>
      )
    }
}
function mapStateToProps(state)
{
return{
  currentUser:state.auth.currentUser,
}
}
function mapDispatchToProps(dispatch)
{
return bindActionCreators({
  fetchUser
},dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(Profile);