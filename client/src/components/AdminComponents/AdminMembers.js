import React from 'react';
import {fetchAllUser} from '../../actions/index'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
class AdminMembers extends React.Component
{
    componentDidMount()
    {
        this.props.fetchAllUser()
    }
    
    render(){
        if(this.props.allusers.length>0)
        {
            const memberDetails=this.props.allusers.map((data,key)=>{
                return(
                    <div className="card" key={key}>
                    <div className="card-content">
                        <ul className="collection">
                        <li className="collection-item">Email : {data.email}</li>
                        <li className="collection-item">First Name:{data.fname}</li>
                        <li className="collection-item">Last Name :{data.lname}</li>
                        <li className="collection-item">userType : {data.userType}</li>
                        </ul>
                      </div>
                    </div>
                )
            })
            return(
            <div>
                <h3>All members</h3>
                {memberDetails}
                </div>     
            )    
        }
       return(
        <div>
            <h4>All Members</h4>
                <p>No members</p>       


            </div>

        )

}
}
function mapDispatchToProps(dispatch)
{
return bindActionCreators({
    fetchAllUser,
},dispatch)
}

function mapStateToProps(state)
{
return{
    allusers:state.auth.allusers,
}
}
export default connect(mapStateToProps,mapDispatchToProps)(AdminMembers);
