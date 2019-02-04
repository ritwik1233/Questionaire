import React from 'react';
import {getMembers} from '../../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
class AssignLeader extends React.Component
{
    constructor(props)
    {
        super(props)
        this.props.getMembers();
        this.state=
        {
            redirect:false
        }
    }
    componentDidUpdate()
    {
        this.props.getMembers();
    }
    onSubmit=(id)=>
    {
        axios.post('/api/assignLeader',{id})
        .then(data=>{
            this.setState({redirect:true})
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
    render(){
        if(this.state.redirect===true)
        {
            return(
                <Redirect to="/AdminHome"/>
            )
        }
        if(this.props.members.length>0)
        {
            const eachData=this.props.members.map((eachData,key)=>{
                return(
                    <div className="card" key={key}>
                    <div className="card-content">
                    <p>First Name : {eachData.fname}</p>
                    <p>Last Name  : {eachData.lname}</p>
                    <p>Email      : {eachData.email}</p>
                    <button className="waves-effect waves-light btn" onClick={()=>{this.onSubmit(eachData._id)}}>Assign as Leader</button>
                    </div>
                    </div>
                )
            })
            return(
                <div>
                    <h4>All Members</h4>
                    <h5>Select a member you want to assign as leader</h5>
                    <br/>
                    {eachData}
                </div>
            )
        }

       return(
        <div>
            <h4>All Members</h4>
            <p>.....No ...Members</p>
            </div>

        )

}
}
function mapDispatchToProps(dispatch)
{
return bindActionCreators({
    getMembers,
},dispatch)
}

function mapStateToProps(state)
{
return{
    members:state.admin.members,
}
}
export default connect(mapStateToProps,mapDispatchToProps)(AssignLeader);
