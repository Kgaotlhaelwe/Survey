const mongoose = require('mongoose');

const Schema = mongoose.Schema  ;

//CREATE A SCHEMA 

const SurveySchema = new Schema ({
    surname :{
        type:String ,
       
       

    } ,

    firstName : {
        type:String ,
        
    } ,

    contactNumber :{
        type:String ,
       
    } ,

    date:{
        type:Date ,
        default:Date.now
    },
    age:{
        type:String ,
       
        
    } ,

    favouriteFood :{
        type:Array ,
       
    } ,

    eatOut:{
        type:String ,
        
    }  ,
    watchMovies: {
        type:String ,
 
    }  ,

    watchTv: {
        type:String ,
        
    } ,

    listenToRadio: {
        type:String ,
       
    } 


})

module.exports =mongoose.model('survey',  SurveySchema);