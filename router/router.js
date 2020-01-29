const express = require('express');
const router = express.Router() ;

const Survey = require("../Models/survey") ;

router.post('/' , (request , respond)=>{

    const s = new Survey({
        surname:request.body.surname ,
        firstName:request.body.firstName ,
        contactNumber:request.body.contactNumber ,
        date:request.body.date ,
        age:request.body.age ,
        favouriteFood:request.body.favouriteFood ,
        eatOut:request.body.eatOut ,
        watchMovies:request.body.watchMovies ,
        watchTv:request.body.watchTv ,
        listenToRadio:request.body.listenToRadio
})  ;

s.save().then((item)=>{

    respond.json("Updated successfully") ;
})


})


router.get('/',   (req, res) => {
    Survey.find()
        .sort({ date: -1 })
        .then(items => res.json(items));
});

module.exports = router 