import React from 'react';
import {Field,reduxForm} from 'redux-form';
import axios from 'axios';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
class EditProfile extends React.Component{
  constructor(props)
  {
    super(props)
    this.state=
    {
      redirect:false,
      url:''
    }
    console.log()
  }
  onSubmit=(values)=>
  {
      const data=
      {
          ...values,
          _id:this.props.currentUser._id
      }

      axios.post('/api/EditProfile',data)
      .then(res=>{
           this.setState({
               redirect:true,
               url:this.props.match.url.split('/Edit')[0]
           })
      }).catch(err=>{
            console.log(err)
      })
  }


  renderField(field){
    const pStyle = {
        fontSize: '15px',
        color:'red'
    }
    return (
      <div className="form-group">
         <p style={pStyle}>{field.meta.touched?field.meta.error:''}</p>
          <input 
           type={field.type}
           placeholder={field.placeholder}
           {...field.input}
         />
          </div>
          )
      }  
  
  render(){
    if(this.state.redirect===true)
    {
      return(
        <Redirect to={this.state.url}/>
      )
    }
    const {handleSubmit}=this.props;
    return(
        <div className="row">
        <br/>
        <br/>
        <div className="col s12">
          <div className="card ">
            <div className="card-content container ">
                <h4>Edit Profile</h4>
              <hr/>
             <form className="container" >
                <Field name="fname" type="text"  placeholder={this.props.currentUser.fname}  component={this.renderField}/>
                <Field name="lname" type="text"  placeholder={this.props.currentUser.lname}  component={this.renderField}/>
                 <br/>
                 <br/>
                <button className="waves-effect waves-light btn col s12" onClick={handleSubmit(this.onSubmit.bind(this))}>Submit</button>
                <br/>
                <br/>
              </form>
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
export default reduxForm({
    form:'editProfile'
})(    connect(mapStateToProps,null)(EditProfile));