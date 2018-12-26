import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { getAnsweredQuestions ,getMemberAnalytics} from '../../actions';
class MemberDashBoard extends React.Component{
  constructor(props)
  {
    super(props)
    this.props.getMemberAnalytics();
    this.props.getAnsweredQuestions();
  }
  componentDidUpdate()
  {
    this.props.getMemberAnalytics()
    this.props.getAnsweredQuestions()
  }
    render(){
      if(this.props.questions.length>0&&this.props.analytics.totalCount!==undefined&&this.props.auth!==undefined)
      {
        const questionList=this.props.questions.map((eachData,key)=>{
          let status,color=''
          if(eachData.correctOption===true&&eachData.answeredBy.length>0)
          {
            status='Attempted(Correct)'
            color='green lighten-2'
          }
          else if(eachData.correctOption===false&&eachData.answeredBy.length>0)
          {
            status='Attempted(Incorrect)'
            color='red lighten-2'
          }
          else
          {
            status='Not Attempted'
            color=''

          }
          
          return(
            <div key={key}>
              <ul className={`collection ${color}`}>

                <li className={`collection-item ${color}`}>Question : {eachData.question}</li>
                <li className={`collection-item ${color}`}>Answered by :{eachData.answeredBy}</li>
                <li className={`collection-item ${color}`}>correct option : {eachData.correct}</li>
                <li className={`collection-item ${color}`}>incorrect option : {eachData.incorrect}</li>
                <li className={`collection-item ${color}`}>Status : {status}</li>
              </ul>
            </div>
          )
        })
        const analyticsData=(<div className="card">
          <div className="card-content">
          <p>Total Rewards : {this.props.auth.reward.toString()}</p><br/>
            <p>Total Questions : {this.props.analytics.totalCount}</p><br/>
            <p>Correct Answers   :{this.props.analytics.correct}</p><br/>
            <p>Incorrect Answers :{this.props.analytics.incorrect}</p><br/>            
            </div>
        </div>)
        
          return(
            <div>
            <h2>Member Dash Board</h2>
            <h4>Analytics Data</h4>
            {analyticsData}
            <h4>All Questions</h4>
            {questionList}    
            </div>
          )
      }


      return(
        <div>
     <h1>member Dash Board</h1>
        <p>no data....</p>
     </div>
     )
    }
}
function mapStateToProps(state)
{
return{
  questions:state.member.questions,
  analytics:state.member.analytics,
  auth:state.auth.currentUser
}
}

function mapDispatchToProps(dispatch)
{
return bindActionCreators({
  getAnsweredQuestions,
  getMemberAnalytics
},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(MemberDashBoard);