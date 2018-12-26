var mongoose=require('mongoose');
var {Schema}=mongoose;

var questionSchema=new Schema({
    askedBy:String,
    answeredBy:String,
    question:String,
    correct:String,
    incorrect:String,
    correctOption:Boolean
});
mongoose.model('Questions',questionSchema);