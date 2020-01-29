import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class TakeSurvey extends Component {

    render() {
        return (
            <div className="container mt-5">


                <div class="jumbotron" style={{height:500 , backgroundColor:'#8BE8CB'}}>
                    <h1 class="display-4 text-center" style={{color:'#ffffff' , fontSize:50}}>Take a survey </h1>
                    <div class="d-flex justify-content-center">
                    <button type="button" class="btn btn-outline-success mt-5 btn-lg"> <Link to="/PersonalDetails" styel={{color:'#ffffff'}}>Fill out survey</Link></button> &nbsp; &nbsp; &nbsp; &nbsp;
                    <button type="button" class="btn btn-outline-success mt-5 btn-lg" >  <Link to="/ViewResults">View survey results</Link></button>
                    </div>
                   
                </div>

            </div>
        )
    }
}

export default TakeSurvey 