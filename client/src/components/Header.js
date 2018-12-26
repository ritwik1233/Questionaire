import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
class Header extends React.Component{
  
  render()
  {
    if(this.props.currentUser.userType!==undefined)
    {
      return(
            <nav className="teal lighten-2" >
            <div className="nav-wrapper">
            <div className="container">
              <a className="brand-logo">&nbsp;Questionaire</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href='/api/logout'>Logout</a></li>
            </ul>
            </div>
            </div>
          </nav>  
          )
    }  
    return(
           <nav className="teal lighten-2" >
           <div className="nav-wrapper">
           <div className="container">
             <a className="brand-logo">&nbsp;Questionaire</a>
             <ul id="nav-mobile" className="right hide-on-med-and-down">
               <li><Link to='/'>Login</Link></li>    
               <li><Link to='/Register'>Register</Link></li>
            </ul>
           </div>
           </div>
         </nav>  
       )
  }

}
function mapStateToProps(state)
{
return{
  currentUser:state.auth.currentUser,
}
}
export default connect(mapStateToProps,null)(Header);