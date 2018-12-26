var mongoose=require('mongoose');
var {Schema}=mongoose;

var userSchema=new Schema({
    email:String,
    fname:String,
    lname:String,
    password:String,
    userType:String,
    reward:Number
});
mongoose.model('users',userSchema);