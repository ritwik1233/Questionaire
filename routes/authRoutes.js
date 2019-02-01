const mongoose=require('mongoose');
const users=mongoose.model('users');
module.exports=(app)=>{
    app.post('/api/login',(req,res)=>{
        const data=req.body;
        if(req.session.userID!==undefined)
        {
            req.session.destroy(err=>{
                if(err)
                {
                    res.send();
                }
                else
                {
                    users.findOne({email:req.body.email,password:req.body.password},{password:0})
                    .then(data=>{
                        req.session.userID=data.id;
                        res.send(data)
                    }).catch(err=>{
                    res.send();
                })
                }
            });
        }
        else
        {
            users.findOne({email:req.body.email,password:req.body.password},{password:0})
                    .then(data=>{
                        req.session.userID=data.id;
                        res.send(data)
                    }).catch(err=>{
                    res.send();
                })
        }
       
    })

    app.post('/api/register',(req,res)=>{
        const data=req.body;
        const User =new users({
            ...data,
            reward:0
        })
        users.find({email:req.body.email})
        .then(response=>{
            if(response.length===0)
            {
                User.save()
                .then(data=>{res.send(data)})        
            }
            else
            {
                res.send([])
            } 
        }).catch(err=>{
            res.send();
        })
    })
    app.get('/api/current_user',(req,res)=>{
        const id={
            _id:req.session.userID
        }
        users.findOne(id,{password:0}).then(data=>{
                res.send(data);
        }).catch(err=>{
                res.send();
        })
    });
    app.get('/api/get_all_user',(req,res)=>{
        users.find({},{password:0}).then(data=>{
                res.send(data);
        }).catch(err=>{
                res.send();
        })
    });
    app.get('/api/logout',(req,res)=>{
        req.session.destroy(err=>{
            if(err)
            {
                res.send();
            }
            else
            {
                res.redirect('/');
            }
        });
      })
};