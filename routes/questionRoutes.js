const mongoose=require('mongoose');
const questions=mongoose.model('Questions');
const users=mongoose.model('users');

module.exports=(app)=>{
    app.get('/api/getMembers',(req,res)=>
    {
        users.find({userType:'member'})
        .then(userData=>{
            return res.send(userData);
        })
        .catch(err=>{
            return res.send(err)
        })
    
    })
    app.post('/api/assignLeader',(req,res)=>
    {
        users.findByIdAndUpdate(req.body.id,{userType:'leader'})
        .then(result=>{
            res.send(result);
        })
        .catch(err=>{
            return res.send(err);
        })
    })
    app.get('/api/getQuestions',(req,res)=>
    {
        questions.find().then(result=>{
            return res.send(result)
        }).catch(err=>{
            return res.send(err)
        })
    })
    app.post('/api/EditProfile',(req,res)=>
    {
        var newData=
        {
            ...req.body
        }
        users.findByIdAndUpdate(req.body._id,newData)
        .then(result=>{
            return res.send(result);
        })
        .catch(err=>{
            return res.send(err)
        })

    })
    
    app.get('/api/getAllAnalytics',(req,res)=>
    {
        questions.find()
        .then(allquestions=>{
            questions.find({correctOption:true})
            .then(correct=>{
                    questions.find({$and:[{correctOption:false},{answeredBy:{ $ne: '' }}]})
                    .then(incorrect=>{
                        const result={
                            totalCount:allquestions.length.toString(),
                            correct:correct.length.toString(),
                            incorrect:incorrect.length.toString(),
                            notAttempted:(allquestions.length-(correct.length+incorrect.length)).toString()
                        }
                        return res.send(result);
                    })
                    
                })
        }).catch(err=>{
            return res.send(err)
        })
    })
    app.post('/api/updateAnswer',(req,res)=>{
        const data=
        {
            answeredBy:req.body.answeredBy,
            correctOption:req.body.correctOption
        }
        if(data.correctOption===true)
        {
            users.findOne({_id:req.session.userID})
            .then(userData=>{
                const reward=userData.reward+10;
                users.findByIdAndUpdate(userData._id,{reward})
                .then(result=>{
                    questions.findByIdAndUpdate(req.body.id,data).then(result=>{
                        return res.send(result)
                     }).catch(err=>{
                        return res.send(err)
                    }) 
                })
            })
            .catch(err=>{
                return res.send(err)
            })
        }
       else 
       {
            questions.findByIdAndUpdate(req.body.id,data).then(result=>{
                return res.send(result)
             }).catch(err=>{
                return res.send(err)
            })
       }
   })
    app.get('/api/getUnanswered',(req,res)=>
    {
        questions.find({answeredBy:''}).then(result=>{
            return res.send(result)
        }).catch(err=>{
            return res.send(err)
        })
    })
    
    app.get('/api/getMemberAnalytics',(req,res)=>{
        users.findOne({_id:req.session.userID})
        .then(userData=>{           
            questions.find({answeredBy:userData.email})
            .then(questionData=>{
                questions.find({$and:[{answeredBy:userData.email},{correctOption:true}]})
                .then(correctData=>{
                questions.find({$and:[{answeredBy:userData.email},{correctOption:false},{answeredBy:{ $ne: '' }}]})
                .then(incorrectData=>{
                    const result=
                    {
                        totalCount:questionData.length.toString(),
                        correct:correctData.length.toString(),
                        incorrect:incorrectData.length.toString(),
                       }
                    return res.send(result)
                })
            })   
            })
            })

    })
    app.get('/api/getAnsweredQuestions',(req,res)=>
    {
     users.findOne({_id:req.session.userID})
        .then(userData=>{           
            return  questions.find({answeredBy:userData.email})
            }).then(result=>{
                   return res.send(result)
                }).catch(err=>{
                return res.send(err)
            })
    })
    app.get('/api/getAllQuestions',(req,res)=>
    {
      
            users.findOne({_id:req.session.userID})
            .then(userData=>{           
                return  questions.find({askedBy:userData.email})
                }).then(result=>{
                       return res.send(result)
                    }).catch(err=>{
                    return res.send(err)
                })
    })
    app.get('/api/getAnalytics',(req,res)=>{
        users.findOne({_id:req.session.userID})
        .then(userData=>{           
            questions.find({askedBy:userData.email})
            .then(questionData=>{
                questions.find({$and:[{askedBy:userData.email},{correctOption:true}]})
                .then(correctData=>{
                questions.find({$and:[{askedBy:userData.email},{correctOption:false},{answeredBy:{ $ne: '' }}]}).then(incorrectData=>{
                    const result=
                    {
                        totalCount:questionData.length.toString(),
                        correct:correctData.length.toString(),
                        incorrect:incorrectData.length.toString(),
                        notAttempted:(questionData.length-(correctData.length+incorrectData.length)).toString()
                    }
                    return res.send(result)
                })
            })   
            })
            })

    })
    app.post('/api/addQuestions',(req,res)=>{
        const Questions=new questions({
          ...req.body  
        })
        Questions.save()
        .then(data=>{
                res.send(data)
            }).catch(err=>{
                res.send(err)
            })   
    })
};