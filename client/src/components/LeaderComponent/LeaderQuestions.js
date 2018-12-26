import React from 'react';
import {Field,reduxForm} from 'redux-form';
import axios from 'axios';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
class LeaderQuestions extends React.Component{
  constructor(props)
  {
    super(props)
    this.state=
    {
      redirect:false
    }
  }
  onSubmit=(values)=>
  {
    const body=
    {
      ...values,
      askedBy:this.props.currentUser.email,
      answeredBy:'',
      correctOption:false
    }
    axios.post('/api/addQuestions',body)
    .then(data=>{
      this.setState({redirect:true})
    })
    .catch(err=>{
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
        <Redirect to='/LeaderHome'/>
      )
    }
    const {handleSubmit}=this.props;
    return(
        <div className="row">
        <br/>
        <br/>
        <div className="col s12">
          <div className="card ">
            <div className="card-content ">
                <h4>Leader Questions</h4>
              <hr/>
             <form className="container" >
                <Field name="question" type="text"  placeholder="Enter Questions" component={this.renderField}/>
                <Field name="correct" type="text"  placeholder="Enter Correct option"  component={this.renderField}/>
                <Field name="incorrect" type="text"  placeholder="Enter Incorrect option"  component={this.renderField}/>
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

function validate(values)
{
   const errors={};
    if(!values.questions)
    {
        errors.questions="Enter Questions";
    }
    
    if(!values.correct)
    {
        errors.correct="Enter correct Options";
    }
    if(!values.incorrect)
    {
        errors.incorrect="Enter incorrect Options";
    }

   return errors;
}
function mapStateToProps(state)
{
return{
  currentUser:state.auth.currentUser,
}
}
export default reduxForm({
    validate,
    form:'questionsForm'
})(    connect(mapStateToProps,null)(LeaderQuestions));