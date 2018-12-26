import React from 'react';
import {connect} from 'react-redux';
import {getUnanswered} from '../../actions/index';
import {bindActionCreators} from 'redux';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
class MemberQuestions extends React.Component{
    constructor(props)
    {
        super(props)
        this.state=
        {
            redirect:false
        }
        this.props.getUnanswered()
    }   
    componentDidUpdate()
    {
        this.props.getUnanswered()
    }       
       onSubmit=(answer,id)=>
       {
           const data=
                 {
                     id:id,
                     answeredBy:this.props.currentUser.email,
                     correctOption:answer
                }
                axios.post('/api/updateAnswer',data)
                .then(result=>{
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
                <Redirect to='/MemberHome'/>
            )
        }
        if(this.props.unansweredQuestion.length>0)
        {
            const unansweredQuestion=this.props.unansweredQuestion.map((eachQuestions,key)=>{
                return(
                    <div className="card" key={key}>
                    <div className="card-content">
                        <p>{eachQuestions.question}</p><br/>
                            <a  onClick={()=>{this.onSubmit(true,eachQuestions._id)}}>{eachQuestions.correct}</a><br/>
                            <a  onClick={()=>{this.onSubmit(false,eachQuestions._id)}}>{eachQuestions.incorrect}</a>
                            <br/>
                            <br/>
                        </div>
                        </div>
                )
            })
            return(
                <div>
                    <h3>Answer a Question</h3>
                    <h5>Each correct Answer is equal to 10 points!</h5>
                    {unansweredQuestion}
                    </div>
            )
        }
    return(
        <div>
     <h3>Answer a Question</h3>
     <p>no questions</p>
     </div>
     )
    }
}
function mapStateToProps(state)
{
return{
    unansweredQuestion:state.member.unansweredQuestion,
    currentUser:state.auth.currentUser
}
}

function mapDispatchToProps(dispatch)
{
return bindActionCreators({
  getUnanswered
},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(MemberQuestions);
