import React from 'react';
import {Field,reduxForm} from 'redux-form';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
class Login extends React.Component{
    constructor(props){
        super(props);
       this.state=
       {
           error:'',
           redirect:''
       }
        
    }   
  
    renderField(field){
        const pStyle = {
            fontSize: '15px',
            color:'red'
        };

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
    
    onSubmit=(values)=>
    {
       
        axios.post('/api/login',values)
        .then(res=>{
            if(res.data.userType===undefined)
            {
                this.setState({error:'Invalid Credentials '})
            }
            else
            {   
                this.setState({redirect:res.data.userType})
            }
         }).catch(err=>{
            throw(err);
         })
    }
    componentDidMount()
    {
        this.setState({
            error:'',
            redirect:false
        })
    }
    render()
    {
    const {handleSubmit}=this.props;
    if(this.state.redirect==='member')
    {
        
        return(
            <Redirect to='/MemberHome' />
        )
    }
    if(this.state.redirect==='leader')
    {
        
        return(
            <Redirect to='/LeaderHome' />
        )
    }
    if(this.state.redirect==='Admin')
    {
        
        return(
            <Redirect to='/AdminHome' />
        )
    }
    
    const pStyle = {
        fontSize: '15px',
        color:'red'
    };
    return(
        <div className="container">
        <br/>
        <br/>
        <div className="row">
        <div className="col s12">
          <div className="card ">
            <div className="card-content ">
              <span className="card-title center"><strong>Login</strong></span>
              <p className="center">Welcom please login to continue!</p>
              
              
              <hr/>


              {this.props.location.registered&&<p className="center green lighten-2 ">{this.props.location.registered}</p>}
              <p className="center" style={pStyle} >{this.state.error}</p>
             <form className="container" >
                <Field name="email" type="text"  placeholder="Enter Email" component={this.renderField}/>
                <Field name="password" type="password"  placeholder="Enter password Name"  component={this.renderField}/>
                 <br/>
                 <br/>
                <button className="waves-effect waves-light btn col s12" onClick={handleSubmit(this.onSubmit.bind(this))}>Login</button>
            <br/>
            <br/>
            </form>
            </div>
             </div>
        </div>
      </div>
      </div>
    )
    }
}


function validate(values)
{
   const errors={};
    if(!values.email)
    {
        errors.email="Enter your email id";
    }
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) 
    {
        errors.email = 'Invalid email address'
    }
    
    if(!values.password)
    {
        errors.password="Enter your password";
    }
   return errors;
}
export default reduxForm({
    validate,
    form:'loginForm'
})(Login);