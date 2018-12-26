import React from 'react';
import {Field,reduxForm} from 'redux-form';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
class Register extends React.Component{
    constructor(props){
        super(props);
       this.state=
       {
           error:'',
           redirect:false
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
       
        const data={...values,userType:'member'}
        axios.post('/api/register',data)
        .then(res=>{
            if(res.data.length===0)
            {
                console.log(res)
                this.setState({error:'Email already exists'})
            }
            else
            {   
                this.setState({redirect:true})

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
    if(this.state.redirect===true)
    {
        const url = { 
            pathname: "/", 
            registered: 'User Registered' 
          };
        return(
            <Redirect to={url} />
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
              <span className="card-title center"><strong>Register</strong></span>
              <hr/>
            
              <p className="center" style={pStyle} >{this.state.error}</p>
             <form className="container" >
                <Field name="email" type="text"  placeholder="Enter Email" component={this.renderField}/>
                <Field name="fname" type="text"   placeholder="Enter First Name" component={this.renderField}/>
                <Field name="lname" type="text"   placeholder="Enter Last Name" component={this.renderField}/>
                <Field name="password" type="password"  placeholder="Enter password Name"  component={this.renderField}/>
                <Field name="cpassword" type="password" placeholder="Enter cpassword Name"component={this.renderField}/>
                 <br/>
                 <br/>
                <button className="waves-effect waves-light btn col s12" onClick={handleSubmit(this.onSubmit.bind(this))}>Register</button>
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
    if(!values.fname)
    {
        errors.fname="Enter your First Name";
    }
    if(!values.lname)
    {
        errors.lname="Enter your Last Name";
    }
    if(!values.password)
    {
        errors.password="Enter your password";
    }
    
    if(!(values.password===values.cpassword))
    {
        errors.password="Password Don't Match"
        errors.cpassword="Password Don't Match"
        
    }
   return errors;
}
export default reduxForm({
    validate,
    form:'registerForm'
})(Register);