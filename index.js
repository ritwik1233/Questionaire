const express=require("express");
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const keys=require('./keys/keys');
const PORT=process.env.PORT||5000;
const session=require('express-session');
mongoose.connect(keys.MongoURI,{ useNewUrlParser: true });
require('./models/userModel');
require('./models/questionModel');
const app =express();

app.use(bodyParser.json())
app.use(session({
    name: 'server-session-cookie-id',
    maxAge  : new Date(Date.now() + 3600000), 
    expires : new Date(Date.now() + 3600000),
    secret: keys.cookieKey.toString(),
    saveUninitialized: true,
    resave: true,
 }));
if (process.env.NODE_ENV=='production')
    {
        app.use(express.static('client/build'));
        const path=require('path');
        app.get('*',(req,res)=>{
            res.sendFile(path.resolve(__dirname,'client','build','index.html'));
        });
    }
require('./routes/authRoutes')(app);
require('./routes/questionRoutes')(app);

app.listen(PORT,(err)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("Server listening");
    }
})