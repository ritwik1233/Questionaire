const express=require("express");
const app =express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const keys=require('./keys/keys');
const PORT=process.env.PORT||5000;
const session=require('express-session');
mongoose.connect(keys.MongoURI,{ useNewUrlParser: true });
require('./models/userModel');
require('./models/questionModel');

const MongoStore = require('connect-mongo')(session);
app.use(bodyParser.json())
app.use(session({
    secret: 'my-secret',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: db })
}));
require('./routes/authRoutes')(app);
require('./routes/questionRoutes')(app);

if (process.env.NODE_ENV=='production')
    {
        app.use(express.static('client/build'));
        const path=require('path');
        app.get('*',(req,res)=>{
            res.sendFile(path.resolve(__dirname,'client','build','index.html'));
        });
    }

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