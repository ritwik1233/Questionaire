import React from 'react';
import {connect} from 'react-redux';
import { getAnalytics,getAllQuestions} from '../../actions/index';
import {bindActionCreators} from 'redux';
class LeaderDashBoard extends React.Component{
  constructor(props)
  {
    super(props)
    this.props.getAllQuestions();
    this.props.getAnalytics();
  }
  componentDidUpdate()
  {
    this.props.getAllQuestions();
    this.props.getAnalytics();
  }
    render(){
      if(this.props.questions.length>0&&this.props.analytics.totalCount!==undefined)
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
            <p>Total Questions : {this.props.analytics.totalCount}</p><br/>
            <p>Correct Answers   :{this.props.analytics.correct}</p><br/>
            <p>Incorrect Answers :{this.props.analytics.incorrect}</p><br/>
            <p>Not Attempted :{this.props.analytics.notAttempted}</p><br/>
            
            </div>
        </div>)
        
          return(
            <div>
            <h2>Leader Board</h2>
            <h4>Analytics Data</h4>
            {analyticsData}
            <h4>All Questions</h4>
            {questionList}    
            </div>
          )
      }


      return(
        <div>
     <h1>Leader Board</h1>
        <p>no data....</p>
     </div>
     )
    }
}
function mapStateToProps(state)
{
return{
  questions:state.leader.questions,
  analytics:state.leader.analytics
}
}

function mapDispatchToProps(dispatch)
{
return bindActionCreators({
  getAllQuestions,
  getAnalytics
},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(LeaderDashBoard);